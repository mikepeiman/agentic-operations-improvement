---
date created: 2026-09-01
author: Codex, curatio (dir unrecorded, github.com/mikepeiman/curatio)
derived from: "Curatio AGENTS.md, agent.md, and .claude/hooks at https://github.com/mikepeiman/curatio/tree/8c9deb3"
supersedes: rules/claims-evidence-and-uncertainty.md
---

# Primary source first

Before asserting how something behaves, open the code that defines the
behaviour.

Not: built bundles, minified output, packaged artifacts, commit messages,
summary docs, or your own judgement about what the design should be.

When the thing is a duplicate of a reference implementation, the reference is
the source. Read it before designing a replacement.

Trace through to the active consumer or output before claiming a definition is
wired. A definition with no live consumer proves existence, not behaviour.

## Grade every finding

- **observed**: measured on the exact runtime, data, or artifact in question
- **source**: read the defining code
- **derived**: read something generated from it
- **inferred**: reasoned, unread
- **unverified**: the required check is named but has not been performed

An assertion carrying no grade is read as source. Attach a grade or perform the
check that earns one.

## Before asserting

Separate what was observed, what was read, what the user supplied, and what was
inferred. Verify each load-bearing premise with the cheapest decisive check.

An absolute claim (`nothing`, `never`, `every`, `removed`, `fixed`) requires
searching the full relevant scope, and naming the symbol or artifact that would
falsify it.

A proposed cause must be necessary and sufficient for the symptom, not merely
consistent with it.

Check that the probe measures the system, version, environment, and execution
path actually in question. A reading taken somewhere else is evidence about
somewhere else.

Name every material verification you did not perform.

Completion criterion: a reader can distinguish evidence from inference, and can
repeat the check behind each load-bearing claim.

Incident: [six false assertions in one session](../docs/incidents.md#primary-source-first).
Read it before deciding a source is too expensive to open.
