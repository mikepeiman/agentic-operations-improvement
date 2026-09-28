# Agentic Communications Style

A top-level project (owner, 2026-09-28): how agents write for people, in chat
reports, interface text and documents. This document holds the analysis, the
rules and the examples. Dated evidence lives in
[the communication inquiry](communication-inquiry.md); the always-loaded rules are
the core's `## Communicate clearly`. Tracked as the epic "Agentic Communications
Style" in this repository's Beads.

Every example below is a real instance, quoted, with the reader's complaint and a
rewrite.

## The common failure

The text depends on context the reader does not have. The writer has a subject,
a referent or a meaning in mind and leaves it out; the reader has only the page or
the screen. Each rule below closes one way this happens.

## 1. Start every sentence with its subject, named in full

A sentence that starts mid-thought continues a sentence the reader never saw.
Flagged openings: a verb with no subject, a state word, a pronoun, or "the" before
a thing never introduced.

Instance (Metabrain, metatag definition editor, owner flagged as AI slop,
2026-09-28, "Something about how sentences are started"):

| Label / explanation as written | What the reader lacks |
| --- | --- |
| "happens at a time" | a subject: what happens? |
| "The pill carries when it happened, and you can correct it." | which pill; what "it" is |
| "Off for a fact with no clock, like an ingredient." | a subject and a verb |
| "runs as a session (start, then stop)" | a subject |
| "Quick Log opens it, and a second tap closes it." | what "it" is; a second tap of what |
| "The span between is what gets recorded." | between what; recorded by whom |
| "is a thing, not an event" | a subject |
| "A person, a film, a place." | a verb |
| "Its fields can then describe the thing itself or one encounter with it." | whose fields |

Eight of the nine units depend on context the screen does not give.

Rewrites (label, then the hint shown on demand):

- **Time.** "Each entry records the time of the event. Turn off Time for metatags
  without a time, such as ingredients."
- **Session.** "The first Quick Log tap starts a session and the second tap stops
  it. Metabrain records the start, the stop and the duration."
- **Thing.** "Each instance is a lasting thing, such as a person, film or place. A
  field can describe the thing, or one encounter with it, such as one viewing of a
  film."

## 2. Give every sentence a subject and a finite verb

Labels are nouns ("Time", "Session") or commands ("Start session"). Examples go
inside a sentence after "such as", not as a bare list.

## 3. Use literal subjects and verbs

The subject is the person, the application, or a named record or control. The verb
is the operation: records, shows, starts, stops, opens, saves. Data does not carry,
hold, live or know, and has no clock or span. Flagged: "The pill carries when it
happened"; "a fact with no clock"; "The span between".

## 4. Say directly who does what

Active voice, with the actor named. Flagged cleft and agentless passive: "The span
between is what gets recorded." Rewrite: "Metabrain records the start, the stop and
the duration."

## 5. Define a thing by what it is

Name the alternative as its own choice rather than defining by negation. Flagged:
"is a thing, not an event".

## 6. Let the control carry the reassurance

State what a control does. The ability to edit or undo is shown by the control
that does it. Flagged: ", and you can correct it"; filler "then", "itself", "just",
"simply".

## 7. Name every referent in a question to the owner

A question the owner must answer names the screen, the element and the choice.
The owner should not have to reconstruct what "first", "rows" or "applies" refers
to.

Instance (chat, Metabrain, 2026-09-28). Written: "**Property rows.** Your July 23
note puts the property type first. Your July 22 note and the composer design put
the name first. Name-first applies until you choose." The owner: "This was
ambiguous in meaning, I had to think too hard to understand the unnamed referents
in your statement; that's your communication deficiency to correct." Unnamed:
which rows (the rows where a metatag's properties are defined), first of what (the
first thing entered in a row), which design (the composer specification), and what
"applies" governs (the current editor).

Rewrite: "When you add a property to a metatag in the definition editor, what do
you enter first: its name or its type? Your July 23 note says type first; your July
22 note, the composer specification and the current editor use name first." The
owner's answer: name the field, then select the type and the value.

## 8. Put the specifics in front of the owner

When a check finds several instances of a problem, list each one, with what it is
and what is known about it, so the owner can evaluate them. A count or a category
withholds the evaluation. Say what "leaving it alone" means: which records, in
what state.

Instance (chat, Metabrain, 2026-09-28). Written: "The same pass also marked two
other groups deferred, and I've left both alone: the top-level Metabrain, Web,
Projects, Communications and shared-foundation groupings; five smaller use cases."
The owner: "you identify an example of the same defect pattern, and do not even
raise the specifics for me to evaluate?"

## 9. Report what the product does, not what the tracker holds

The owner coordinates agents and does not track records. A statement about
records ("five existed, four are new") reads as a statement about the product.
Before calling anything new or deferred, check the product's feature record and
the owner's own examples.

Instance (chat, Metabrain, 2026-09-28). Written: "Four are new: one-tap doses; ...".
One-tap logging had been core scope from the start; no use-case record existed
for it. The owner: ""one-tap doses is new" is insane, it's been universally and
constantly a core feature."

## 10. Headline what the owner can do now, and where

A delivery report opens with what the owner can see or use, and where. A test on a
substitute (a fixture page, a mock, a throwaway store) is named as such in the
same sentence as the claim. Relaying another agent's report is marked as relayed
and checked before it is repeated.

Instance (Metabrain, 2026-09-24 and 2026-09-28). A Codex session reported "The
**Basic YouTube overlay is implemented**" after its only browser test replaced
YouTube with a fixture page carrying fake playlists. Four days later a Claude
session relayed "built and delivered" from the tracker without checking. The owner:
"YouTube widget: invisible to me. Where is it? I have *never& seen it running".

## 11. Name the operation and what it leaves alone

A request for approval names the operation on the records, and states what stays
as it is. A verb such as "clear", "clean up" or "resolve" names no operation, and
one reading of it may destroy what the owner wants kept.

Instance (chat, Metabrain, 2026-09-28). Written: "I recommend clearing all 23; the
top-level groupings don't need a deferred status to work. Clear all 23?" The owner:
"What is the verb "clear" doing here? Do you mean clear a flag of "deferred"? Okay
do that. Do you mean remove these from our roadmap or features list? This is an
implication; and absolutely not."

Rewrite: "Remove the deferred status from all 23, so they return to open work.
Nothing is removed from the roadmap or the feature lists. Go ahead?"

## Applying this

- Interface text: rules 1–6, reviewed in the rendered screen. Project UI guidance
  points here.
- Chat reports and handoffs: rules 7–11, with the core's `## Communicate clearly`.
- A new pattern: record the instance in the inquiry first, then add or amend a
  rule here with the instance as its example.
