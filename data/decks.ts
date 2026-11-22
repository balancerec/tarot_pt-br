import type { Deck } from '@/domain/tarot';

/** Um só catálogo de cartas, múltiplas representações artísticas. */
export const decks: readonly Deck[] = [
  {
    id: 'rws-1909',
    slug: 'rider-waite-smith',
    title: 'Rider–Waite–Smith',
    type: 'historical',
    status: 'published',
    totalCards: 78,
    credits: 'Pamela Colman Smith · Arthur Edward Waite · Rider & Company, 1909 · digitalização restaurada por Steve P.',
  },
  {
    id: 'br-cinematic',
    slug: 'tarot-brasileiro-cinematic-heritage',
    title: 'Tarot Brasileiro — Cinematic Heritage',
    type: 'original',
    status: 'draft',
    totalCards: 78,
    credits: 'Baralho autoral em produção, com autoria e licenças definidas por arte.',
  },
];
