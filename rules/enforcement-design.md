---
date created: 2026-09-01
author: unrecorded agent — curatio (dir unrecorded, github.com/mikepeiman/curatio)
derived from: "Curatio .claude/hooks and scripts at https://github.com/mikepeiman/curatio/tree/8c9deb3"
supersedes: nothing
---

# Enforcement design

## Trigger

When a shared rule needs a hook, CI check, linter, or pre-response review.

## Choose the instrument

1. Use a **verifier** when a deterministic observable can prove compliance: a
   file exists, a citation resolves, a version moved, a symbol is absent, a test
   is present, or a manifest agrees.
2. Use a **reflector** when judgement remains semantic: whether a cause is
   sufficient, an approach is better, or an interpretation matches intent.
3. Never describe a mechanical proxy as proof of the semantic property behind
   it.

## Build a verifier

1. State the exact trigger, observable, and repair.
2. Make the matcher narrow enough that ordinary compliant work remains easy.
3. Ignore quoted examples, code blocks, and prose explaining the rule.
4. Return the offending evidence and a concrete correction in the failure.
5. Fail closed when an internal error would silently disable a correctness guard.
6. Test required failures, allowed variants, explanations of the rule, and the
   guard's own error paths.
7. Prefer a ratchet over an impossible clean-state threshold for inherited debt.

## Build a reflector

1. Keep a small fixed core of repeatedly expensive questions.
2. Rotate a small remainder to prevent habituation.
3. Inject the questions before the decision and keep them out of the response.
4. Report only the correction or insight the reflection produced.
5. Fail open: a reflector must never block productive work because its own state
   is unavailable.

## Wire it

Place reusable logic in `checks/` and host-specific invocation in `adapters/`.
Document the event or CI stage that runs it. A rule with no wiring remains prose;
state that status explicitly.

Completion criterion: the instrument catches its recorded failure, permits
representative compliant cases, tells the agent how to recover, and claims no
more than its observable proves.

Incident: [broad matchers that produced bypasses](../docs/incidents.md#enforcement-design).
Read it before writing a check that matches prose.
