---
date created: 2026-08-28
author: Claude Opus 5 — agentic-operations-improvement (C:\Users\mikep\Desktop\WebDev\agentic-operations-improvement, github.com/mikepeiman/agentic-operations-improvement)
derived from: AGENT_INFRASTRUCTURE_SETUP.md, this repo
supersedes: AGENT_INFRASTRUCTURE_SETUP.md
---

# Setting up a new project

Work through the phases in order. Run the check named in each phase before
moving on. Do not report a phase complete without its output.

## Phase 0 — Establish facts

```bash
git rev-parse --show-toplevel && git log --oneline -5 && ls -a
```

State the language and runtime, the package manager, the test command, the
typecheck or lint command, and whether a CI config exists. Everything below
references those commands. If one does not exist, say so rather than inventing
one that fails.

## Phase 1 — Rules

Clone this repo, or copy `AGENTS.md` and `rules/` into the project. Add a
`CLAUDE.md` pointing at `AGENTS.md` so both toolchains read the same policy.

Ask Mike which optional rules apply before pruning any.

## Phase 2 — Beads

Follow [`beads.md`](beads.md). Default is install and use.

## Phase 3 — Graphify

Follow [`graphify.md`](graphify.md). Default is assess, then ask.

## Phase 4 — Hook path collision

Both tools install git hooks and both may set `core.hooksPath`. Whichever runs
second can point the path at its own directory and silence the first.

```bash
git config core.hooksPath && ls $(git config core.hooksPath)
```

Confirm both tools' hooks are present in that one directory. Any hook you add
later must live there too; `.git/hooks/` no longer runs.

## Phase 5 — Checks

`checks/` in this repo holds the enforcement hooks. Copy the ones the project
needs into `.claude/hooks/` and wire them:

```json
{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Bash|powershell|PowerShell",
        "hooks": [{ "type": "command", "command": "node \".claude/hooks/concise-commit-message.mjs\"", "timeout": 10 }]
      }
    ],
    "Stop": [
      {
        "hooks": [
          { "type": "command", "command": "node \".claude/hooks/no-opt-outs.mjs\"", "timeout": 20 },
          { "type": "command", "command": "node \".claude/hooks/reachable-features.mjs\"", "timeout": 20 }
        ]
      }
    ]
  }
}
```

See [`../../checks/README.md`](../../checks/README.md) for what each one catches
and what it cannot see.

## Phase 6 — Optional: lossless intake

Beads records what is actionable. It does not record the detail of what was
asked, and that detail is what gets lost first.

If the project needs it, add an append-only record under `docs/intake/YYYY-MM/`
written before substantive work on a turn, preserving the owner's meaning and
concrete examples. Intake captures; Beads prioritises. Exclude `docs/intake/`
from Graphify.

## Phase 7 — Verify

Run each and report actual output:

```bash
bd ready --json
```

```bash
graphify check-update .
```

```bash
git config core.hooksPath && ls $(git config core.hooksPath)
```

Then make one trivial commit and confirm: the message guard fires on a
deliberately overlong subject, the post-commit graph rebuild runs, and the tree
is clean afterwards.

Report which phases are live, which were skipped and why, and anything you could
not verify. Name it unverified rather than assuming it works.
