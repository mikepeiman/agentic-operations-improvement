# Shared agent operations

Rules, checks, hooks, and protocols shared across Mike's projects. A project
opts in by including this repo's link; agents working in that project change
this repo when Mike says so.

This file is the protocol. It is short on purpose: agents run here from Claude
Code, Codex, opencode, DSH, Cursor, and whatever comes next, and a protocol
nobody finishes reading is a protocol only one of them follows.

## Before you write

```bash
git pull --rebase
```

That is the whole concurrency story. Changes arrive minutes or days apart, from
one project at a time. Git already handles that.

## Every commit says three things

**What changed** — the subject line, imperative, 72 characters or less.

**Why** — the body. If the rule came from a failure, name the failure: what
broke, what it cost, how it was found. A rule with its incident attached
survives the next person who thinks it is pedantic. A rule without one gets
deleted in six months by someone who cannot see what it was for.

**Where it came from** — a `From:` trailer naming the project, so
`git log --grep="From: metabrain-mvp"` answers "what did that project teach us".

```
commit-messages: cap the subject at 72 characters

An agent wrote a 400-character subject. `git log --oneline` became
unreadable, and a pushed message cannot be edited. Caught by the hook that
now enforces it.

From: metabrain-mvp
```

## Rules for changing this repo

- **One change per commit.** A commit that does two things cannot be reverted.
- **Amend rules in place; never rewrite their history.** The commit says what
  changed and why. Git keeps the old version — that is what it is for.
- **Disagreeing with a rule is not grounds for deleting it.** Add the
  counter-evidence, say which project found it, and leave the decision to Mike.
- **Nothing here executes until it is wired in.** A check lands as an
  executable that exits 0 or non-zero. Wiring it into a project's hooks or CI
  is a separate, deliberate act in that project.
- **State the condition, then the fix.** Rules, checks, and their output say
  what is true and what to do about it. No reassurance, no architecture
  lessons, no inferred causes presented as observations.

## Where things go

- `rules/` — the rules themselves, one file per rule, incident included.
- `checks/` — executables. Any language. Exit 0 for pass, non-zero with a
  message naming the fix.
- `adapters/` — per-IDE wiring that triggers the checks. The check is
  vendor-neutral; only the trigger is not.

Create a directory when you have something to put in it, and say why in the
commit.

## What belongs here

Something belongs here when it has caught or prevented a real failure in a real
project. Not "this seems like good practice." The same rule arriving from a
second project is the strongest signal it is general rather than local.

What stays in its own project: anything that encodes that project's specific
shape — its command surface, its build layout, its domain.
