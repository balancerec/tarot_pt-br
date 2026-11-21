import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { cards, cardImagePath, getCardBySlug, getCardCategory } from '@/lib/catalog';

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return cards.map((card) => ({ slug: card.slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const card = getCardBySlug(slug);
  if (!card) return { title: 'Carta não encontrada' };
  return { title: card.namePtBr, description: 'Conheça ' + card.namePtBr + ' no acervo Rider–Waite–Smith.' };
}

export default async function CardDetailPage({ params }: Props) {
  const { slug } = await params;
  const card = getCardBySlug(slug);
  if (!card) notFound();
  const index = cards.findIndex((item) => item.id === card.id);
  const previous = cards[(index - 1 + cards.length) % cards.length];
  const next = cards[(index + 1) % cards.length];

  return <section className="page-section container detail-page">
    <Link href="/cartas" className="back-link">← Voltar para a biblioteca</Link>
    <div className="detail-layout">
      <div className="detail-image-wrap">
        <a href={cardImagePath(card)} target="_blank" rel="noopener noreferrer" className="detail-image-link" title="Abrir imagem original em alta resolução">
          <Image src={cardImagePath(card)} width={1086} height={1810} alt={'Imagem histórica da carta ' + card.namePtBr} unoptimized priority />
        </a>
        <p className="detail-hint">Selecione a carta para abrir a imagem original e ampliar no navegador.</p>
      </div>
      <div className="detail-content">
        <p className="section-kicker">{getCardCategory(card)} · RIDER–WAITE–SMITH</p>
        <h1>{card.namePtBr}</h1>
        <p className="detail-en">{card.nameEn}</p>
        <div className="detail-rule" />
        <p>Esta é a ilustração histórica de <strong>{card.namePtBr}</strong>, criada por Pamela Colman Smith para o baralho publicado em 1909.</p>
        <div className="detail-meta">
          <div><span>Identificador</span><strong>{card.id}</strong></div>
          <div><span>Imagem original</span><strong>{card.sourceFile}</strong></div>
          <div><span>Dimensão original</span><strong>1086 × 1810 px</strong></div>
        </div>
        <p className="muted-note">Os significados aprofundados, as cartas invertidas e as anotações simbólicas entrarão na fase V0.2, após revisão de fontes.</p>
        <div className="detail-nav"><Link href={'/cartas/' + previous.slug}>← {previous.namePtBr}</Link><Link href={'/cartas/' + next.slug}>{next.namePtBr} →</Link></div>
      </div>
    </div>
  </section>;
}
