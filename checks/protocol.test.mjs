import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { audit, localLinks, CORE_CEILING } from './protocol.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const temporaryRoot = path.join(root, '.tmp');
mkdirSync(temporaryRoot, { recursive: true });
function fixture(t) {
  const dir = mkdtempSync(path.join(temporaryRoot, 'protocol-'));
  t.after(() => {
    const relative = path.relative(temporaryRoot, path.resolve(dir));
    assert.ok(relative && !relative.startsWith('..') && !path.isAbsolute(relative));
    rmSync(dir, { recursive: true, force: true });
  });
  for (const file of ['AGENTS.md', 'CLAUDE.md']) writeFileSync(path.join(dir, file), readFileSync(path.join(root, file)));
  return dir;
}

test('the documented two-file copy is self-contained', t => {
  assert.deepEqual(audit(fixture(t), { coreOnly: true }).errors, []);
});
test('a one-file installation needs no Claude pointer in either copy mode', t => {
  const dir = fixture(t);
  rmSync(path.join(dir, 'CLAUDE.md'));
  assert.deepEqual(audit(dir, { coreOnly: true }).errors, []);
  assert.deepEqual(audit(dir, { adopted: true }).errors, []);
});
test('adopted projects allow governing links and additions beyond the shared ceiling', t => {
  const dir = fixture(t);
  mkdirSync(path.join(dir, 'docs'));
  writeFileSync(path.join(dir, 'docs/product.md'), 'Product contract');
  const line = 'Project details.\n', oversized = line.repeat(Math.ceil(CORE_CEILING / line.length) + 20);
  writeFileSync(path.join(dir, 'AGENTS.md'), oversized + '[contract](docs/product.md)');
  assert.deepEqual(audit(dir, { adopted: true }).errors, []);
  const strictErrors = audit(dir, { coreOnly: true }).errors;
  assert.ok(strictErrors.some(error => error.includes(`exceeds ${CORE_CEILING}`)));
  assert.ok(strictErrors.some(error => error.includes('self-contained')));
});
test('adoption still rejects broken, malformed and escaping entry-file links', t => {
  const dir = fixture(t);
  writeFileSync(path.join(dir, 'AGENTS.md'), '[missing](missing.md) [bad](%ZZ.md) [outside](../outside.md)');
  const errors = audit(dir, { adopted: true }).errors;
  assert.ok(errors.some(error => error.includes('missing link target')));
  assert.ok(errors.some(error => error.includes('malformed link')));
  assert.ok(errors.some(error => error.includes('escapes package')));
});
test('an optional Claude pointer is validated when present in an adopted project', t => {
  const dir = fixture(t);
  writeFileSync(path.join(dir, 'CLAUDE.md'), '');
  assert.ok(audit(dir, { adopted: true }).errors.some(error => error.includes('small pointer')));
});
test('a missing bootstrap is an error', t => {
  const dir = fixture(t);
  rmSync(path.join(dir, 'AGENTS.md'));
  assert.ok(audit(dir, { coreOnly: true }).errors.some(error => error.includes('Missing AGENTS')));
});
test('a routed rule tree fails even if present in the source package', t => {
  const dir = fixture(t);
  mkdirSync(path.join(dir, 'rules'));
  writeFileSync(path.join(dir, 'rules/example.md'), 'Rule');
  writeFileSync(path.join(dir, 'AGENTS.md'), 'Read [rule](rules/example.md)');
  assert.ok(audit(dir, { coreOnly: true }).errors.some(error => error.includes('self-contained')));
});
test('core growth is caught without linting vocabulary', t => {
  const dir = fixture(t);
  writeFileSync(path.join(dir, 'AGENTS.md'), 'a'.repeat(CORE_CEILING + 1));
  assert.ok(audit(dir, { coreOnly: true }).errors.some(error => error.includes(`exceeds ${CORE_CEILING}`)));
});
test('claude remains a pointer rather than a duplicate protocol', t => {
  const dir = fixture(t);
  writeFileSync(path.join(dir, 'CLAUDE.md'), 'A separate protocol');
  assert.ok(audit(dir, { coreOnly: true }).errors.some(error => error.includes('small pointer')));
});
test('inline file links allow spaces, anchors and titles; examples and URLs are ignored', () => {
  assert.deepEqual(localLinks('[one](a.md#section) [two](<two words.md>) [three](b.md "title")\n' +
    '[web](https://example.com) [anchor](#local) `call [x](missing.md)`\n' +
    '```js\n[x](missing.md)\n```\n~~~\n[x](missing.md)\n~~~'), ['a.md', 'two words.md', 'b.md']);
});
test('missing, malformed and outside-package links fail', t => {
  const dir = fixture(t);
  writeFileSync(path.join(dir, 'CLAUDE.md'), '[core](AGENTS.md) [missing](absent.md) [bad](%ZZ.md) [outside](../outside.md)');
  const errors = audit(dir, { coreOnly: true }).errors;
  assert.ok(errors.some(error => error.includes('missing link target')));
  assert.ok(errors.some(error => error.includes('malformed link')));
  assert.ok(errors.some(error => error.includes('escapes package')));
});
test('the complete repository package validates', () => {
  assert.deepEqual(audit(root).errors, []);
});
test('a distributed package missing a required document fails', t => {
  const dir = mkdtempSync(path.join(temporaryRoot, 'protocol-'));
  t.after(() => {
    const relative = path.relative(temporaryRoot, path.resolve(dir));
    assert.ok(relative && !relative.startsWith('..') && !path.isAbsolute(relative));
    rmSync(dir, { recursive: true, force: true });
  });
  const errors = audit(dir).errors;
  assert.ok(errors.some(error => error.includes('Missing AGENTS.md')));
  assert.ok(errors.some(error => error.includes('Missing docs/ui-design-guidance.md')));
});
