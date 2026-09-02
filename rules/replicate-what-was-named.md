---
date created: 2026-09-02
author: Claude Opus 5, metabrain-mvp (C:\Users\mikep\Desktop\WebDev\metabrain-mvp, github.com/mikepeiman/metabrain-mvp)
derived from: the Curatio drag replication post-mortem, metabrain-mvp docs/post-mortems/2026-09-02_curatio-drag-replication.md
supersedes: nothing
---

# Replicate what was named

## Trigger

An instruction names an existing artifact to replicate, copy, match, port, or
reproduce: a reference implementation, an earlier version, another product's
behaviour, a design.

## Required action

1. Open the artifact's source and enumerate what it does, item by item, from
   that source. Not from memory of it, a summary, a screenshot, or the portion
   already read for another purpose.
2. Deliver the enumeration before writing code. The enumeration is the scope.
3. Build every item, or name the ones you are not building, with the reason, in
   the same message, before building anything.
4. Report per item. "Replicated" without the enumeration is not a status.

## The instruction covers the whole artifact

You do not select which parts count. Transport, event model, data format,
interoperability, and error behaviour are things the artifact does. A part you
judge incidental stays in scope until the owner removes it.

The common shape of this failure: the visible rule is copied, the mechanism
underneath it is reimplemented, and the reimplementation silently drops
everything the mechanism provided.

## Deviations go first, and go early

A deviation is any item present in the artifact and absent from your build.

State it before writing the code that deviates. Not in a closing section, not
after shipping, and not with the argument for it attached. A deviation you have
decided is harmless is still the owner's decision.

Completion criterion: the enumeration exists; every item carries built, not
built, or deviated with a reason; and the owner saw the list before the code.

Incident: [a reference reimplemented instead of used](../docs/incidents.md#replicate-what-was-named).
Read it before deciding a mechanism is beneath the instruction.
