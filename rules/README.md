---
date created: 2026-09-01
author: agent, at Mike's direction
derived from: the rules in this directory
supersedes: nothing
---

# Rule trigger index

Read every row whose trigger matches the work. A rule is complete when its own
completion criterion is satisfied.

| Trigger | Read |
|---|---|
| Decide what should happen or which artifact governs | `authority-chain.md` |
| Change code, data, documents, external systems, or published state | `authorization-and-scope.md` |
| Answer a question whose entity, scope, source, version, or definition may be assumed | `settle-the-prior-question.md` |
| Assert behavior, cause, absence, counts, dates, quotes, or completion | `primary-source-first.md`; `claims-evidence-and-uncertainty.md` |
| Design storage, synchronization, transformations, ordering, or reconciliation | `one-owner-per-fact.md` |
| Add triggers, change operations, or enforce post-conditions | `operation-home-and-invariants.md` |
| Fix a status, metric, retry, warning, exception, timeout, or success signal | `root-cause-not-green-indicators.md` |
| Respond to disagreement, new evidence, or an agent mistake | `correction-under-challenge.md` |
| Import, transform, migrate, repair, delete, or replace user data | `input-preservation-and-reproducibility.md` |
| Report status or end an execution turn | `verification-states.md`; `task-closure-and-blockers.md` |
| Commit or deliver an artifact | `delivery-identity-and-push.md` |
| Mike accepts or withdraws acceptance of an artifact | `owner-acceptance.md` |
| Work in a project containing `graphify-out/` | `graphify.md` |
| Create or revise a mechanical check or reflection hook | `../docs/enforcement-design.md` |
