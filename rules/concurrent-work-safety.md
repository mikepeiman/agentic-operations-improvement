---
date created: 2026-09-02
author: Claude Opus 5 — agentic-operations-improvement (C:\Users\mikep\Desktop\WebDev\agentic-operations-improvement, github.com/mikepeiman/agentic-operations-improvement)
derived from: metabrain-mvp drafts/metabrain-mvp/rules/work-state-and-delivery.md
supersedes: nothing
---

# Concurrent work safety

When another agent, process, or session may be working in the same repo.

1. Inspect repository and process state before you write.
2. Name the paths and processes your task owns.
3. Stage only owned paths. Do not `git add -A` a tree you did not survey.
4. Leave unrelated changes in the working tree alone.
5. Do not stop, restart, or reconfigure a process you did not start.
6. Inspect state again before you commit.

Version control holds the previous version. Do not create `old`, `v2`, `.bak`,
or commented-out copies to stand in for it.

Completion criterion: the diff contains only your task's files, and work you did
not do is byte-for-byte unchanged.
