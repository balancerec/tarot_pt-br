#!/usr/bin/env node
/**
 * Importador verificável das 78 cartas históricas RWS.
 * Node.js >=20; sem dependências externas.
 * Uso: node scripts/importar-rws.mjs [--dry-run]
 */
import { mkdir, writeFile, readFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT = path.join(ROOT, 'public', 'decks', 'rider-waite', 'originals');
const API = 'https://api.github.com/repos/mixvlad/TarotCards/contents/tarot/rider-waite/full-png?ref=main';
const RAW = 'https://raw.githubusercontent.com/mixvlad/TarotCards/main/tarot/rider-waite/full-png/';
const MAJORS = ['Fool','Magician','High_Priestess','Empress','Emperor','Hierophant','Lovers','Chariot','Strength','Hermit','Wheel_of_Fortune','Justice','Hanged_Man','Death','Temperance','Devil','Tower','Star','Moon','Sun','Judgement','World'];
const expected = new Set([
  ...MAJORS.map((name, i) => String(i).padStart(2, '0') + '_' + name + '.png'),
  ...['Cups', 'Pents', 'Swords', 'Wands'].flatMap(suit => Array.from({length: 14}, (_,i) => suit + String(i+1).padStart(2,'0') + '.png'))
]);
if (expected.size !== 78) throw new Error('Falha interna: catálogo não tem 78 cartas.');
const response = await fetch(API, {headers: {'Accept':'application/vnd.github+json', 'User-Agent':'tarot-pt-br-importer'}});
if (!response.ok) throw new Error('Falha ao consultar acervo: HTTP ' + response.status);
const listing = await response.json();
if (!Array.isArray(listing)) throw new Error('Resposta inesperada da API GitHub.');
const originals = listing.filter(entry => entry.type === 'file' && entry.name.endsWith('.png') && !['Cover.png','Cover_Rare.png'].includes(entry.name));
const present = new Set(originals.map(entry => entry.name));
const missing = [...expected].filter(name => !present.has(name));
const extra = [...present].filter(name => !expected.has(name));
if (missing.length || extra.length || originals.length !== 78) {
  throw new Error(JSON.stringify({missing,extra,found:originals.length},null,2));
}
console.log('Acervo validado: 78 cartas (22 maiores + 56 menores).');
if (process.argv.includes('--dry-run')) process.exit(0);
await mkdir(OUT, {recursive:true});
const manifest = [];
for (const name of [...expected]) {
  const target = path.join(OUT, name);
  const url = RAW + encodeURIComponent(name);
  const res = await fetch(url, {headers:{'User-Agent':'tarot-pt-br-importer'}});
  if (!res.ok) throw new Error('Erro ao baixar ' + name + ': HTTP ' + res.status);
  const bytes = Buffer.from(await res.arrayBuffer());
  if (bytes.length < 24 || bytes.subarray(0,8).toString('hex') !== '89504e470d0a1a0a') throw new Error('PNG inválido: '+name);
  const width = bytes.readUInt32BE(16), height = bytes.readUInt32BE(20);
  if (width < 300 || height < 500) throw new Error('Dimensões inesperadas: ' + name + ' '+width+'x'+height);
  await writeFile(target, bytes);
  manifest.push({file:name,width,height,size:bytes.length,sha256:createHash('sha256').update(bytes).digest('hex'),source:url});
  console.log('OK',name,width+'x'+height);
}
await writeFile(path.join(OUT, 'manifest.json'), JSON.stringify({source:API,count:manifest.length,cards:manifest},null,2)+'\\n');
console.log('Importação concluída: '+manifest.length+' cartas, manifesto SHA-256 gerado.');
