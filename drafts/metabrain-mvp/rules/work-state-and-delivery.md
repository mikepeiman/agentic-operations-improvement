---
date created: 2026-09-01
author: agent, at Mike's direction
derived from: metabrain-mvp/docs/agents/practice.md
supersedes: nothing
status: review draft, not active policy
---

# Work state and delivery

## Preserve shared state

1. Inspect repository and process state before writing.
2. Identify paths and processes owned by the task.
3. Preserve unrelated user and agent work.
4. Stage only owned paths.
5. Do not stop unrelated processes.
6. Inspect state again before delivery.

Do not create `old`, `v2`, backup, or commented-out duplicate implementations
as a substitute for version control.

For destructive work, resolve the exact target, confirm authority, prefer a
recoverable operation, and report what changed and how it can be recovered.

For processing work, treat source inputs as immutable when the project promises
non-destructive processing. Write output separately and expose skipped or
problematic items by identity.

## Deliver completely

For every repository-changing task:

1. verify the claimed result;
2. stage the coherent owned change;
3. inspect the staged diff;
4. commit it;
5. push it to the configured remote;
6. confirm the remote contains the commit;
7. report the commit and verification.

A local commit is not remote delivery. A push is not verification. Generated
indexes describing a change belong in the same commit as that change.

**Compliance:** the remote contains the verified task commit, unrelated work is
preserved, and no unexplained task-owned residue remains.
