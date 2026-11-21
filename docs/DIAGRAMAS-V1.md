# Tarot PT-BR — Diagramas de arquitetura

Os diagramas representam o estado-alvo **planejado**, não serviços já implementados.

## Arquitetura por camadas

~~~mermaid
flowchart TB
  U[Visitante ou usuário] --> W[Web Next.js App Router]
  W --> UI[Design System e componentes]
  W --> F[Features / casos de uso]
  F --> D[Domínio TypeScript puro]
  D --> CT[Catálogo Card/Deck/Meaning]
  F --> M[Media Adapter / manifest]
  M --> S[(Storage CDN)]
  CT --> J[(JSON e conteúdo versionado)]
  F -. a partir da V0.3 .-> B[API Next.js / BFF]
  B --> A[Autenticação e autorização]
  B --> P[Prisma]
  P --> DB[(PostgreSQL)]
  B -. eventual necessidade .-> N[API NestJS separada]
~~~

## Modelagem essencial

~~~mermaid
erDiagram
  CARD ||--o{ CARD_ARTWORK : portrayed_by
  DECK ||--o{ CARD_ARTWORK : contains
  CARD ||--o{ CARD_MEANING : interpreted_as
  CARD ||--o{ SYMBOL : has
  CARD_ARTWORK ||--o{ ARTWORK_SYMBOL : places
  SYMBOL ||--o{ ARTWORK_SYMBOL : appears_in
  SPREAD_DEFINITION ||--o{ READING : configures
  DECK ||--o{ READING : used_in
  READING ||--o{ READING_POSITION : includes
  CARD ||--o{ READING_POSITION : drawn_as
  USER ||--o{ READING : owns
  USER ||--o{ LEARNING_PROGRESS : learns
  LESSON ||--o{ LEARNING_PROGRESS : tracks
  CARD {
    string id PK
    string arcanaType
    string suit
    int rank
    string namePtBr
  }
  DECK {
    string id PK
    string slug
    string status
  }
  CARD_ARTWORK {
    string id PK
    string cardId FK
    string deckId FK
    string revision
    string sha256
  }
  CARD_MEANING {
    string id PK
    string cardId FK
    string orientation
    int revision
  }
  SYMBOL {
    string id PK
    string cardId FK
  }
  ARTWORK_SYMBOL {
    string artworkId FK
    string symbolId FK
    float x
    float y
  }
  SPREAD_DEFINITION {
    string id PK
    int count
    int version
  }
  READING {
    string id PK
    string deckId FK
    string spreadId FK
    string userId FK
  }
  READING_POSITION {
    string readingId FK
    string cardId FK
    int ordinal
    boolean reversed
  }
  USER {
    string id PK
  }
  LESSON {
    string id PK
  }
  LEARNING_PROGRESS {
    string userId FK
    string lessonId FK
  }
~~~

## Pipeline de mídia

~~~mermaid
flowchart LR
  R[Upstream RWS fixado] --> I[Importador verificável]
  I --> O[Master original imutável]
  O --> H[Manifest SHA-256]
  O --> P[Pipeline de derivados]
  P --> T[thumb / catalog / detail]
  H --> V[Validação]
  T --> V
  V --> C[Storage e CDN]
  C --> W[Catálogo Next.js]
  BR[Arte brasileira aprovada] --> O
~~~

## Fluxo editorial do baralho brasileiro

~~~mermaid
flowchart LR
  B[Brief arquetípico] --> G[Arte candidata]
  G --> S[Auditoria simbólica]
  S --> Q[Qualidade e direitos]
  Q --> D{Curador aprova?}
  D -- não --> G
  D -- sim --> V[Revisão imutável]
  V --> P[Publicação]
~~~

## Sequência de responsabilidades

- Domínio: identidade, semântica e invariantes das cartas.
- UI: apresentação sem reinterpretar dados.
- Repositórios: acesso a JSON ou banco sem acoplamento de domínio.
- Media Adapter: URL pública, formato, variação e versão de imagem.
- Conteúdo editorial: texto versionado, bibliografia e revisão.
- Auth: apenas operações e informações protegidas, nunca gate em catálogo público.
