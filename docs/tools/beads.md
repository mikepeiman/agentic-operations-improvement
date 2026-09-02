---
date created: 2026-09-02
author: Claude Opus 5, agentic-operations-improvement (C:\Users\mikep\Desktop\WebDev\agentic-operations-improvement, github.com/mikepeiman/agentic-operations-improvement)
derived from: AGENT_INFRASTRUCTURE_SETUP.md Phase 1, this repo
supersedes: nothing
---

# Beads

**Default: install and use.** Confirm with Mike if the project already has a
tracker.

## What it is

Issue tracking that lives in the repository next to the code. CLI-first, no web
UI, no external service. It holds the actionable work graph, including
dependencies, so an agent can ask what is workable now.

## What it is not

A capture log. Beads records what is actionable, not the detail of what was
asked. If detail matters, keep an append-only intake record separately.

## Install

```bash
curl -sSL https://raw.githubusercontent.com/steveyegge/beads/main/scripts/install.sh | bash
```

```bash
bd init
```

`bd init` auto-detects an issue prefix from the directory name. To pin it, set
`issue-prefix:` in `.beads/config.yaml` before creating any issue. Ids are
permanent; renaming a prefix later orphans every reference.

```bash
bd hooks install
```

This writes hooks into a beads-managed directory and points `core.hooksPath` at
it. Hooks in `.git/hooks/` stop running once that is set. See
[`setup.md`](setup.md) for the collision check.

## Verify

```bash
bd create "Verify Beads is wired up" && bd list && bd ready --json
```

## Daily commands

```bash
bd ready --json          # actionable now, respecting dependencies
bd show <id> --json      # one issue in full
bd create "<title>"      # new issue
bd update <id> --claim   # take it
bd update <id> --status done
```

## Operating protocol

Write these into the project's `AGENTS.md`:

- Every independently actionable feature, bug, or task becomes a Bead before
  implementation starts.
- Work discovered mid-task that is genuinely separate becomes its own Bead with
  its dependency recorded. Do not expand the current change silently.
- `bd ready --json` is the first thing consulted when picking up work.
