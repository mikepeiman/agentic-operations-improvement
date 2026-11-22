import { readFileSync } from 'node:fs';
import { pathToFileURL } from 'node:url';

const stages = new Set(['planned', 'dispatched', 'measured', 'candidate', 'fixture', 'handoff', 'published', 'prepared', 'installed', 'runtime', 'remediation', 'accepted', 'blocked', 'withheld']);
const costFields = ['elapsedMs', 'inputTokens', 'outputTokens', 'ownerAttentionMs'];

function requireText(value, name) {
  if (typeof value !== 'string' || !value.trim()) throw new Error(`Missing ${name}`);
}

export function audit(snapshot) {
  requireText(snapshot.scope, 'snapshot scope');
  if (!Number.isFinite(Date.parse(snapshot.asOf))) throw new Error('Invalid snapshot timestamp');
  if (!Array.isArray(snapshot.obligations) || !snapshot.obligations.length) throw new Error('Missing obligations');

  const seen = new Set();
  return snapshot.obligations.map((row) => {
    requireText(row.id, 'obligation identity');
    requireText(row.outcome, `${row.id} outcome`);
    requireText(row.nextOwner, `${row.id} next owner`);
    requireText(row.nextAction, `${row.id} next action`);
    if (seen.has(row.id)) throw new Error(`Duplicate obligation ${row.id}`);
    seen.add(row.id);

    const observed = new Set(row.evidence.map(({ stage, source, result }) => {
      if (!stages.has(stage)) throw new Error(`Unknown stage ${stage} for ${row.id}`);
      requireText(source, `${row.id} ${stage} evidence source`);
      requireText(result, `${row.id} ${stage} observed result`);
      return stage;
    }));
    if (!observed.size) throw new Error(`Missing evidence for ${row.id}`);
    if (!row.required.length || !row.required.every((stage) => stages.has(stage))) {
      throw new Error(`Invalid completion requirements for ${row.id}`);
    }
    const missing = row.required.filter((stage) => !observed.has(stage));
    for (const field of costFields) {
      const cost = row.cost[field];
      if (cost === null) continue;
      if (!Number.isFinite(cost?.value) || cost.value < 0) throw new Error(`Invalid ${row.id} ${field}`);
      requireText(cost.source, `${row.id} ${field} evidence source`);
      requireText(cost.scope, `${row.id} ${field} measurement scope`);
    }
    if (row.completionClaim !== null) requireText(row.completionClaim, `${row.id} claim source`);
    return {
      id: row.id,
      outcome: row.outcome,
      observed: [...observed],
      missing,
      completionClaim: row.completionClaim,
      unsupportedCompletion: row.completionClaim !== null && missing.length > 0,
      unknownCosts: costFields.filter((field) => row.cost[field] === null),
      nextOwner: row.nextOwner,
      nextAction: row.nextAction
    };
  });
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const [, , path] = process.argv;
  if (!path) throw new Error('Usage: node checks/supervision-audit.mjs <snapshot.json>');
  const snapshot = JSON.parse(readFileSync(path, 'utf8'));
  const findings = audit(snapshot);
  console.log(JSON.stringify({ asOf: snapshot.asOf, scope: snapshot.scope, findings }, null, 2));
  if (findings.some(({ unsupportedCompletion }) => unsupportedCompletion)) process.exitCode = 1;
}
