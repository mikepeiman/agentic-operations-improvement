---
date created: 2026-09-01
author: agent, at Mike's direction
derived from: "Curatio agent.md and AGENTS.md at https://github.com/mikepeiman/curatio/tree/8c9deb3"
supersedes: nothing
---

# Authorization and scope

## Trigger

Before any action that changes code, data, documents, external systems, or
published state.

## Required action

1. Name the instruction that authorizes the exact state change.
2. Classify the request as inspection, diagnosis, implementation, delivery, or
   external action.
3. Keep discovery and read-only verification inside the named scope.
4. When change authority is absent, report the finding and request the missing
   decision.
5. Once implementation is authorized, build missing in-scope prerequisites
   without asking again. Ask only when the work requires an irreversible choice,
   a material scope expansion, or new external authority.
6. Apply defect tripwires only inside the authorized change scope. During a
   read-only review, report the tripwire with its recommended correction.

Completion criterion: every mutation is covered by a user instruction or by a
necessary, reversible implementation step inside that instruction.

## Incident evidence

Curatio recorded repeated cases where a bug report or question was treated as
permission to change behavior, and the opposite failure where an authorized fix
was deferred because its prerequisite did not yet exist.
