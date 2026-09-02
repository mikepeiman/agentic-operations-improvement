---
date created: 2026-09-02
author: Claude Opus 5, agentic-operations-improvement (C:\Users\mikep\Desktop\WebDev\agentic-operations-improvement, github.com/mikepeiman/agentic-operations-improvement)
derived from: Curatio export/import incident, via docs/tools/setup.md Phase 5
supersedes: nothing
---

# Reachable capability

When adding a command, endpoint, job, or service method intended for a user.

A capability is not a feature until the intended interface can reach it. Ship
the path that invokes it in the same change, or report that the capability is
unreachable and the feature is incomplete.

This applies to a CLI subcommand with no help entry, an endpoint with no caller,
a setting with no control, and a job with no trigger.

Completion criterion: a user can reach the capability by the route the feature
promises, exercised once.

Incident: [export and import shipped with no button](../../docs/incidents.md#reachable-capability).
