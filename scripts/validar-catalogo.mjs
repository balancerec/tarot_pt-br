#!/usr/bin/env node
import { readFile } from 'node:fs/promises';
import { catalogErrors } from './catalog-validation.mjs';

const file = new URL('../data/cards.pt-BR.json', import.meta.url);
const cards = JSON.parse(await readFile(file, 'utf8'));
const errors = catalogErrors(cards);
if (errors.length > 0) {
  console.error('Catálogo inválido:');
  errors.forEach((error) => console.error(' -',error));
  process.exitCode = 1;
} else {
  console.log('Catálogo validado: 78 cartas, 22 maiores, 56 menores (4 × 14), slugs/IDs/arquivos únicos, RWS VIII/XI corretos.');
}
