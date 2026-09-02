---
date created: 2026-09-02
author: Claude Opus 5, agentic-operations-improvement (C:\Users\mikep\Desktop\WebDev\agentic-operations-improvement, github.com/mikepeiman/agentic-operations-improvement)
derived from: AGENT_INFRASTRUCTURE_SETUP.md Phase 2 and rules/graphify.md, this repo
supersedes: rules/graphify.md
---

# Graphify

**Default: assess for utility, then ask Mike.** It earns its place in
repositories large enough that finding the implementation surface costs real
time. In a small repo, direct search is cheaper.

## What it is

A queryable structural graph of the repository, so an agent can find the code
that matters without scanning the tree. Outputs land in `graphify-out/`:
`graph.json` (index), `manifest.json` (file fingerprints), `GRAPH_REPORT.md`
(architecture overview in prose).

## Assess before installing

Install it when the work is routinely unfamiliar, cross-module, architectural,
or impact-sensitive, and the repo is too large to hold in one reading. Skip it
when a `grep` reaches the answer in one step.

## Install

```bash
graphify update .
```

```bash
graphify hook install
```

Adds post-commit and post-checkout hooks that rebuild incrementally. Verify they
went into the directory `core.hooksPath` points at. If Beads owns that path,
confirm both tools' hooks coexist there. See [`setup.md`](setup.md).

## Exclusions

Create `.graphifyignore` before the graph grows. Adding an excluded tree later
requires a clean rebuild.

```
# generated or mirrored
dist/
build/
coverage/
*-out/cache/

# frozen prototypes, archives, ledgers, immutable intake
archive/
design/frozen/
docs/intake/
```

## Query

```bash
graphify query "<question>"              # broad context, BFS traversal
graphify query "<q>" --dfs               # trace one specific path
graphify explain "<Symbol>"              # plain-language explanation of a node
graphify path "<Source>" "<Target>"      # shortest path between two concepts
graphify affected "<Symbol>" --depth 2   # blast radius of a change
graphify check-update .                  # freshness check
graphify update . --force                # full rebuild when stale or corrupt
```

## Operating protocol

Write these into the project's `AGENTS.md`:

- Query the graph before a broad filesystem search on unfamiliar, cross-module,
  architectural, debugging, refactoring, or schema work. A narrow known-file
  edit goes straight to the file.
- Graph output is a lead, not proof. Source, tests, and observed behaviour are
  authoritative. Read the code the graph points at.
- Before completing a material code change: run
  `graphify affected "<symbol>" --depth 2`, run the relevant checks, run
  `graphify update .` with the same settings the hook uses, and commit
  `graphify-out/` in the same commit as the change.
- Do not make a standalone "refresh the graph" commit. If the post-commit
  rebuild leaves a diff, fold it into the next commit or fix the settings
  mismatch.

## Traps

A `--no-cluster` refresh is overwritten by the clustered hook rebuild and leaves
the tree dirty permanently. Match the hook's settings.

If node and edge counts grow on a no-change refresh, the incremental pass is
duplicating edges. Delete only the generated `graphify-out/graph.json` and
`graphify-out/manifest.json`, then rebuild.
