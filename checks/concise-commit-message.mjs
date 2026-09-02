#!/usr/bin/env node
// PreToolUse hook. Refuses a git commit whose message breaks AGENTS.md.
// PreToolUse, not Stop: a pushed commit message cannot be edited, so reporting
// it afterwards is reporting damage.
// Exit 0 = allow. Exit 2 = block, stderr goes to the agent.
//
// Blind spot: it reads only the command string. `git commit -F <file>` and
// `-C <commit>` pass uninspected, and it says so rather than implying a pass.

import { readFileSync } from 'node:fs';

const MAX_SUBJECT = 72;
const MAX_BODY_LINES = 8;
const MAX_BODY_CHARS = 600;
// A model signature is wanted: it records which model produced the commit.
// A promotional line is not a signature. Reject product marketing and URLs.
const PROMOTIONAL = [
  /generated\s+with/i,
  /\bhttps?:\/\//i,
  /[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}]/u, // emoji badge
];

function readStdin() {
  try {
    return readFileSync(0, 'utf8');
  } catch {
    return '';
  }
}

function extractMessages(cmd) {
  const out = [];
  // -m "..." and -m '...', repeatable
  for (const m of cmd.matchAll(/-m\s+(["'])([\s\S]*?)\1/g)) out.push(m[2]);
  // heredoc bodies: git commit -m <<'TAG' ... TAG
  const heredoc = /<<-?\s*(["']?)([A-Za-z_][A-Za-z0-9_]*)\1\s*\n([\s\S]*?)\n\2/g;
  for (const m of cmd.matchAll(heredoc)) out.push(m[3]);
  return out;
}

function check(msg) {
  const errs = [];
  const lines = msg.replace(/\r/g, '').split('\n');
  const subject = (lines[0] || '').trim();

  if (!subject) errs.push('Subject is empty.');
  if (subject.length > MAX_SUBJECT) {
    errs.push(
      'Subject is ' + subject.length + ' chars; AGENTS.md caps it at ' +
      MAX_SUBJECT + '. Cut it to the headline.'
    );
  }
  if (/\.$/.test(subject)) errs.push('Subject ends with a period. Drop it.');
  if (lines.length > 1 && lines[1].trim() !== '') {
    errs.push('Line 2 must be blank, separating subject from body.');
  }

  const trailers = [];
  const prose = [];
  for (const line of lines.slice(2)) {
    if (/^[A-Z][A-Za-z-]+:\s/.test(line)) trailers.push(line);
    else if (line.trim() !== '') prose.push(line);
  }

  // Promotional lines are often not trailer-shaped, so scan the whole body.
  for (const line of lines.slice(2)) {
    if (line.trim() === '') continue;
    if (PROMOTIONAL.some((re) => re.test(line))) {
      errs.push(
        'Remove the promotional line "' + line.trim() +
        '". Sign the model (Co-Authored-By: <model>); do not advertise a product.'
      );
    }
  }

  if (prose.length > MAX_BODY_LINES) {
    errs.push(
      'Body is ' + prose.length + ' lines; the cap is ' + MAX_BODY_LINES +
      '. State one reason, not the whole reasoning.'
    );
  }
  const bodyChars = prose.join('\n').length;
  if (bodyChars > MAX_BODY_CHARS) {
    errs.push('Body is ' + bodyChars + ' chars; the cap is ' + MAX_BODY_CHARS + '.');
  }

  return errs;
}

const raw = readStdin();
let cmd = '';
try {
  const payload = JSON.parse(raw);
  cmd = (payload && payload.tool_input && payload.tool_input.command) || '';
} catch {
  process.exit(0); // malformed payload must not block ordinary work
}

if (!/\bgit\s+commit\b/.test(cmd)) process.exit(0);

if (/\bgit\s+commit\b[^|;&]*\s-(F|C)\b/.test(cmd)) {
  console.error('Note: commit message passed via -F/-C and was not inspected.');
  process.exit(0);
}

const messages = extractMessages(cmd);
if (messages.length === 0) process.exit(0);

const errs = messages.flatMap(check);
if (errs.length) {
  console.error(
    'Commit message rejected (AGENTS.md > Commit and push every turn):\n' +
    errs.map((e) => '  - ' + e).join('\n') +
    '\n\nFormat:\n' +
    '  imperative subject, 72 chars or less\n' +
    '  <blank line>\n' +
    '  why, 8 lines or less\n' +
    '  <blank line>\n' +
    '  From: <project>'
  );
  process.exit(2);
}

process.exit(0);
