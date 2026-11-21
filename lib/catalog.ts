import rawCards from '@/data/cards.pt-BR.json';

export type Suit = 'cups' | 'pentacles' | 'swords' | 'wands';
export type ArcanaType = 'major' | 'minor';
export interface Card {
  id: string;
  slug: string;
  namePtBr: string;
  nameEn: string;
  arcanaType: ArcanaType;
  suit: Suit | null;
  rank: number | null;
  majorNumber: number | null;
  sourceFile: string;
}

export const cards = rawCards as Card[];

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
