# Agentic Communications Style

A top-level project (owner, 2026-09-28): the essential rules of grammar, style and
content for everything agents write for people, in interface text, documents and
chat. Development-process reporting (approvals, delivery reports, work status) is
part of the operations protocol, `## Communicate clearly` in the core, not of this
project. Evidence lives in [the communication inquiry](communication-inquiry.md);
a rule is added only as the inquiry describes, when several instances support the
same pattern. Tracked as the epic "Agentic Communications Style" in this
repository's Beads.

The failure these rules close: the text depends on context the reader does not
have. The writer has a subject, a referent or a meaning in mind and leaves it out;
the reader has only the page or the screen.

## Grammar

### 1. Write complete sentences

Every sentence has a subject and a finite verb. Labels are nouns ("Time",
"Session") or commands ("Start session"). Examples go inside a sentence after
"such as", not as a bare list.

### 2. Name a thing before pointing to it

Start each sentence with its subject, named in full at first mention. A pronoun,
"the" or "this" refers only to something already named. A sentence that starts
with a verb, a state word, a pronoun, or "the" before a thing never introduced
continues a sentence the reader never saw.

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

Eight of the nine units depend on context the screen does not give. Rewrites
(label, then the hint shown on demand):

- **Time.** "Each entry records the time of the event. Turn off Time for metatags
  without a time, such as ingredients."
- **Session.** "The first Quick Log tap starts a session and the second tap stops
  it. Metabrain records the start, the stop and the duration."
- **Thing.** "Each instance is a lasting thing, such as a person, film or place. A
  field can describe the thing, or one encounter with it, such as one viewing of a
  film."

The same failure in chat (Metabrain, 2026-09-28): "**Property rows.** Your July 23
note puts the property type first. Your July 22 note and the composer design put
the name first. Name-first applies until you choose." The owner: "I had to think
too hard to understand the unnamed referents in your statement". Rewrite: "When you
add a property to a metatag in the definition editor, what do you enter first: its
name or its type?"

### 5. Give every noun phrase a named head noun

Name the thing a phrase refers to: "the details that do not change", never "what's
true of it" or "what changes". A "what" clause never stands as a subject or an object.

### 6. State the scope inside the sentence

Say what each claim applies to, in the sentence that makes it: "My intent for metatags
was …". A claim whose scope lives only in the writer's framing reads as universal.

Instance for rules 5 to 8 (Metabrain chat, 2026-10-07, owner: "Honestly how is your
grammar so very bad?"): "My intent was to keep what's true of a named item, typed once,
apart from what changes each time it happens." Owner rewrites: "My intent for metatags
was to keep the details that do not change distinct from the details that do." and "My
intent was to ensure an item could have both durable defined values, and
per-occurrence variable values."

## Style

### 3. Use literal words

The subject is the person, the application, or a named record or control. The verb
is the operation: records, shows, starts, stops, opens, saves. Data does not carry,
hold, live or know, and has no clock or span. Flagged: "The pill carries when it
happened"; "a fact with no clock"; "The span between".

### 4. Say it directly

Use the active voice with the actor named. Define a thing by what it is, and name
an alternative as its own choice. Let a control show what can be edited or
undone. Flagged: the cleft "The span between is what gets recorded"; the negation
"is a thing, not an event"; the appended ", and you can correct it"; the filler
"then", "itself", "just", "simply".

### 7. Give contrasted things parallel form

Two things set against each other share one head noun and one grammatical form:
"durable defined values and per-occurrence variable values"; "the details that do not
change" and "the details that do". Flagged: "what's true of a named item … apart from
what changes each time it happens".

### 8. Prefer the precise term

Choose the exact term over an everyday paraphrase: "distinct", "durable",
"per-occurrence", not "keep apart", "what's true of", "each time it happens". A precise
term is still a literal word (rule 3).
