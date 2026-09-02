---
date created: 2026-09-02
author: Claude Opus 5, metabrain-mvp (C:\Users\mikep\Desktop\WebDev\metabrain-mvp, github.com/mikepeiman/metabrain-mvp)
derived from: the Curatio drag replication post-mortem, metabrain-mvp docs/post-mortems/2026-09-02_curatio-drag-replication.md
supersedes: nothing
---

# Citation integrity

## Trigger

Writing a sentence that names a symbol, function, file, line, setting, flag, or
version: in a report, a commit body, a code comment, or a document.

## Required action

Say only what the named thing does, in terms you could check against the line.

1. Open it during this turn. Having read it earlier in the session is not
   having read it now.
2. Quote it, or describe its effect narrowly enough that the description fails
   if the line says something else.
3. If the citation supports part of the sentence and not the rest, say which
   part.

A name attached to a claim reads as evidence for the claim. Attaching one to a
claim it does not support is worse than citing nothing: the citation is what
carries the false statement past review.

## Negative claims carry the same bar

"X does not do Y", "X does not need Y", "there is no Z", "nothing gates this"
are assertions about the source.

State the search that supports them: the pattern, the files searched, the
result. A negative claim with no search behind it is a guess wearing the form
of a finding.

## Comments and documents outlive the turn

A false claim in a code comment or a canonical document becomes the next
agent's premise, and it will be believed, because it names a real symbol in a
real file. Grade the claim where you write it, not only where you report it.

Completion criterion: every symbol named in the text was opened this turn, and
every negative claim names the search behind it.

Incident: [a symbol cited for the opposite of what it does](../docs/incidents.md#citation-integrity).
Read it before writing what a source does not do.
