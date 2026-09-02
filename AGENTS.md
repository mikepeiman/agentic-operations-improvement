# Shared agent operations

Rules, checks, hooks, and protocols shared across projects. Change this repo
when Mike says so.

Before making claims, changing state, processing inputs, recording acceptance,
or delivering artifacts, open [`rules/README.md`](rules/README.md) and read every
row whose trigger matches the task.

## Before you write

```bash
git pull --rebase
```

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

## Push in the same step as the commit

```bash
git commit -m "..." && git push
```

If the push is rejected, rebase and push again. Never report work as done while
the commit is local.

## Rules

- One coherent outcome per commit. Include the tests, migration, and required
  documentation that make that outcome complete.
- Push every commit.
- Amend rules in place. Do not rewrite their history.
- Do not delete a rule you disagree with. Add the counter-evidence, name the
  project, leave the decision to Mike.
- Nothing here executes until a project wires it in.
- Write each rule as trigger, required action, and completion criterion.
- Write operative text to instruct. Put provenance and incident evidence in a
  separate section.
- Every normative file under `rules/` and `docs/` carries frontmatter naming its
  creation date, author, source, and what it supersedes.

## Layout

- `rules/` — one file per rule.
- `checks/` — executables. Exit 0 to pass, non-zero with a message naming the
  fix.
- `adapters/` — per-IDE wiring.

Create a directory when you have something to put in it.

## What belongs here

A rule that has caught or prevented a real failure in a real project. Not
"good practice". Keep project-specific rules in their project.
