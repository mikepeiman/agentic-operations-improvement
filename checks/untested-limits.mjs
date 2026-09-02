#!/usr/bin/env node
// Post-hoc auditor. Observes a decompressed DSH session log (.jsonl): every
// assistant/message whose text matches a knowledge-denial pattern, checked
// against whether a tool/call occurred earlier in the same turn.
//
// Usage: node untested-limits.mjs <session.jsonl>
// Exit 0: no denial found without a preceding same-turn tool call.
// Exit 1: at least one found; each printed with turn/step/line and the fix.
//
// Cannot see: denials phrased outside the listed patterns, or a genuine tool
// failure that legitimately grounds a denial (a same-turn tool call is
// accepted regardless of its own result — this observes attempt, not success).
// No DSH extension point runs after text generation and before the message is
// committed to the session log (checked: agent/pre-step, agent/request,
// agent/request-error; none sit there), so this is a Stop-style / CI auditor
// against the log, not a live pre-send gate.

import { createReadStream } from 'node:fs';
import { createInterface } from 'node:readline';

const PATTERNS = [
  /\bI (?:can'?t|cannot) (?:determine|know|tell|verify|confirm)\b/i,
  /\bI don'?t have (?:access|visibility|a way) to\b/i,
  /\bthat'?s not visible to me\b/i,
  /\bI have no (?:way|reliable way|introspective access) to\b/i,
  /\bnot something I can (?:independently )?confirm\b/i,
  /\bI (?:can'?t|cannot) (?:independently )?verify\b/i,
];

function extractText(blocks) {
  if (!Array.isArray(blocks)) return '';
  return blocks.filter((b) => b?.type === 'text').map((b) => b.text ?? '').join('\n');
}

async function main(path) {
  if (!path) {
    console.error('usage: node untested-limits.mjs <session.jsonl>');
    process.exit(2);
  }
  const rl = createInterface({ input: createReadStream(path, { encoding: 'utf8' }) });
  const highestToolCallStepByTurn = new Map();
  const violations = [];
  let lineNo = 0;

  for await (const line of rl) {
    lineNo++;
    if (!line.trim()) continue;
    let event;
    try { event = JSON.parse(line); } catch { continue; }

    if (event.type === 'tool/call') {
      const { turn, step } = event.data;
      const prev = highestToolCallStepByTurn.get(turn) ?? -1;
      highestToolCallStepByTurn.set(turn, Math.max(prev, step));
      continue;
    }
    if (event.type === 'turn/start') {
      highestToolCallStepByTurn.delete(event.data.turn);
      continue;
    }
    if (event.type !== 'assistant/message') continue;

    const { turn, step, message } = event.data;
    const text = extractText(message?.content);
    if (!text) continue;
    const pattern = PATTERNS.find((p) => p.test(text));
    if (!pattern) continue;

    const highestBefore = highestToolCallStepByTurn.get(turn) ?? -1;
    if (highestBefore >= 0 && highestBefore < step) continue; // attempted before speaking

    const snippet = text.match(pattern)[0];
    const at = text.indexOf(snippet);
    const context = text.slice(Math.max(0, at - 60), at + 160).replace(/\s+/g, ' ');
    violations.push({ line: lineNo, seq: event.seq, turn, step, snippet, context });
  }

  if (violations.length === 0) {
    console.log('PASS: no knowledge-denial statement found without a preceding same-turn tool call.');
    process.exit(0);
  }

  console.log(`FAIL: ${violations.length} knowledge-denial statement(s) with no preceding tool call in the same turn.\n`);
  console.log('Fix (rules/untested-limits.md): make the attempt in this turn before the denial — read the file, grep the log, run the query — then state the actual result.\n');
  for (const v of violations) {
    console.log(`line=${v.line} seq=${v.seq} turn=${v.turn} step=${v.step}`);
    console.log(`  matched: "${v.snippet}"`);
    console.log(`  context: ...${v.context}...\n`);
  }
  process.exit(1);
}

main(process.argv[2]);
