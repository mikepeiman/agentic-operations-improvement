# Post-mortems

**Purpose:** Record demonstrated failures and the corrections that address their causes.

**Constraints:** Preserve evidence and uncertainty; a document or passing check does not itself establish that a cause was repaired.

A post-mortem is the written record of an agent failure: what happened, why, and what now prevents it. The owner restored post-mortems as a required practice on 2026-10-09, after the v2 simplification of 2026-09-13 had folded them into Bead notes and three weeks of failures went unrecorded.

## When to write one

Write a post-mortem when any of these happens:

- the owner names a failure or a waste of time, tokens or machine resources;
- an explicit instruction or standing rule is broken;
- the same defect recurs;
- a regression reaches the owner;
- work, data or an owner's edits are lost or destroyed;
- completion was claimed and the promised boundary failed.

Write it in the turn the trigger is known, or the next turn. Do not wait to be asked.
When a regression occurs, agents must identify the concrete correction and its owning
mechanism, including a protocol correction when possible. Repeating an instruction or
another successful compilation alone does not establish that the cause was corrected
(owner, November 8, 2026, Metabrain `metabrain-mvp-31l3p`).

## What it contains

1. **Incident.** The expected and the actual result, and the impact on the owner, in a few sentences.
2. **What happened.** A timeline with dates, commits and the decisions that led there. Mark each statement as executed, read or inferred.
3. **Cost, as recorded.** Time, tokens, renders, restarts or data affected, with the limits of the measurement.
4. **Causes.** Each cause in one sentence, including the agent's own reasoning faults. Name the evidence that was missed.
5. **The class.** The general failure pattern, named in a phrase, so the next instance is recognisable.
6. **Fixes and rules in force.** The regression test, tool or hook first; a new rule only for a recurring failure it can prevent, with its trigger and how an agent sees that it complied. Name where each now lives.

## Where it lives

Keep the post-mortem with the project's documents (for example `docs/active/postmortem-YYYY-MM-DD-<slug>.md`), filed under a Bead labelled `postmortem`, and link it from that Bead. Update the rules it names in the same change.

## Keeping it small

A post-mortem records one incident. It does not grow the core protocol: a rule it produces goes into the narrowest document that governs the task, replacing overlapping text. Projects with a filing hook may add a check that asks for a post-mortem Bead when the owner's message names a failure.
