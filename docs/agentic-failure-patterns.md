# Named agent failure patterns

Names and descriptions of operational biases, defects and communication slop
patterns identified in project work. The source of each name and description is
recorded; agent summaries are distinguished from the owner's words. Operating
rules remain in AGENTS and the linked guidance.

## The Mere Existence bias

Named and described by the owner on 2026-10-27 in the Codex chat
"Fix Web Outline tab icons and nav", `metabrain-mvp-9f7i`.

**Meaning (agent summary):** the agent treats something's existence as a reason
that it should exist, without evaluating that conclusion independently.

The following sequences are the owner's words.

**Naive agent:**

1. I see it exists
2. It seems like it should exist, because it does
3. It should exist

**Corrected recognition:**

1. It exists
2. It seems like it should exist, because it does
3. That begs the question: should it exist?
4. Direct to self: should this exist?

**Detection point:** "It seems like it should exist, because it does"
That inference triggers the self-question **"Should this exist?"**

**Application of the existing rule:** answer against the requirements, purpose
and evidence before deciding what to retain, refactor, replace or remove. The
question requires an answer; asking it alone does not validate the decision.
See [AGENTS section 8](../AGENTS.md#read-and-build-selectively) and the
[design-review procedure](design/review-protocol.md).

**Recorded instance:** the Web header repair treated two existing header
implementations as constraints to preserve and aligned their padding. Their
existence did not justify retaining duplicated composition. The requirement was
reusable components and consistent behavior. See the
[incident post-mortem](https://github.com/mikepeiman/metabrain-mvp/blob/7fbc874a90f002117fd8c95907e612d52eeeae87/docs/active/postmortem-2026-10-27-web-fragmented-ownership.md).

Portable record: `ops-g5x`, contributed from `metabrain-mvp-9f7i`, 2026-10-27.
