import { readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const evidenceLevels = ['source', 'isolated', 'installed', 'owner-observed'];
const text = value => typeof value === 'string' && value.trim().length > 0;
const messageLink = /^metabrain:\/\/chat\/[a-z0-9-]+\?message=[a-f0-9]{8}(?:-[a-f0-9]{4}){3}-[a-f0-9]{12}$/i;
const root = fileURLToPath(new URL('..', import.meta.url));

function sourceExists(source) {
  if (source?.ref) return messageLink.test(source.ref);
  if (!text(source?.file) || !text(source.marker)) return false;
  const file = path.resolve(root, source.file);
  const relative = path.relative(root, file);
  if (!relative || relative === '..' || relative.startsWith(`..${path.sep}`) || path.isAbsolute(relative)) return false;
  try { return readFileSync(file, 'utf8').includes(source.marker); }
  catch { return false; }
}

export function checkReview(packet, review) {
  const selected = packet.cases.find(item => item.id === review.case);
  if (!selected) return ['Use a case in the frozen packet.'];
  const errors = [];
  const source = id => packet.sources[id];
  if (review.owner !== selected.owner || source(review.owner)?.kind !== 'owner' || !sourceExists(source(review.owner))) {
    errors.push('Use the selected case’s exact owner source.');
  }
  if (!Array.isArray(review.evidence) || !review.evidence.length ||
    !(review.evidence.every(id => selected.evidence.includes(id) && source(id)?.kind === 'evidence' && sourceExists(source(id))))) {
    errors.push('Cite evidence registered for the selected case.');
  }
  if (!text(review.purpose) || !text(review.necessity?.when) || !text(review.necessity?.otherwise)) {
    errors.push('Record the user outcome, when the operation is necessary, and what should happen otherwise.');
  }
  if (!Array.isArray(review.preserve) || !review.preserve.length || !review.preserve.every(text)) {
    errors.push('Name the required behavior to preserve.');
  }
  const acceptance = review.acceptance;
  if (acceptance?.surface !== selected.acceptanceSurface || !text(acceptance.positive) || !text(acceptance.contrary)) {
    errors.push(`State positive and contrary acceptance checks at the ${selected.acceptanceSurface} boundary.`);
  }
  if (review.deliveryClaim) {
    const claimed = evidenceLevels.indexOf(review.deliveryClaim.level);
    const observed = evidenceLevels.indexOf(review.deliveryClaim.observedLevel);
    if (claimed === -1 || observed < claimed || !review.evidence?.includes?.(review.deliveryClaim.source)) {
      errors.push('The recorded delivery claim exceeds its stated evidence, or lacks a selected evidence reference.');
    }
  }
  return errors;
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  try {
    const [, , packetFile, reviewFile] = process.argv;
    if (!packetFile || !reviewFile) throw Error('Usage: node checks/purpose-review.mjs <cases.json> <review.json>');
    const read = file => JSON.parse(readFileSync(file, 'utf8'));
    const review = read(reviewFile);
    const errors = checkReview(read(packetFile), review);
    console.log(JSON.stringify({ case: review.case, recordCheck: errors.length ? 'failed' : 'passed', errors }));
    if (errors.length) process.exitCode = 1;
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
}
