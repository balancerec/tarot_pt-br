/**
 * Contratos estáveis do domínio, independentes de Next.js e React.
 * Identidade canônica da carta não depende do artwork exibido.
 */
export type Suit = 'cups' | 'pentacles' | 'swords' | 'wands';
export type ArcanaType = 'major' | 'minor';
export type CardId = string;
export type DeckId = string;
export type ArtworkId = string;

export interface Card {
  id: CardId;
  slug: string;
  namePtBr: string;
  nameEn: string;
  arcanaType: ArcanaType;
  suit: Suit | null;
  rank: number | null;
  majorNumber: number | null;
  sourceFile: string;
}
export type DeckStatus = 'draft' | 'partial' | 'published';
export interface Deck {
  id: DeckId;
  slug: string;
  title: string;
  type: 'historical' | 'original';
  status: DeckStatus;
  totalCards: 78;
  credits: string;
}
export interface ArtworkVariant {
  usage: 'thumb' | 'catalog' | 'detail' | 'master';
  publicPath: string;
  width: number;
  height: number;
  sha256?: string;
}
export interface CardArtwork {
  id: ArtworkId;
  cardId: CardId;
  deckId: DeckId;
  revision: number;
  status: 'draft' | 'under-review' | 'approved' | 'published';
  masterSha256: string;
  variants: ArtworkVariant[];
}
