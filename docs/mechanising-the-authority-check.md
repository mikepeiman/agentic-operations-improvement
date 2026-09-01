---
date created: 2026-09-01
author: agent, at Mike's direction
derived from: the 2026-09-01 Curatio drag session
supersedes: nothing
status: exploration, not a rule
---

# Mechanising the authority check

Question: can the reasoning that ended the Curatio drag session be made to
happen every time, without Mike walking an agent through it?

## What the reasoning was

Three steps, in order:

1. **Name the authority.** What is being replicated? What did Mike instruct?
2. **Grade everything else as derived.** Docs, audits, bundles, judgement.
3. **On disagreement, the derived artifact is defective.** Fix it; do not build
   from it.

The failure it prevents: adopting a derived artifact because it is formatted
like an authority — a spec heading, a table, a "CANONICAL" label, an expensive
audit.

## What cannot be mechanised

A hook cannot read a document and a reference implementation and decide they
disagree. That judgement is the work. Any design that claims otherwise is
selling a checker that will pass a contradiction and be trusted for it.

## What can be mechanised

The conditions that let a derived artifact pass as an authority are all
mechanically detectable. Attack those.

### 1. Provenance gate (deterministic)

Every document containing normative language — `must`, `shall`, `required`,
`RETAIN`, `CANONICAL`, `non-negotiable` — carries frontmatter naming:

```
date created:
author:
derived from:      <path, url, or "original">
supersedes:
```

Check: parse frontmatter, fail on a normative doc that lacks any field.
Catches the exact hole Mike found: `docs/features/CURATIO.md` declares itself
`PRODUCT BOUNDARY CANONICAL` and carries no frontmatter at all, so nothing
records that it was produced by a compression pass over documents it does not
name.

### 2. Citation gate (deterministic)

A document whose frontmatter says `derived from: <path>` must cite that path
in every normative section. A section is normative if it contains a table or
list plus normative language. A citation is `<file>:<line>` or `<file> §<n>`.

Check: for each normative section, count citations of the declared source.
Zero is a failure, reported as *"§4.6 states requirements and cites nothing;
§4.5 beside it cites treeview.js three times."*

This is the check that would have caught the drag defect at authoring time.
It does not need to understand drag. It needs to notice that a section
asserting behaviour cites no source while its neighbours do.

### 3. Citation rot (deterministic)

Extract every `<file>:<line>` citation. Verify the file exists and has that
many lines. Cannot verify the line still says what the doc claims, but a
citation pointing past the end of a file is a certainty, not a judgement.

### 4. Authority declaration (deterministic)

The repo root declares its chain in one file: what is being replicated, where
the reference lives, which docs are derived. A hook verifies the file exists
and that every doc labelled canonical appears in it.

Without this, step 1 of the reasoning has no input, and every agent
re-derives the answer from whatever it finds first.

### 5. Delivery at the moment of decision (deterministic)

A `UserPromptSubmit` hook that matches `fidelity|parity|spec|canonical|
replicate|per the (doc|audit|plan)` and injects the authority chain before the
agent starts. Cannot check compliance. Can guarantee the rule is present at
the moment it applies, which is the difference between a rule that exists and
a rule that fires.

## Honest summary

Hooks cannot make an agent think. They can:

- **make the hiding conditions fail loudly** — 1, 2, 3
- **supply the input the reasoning needs** — 4
- **deliver the rule when it applies** — 5

That is enough to convert this class of failure from invisible to noisy, which
is the same trade the backend-features-have-ui hook makes: it cannot tell
whether a control is good, only whether it exists, and "exists" was the whole
failure.

## Order to build

1 and 4 first: without provenance and a declared chain there is nothing to
check against. Then 2, which is the one that would have caught this. Then 5.
Then 3, which is cheap and finds rot nobody is looking for.
