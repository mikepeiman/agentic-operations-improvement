# Metabrain-sourced draft rule set

**Status:** review draft; not active shared policy

This directory turns the Metabrain operating model into a reusable project
package. Copy and adapt it only after naming the target project's authority,
tracker, verification commands, and delivery workflow.

## Contents

- `AGENTS.md` — small always-on constitution and router.
- `rules/turn-intake.md` — lossless capture before work.
- `rules/authority-planes.md` — separate intended, current, and replicated
  behaviour.
- `rules/evidence-and-verification.md` — primary evidence and verification at
  the boundary of the claim.
- `rules/work-state-and-delivery.md` — concurrent-work safety and complete
  delivery.
- `rules/context-and-coordination.md` — routed context, task capsules, and
  bounded delegation.
- `rules/operational-records.md` — distinct roles for intake, tracker,
  requirements, evidence, and delivery records.
- `rules/reporting.md` — evidence-graded completion reports.

## Existing shared rules retained

The draft does not duplicate these current shared rules:

- `rules/settle-the-prior-question.md`
- `rules/primary-source-first.md`
- `rules/owner-acceptance.md`
- `rules/graphify.md` when a project contains `graphify-out/`

`rules/authority-planes.md` is a proposed generalisation of the current
replication-oriented `rules/authority-chain.md`. Review that replacement
explicitly before promotion.

## Target-project substitutions

Before adoption, replace bracketed placeholders and decide:

1. the current owner and repository constitution;
2. the canonical requirement registry;
3. the authoritative actionable tracker;
4. the intake path and format;
5. the verification commands for each artifact type;
6. the branch, review, commit, and push policy;
7. the structural retrieval tool, if any;
8. the token, cost, concurrency, and destructive-action limits.

Keep product terminology, domain invariants, architecture, data-retention
policy, and framework commands in the target project.
