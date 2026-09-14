# Package checks

Run with Node.js 22 or newer, without installing dependencies:

```sh
node --test checks/protocol.test.mjs
node checks/protocol.mjs
```

[protocol.mjs](protocol.mjs) checks required package files, a small Claude pointer,
a 6,000-character shared core ceiling, and local inline Markdown file links.
The ceiling leaves a little editing room above v2's initial core while making
growth an explicit consolidation decision. It is not a model-token measurement
or a rule for the size of project-specific contracts.

[protocol.test.mjs](protocol.test.mjs) exercises the two-file copy, missing
bootstrap, missing dependency, oversized core, duplicate bootstrap, valid links,
malformed links, and links that escape the package. Temporary fixtures stay
inside this repo's ignored `.tmp/` and are removed after each test.

To check just a copied core:

```sh
node checks/protocol.mjs path/to/copied-project --core-only
```

This checks package shape, not compliance with its meaning. It does not parse
reference-style Markdown links, validate anchors, paths in code spans, external
URLs, Git delivery, or Beads freshness. The two-file test establishes file
independence; it does not demonstrate agent behavior across real projects.

The [CI workflow](../.github/workflows/protocol.yml) runs tests and validation
on Windows and Linux for pushes and pull requests. No local hooks are installed.
Projects adopting the protocol keep their own checks; they need not copy these.

The four old agent-hook scripts were retired. Their source and individual
limitations are recorded in the [comparison report](../docs/v1-v2-review.md).
