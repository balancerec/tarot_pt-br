import type { Metadata } from 'next';
import { CardCatalog } from '@/components/tarot/card-catalog';

export const metadata: Metadata = { title: 'Biblioteca das 78 cartas', description: 'Explore os Arcanos Maiores e Menores por nome e naipe.' };

export default function CardsPage() {
  return (
    <section className="page-section container">
      <div className="page-heading">
        <p className="section-kicker">ACERVO RIDER–WAITE–SMITH</p>
        <h1>Biblioteca dos <em>Arcanos</em></h1>
        <p>As 78 cartas do tarot clássico, organizadas para explorar no seu ritmo.</p>
      </div>
      <CardCatalog />
    </section>
  );
}
