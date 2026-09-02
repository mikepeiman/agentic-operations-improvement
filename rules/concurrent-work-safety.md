---
date created: 2026-09-02
author: Claude Opus 5, agentic-operations-improvement (C:\Users\mikep\Desktop\WebDev\agentic-operations-improvement, github.com/mikepeiman/agentic-operations-improvement)
derived from: metabrain-mvp work-state-and-delivery draft; Pax Fluxia shared-index incident and coordination protocol
supersedes: nothing
---

# Concurrent work safety

When another agent, process, or session may be working in the same repo.

1. Inspect repository and process state before you write. Read the reflog: a
   branch you did not create means someone else is here.
2. Claim the exact files, records, jobs, or subsystem you are about to change.
3. Resolve any overlap before writing, not after.
4. Stage only owned paths. Do not `git add -A` a tree you did not survey.
5. Leave unrelated changes in the working tree alone.
6. Do not stop, restart, or reconfigure a process you did not start.
7. Inspect state again immediately before you commit.
8. Release the claim and record the delivered artifact when you finish.

A claim carries an owner, a scope, a timestamp, a status, and an expiry or
liveness rule. Do not infer ownership from an old claim.

Version control holds the previous version. Do not create `old`, `v2`, `.bak`,
or commented-out copies to stand in for it.

## When you find someone else's work in the tree

Preserve it. Commit it as theirs in its own commit, or leave it and say so.
Do not fold it into your change, and do not delete it to get a clean tree.

Completion criterion: the diff contains only your task's files, work you did not
do is byte-for-byte unchanged, and another worker can tell whether the surface
is free.

Incident: [a bare commit that swept another agent's staged files](../docs/incidents.md#concurrent-work-safety).
Read it before running `git add -A` in a repo you share.
