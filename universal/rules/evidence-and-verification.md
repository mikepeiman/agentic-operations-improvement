---
date created: 2026-09-01
author: agent, at Mike's direction
derived from: metabrain-mvp/docs/agents/practice.md
supersedes: nothing
status: active universal protocol on import
---

# Evidence and verification

## Before asserting

1. Name the claim.
2. Name the repository, artifact, version, scope, identity, and source the claim
   assumes.
3. Settle every assumption that would change the answer.
4. Inspect the defining evidence.
5. Mark the conclusion as observed fact, source evidence, inference, estimate,
   recommendation, or open question.

Do not answer past an unresolved load-bearing premise.

## Before reporting completion

Match verification to the claim:

- interface behaviour: exercise the real interface;
- transformation or import: run representative input and inspect distinct
  output;
- persistence: write, restart or reopen, and read back;
- migration: migrate an older fixture forward;
- integration: exercise request, acknowledgement or failure, and
  reconciliation;
- identity or rename: verify references survive the change;
- deletion or recovery: exercise delete, restore, purge, and retention as
  promised;
- generated artifacts: regenerate and inspect unexplained residue.

Use the smallest direct check that can falsify the claim. A changed file, green
typecheck, mocked test, successful build, or pushed commit proves only what it
directly exercised.

When a boundary cannot be exercised, name it as unverified. Do not substitute
an indirect check and report the boundary complete.

**Compliance:** every completion claim names the observed evidence and every
unperformed acceptance boundary remains explicit.
