---
date created: 2026-09-01
author: agent, at Mike's direction
derived from: "Curatio execution playbook and import requirements at https://github.com/mikepeiman/curatio/tree/8c9deb3/docs"
supersedes: nothing
---

# Input preservation and reproducibility

## Trigger

Before importing, transforming, migrating, repairing, deleting, or replacing
user data or source artifacts.

## Required action

1. Treat source inputs as immutable. Write transformations to a distinct output.
2. Before a risky mutation, create a recoverable snapshot and verify that it
   exists and is non-trivial.
3. Record source identity, version, hashes, sizes, record counts, parameters,
   tool version, and output identity in a manifest.
4. Make cutover atomic or provide a tested rollback path.
5. Reconcile source and output with semantic counts or a semantic diff.
6. Surface every skipped, rejected, ambiguous, or changed item by identity and
   reason. Counts alone are insufficient.
7. Preserve the previous artifact until the replacement passes its acceptance
   gate.

Completion criterion: the source remains recoverable, the output can be
reproduced, and every difference is either verified or explicitly enumerated.
