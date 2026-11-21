import Link from 'next/link';
import Image from 'next/image';
import { cards, cardImagePath } from '@/lib/catalog';

const featured = [cards[1], cards[17], cards[8]];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container hero-layout">
          <div className="hero-content">
            <div className="eyebrow"><span className="eyebrow-line" /> ACERVO HISTÓRICO · 78 ARCANOS</div>
            <h1>Um universo de <em>símbolos</em> para descobrir.</h1>
            <p>Explore as 78 cartas do tarot Rider–Waite–Smith, conheça seus arcanos e acompanhe a criação de um baralho brasileiro autoral.</p>
            <div className="hero-actions">
              <Link className="button button-gold" href="/cartas">Explorar as 78 cartas <span aria-hidden="true">↗</span></Link>
              <Link className="button button-outline" href="/baralhos">Conheça os baralhos</Link>
            </div>
            <div className="hero-stats" aria-label="Composição do baralho"><span><strong>22</strong> Arcanos Maiores</span><span className="stat-divider" /><span><strong>56</strong> Arcanos Menores</span></div>
          </div>
          <div className="hero-cards" aria-label="Cartas do acervo Rider–Waite–Smith">
            {featured.map((card, index) => <div className={'hero-card hero-card-' + index} key={card.id}>
              <Image src={cardImagePath(card)} alt={card.namePtBr} width={1086} height={1810} unoptimized priority={index===1} />
            </div>)}
            <span className="hero-orbit" aria-hidden="true">✦</span>
          </div>
        </div>
      </section>
      <section className="introduction container">
        <p className="section-kicker">SUA JORNADA COMEÇA AQUI</p>
        <h2>Conhecimento, arte e tradição.</h2>
        <div className="feature-grid">
          <article><span className="feature-icon">☼</span><h3>Biblioteca visual</h3><p>Consulte cada arcano, organize as cartas por naipe e explore suas imagens em detalhe.</p><Link href="/cartas">Abrir biblioteca ↗</Link></article>
          <article><span className="feature-icon">◇</span><h3>Fonte histórica</h3><p>Um acervo de 1909 ilustrado por Pamela Colman Smith, com procedência e créditos documentados.</p><Link href="/creditos">Ver fontes ↗</Link></article>
          <article><span className="feature-icon">✧</span><h3>Tarot Brasileiro</h3><p>Uma nova coleção cinematográfica inspirada nos arquétipos tradicionais e nas paisagens do Brasil.</p><Link href="/baralhos">Conhecer projeto ↗</Link></article>
        </div>
      </section>
    </>
  );
}
