---
date created: 2026-09-01
author: agent, at Mike's direction
derived from: "Curatio AGENTS.md and agent.md at https://github.com/mikepeiman/curatio/tree/8c9deb3"
supersedes: the original single authority chain in this file
---

# Authority and evidence chains

Keep two questions separate: **what should happen** and **what does happen**.

## Intent authority

Use this order, highest first:

1. Non-negotiable safety, legal, and platform constraints.
2. Mike's current stated intent and instructions.
3. Accepted product decisions and explicit reference artifacts.
4. Governing specifications with provenance.
5. Derived plans, audits, summaries, fixtures, and agent judgement.

When the work is replication, the explicitly named reference artifact defines
the intended behavior inside the stated scope. A lower authority that disagrees
with a higher one is defective. Report the disagreement and follow the higher
authority.

## Factual evidence

Use this order, strongest first:

1. Direct observation of the exact runtime, data, or artifact in question.
2. The defining source code or primary input at the exact revision in question.
3. Executable tests whose failure proves the claimed behavior.
4. Generated artifacts and derived documents.
5. Inference.

Running code is evidence of current behavior, not authority for intended
behavior. A specification is evidence of intent, not proof that the runtime
implements it.

A label such as `canonical` does not raise an artifact's authority. Provenance
and an explicit decision do.

## Before acting from a document

1. Name whether the claim is about intent or current fact.
2. Name what the document is derived from.
3. Check each operative claim against that source.
4. Treat an uncited claim as unverified.

Completion criterion: every load-bearing decision names the chain it used, and
no lower authority silently overrides a higher one.

## Incident evidence

On 2026-09-01, a derived Curatio drop table was treated as the replication
authority even though it cited no source and contradicted the named reference
implementation.
