---
date created: 2026-09-01
author: Codex, curatio (dir unrecorded, github.com/mikepeiman/curatio)
derived from: "Curatio AGENTS.md and agent.md at https://github.com/mikepeiman/curatio/tree/8c9deb3; Pax Fluxia authority and sandbox post-mortems"
supersedes: the original single authority chain in this file
---

# Authority and evidence chains

Name the question before choosing the chain. Three questions, three orders.

## What should happen

Highest first:

1. Non-negotiable safety, legal, and platform constraints.
2. Mike's current stated intent and instructions.
3. Accepted product decisions and explicit reference artifacts.
4. Governing specifications with provenance.
5. Derived plans, audits, summaries, fixtures, and agent judgement.

## What happens now

Highest first:

1. Direct observation of the exact runtime, data, or artifact in question.
2. The defining source, configuration, or data at the exact revision in question.
3. Executable tests whose failure proves the claimed behaviour.
4. Generated artifacts and derived documents.
5. Inference.

## What a replica must preserve

Highest first:

1. Mike's current stated instruction.
2. The named reference artifact or implementation.
3. The defining source inside that reference.
4. Derived specifications, audits, tables, bundles, fixtures, and judgement.

## Reading across the chains

A lower authority that disagrees with a higher one in the relevant chain is
defective. Report the disagreement and follow the higher authority.

Running code is evidence of current behaviour, not authority for intended
behaviour. Code can prove exactly what happens now while remaining wrong against
the current requirement. A specification is evidence of intent, not proof that
the runtime implements it.

Mike's direct observation is evidence of what occurred at his boundary. No agent
inference and no proxy reading overrides it. When your instrument disagrees with
what he saw, the instrument is the thing under suspicion. Investigate the
mechanism separately.

## Before acting from a document

1. Name whether the claim is about intent or current fact.
2. Name what the document is derived from.
3. Check each operative claim against that source.
4. Treat an uncited claim as unverified.

A label such as `canonical` does not raise an artifact's authority. Provenance
and an explicit decision do.

A document is invention wearing a spec's format when it has any of these:

- no frontmatter naming date, author, source, and what it supersedes
- normative tables or lists carrying no citations, beside ones that do
- a "canonical" label with no provenance

Finding a document does not end the search. Finding the source does.

Completion criterion: every load-bearing decision names the question it answers,
the chain it used, and the governing source; no lower authority silently
overrides a higher one.

Incident: [a derived table adopted as the authority](../docs/incidents.md#authority-chain),
and [a sandbox reading trusted over what Mike saw](../docs/incidents.md#evidence-and-instruments).
Read them when a document looks authoritative because of its formatting, or when
your tooling contradicts the owner.
