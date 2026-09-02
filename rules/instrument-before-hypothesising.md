---
date created: 2026-09-02
author: Claude Opus 5, metabrain-mvp (C:\Users\mikep\Desktop\WebDev\metabrain-mvp, github.com/mikepeiman/metabrain-mvp)
derived from: the Curatio drag replication post-mortem, metabrain-mvp docs/post-mortems/2026-09-02_curatio-drag-replication.md
supersedes: nothing
---

# Instrument before hypothesising

## Trigger

A defect report says something does not work, and the surface it was reported
on cannot be run by you: a browser extension page, a device build, a
production environment, a windowed application.

## Required action

Build the smallest runnable replica before producing a list of candidate
causes.

The replica runs the real code under test, the real markup or inputs, and the
real built assets. It fakes only the environment you cannot reach.

1. Build it.
2. Reproduce the report in it, or fail to.
3. Hypothesise after that, against something that can answer.

If the replica does not reproduce the report, that is the finding: the cause
lives in what the replica fakes. Name that boundary and instrument it instead.

## Why the order matters

Hypotheses produced without an instrument are ranked by plausibility.
Plausibility is not evidence, and a ranked list of guesses is work handed back
to the owner, who then has to test them for you.

A replica that takes fifteen minutes is cheaper than an hour of reading that
ends in a guess, and it is reusable. Keep it. It is the harness for the next
report on the same surface.

## Scope

This does not license building a parallel implementation. The replica hosts the
real module; if you find yourself rewriting the logic to make it run, the
seam is in the wrong place and that is itself the finding.

Completion criterion: the diagnosis names a check that was run and its result,
not a set of things it could be.

Incident: [a dozen hypotheses before the first probe](../docs/incidents.md#instrument-before-hypothesising).
Read it when a probe looks more expensive than more reading.
