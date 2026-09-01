---
date created: 2026-09-01
author: Codex, at Mike's direction
derived from: Pax Fluxia protected-persistence and source-preservation rules
supersedes: nothing
status: active when wired by a project
---

# Processing integrity

For imports, migrations, conversions, extraction, reconciliation, and other
processing work:

1. Declare the authoritative input, its version, and the intended output.
2. Treat source input as immutable unless the owner explicitly authorizes an
   in-place change.
3. Write results to a distinct, attributable output.
4. Record transformations, defaults, filters, identity rules, and conflict
   policy.
5. Reconcile input, accepted, transformed, skipped, rejected, duplicate, and
   output counts.
6. Make skipped and problematic items inspectable by identity; a count alone
   is not a diagnostic.
7. Validate representative normal, edge, malformed, duplicate, and older
   inputs when those classes exist.
8. Preserve a recovery path for destructive migrations.

**Observable completion:** source material is unchanged, every input item is
accounted for, and the produced output can be traced to its input and rules.

Incident: Pax Fluxia's persistence rules protect saved maps, games, themes,
presets, and editor storage from broad reset operations. The reusable invariant
is to classify durable user data before reset, migration, or cleanup and prove
that protected classes survive.
