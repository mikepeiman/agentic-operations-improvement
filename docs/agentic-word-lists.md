# Communication word lists

**Purpose:** List the owner’s flagged and banned words and their usable replacements.

**Constraints:** Preserve exact quotations and code identifiers; apply the underlying communication rules and examine assumptions through direct inquiry.

The owner requested separate flagged/avoid and banned-word lists on 2026-10-28,
in the Journal repair discussion (`metabrain-mvp-6xfk`). Use these lists when
reviewing prose for a person. Exact quotations and code identifiers retain their
original spelling; attribute quotations and explain identifiers when needed.

## Flagged words: replace with the actual meaning

| Word | Reason and self-question | Preferred wording |
| --- | --- | --- |
| move (a user action) | Owner, 2026-11-03 (`metabrain-mvp-vhi6x`): "WTF is a "move" in Metabrain? You are inventing jargon and using physical metaphor in place of accepted terms." The agent wrote "which moves inside each screen back and forward skip" for opening a Wiki page or an item in Agent work. Ask: "What did the person actually do? What does the button actually do?" | Name the action: "opening a Wiki page", "choosing a Journal day"; in general, "user action". |
| canonical | The owner said it adds confusion and encourages bad assumptions. In the Journal discussion the agent used it for the production renderer, then treated that label as evidence of readiness and correctness. Ask: "Which component, source or decision do I mean? What have I actually checked about it?" | Name the thing: "the Journal renderer", "the saved record", or the specific component when the code matters. State observed behavior separately. |

When reviewing other unfamiliar terms, ask: "Will the reader recognize the thing
I mean? Can I name it directly?" Document a new flagged term with the owner's
direction, its context and a useful replacement.

## Banned words: established owner restrictions

| Word family | Replacement | Accepted exception |
| --- | --- | --- |
| hold, holds, holding, held | Use "contains" for contents, or the literal action meant. | The owner accepted the physical keyboard/button action on 2026-10-25 (`metabrain-mvp-674r`), such as "hold Alt". |

Owner, 2026-10-24 (`metabrain-mvp-fsl3`):

> ban "holds" entirely. Until we find an exception, what you use is "contains"

The existing communication guidance applies this ban to the four forms above.

## Assumption discovery

The owner rejected using the word "assumption" as a substitute for examining
reasoning. Use the direct questions in
[Active self-questioning](agentic-working-with-the-human.md#active-self-questioning)
before deciding or explaining, starting with "What am I taking for granted?"

## Maintaining the lists

When proposing a list change, ask: "What did the owner direct? What behavior is
the wording meant to improve? What replacement communicates the intended meaning?"
Record restrictions and proposals separately. Existing hook behavior must be
reported from its implementation; a documentation edit records guidance.
