'use client';

import { useMemo, useState } from 'react';
import { CardTile } from '@/components/tarot/card-tile';
import { cards, normalizeSearch, suitLabels, type Suit } from '@/lib/catalog';

type Filter = 'all' | 'major' | 'minor' | Suit;
const filters: { id: Filter; label: string }[] = [
  { id: 'all', label: 'Todas' },
  { id: 'major', label: 'Arcanos Maiores' },
  { id: 'minor', label: 'Arcanos Menores' },
  { id: 'cups', label: 'Copas' },
  { id: 'pentacles', label: 'Ouros' },
  { id: 'swords', label: 'Espadas' },
  { id: 'wands', label: 'Paus' },
];

export function CardCatalog() {
  const [filter, setFilter] = useState<Filter>('all');
  const [search, setSearch] = useState('');
  const results = useMemo(() => {
    const q = normalizeSearch(search.trim());
    return cards.filter((card) => {
      const categoryMatches = filter === 'all' || filter === card.arcanaType || filter === card.suit;
      return categoryMatches && (!q || normalizeSearch([card.namePtBr, card.nameEn, card.id, card.suit ? suitLabels[card.suit] : ''].join(' ')).includes(q));
    });
  }, [filter, search]);

  return (
    <>
      <div className="catalog-tools">
        <label className="search-field"><span aria-hidden="true">⌕</span><span className="sr-only">Pesquisar cartas</span><input type="search" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Busque uma carta, naipe ou nome..." /></label>
        <div className="filter-bar" role="group" aria-label="Filtrar cartas">
          {filters.map((item) => <button key={item.id} type="button" className={'filter-pill' + (filter === item.id ? ' is-active' : '')} aria-pressed={filter === item.id} onClick={() => setFilter(item.id)}>{item.label}</button>)}
        </div>
      </div>
      <p className="result-count" role="status">{results.length} {results.length === 1 ? 'carta encontrada' : 'cartas encontradas'}</p>
      {results.length > 0 ?
        <div className="card-grid">{results.map((card) => <CardTile card={card} key={card.id} />)}</div> :
        <div className="empty-state"><h2>Nenhuma carta encontrada.</h2><p>Tente outra palavra ou escolha uma categoria diferente.</p><button type="button" className="button button-outline" onClick={() => {setSearch('');setFilter('all');}}>Limpar filtros</button></div>}
    </>
  );
}
