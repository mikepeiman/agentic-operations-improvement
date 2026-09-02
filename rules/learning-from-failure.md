---
date created: 2026-09-02
author: Codex, pax-fluxia (dir unrecorded, repo url unrecorded)
derived from: Pax Fluxia post-mortem triggers and context-distillation history
supersedes: nothing
---

# Learning from failure

## Trigger

Write a corrective record when any of these happens:

- completion was claimed but the promised boundary failed;
- the same defect recurred;
- an explicit instruction was violated;
- an unauthorized or destructive change occurred;
- a tool or proxy was trusted after its reading was shown to be invalid;
- a materially better approach appeared only after backtracking.

## What the record contains

1. Expected result and actual result.
2. The affected artifact, or the impact on the user.
3. The missed evidence or the mistaken premise.
4. The check that settled it.
5. The correction made.
6. For any rule this produces: its trigger, and what an agent can observe to
   know it complied.

## Promotion

Promote a lesson to a rule here only when it prevents a failure class that can
recur across projects. Keep product meaning, local commands, and one project's
architecture in that project.

Adding a rule has a cost paid on every future turn. A set of rules large enough
to skim is a set that gets skimmed.

Completion criterion: the record names a future trigger and a checkable change
in behaviour, not an apology or an intention to be more careful.

Incident: [a distilled rule set that grew back](../docs/incidents.md#learning-from-failure).
Read it before promoting a local lesson to a shared rule.
