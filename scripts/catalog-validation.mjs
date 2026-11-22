/**
 * Validador de dados canônicos do Tarot PT-BR.
 * Funciona no Node.js, sem instalar dependências do frontend.
 */
const majorFiles = ['Fool','Magician','High_Priestess','Empress','Emperor','Hierophant','Lovers','Chariot','Strength','Hermit','Wheel_of_Fortune','Justice','Hanged_Man','Death','Temperance','Devil','Tower','Star','Moon','Sun','Judgement','World'];
const suits = [
  ['cups', 'Cups'],
  ['pentacles', 'Pents'],
  ['swords', 'Swords'],
  ['wands', 'Wands'],
];
const pad = (value) => String(value).padStart(2, '0');

/** @param {any[]} cards */
export function catalogErrors(cards) {
  const errors = [];
  if (!Array.isArray(cards)) return ['Arquivo não contém array de cartas.'];
  if (cards.length !== 78) errors.push('Esperadas 78 cartas; encontradas ' + cards.length);
  const ids = new Set(), slugs = new Set(), files = new Set();
  for (const card of cards) {
    for (const key of ['id','slug','namePtBr','nameEn','arcanaType','sourceFile']) {
      if (typeof card[key] !== 'string' || !card[key].trim()) errors.push((card.id ?? '?') + ': campo inválido ' + key);
    }
    if (ids.has(card.id)) errors.push('ID duplicado: ' + card.id);
    if (slugs.has(card.slug)) errors.push('Slug duplicado: ' + card.slug);
    if (files.has(card.sourceFile)) errors.push('Fonte duplicada: ' + card.sourceFile);
    ids.add(card.id); slugs.add(card.slug); files.add(card.sourceFile);
  }
  majorFiles.forEach((file, index) => {
    const id = 'major-' + pad(index);
    const card = cards.find((entry) => entry.id === id);
    if (!card) return errors.push('Arcano Maior ausente: ' + id);
    if (card.sourceFile !== pad(index) + '_' + file + '.png' || card.majorNumber !== index || card.arcanaType !== 'major' || card.suit !== null || card.rank !== null)
      errors.push('Inconsistência em ' + id);
  });
  for (const [suit, sourcePrefix] of suits) {
    for (let rank=1; rank<=14; rank++) {
      const id = 'minor-' + suit + '-' + pad(rank);
      const card = cards.find((entry) => entry.id === id);
      if (!card) { errors.push('Arcano Menor ausente: ' + id); continue; }
      if (card.sourceFile !== sourcePrefix + pad(rank) + '.png' || card.arcanaType !== 'minor' || card.suit !== suit || card.rank !== rank || card.majorNumber !== null)
        errors.push('Inconsistência em ' + id);
    }
  }
  if (cards.find((c) => c.id === 'major-08')?.namePtBr !== 'A Força') errors.push('RWS VIII deve ser A Força.');
  if (cards.find((c) => c.id === 'major-11')?.namePtBr !== 'A Justiça') errors.push('RWS XI deve ser A Justiça.');
  if (cards.find((c) => c.id === 'minor-swords-08')?.namePtBr !== 'Oito de Espadas') errors.push('Nome do Oito de Espadas incorreto.');
  return errors;
}
