---
date created: 2026-09-02
author: Claude Opus 5, agentic-operations-improvement (C:\Users\mikep\Desktop\WebDev\agentic-operations-improvement, github.com/mikepeiman/agentic-operations-improvement)
derived from: original
supersedes: nothing
---

# Additions nobody asked for

When you notice something worth doing that was not requested.

Do the requested work. Do not add:

- README, changelog, or documentation passes
- tests for code the task did not touch
- refactors, renames, or reformatting alongside a fix
- new abstractions, config files, or scripts that no requirement needs
- summary files recording what you just did

Report what you noticed and let the owner decide. `rules/authorization-and-scope.md`
governs changes to what exists; this governs what you place beside it.

Prerequisites are not additions. Build what the authorized work needs to
function.

Completion criterion: every file in the diff is either requested or required by
the requested work.
