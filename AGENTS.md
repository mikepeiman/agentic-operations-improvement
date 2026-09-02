# Shared agent operations

Rules, checks, and tool protocols shared across projects.

## Why this repo exists

Agents suffer from a collection of serious faults, biases, and failure modes
across thinking and reasoning, communication style, problem-solving, and
instruction-following. These rules, docs, and tools exist to mitigate those
faults and to improve human-agent cooperation and productivity.

## Using this repo

Clone or pull it into any project. Read the rules whose trigger matches the work.

Keep the always-loaded layer small. This file plus the triggered rules is the
working set. Do not preload `docs/`.

Every agent has authority to improve what is here: add a rule, correct one,
sharpen wording, record an incident. Discuss the change with Mike before you
commit it. Do not delete a rule you disagree with; add the counter-evidence,
name the project, and leave the decision to him.

## Before you write

```bash
git pull --rebase
```

## Commit and push every turn

Committing and pushing are one act, in every repo, on every turn that changes
files.

```bash
git commit -m "..." && git push -u origin HEAD
```

If the push is rejected, rebase and push again. Do not report work as done while
the commit is local.

- One coherent outcome per commit, including the tests, migration, and required
  documentation that make the outcome complete.
- **Subject**: imperative, 72 characters or less.
- **Body**: why. If the rule came from a failure, name the failure.
- **Trailers**: `From: <project>`, then the model that wrote the change.

Sign the model. It records which model produced the commit, the same fact the
frontmatter `author` field carries for a document.

**No email address.** The signature names a model, not a mailbox. The harness
appends a vendor's `noreply` address by default; it is not the agent's address,
it is not Mike's, and it does not belong in his history. Strike the address and
keep the name.

A promotional line is not a signature either: no product name, tagline, or URL.

```
commit-messages: cap the subject at 72 characters

An agent wrote a 400-character subject. `git log --oneline` became
unreadable, and a pushed message cannot be edited.

From: metabrain-mvp
Co-Authored-By: Claude Opus 5
```

## Which rule to read

| Trigger | Read |
|---|---|
| Write any message, report, review, commit body, or rule | `rules/communication.md` |
| Decide what should happen, or which artifact governs | `rules/authority-chain.md` |
| Change code, data, documents, external systems, or published state | `rules/authorization-and-scope.md` |
| Consider adding a file, doc, or refactor nobody asked for | `rules/scope-additions.md` |
| Answer a question whose entity, scope, source, version, or definition may be assumed | `rules/settle-the-prior-question.md` |
| Assert behaviour, cause, absence, counts, dates, quotes, or completion | `rules/primary-source-first.md` |
| Name a symbol, file, line, setting, or version in any text | `rules/citation-integrity.md` |
| Replicate, copy, match, or port a named existing artifact | `rules/replicate-what-was-named.md` |
| Diagnose a defect on a surface you cannot run | `rules/instrument-before-hypothesising.md` |
| Build a feature or fix the owner will exercise before you can | `rules/observable-by-default.md` |
| Fix a status, metric, retry, warning, exception, timeout, or success signal | `rules/root-cause-not-green-indicators.md` |
| Face a failing test, type error, lint error, or other red check | `rules/test-and-checker-integrity.md` |
| Respond to disagreement, new evidence, or an agent mistake | `rules/correction-under-challenge.md` |
| State that something cannot be known, seen, accessed, or verified | `rules/untested-limits.md` |
| Import, transform, migrate, repair, delete, or replace user data | `rules/input-preservation-and-reproducibility.md` |
| Delete, overwrite, force-push, reset, or touch credentials | `rules/destructive-actions.md` |
| Work in a repo where another agent or process may be active | `rules/concurrent-work-safety.md` |
| Report status or end a work turn | `rules/verification-states.md`; `rules/task-closure-and-blockers.md` |
| Deliver a build, export, report, or processed artifact | `rules/artifact-identity.md` |
| Mike accepts or withdraws acceptance of an artifact | `rules/owner-acceptance.md` |
| Design storage, sync, transformations, ordering, or reconciliation | `rules/architecture/` |
| Write a corrective record, or promote a lesson into a rule | `rules/learning-from-failure.md` |
| Create or revise a mechanical check or reflection hook | `rules/enforcement-design.md` |

## Incidents

Rules state what to do. [`docs/incidents.md`](docs/incidents.md) records the
failures that produced them.

Read an incident when you are about to argue a rule is unnecessary, when a
rule's application to your case is ambiguous, or when writing a new rule and you
need the evidence bar. Do not load it otherwise.

## Tools

[`docs/tools/`](docs/tools/) describes tools worth installing: purpose,
installation, and operating protocol. They are desirable, not assumed present.
Mike decides per project.

- **Beads**: issue tracking that lives in the repo. Default: install and use.
- **Graphify**: structural retrieval over the codebase. Default: assess for
  utility, then ask.

## Writing a rule

- Follow `rules/communication.md`. It governs rule text as well as messages.
- State the condition, then the action.
- When a failure produced the rule, put it in `docs/incidents.md`, not in the
  rule. A rule does not need a written incident to be worth keeping.
- Amend rules in place. Do not rewrite their history.
- Every normative file under `rules/` and `docs/` carries frontmatter:

```
---
date created: YYYY-MM-DD
author: <agent model>, <product name> (<local dir>, <repo url>)
derived from: <path, url, or "original">
supersedes: <what it replaces, or "nothing">
---
```

## Layout

```
rules/                one rule per file
rules/architecture/   how to build the system, not how to behave
docs/incidents.md     the failures behind the rules
docs/tools/           tool descriptions and operating protocols
checks/               executables; exit 0 to pass, non-zero naming the fix
```

Nothing here executes until a project wires it in.

## What belongs here

A rule that has caught or prevented a failure in a real project. Not "good
practice". Keep project-specific rules in their project.
