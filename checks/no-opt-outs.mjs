#!/usr/bin/env node
// Stop hook. Fails when this turn's own changes suppress a checker.
// A ratchet, not a clean-state gate: only files the turn touched are scanned,
// so inherited debt does not block work (rules/enforcement-design.md).
// Exit 0 = allow stop. Exit 2 = block, stderr goes to the agent.

import { execSync } from 'node:child_process';
import { readFileSync, existsSync, statSync } from 'node:fs';

const PATTERNS = [
  [/@ts-nocheck/, '@ts-nocheck disables the type checker for the whole file'],
  [/@ts-ignore/, '@ts-ignore hides the next line; @ts-expect-error at least fails when the error goes away'],
  [/eslint-disable(?!-next-line\s+[a-z@])/, 'a blanket eslint-disable turns off every rule'],
  [/^\s*#\s*type:\s*ignore\s*$/, 'a bare "# type: ignore" suppresses every error on the line'],
  [/#\[allow\(dead_code\)\]/, '#[allow(dead_code)] hides an unused item rather than removing it'],
  [/\.skip\s*\(|\bxit\s*\(|\bxdescribe\s*\(/, 'a skipped test does not test anything'],
  [/#\[ignore\]/, '#[ignore] drops the test from the run'],
];

const SOURCE = /\.(ts|tsx|js|jsx|mjs|cjs|svelte|vue|py|rs|go|java|kt|rb|cs)$/;
// "reason:" anywhere on the line, followed by actual text. The suppression and
// the reason sit on one line, so the reason cannot drift away from it.
const REASON = /\breason:\s*\S+/i;

// The guards themselves quote every pattern they hunt for, so scanning them
// reports the rule as a violation of itself. enforcement-design.md: ignore
// quoted examples and code explaining the rule.
const SELF = /(^|\/)(checks|\.claude\/hooks)\//;

function git(cmd) {
  // stdio 'pipe' keeps git's CRLF warnings out of the hook's stderr
  return execSync(cmd, { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] });
}

function changedFiles() {
  try {
    const tracked = git('git diff --name-only HEAD');
    const untracked = git('git ls-files --others --exclude-standard');
    return [...new Set(
      (tracked + '\n' + untracked).split('\n').map((s) => s.trim()).filter(Boolean)
    )];
  } catch {
    // not a git repo, or git unavailable: this guard has nothing to say
    return [];
  }
}

const findings = [];

for (const file of changedFiles()) {
  if (SELF.test(file)) continue;
  if (!SOURCE.test(file) || !existsSync(file)) continue;
  try {
    if (statSync(file).size > 2000000) continue;
  } catch {
    continue;
  }

  let text;
  try {
    text = readFileSync(file, 'utf8');
  } catch {
    continue;
  }

  text.split('\n').forEach((line, i) => {
    if (REASON.test(line)) return; // a stated tool limitation is allowed
    for (const [re, why] of PATTERNS) {
      if (re.test(line)) {
        findings.push(file + ':' + (i + 1) + '  ' + why + '\n      ' + line.trim());
      }
    }
  });
}

if (findings.length) {
  console.error(
    "Suppressed checks in this turn's files " +
    '(rules/test-and-checker-integrity.md):\n\n' +
    findings.map((f) => '  ' + f).join('\n\n') +
    '\n\nFix the code, not the check. If a suppression is legitimate, state the\n' +
    'tool limitation on the same line as "reason: <why>" and it will pass.'
  );
  process.exit(2);
}

process.exit(0);
