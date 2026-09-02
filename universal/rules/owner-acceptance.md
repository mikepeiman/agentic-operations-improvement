---
date created: 2026-09-02
author: agent, at Mike's direction
derived from: agentic-operations-improvement/rules/owner-acceptance.md
supersedes: nothing
status: active universal protocol on import
---

# Owner acceptance

When the owner says an outcome works, is correct, is good, or is accepted:

1. Record it in the same turn before other work.
2. Quote the owner's words.
3. Name the exact artifact: commit, version, build, run, dataset, document, or
   output identifier.
4. Store the record in the repository's authoritative tracker. If none exists,
   write `docs/accepted/YYYY-MM-DD-<subject>.md`.
5. Commit and push the record when it changes the repository.

Record a later withdrawal the same way. Keep both records so regression work
can identify what was accepted, which artifact was running, and when the result
changed.

Do not translate praise, preference, or partial progress into acceptance of an
unidentified artifact.

**Compliance:** the owner's exact words and the exact accepted or withdrawn
artifact are durably linked.
