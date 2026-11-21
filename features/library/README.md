# Feature: Biblioteca de Tarot

Rotas atuais: /cartas, /cartas/[slug].

- **Domínio:** ../domain/tarot.ts (Card, Deck, CardArtwork).
- **Catálogo:** data/cards.pt-BR.json; invariantes em scripts/catalog-validation.mjs.
- **Acesso:** lib/catalog.ts fornece funções puras de consulta sem dependência de React.
- **UI:** components/tarot/card-catalog.tsx e card-tile.tsx.
- **Mídia:** a primeira integração ainda usa masters PNG locais; thumbnails e CDN continuam pendentes.

Componentes e filtros deverão migrar gradualmente para este módulo quando surgirem outras responsabilidades. Não introduzir backend apenas para ler o catálogo estático.
