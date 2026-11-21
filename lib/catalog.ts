import rawCards from '@/data/cards.pt-BR.json';

import type { Card, Suit } from '@/domain/tarot';
export type { Card, Suit } from '@/domain/tarot';

export const cards: readonly Card[] = rawCards as unknown as Card[];

export const suitLabels: Record<Suit, string> = {
  cups: 'Copas',
  pentacles: 'Ouros',
  swords: 'Espadas',
  wands: 'Paus',
};

export const cardImagePath = (card: Card): string =>
  '/decks/rider-waite/originals/' + encodeURIComponent(card.sourceFile);

export const getCardBySlug = (slug: string): Card | undefined =>
  cards.find((card) => card.slug === slug);

export const normalizeSearch = (value: string): string =>
  value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase('pt-BR');

export function getCardCategory(card: Card): string {
  return card.arcanaType === 'major' ? 'Arcano Maior' : suitLabels[card.suit!];
}
