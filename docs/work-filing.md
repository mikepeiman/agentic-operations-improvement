# Filing coverage and truthful activity

Use this practice when requests escape the shared backlog or a project needs
checkable filing and activity evidence across agents. Beads remains the authority;
do not create a second task store. Capture alone does not authorize implementation.

## File the whole request

Before editing, map each distinct task, feature, idea, issue, question, answer,
decision, principle, guideline and preference to an existing or new Bead. Include
read-only assignments and work given to every agent. Search closed work too.
Preserve the owner's qualifications and distinguish proposed from accepted work.

Keep an inspectable coverage receipt: the request identity, actor, timestamp and
each requirement's kind, short faithful description and Bead ID. Validate every
referenced ID against the actual tracker. Store durable receipts with the linked
Beads so other agents and the owner's project view can inspect them.

Capture new human input even while earlier input remains unfiled. Never reject
the human's next message to satisfy a bookkeeping gate. Keep pending requests
until reconciled. Retain raw prompts locally only where permitted; exclude
secrets and sensitive incidental information from exported receipts.

## Enforce at observable boundaries

Where supported, capture input at prompt submission and check coverage before
mutating tools and agent Stop. Permit read-only discovery needed to locate the
right Beads. Refusals name the missing filing and the recovery action. Preserve
existing hooks rather than replacing unrelated protections.

Add a Git commit-message check for a valid existing Bead reference, including
non-agent commits. This links a source checkpoint; it does not prove every
requirement in that checkpoint was filed or completed.

Test gates with an unfiled request, a filed request, a second pending message,
unknown IDs, retry and host restart. Verify invocation in each actual agent host.
A configuration file or a direct script test is not host-invocation evidence.
If a host cannot invoke the gate, state that limit and use explicit manual
coverage checks; never report the host as enforced.

## Distinguish progress from evidence

Record an actual assignee, not the creator or latest commenter. An assigned open
item is not started. An in-progress flag alone does not prove current activity.
When exposing live activity, require a fresh, expiring lease bound to the same
agent and a verified live process. Expire it on Stop; reject stale, mismatched or
future-dated evidence. Show activity as unconfirmed when evidence is absent.

Keep needs-input, incomplete details and unowned work visible. Include completed
work in the owner's all-work view, with filters that do not hide the backlog.

Technical completion and owner verification are independent. Record the owner's
explicit satisfactory or unsatisfactory verdict, feedback, time and build identity.
Do not derive acceptance from closure, passing checks, an agent claim or a generic
comment. Preserve earlier verdicts after reopening without presenting them as
acceptance of the new result. Make feedback writes retryable without duplication.

Coverage gates make declarations and references checkable. They cannot prove
that a natural-language summary captured every meaning in the original request.
Provide inspectable receipts, explicit limits and a correction path rather than
claiming a semantic completeness guarantee.
