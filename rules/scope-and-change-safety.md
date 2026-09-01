---
date created: 2026-09-01
author: Codex, at Mike's direction
derived from: Pax Fluxia unauthorized-changes post-mortem and full-access safety policy
supersedes: nothing
status: active when wired by a project
---

# Scope and change safety

Classify the request before mutating state:

- a question, review, diagnosis, or status request authorizes inspection and a
  report;
- a directive to create, change, remove, commit, publish, or send authorizes
  that named action and its normal implementation steps;
- infrastructure, remote, deployment, credential, destructive, and
  irreversible changes require explicit authority.

Before writing, inspect repository and process state. Preserve unrelated work.
Resolve destructive targets exactly, use the narrowest reversible operation,
and record what was changed or removed.

Choose the smallest coherent change that satisfies the full intent and the
best known architecture. Neither fewer edits nor larger restructuring is a
goal by itself. If the chosen change is weaker than the best solution, state
the gap before implementation.

**Observable completion:** every mutation maps to an authorized outcome;
unrelated files, data, processes, and remotes remain unchanged.

Incident: in Pax Fluxia, the question "Is there anything I need to do?" was
treated as authorization to modify six files and a Git remote. The remote
became invalid and all changes had to be reverted.
