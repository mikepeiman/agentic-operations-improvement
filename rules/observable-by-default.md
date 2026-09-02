---
date created: 2026-09-02
author: Claude Opus 5, metabrain-mvp (C:\Users\mikep\Desktop\WebDev\metabrain-mvp, github.com/mikepeiman/metabrain-mvp)
derived from: owner instruction, metabrain-mvp intake 2026-09-02T13-40-00-0400-02
supersedes: nothing
---

# Observable by default

## Trigger

Building a feature, or fixing a defect, in code the owner will exercise before
you can.

## Required action

Ship logging with the work, in the same change. Not afterwards, not on request,
and not only while you are debugging it.

Log at the boundaries that decide the outcome:

1. The action started, with its inputs.
2. The decision taken, with the values that decided it.
3. The effect applied, with its result, including refusals and their reason.
4. The failure, once, with the state that produced it.

A feature the owner can only report as "it does not work" is a feature that
costs a diagnosis round trip per report. The log is what turns that report into
a line number.

## Requirements on the log

- Carry the build identifier the owner can see, so a pasted line says which
  build produced it.
- Name the action and the decision in the domain's own words, not internal
  identifiers alone.
- Collapse a repeating failure: log the first, then a periodic count. A line
  per retry buries the one that matters.
- Do not gate it behind a development flag. The build the owner runs is the
  build that has to be readable, and a development build's timing differs from
  what they are describing.

## Removal

Logging comes out when the owner accepts the feature, or it stays. It is not
removed to tidy a diff.

Completion criterion: exercising the feature once produces a log that shows
what was asked, what was decided, and what happened, and a failure produces one
line naming the cause.
