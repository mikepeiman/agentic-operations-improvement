---
date created: 2026-09-01
author: Codex, curatio (dir unrecorded, github.com/mikepeiman/curatio)
derived from: "Curatio agent.md and AGENTS.md at https://github.com/mikepeiman/curatio/tree/8c9deb3; Pax Fluxia unauthorized-changes post-mortem"
supersedes: nothing
---

# Authorization and scope

## Trigger

Before any action that changes code, data, documents, external systems, or
published state.

## Required action

1. Name the instruction that authorizes the exact state change.
2. Classify the request:
   - a question, review, diagnosis, or status request authorizes inspection and
     a report, and nothing else;
   - a directive to create, change, remove, commit, publish, or send authorizes
     that named action and its normal implementation steps;
   - infrastructure, remote, deployment, credential, destructive, and
     irreversible changes require explicit authority of their own.
3. Keep discovery and read-only verification inside the named scope.
4. When change authority is absent, report the finding and request the missing
   decision.
5. Once implementation is authorized, build missing in-scope prerequisites
   without asking again. Ask only when the work requires an irreversible choice,
   a material scope expansion, or new external authority.
6. Apply defect tripwires only inside the authorized change scope. During a
   read-only review, report the tripwire with its recommended correction.

## Size the change to the intent

Choose the smallest coherent change that satisfies the full intent and the best
known architecture. Neither fewer edits nor a larger restructuring is a goal by
itself.

If the change you are about to make is weaker than the solution you would
choose freely, state the gap before implementing, not after.

Completion criterion: every mutation is covered by a user instruction or by a
necessary, reversible implementation step inside that instruction.

Incident: [reports read as permission, and a question read as authorization](../docs/incidents.md#authorization-and-scope).
Read it when unsure whether a bug report is also a request to change behaviour.
