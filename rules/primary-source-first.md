# Primary source first

Before asserting how something behaves, open the code that defines the
behaviour.

Not: built bundles, minified output, packaged artifacts, commit messages,
summary docs, or your own judgement about what the design should be.

When the thing is a duplicate of a reference implementation, the reference is
the source. Read it before designing a replacement.

State the evidence grade with every finding:

- **source** — read the defining code
- **derived** — read something generated from it
- **inferred** — reasoned, unread

An assertion carrying no grade is read as source. Do not let that happen by
omission.

Incident: on 2026-09-01, across one session, an agent asserted that a script
did not call a stop routine (never opened it, the opposite was true), that
horizontal drag had never existed (checked one repo, the code lived in
another), that the owner was misremembering his own product (same evidence),
compared drop behaviour across eleven minified zips while git held the source,
cited a summary bullet as the governing spec, and shipped a redesign of a drag
interaction without opening the reference implementation it was built to
duplicate. That reference decided the question in one line, and it contradicted
the shipped design.
