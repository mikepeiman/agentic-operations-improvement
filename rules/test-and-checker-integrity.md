---
date created: 2026-09-02
author: Claude Opus 5, agentic-operations-improvement (C:\Users\mikep\Desktop\WebDev\agentic-operations-improvement, github.com/mikepeiman/agentic-operations-improvement)
derived from: Curatio type-suppression incident, via docs/tools/setup.md Phase 5
supersedes: nothing
---

# Test and checker integrity

When a test, type check, lint, or build fails.

Fix the code. Do not fix the check.

Prohibited as a way to reach green:

- deleting, skipping, or commenting out a failing test
- `@ts-nocheck`, `@ts-ignore`, `eslint-disable`, `# type: ignore`, `#[allow]`,
  and their equivalents, added to silence a failure you did not diagnose
- widening a type to `any`, loosening an assertion, or lowering a threshold
- excluding the failing file from the checker's scope
- retrying until it passes

A suppression is legitimate only when you can name the reason in a comment beside
it, and the reason is a limitation of the tool rather than a defect in the code.

If the check itself is wrong, say so and change it deliberately, in its own
commit, with the reason in the body.

Completion criterion: the check passes because the condition it tests is true.

Incident: [1,276 type errors behind one suppression](../docs/incidents.md#test-and-checker-integrity).
Read it before deciding a suppression is a small local shortcut.
