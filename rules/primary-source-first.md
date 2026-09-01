---
date created: 2026-09-01
last updated: 2026-09-01
author: agent, at Mike's direction
derived from: Curatio source-tracing incident and Pax Fluxia search and trace rules
supersedes: original 2026-09-01 primary-source-first rule
status: active when wired by a project
---

# Primary source first

Before asserting how something behaves, open the source, configuration, data,
or live boundary that defines the behavior.

Not: built bundles, minified output, packaged artifacts, commit messages,
summary docs, or your own judgement about what the design should be.

When the thing is a duplicate of a reference implementation, the reference is
the source. Read it before designing a replacement.

State the evidence grade with every finding:

- **source** — read the defining source, configuration, or data
- **observed** — exercised the relevant live boundary
- **derived** — read something generated from it
- **inferred** — reasoned, unread

An assertion carrying no grade is read as source. Do not let that happen by
omission.

Trace through the active consumer or output before claiming that a definition
is wired. A definition without a live consumer proves existence, not behavior.

**Observable completion:** the finding cites defining evidence and, when it
claims end behavior, the active path from source to consumer or output.

Incident: on 2026-09-01, across one session, an agent asserted that a script
did not call a stop routine (never opened it, the opposite was true), that
horizontal drag had never existed (checked one repo, the code lived in
another), that the owner was misremembering his own product (same evidence),
compared drop behaviour across eleven minified zips while git held the source,
cited a summary bullet as the governing spec, and shipped a redesign of a drag
interaction without opening the reference implementation it was built to
duplicate. That reference decided the question in one line, and it contradicted
the shipped design.
