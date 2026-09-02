---
date created: 2026-09-01
author: agent, at Mike's direction
derived from: "Curatio fact-flow and post-mortems at https://github.com/mikepeiman/curatio/tree/8c9deb3/docs"
supersedes: nothing
---

# One owner per fact

## Trigger

When designing or changing storage, synchronization, ordering, state,
transformations, reconciliation, imports, or deletion.

## Required action

1. Inventory every input field, stored field, event, transformation, projection,
   and output that represents the fact.
2. Name exactly one authority that decides the fact for each lifecycle phase.
3. Mark every other representation as a projection, cache, observation, or
   transport form.
4. Reconcile by identity and explicit revision or correlation. Use time only for
   user experience or bounded delivery, never to decide whether a semantic event
   happened.
5. Eliminate dual writes and independent fallback derivations that can disagree.
6. Test create, change, delete, retry, restart, empty, one, many, and boundary
   cases in every authorized direction.

Completion criterion: for any disagreement, the system has one deterministic
answer to which representation wins and how the others converge.

## Incident evidence

Curatio's highest-impact failures repeatedly came from two components deciding
the same hierarchy, order, connection, or completion fact independently.
