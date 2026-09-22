# Package checks

Run with Node.js 22 or newer, without installing dependencies:

```sh
node --test checks/protocol.test.mjs
node checks/protocol.mjs
```

[protocol.mjs](protocol.mjs) checks required package files, a small Claude pointer,
a shared core ceiling (`CORE_CEILING` in that file), and local inline Markdown
file links. The ceiling leaves a little editing room above the current core while
making growth an explicit consolidation decision. It is not a model-token
measurement or a rule for the size of project-specific contracts.

Raising it is a decision, not a fix. Consolidate overlap first; raise only when
what remains is distinct rules. It was raised from 6,000 to 7,600 on 2026-09-20
(`ops-lhq`) for the message-shape rules and the pointer to the communication
inquiry, after consolidation across five sections freed 266 characters and the
remainder was not overlap.

[protocol.test.mjs](protocol.test.mjs) exercises one- and two-file copies, adopted
project additions and governing links, missing bootstrap, missing dependency,
oversized distributed core, invalid optional pointers, valid links, malformed
links, and links that escape the package. Temporary fixtures stay
inside this repo's ignored `.tmp/` and are removed after each test.

To check an unmodified distributed core (Claude is optional):

```sh
node checks/protocol.mjs path/to/copied-project --core-only
```

To check an adopted project with its own additions and governing documents:

```sh
node checks/protocol.mjs path/to/adopted-project --adopted
```

Adopted mode requires a nonempty `AGENTS.md`, validates the Claude pointer when
present, and checks direct local inline links in those entry files. It permits
project-document links and imposes no size ceiling on project additions. It does
not recursively audit linked documents or prove that merged instructions retain
the protocol. Both copy modes reject broken or outside-project links; use one
mode at a time. The default distribution check retains the shared-core size and
self-containment gates and requires the package's setup and review procedures.

This checks package shape, not compliance with its meaning. It does not parse
reference-style Markdown links, validate anchors, paths in code spans, external
URLs, Git delivery, or Beads freshness. The two-file test establishes file
independence; it does not demonstrate agent behavior across real projects.

The [CI workflow](../.github/workflows/protocol.yml) runs tests and validation
on Windows and Linux for pushes and pull requests. No local hooks are installed.
Projects adopting the protocol keep their own checks; they need not copy these.

The required files are the entry files, the setup and review procedures, the
Beads guide, the [UI design guidance](../docs/ui-design-guidance.md), the
comparison report, and this file. That list is package shape, not a required
adoption set: the UI guidance is a SKILLS-type practice document that a project
keeps only when it does interface work.

The four old agent-hook scripts were retired. Their source and individual
limitations are recorded in the [comparison report](../docs/v1-v2-review.md).
