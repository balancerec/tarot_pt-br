import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { cards, cardImagePath } from '@/lib/catalog';

export const metadata: Metadata = { title: 'Baralhos', description: 'Conheça o acervo RWS e a futura coleção brasileira.' };
export default function DecksPage() {
  return <section className="page-section container">
    <div className="page-heading"><p className="section-kicker">DUAS VISÕES · UMA TRADIÇÃO SIMBÓLICA</p><h1>Nossos <em>Baralhos</em></h1><p>Uma coleção histórica para estudo e uma interpretação brasileira em desenvolvimento.</p></div>
    <div className="deck-grid">
      <article className="deck-card">
        <div className="deck-preview"><Image src={cardImagePath(cards[1])} alt="O Mago, Rider–Waite–Smith" width={1086} height={1810} unoptimized /></div>
        <div className="deck-description"><span className="deck-status">Disponível · 78 cartas</span><h2>Rider–Waite–Smith</h2><p>O baralho histórico de 1909, com ilustrações originais atribuídas a Pamela Colman Smith. Um ponto de partida para conhecer os símbolos do tarot.</p><Link className="button button-gold" href="/cartas">Explorar o baralho ↗</Link></div>
      </article>
      <article className="deck-card deck-upcoming"><div className="deck-placeholder" aria-hidden="true"><span>✦</span><span>BRASILIAN<br/>CINEMATIC<br/>HERITAGE</span></div><div className="deck-description"><span className="deck-status">Em produção · ainda não publicado</span><h2>Tarot Brasileiro</h2><p>78 cartas autorais de realismo cinematográfico, inspiradas nas paisagens e culturas do Brasil e nos arquétipos do Rider–Waite–Smith.</p><span className="button button-muted">Disponível futuramente</span></div></article>
    </div>
  </section>;
}
