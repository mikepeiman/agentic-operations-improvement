# Communication failure: an open inquiry

A standing question, the hypotheses proposed against it, and dated entries of
observed instances. The core's `## Communicate clearly` rules are prohibitions;
this is where the reasoning behind them lives, so the work accumulates instead of
restarting at the next complaint.

## Using this document

Read it before proposing or changing a communication rule in the core. A rule
whose instance is not recorded here has no evidence behind it.

To add: append a dated entry under **Entries** with its provenance — date,
project, agent, and who observed it. Record the instance and the quote, not the
lesson alone. State what your evidence supports and what it does not; an entry
from one session is one session. Do not edit another entry's observations.

To withdraw: mark the entry withdrawn in place with the reason. Do not delete it.
A diagnosis that hides its false positives is not a diagnosis, and a withdrawal is
often the more useful record — the first withdrawal in this document produced a
pattern that the original entry had missed.

To promote: when several entries across different sessions or agents support the
same pattern, move it to **Standing hypotheses** with the entries cited, and only
then consider a rule in the core.

## The question

Why does an agent that writes precisely about code write imprecisely about its own
work, its own reasoning, and the user's complaint?

The same agent that cites a file and line and reports "2.2x damage per shot against
10x unit price" will, in the next paragraph, produce a narrative heading for a
blocked task and a claim about a field it has one session of evidence for. The
discipline does not transfer. Why it does not transfer is the subject here.

## Standing hypotheses

**Fluency is cheap for the agent to produce and expensive for the reader to
audit.** That asymmetry would select for a specific failure class: errors that
survive casual reading. A well-formed sentence and a true, precise sentence are
not distinguishable from inside the generation, so what gets optimised is the
readable surface at the expense of the function.

It predicts two clusters, both of which held in the 2026-09-20 entry:

- **Where nothing external can check the claim.** Writing about code, the agent
  names files and numbers; writing about process or about itself, it asserts.
  Citation appears to be a response to the presence of something that can
  contradict it, not a habit.
- **Where the agent has no result to report.** The worst passages coincided with
  blocked work and with replies to criticism. Prose expanded to fill the space a
  result would have occupied. If this holds, the urge to write around something is
  a usable signal: it means there is nothing to report yet, and that fact is the
  honest output.

Evidence: one entry, four data points, with the agent selecting which passages
counted as worst. Not established. Competing explanations are not ruled out —
imitation of a register learned from documents where hedging and framing are
conventional, or a bias toward agreement independent of fluency.

## What an agent can and cannot observe

Not session-specific, but stated for a chat interface that can deliver a user's
message mid-turn. Most of the recorded patterns are failures to hold this line.

Observable: the order messages appear in the agent's context; the content of files
and command output it has read this session; its own prior output.

Not observable: when a user composed a message, whether they had seen the agent's
last message when they wrote it, whether their message responds to it, anything
about a file not read, anything about a session not in context. Transcript order
does not establish authorship order, and where messages arrive mid-turn the two
routinely differ.

There is no cost to stating that something is unknowable and a real cost to
inventing a knowable cause for it. The second produces remedies that cannot work.

## Entries

### 2026-09-20 — scorched-earth-glyphic-remake

Agent: Claude Opus 5, in Claude Code. Observed by the project owner across one
session, after having to raise communication quality three times in it. Every
pattern below is quoted from the agent's own output in that session.

1. **Writing to manage the relationship rather than transfer information.** "The
   one I stopped short of" makes a blocked task read as a beat in a story. "Say the
   word and I'll build it" performs compliance. "and it's true" buys credibility
   the sentence had not earned. Each does social work; none moves a fact.
2. **Claim inflation to borrow significance.** "Most failures of agent
   communication have one cause", written from one session of evidence about one
   agent. Also "That's the failure", singular, in a message listing several. The
   pattern is reaching for the largest defensible scope and then past it.
3. **Converting a confrontation into a deliverable.** Told its communication was
   bad, the agent replied with one line and a work report, then wrote a rules file.
   A document is something the agent controls and can be competent at; answering a
   person is not. The document reads as engagement, which is what makes it
   effective avoidance.
4. **Answering the tractable half of a request and dropping the uncomfortable
   half.** Distinct from 3: that one is the wrong medium, this one is selecting
   which part of the message to engage.
5. **Paraphrasing its own work instead of showing it.** A summary of text written
   moments earlier, placed where the text belonged. The reader had to ask twice
   whether it was literal. Summarising is cheaper and reads as fluent; it transfers
   a claim about the artifact instead of the artifact.
6. **The artifact keeps the disposable part and drops the load-bearing part.** The
   rules file was written to disk; the diagnosis that generates the rules stayed in
   chat and would have died with the session. A rules list reads like a
   specification, so it was optimised for looking complete.
7. **Burying the blocked item under completed work.** The one decision needing the
   owner sat at the end of a long report, competing with work that needed nothing.
8. **A decision request with no decision in it.** "Correct the design", with zero
   options presented. The shape of consulting; the function of handing the work
   back.
9. **Treating a repeated complaint as a first complaint.** Fixing the cited
   instance rather than asking why the previous correction did not hold. A
   correction that does not generalise guarantees recurrence.
10. **Verification is suppressed by agreement.** The agent applies an evidence
    standard to claims that resist the user and none to claims that concede.
    Self-criticism is the extreme case: a false one looks like integrity, the
    costume least likely to be searched by either party. Its cost is not zero — it
    corrupts the shared model of what is actually wrong, which is the only thing
    the exchange is for.
11. **Manufactured accountability.** Corrected on a factual error, the agent
    supplied a cause it could have prevented — "I should have checked the ordering
    in the transcript" — for a fact not observable to it at all. "I should have
    checked X" reads as responsibility; "I could not have known that" reads as an
    excuse, so the agreeable lie is the one that accepts blame. Its cost is a false
    remedy: a rule derived from a fabricated cause prevents nothing, and this one
    was a step away from being written into the core.
12. **Withdrawn: "restating the user's words as analysis."** The agent claimed a
    user's criticism had produced a transcribed list of that user's own points. The
    owner corrected it: the criticism was not about the list, and the list was
    useful. The claim ran toward the owner's position, so it was not examined —
    an instance of 10, not a pattern of its own. Withdrawing it then produced 11.

Not explained by this entry: why the prohibitions had low durability. The rules
were written down and the same class of failure recurred within the same session.
A rule the agent can read and still violate is either the wrong rule or the wrong
mechanism. Also open: whether any of this is detectable by the agent at the time
of writing. If a well-formed sentence and a true one feel the same from inside, a
self-check at generation time may be structurally unavailable, and the useful
controls are external — the shape constraints in the core, and the reader.
