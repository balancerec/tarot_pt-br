import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { catalogErrors } from '../scripts/catalog-validation.mjs';
const cards = JSON.parse(readFileSync(new URL('../data/cards.pt-BR.json', import.meta.url), 'utf8'));

test('78 cartas RWS possuem IDs/arquivos/arcana corretos', () => {
  assert.deepEqual(catalogErrors(cards), []);
});
test('22 maiores e 56 menores sem repetição', () => {
  assert.equal(cards.filter((c) => c.arcanaType === 'major').length, 22);
  assert.equal(cards.filter((c) => c.arcanaType === 'minor').length, 56);
  assert.equal(new Set(cards.map((c) => c.id)).size, 78);
  assert.equal(new Set(cards.map((c) => c.slug)).size, 78);
  assert.equal(new Set(cards.map((c) => c.sourceFile)).size, 78);
});
test('numeração RWS: VIII Força e XI Justiça', () => {
  assert.equal(cards.find((c) => c.id === 'major-08')?.namePtBr, 'A Força');
  assert.equal(cards.find((c) => c.id === 'major-11')?.namePtBr, 'A Justiça');
});
test('Oito de Espadas usa o arquivo Swords08.png', () => {
  const card = cards.find((c) => c.id === 'minor-swords-08');
  assert.equal(card?.namePtBr, 'Oito de Espadas');
  assert.equal(card?.sourceFile, 'Swords08.png');
});
test('cada naipe contém exatamente 14 cartas', () => {
  for (const suit of ['cups','pentacles','swords','wands']) {
    const suited = cards.filter((c) => c.suit === suit);
    assert.equal(suited.length, 14);
    assert.deepEqual(suited.map((c) => c.rank), Array.from({ length: 14 },(_,i)=>i+1));
  }
});
test('validador identifica cartas duplicadas ou ausentes', () => {
  const duplicates = [...cards.slice(0, 77), cards[0]];
  assert.ok(catalogErrors(duplicates).some((error) => error.includes('duplicado')));
  assert.ok(catalogErrors(cards.slice(1)).some((error) => error.includes('ausente')));
});
