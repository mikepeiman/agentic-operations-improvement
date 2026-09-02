# Agentic operations lexicon

The canonical language for this repository. Definitions describe domain
concepts rather than implementation details.

## Product and work

**Product vision**  
The enduring user value and direction that guides epics, features, UX flows,
and implementation choices.  
_Avoid:_ roadmap, plan, current task

**Epic**  
A substantial product outcome or capability area containing related features,
flows, and work.  
_Avoid:_ project, milestone, arbitrary task group

**Feature**  
A user-recognizable capability that contributes to an epic and is experienced
through one or more UX flows.  
_Avoid:_ backend method, implementation task

**UX flow**  
The end-to-end sequence through which a user pursues an outcome, including
entry, actions, system responses, state changes, completion, and recovery.  
_Avoid:_ screen, component, happy path

**Bead**  
A durable node in the project's product specification and work graph. A Bead
may represent vision, an epic, feature, UX flow, instruction, idea, issue, bug,
task, decision, task capsule, or post-mortem.  
_Avoid:_ ticket when it implies only a short task title

**Task capsule**  
The compact current state needed for a context-blind agent to orient and
continue a task without reconstructing the prior conversation.  
_Avoid:_ handoff, transcript summary

## Agent operations

**Rule**  
A durable instruction that changes agent behavior.  
_Avoid:_ suggestion, incident record

**Protocol**  
An ordered operating method that coordinates several rules or tools toward a
repeatable outcome.  
_Avoid:_ isolated command, general advice

**Check**  
A mechanical test of an observable condition, with a result and corrective
message bounded to what the instrument can prove.  
_Avoid:_ proof of semantic correctness

**Post-mortem**  
A structured examination of an outcome that differed from its requirement,
capturing impact, mistaken premises, decisive evidence, correction, and
prevention.  
_Avoid:_ apology, blame record

**Owner**  
Mike, whose current explicit intent and corrections govern product direction
and proposed changes to this shared protocol.
