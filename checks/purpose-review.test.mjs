import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import { checkReview } from './purpose-review.mjs';

const read = name => JSON.parse(readFileSync(new URL(`../docs/evidence/purpose-first-ops-gjo/${name}.json`, import.meta.url), 'utf8'));
const packet = read('cases');
const review = read('applied-review');

test('the revised full-read brief records the accepted evidence and both conditions', () => {
  assert.deepEqual(checkReview(packet, review), []);
});

test('wrong sources, absent conditions and wrong evidence boundaries are refused', () => {
  assert.match(checkReview(packet, {...review, owner: 'link-owner'}).join(), /exact owner source/);
  assert.match(checkReview(packet, {...review, evidence: ['link-incident']}).join(), /registered for the selected case/);
  assert.match(checkReview(packet, {...review, necessity: {when: 'Unchanged'}}).join(), /necessary/);
  assert.match(checkReview(packet, {...review, acceptance: {...review.acceptance, surface: 'source'}}).join(), /isolated boundary/);
});

test('a declared installed claim cannot use evidence declared as isolated', () => {
  const deliveryClaim = {level: 'installed', observedLevel: 'isolated', source: 'read-fixture'};
  assert.match(checkReview(packet, {...review, deliveryClaim}).join(), /exceeds its stated evidence/);
});

test('the record check leaves reasoning to a reviewer', () => {
  const wrong = {...review, necessity: {when: 'Every unrelated change', otherwise: 'Nothing'}};
  assert.deepEqual(checkReview(packet, wrong), []);
});
