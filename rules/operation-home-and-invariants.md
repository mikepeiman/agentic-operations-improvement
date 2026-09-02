---
date created: 2026-09-01
author: agent, at Mike's direction
derived from: "Curatio ENGINEERING_RULES.md and CODEMAP_MUTATIONS.md at https://github.com/mikepeiman/curatio/tree/8c9deb3/docs"
supersedes: nothing
---

# Operation home and invariants

## Trigger

When adding a trigger, changing an existing operation, or enforcing a condition
that must remain true after several operations.

## Required action

1. Find the operation's current implementation and every caller.
2. Put behavior in the operation's owning module or pipeline stage.
3. Keep triggers thin: resolve the target or input, then dispatch to the one
   implementation.
4. Give each post-condition one enforcement point reached by every operation in
   its category.
5. Unify divergent implementations before adding another trigger.
6. Change callers, tests, and the operation map together.

For processing projects, treat ingestion commands as triggers, transformation
stages as operations, and validation or reconciliation rules as post-conditions.

Completion criterion: one intent has one implementation, and one invariant has
one enforcement point covering every relevant path.
