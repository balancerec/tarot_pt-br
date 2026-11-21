import Image from 'next/image';
import Link from 'next/link';
import { cardImagePath, getCardCategory, type Card } from '@/lib/catalog';

export function CardTile({ card }: { card: Card }) {
  return (
    <Link href={'/cartas/' + card.slug} className="card-tile" aria-label={'Abrir carta ' + card.namePtBr}>
      <div className="card-art">
        <Image src={cardImagePath(card)} width={1086} height={1810} alt={'Ilustração original de ' + card.namePtBr + ' no baralho Rider–Waite–Smith'} loading="lazy" unoptimized />
      </div>
      <div className="card-tile-caption">
        <span className="card-type">{getCardCategory(card)}</span>
        <h2>{card.namePtBr}</h2>
      </div>
    </Link>
  );
}
