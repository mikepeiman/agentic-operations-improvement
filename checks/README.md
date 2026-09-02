---
date created: 2026-09-02
author: Claude Opus 5, agentic-operations-improvement (C:\Users\mikep\Desktop\WebDev\agentic-operations-improvement, github.com/mikepeiman/agentic-operations-improvement)
derived from: AGENT_INFRASTRUCTURE_SETUP.md Phase 5 and rules/enforcement-design.md
supersedes: nothing
---

# Checks

Executables. Exit 0 to pass, non-zero with a message naming the fix.

Nothing here runs until a project wires it in. Copy what the project needs into
`.claude/hooks/` and register it; see [`../docs/tools/setup.md`](../docs/tools/setup.md)
Phase 5 for the settings block.

Each entry states what it observes and what it cannot see. A check claims no
more than its observable proves (`rules/enforcement-design.md`).

## `concise-commit-message.mjs`: PreToolUse

**Observes:** the `git commit` command string. Subject 72 chars or less, blank
line 2, body 8 prose lines and 600 chars or less, no promotional line.

A model signature (`Co-Authored-By: <model>`) passes, because it records which model
produced the commit. A product tagline, URL, or emoji badge does not.

**Blocks** with exit 2 and the format to use.

**Cannot see:** `git commit -F <file>` or `-C <commit>`. It prints that the
message went uninspected rather than implying it passed.

**Why PreToolUse:** a pushed commit message cannot be edited. Reporting it at
Stop is reporting damage.

## `no-opt-outs.mjs`: Stop

**Observes:** files changed this turn, for suppressions that buy a green check:
`@ts-nocheck`, `@ts-ignore`, blanket `eslint-disable`, bare `# type: ignore`,
`#[allow(dead_code)]`, `#[ignore]`, `.skip(`, `xit(`, `xdescribe(`.

**Escape hatch:** a suppression with `reason: <why>` on the same line passes.
The rule allows a stated tool limitation; it forbids silence.

**Ratchet, not clean state:** only this turn's files are scanned, so inherited
debt does not block work.

**Cannot see:** whether the suppression is justified. It sees only that one was
added without a stated reason.

## `reachable-features.mjs`: Stop

**Observes:** capabilities matched by a project-supplied pattern in a registry,
and whether each name appears anywhere in the caller globs.

**Needs** `checks/reachable-features.json`:

```json
{
  "registry": ["src-tauri/src/commands/**/*.rs"],
  "declare":  "#\\[tauri::command\\][\\s\\S]{0,80}?fn\\s+(\\w+)",
  "callers":  ["src/**/*.svelte", "src/**/*.ts"],
  "allow":    ["internal_only_fn"]
}
```

**Without the config** it exits 0 and reports itself skipped. A guard that
guesses at a project's wiring produces false positives and gets bypassed.

**Fails closed** when the pattern matches no capability at all: a guard matching
nothing is a guard switched off.

**Cannot see:** whether the control is good, or reachable in practice. Only
whether a reference exists. "Exists" was the whole failure it was built for.

## `untested-limits.mjs`: post-hoc / CI, over a decompressed session log

**Observes:** every `assistant/message` in a `.jsonl` session log matching a
knowledge-denial pattern ("I can't determine...", "I don't have access to...",
"that's not visible to me...", "I have no way to know...", "not something I
can independently confirm"), and whether a `tool/call` occurred earlier in the
same turn.

**No live pre-send gate exists for this**: no checked DSH extension point
(`agent/pre-step`, `agent/request`, `agent/request-error`) runs after text
generation and before the message commits to the log. This runs against the
log after the fact, or in CI over an exported transcript.

**Cannot see:** denials phrased outside the listed patterns, or whether a
same-turn tool call's result actually grounds the denial rather than merely
preceding it. Observes attempt, not adequacy.
