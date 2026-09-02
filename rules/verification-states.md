---
date created: 2026-09-01
author: agent, at Mike's direction
derived from: "Curatio execution playbook at https://github.com/mikepeiman/curatio/tree/8c9deb3/docs"
supersedes: nothing
---

# Verification states

## Trigger

When reporting task status, declaring completion, or handing over an artifact.

## Required action

Record the highest state actually reached:

1. **specified** — intended behavior and acceptance examples are explicit.
2. **implemented** — the change exists in the working artifact.
3. **static verified** — type, syntax, lint, or compile gates pass.
4. **automated verified** — behavior-specific tests pass and fail against the
   known broken behavior when practical.
5. **runtime verified** — the real execution path was observed.
6. **artifact verified** — the packaged, exported, or delivered artifact was run
   or inspected rather than only its source form.
7. **owner accepted** — the owner accepted the exact identified artifact.

A gate is a command or observable. Record a skipped gate as unverified and name
the check that remains. A lower state never implies a higher one.

Completion criterion: the status names the highest verified state and every
remaining acceptance gate without collapsing them into `done`.
