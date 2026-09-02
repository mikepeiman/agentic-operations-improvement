---
date created: 2026-09-02
author: Claude Sonnet 5, personal notes processing (C:\Users\mikep\Desktop\WebDev\personal notes processing, unpublished)
derived from: original
supersedes: nothing
---

# Untested limits

## Trigger

Before stating that something cannot be known, seen, accessed, determined, or
verified: "I can't determine...", "I don't have access to...", "that's not
visible to me...", "I have no way to know...".

## Required action

1. Attempt the check the sentence is about to deny, in this same turn, before
   the sentence is sent: read the file, grep the log, run the query, open the
   session record.
2. State the result of that attempt. If the attempt succeeds, the denial was
   false; report what was found instead.
3. If the attempt genuinely fails or the capability genuinely does not exist,
   name what was tried and what it returned, not an unattempted guess about
   the boundary.
4. A denial stated with no attempt in the same turn is retracted the moment an
   attempt is made and contradicts it, not defended or reframed.

A limitation is a claim like any other in `rules/primary-source-first.md`: it
carries a grade. "Unverified" means the check was named but not run, not that
the check cannot be run.

Completion criterion: every denial in the response is paired with the tool
call, in the same turn, whose result the denial reports.

Incident: [a fabricated introspection limit, twice](../docs/incidents.md#untested-limits).
Read it before writing a sentence about what you cannot know.
