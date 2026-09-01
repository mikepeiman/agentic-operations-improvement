# Shared agent operations

Rules, checks, hooks, and protocols shared across projects. Change this repo
when Mike says so.

## Before you write

```bash
git pull --rebase
```

Read the rule or adapter triggered by the task. Keep the always-loaded layer
small; do not preload `docs/` or every project adapter.

## Commit format

- **Subject** — imperative, 72 characters or less.
- **Body** — why. If the rule came from a failure, name the failure.
- **Trailer** — `From: <project>`.

```
commit-messages: cap the subject at 72 characters

An agent wrote a 400-character subject. `git log --oneline` became
unreadable, and a pushed message cannot be edited.

From: metabrain-mvp
```

## Deliver the commit

```bash
git commit -m "..."
git push -u origin HEAD
```

If the push is rejected, rebase and push again. Never report work as done while
the commit is local.

## Rules

- One change per commit.
- Push every commit.
- Amend rules in place. Do not rewrite their history.
- Do not delete a rule you disagree with. Add the counter-evidence, name the
  project, leave the decision to Mike.
- Nothing here executes until a project wires it in.
- In active rules, state the trigger, action, and observable completion.
- Keep incident evidence short. Put exploration and extended reasoning in
  `docs/`.
- Put commands, paths, trackers, and generated-artifact policy in `adapters/`.

## Layout

- `rules/` — one file per rule.
- `checks/` — executables. Exit 0 to pass, non-zero with a message naming the
  fix.
- `adapters/` — per-IDE wiring.
- `docs/` — source reviews and explorations; not active policy.

Create a directory when you have something to put in it.

## What belongs here

A rule that has caught or prevented a real failure in a real project. Not
"good practice". Keep project-specific rules in their project.

An adapter belongs here when a shared rule needs a project-local command,
path, authority declaration, tracker, or generated-artifact policy.
