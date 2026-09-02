#!/usr/bin/env node
// Stop hook. Fails when a registered capability has no route a user can reach
// (rules/architecture/reachable-capability.md).
//
// Needs a project map, because "registered" and "reachable" are project shapes.
// Without checks/reachable-features.json it exits 0 and reports itself as
// skipped: a guard that guesses at a project's wiring produces false positives
// and gets bypassed.
//
// checks/reachable-features.json
// {
//   "registry": ["src-tauri/src/commands/**/*.rs"],
//   "declare":  "#\\[tauri::command\\][\\s\\S]{0,80}?fn\\s+(\\w+)",
//   "callers":  ["src/**/*.svelte", "src/**/*.ts"],
//   "allow":    ["internal_only_fn"]
// }

import { execSync } from 'node:child_process';
import { readFileSync, existsSync } from 'node:fs';

const CONFIG = 'checks/reachable-features.json';

if (!existsSync(CONFIG)) {
  console.error('reachable-features: no ' + CONFIG + '; skipped. Unverified, not passed.');
  process.exit(0);
}

let cfg;
try {
  cfg = JSON.parse(readFileSync(CONFIG, 'utf8'));
} catch (e) {
  console.error('reachable-features: ' + CONFIG + ' is not valid JSON - ' + e.message);
  process.exit(2);
}

function list(globs) {
  if (!globs || globs.length === 0) return [];
  try {
    const args = globs.map((g) => JSON.stringify(g)).join(' ');
    // --cached --others: a capability added this turn is still untracked, and
    // that is precisely the case this guard exists to catch.
    // stdio pipe/ignore keeps git's CRLF warnings out of the hook's stderr.
    return execSync('git ls-files --cached --others --exclude-standard -- ' + args, {
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore'],
    }).split('\n').map((s) => s.trim()).filter(Boolean);
  } catch {
    return [];
  }
}

function read(file) {
  try {
    return readFileSync(file, 'utf8');
  } catch {
    return '';
  }
}

const declared = new Map();

let declareRe;
try {
  declareRe = new RegExp(cfg.declare, 'g');
} catch (e) {
  console.error(
    'reachable-features: "declare" is not a valid regular expression - ' + e.message +
    '\nRemember that JSON needs each backslash doubled: "fn\\\\s+(\\\\w+)".'
  );
  process.exit(2); // fail closed: an unusable pattern is a guard that is off
}

if (!cfg.declare.includes('(')) {
  console.error(
    'reachable-features: "declare" has no capture group, so no capability name\n' +
    'can be extracted. Wrap the name in parentheses, e.g. "fn\\\\s+(\\\\w+)".'
  );
  process.exit(2);
}
for (const file of list(cfg.registry)) {
  for (const m of read(file).matchAll(declareRe)) {
    if (m[1]) declared.set(m[1], file);
  }
}

// Fail closed: a guard that matches nothing is a guard that is switched off.
if (declared.size === 0) {
  console.error(
    'reachable-features: the "declare" pattern matched no capability in the\n' +
    'registry globs. Fix "registry" or "declare" in ' + CONFIG + '.'
  );
  process.exit(2);
}

const callerText = list(cfg.callers).map(read).join('\n');
const allow = new Set(cfg.allow || []);

const orphans = [];
for (const [name, where] of declared) {
  if (allow.has(name)) continue;
  if (!new RegExp('\\b' + name + '\\b').test(callerText)) {
    orphans.push(name + '  (declared in ' + where + ')');
  }
}

if (orphans.length) {
  console.error(
    'Capabilities with no route a user can reach\n' +
    '(rules/architecture/reachable-capability.md):\n\n' +
    orphans.map((o) => '  - ' + o).join('\n') +
    '\n\nShip the path that invokes it in this change, or state plainly that the\n' +
    'feature is incomplete. Add a genuinely internal name to "allow" in ' + CONFIG + '.'
  );
  process.exit(2);
}

process.exit(0);
