# TAROT PT-BR — Plano Mestre de Arquitetura V1.0

**Situação:** PROPOSTA PARA REVISÃO — V0.1 parcialmente implementada em feature/v01-foundation, sem merge e sem gate aprovado  
**Repositório:** https://github.com/balancerec/tarot_pt-br  
**Baralho histórico de origem:** https://github.com/mixvlad/TarotCards/tree/main/tarot/rider-waite/full-png  
**Idioma primário:** pt-BR  
**Estratégia:** monólito modular e migração incremental, sem complexidade prematura.

## 1. Objetivo, princípios e limites

Construir uma plataforma web responsiva para conhecer, estudar, comparar e utilizar as 78 cartas Rider–Waite–Smith, oferecendo um segundo baralho autoral, Tarot Brasileiro — Cinematic Heritage, quando as artes estiverem aprovadas.

Princípios inegociáveis:

1. O **significado/arquetipo da carta** não depende do baralho; **a arte e os detalhes visuais** dependem.
2. Original histórico e arte brasileira não substituem um ao outro.
3. O aplicativo precisa funcionar sem login em todas as funções públicas e gratuitas.
4. Não atribuir a autores históricos interpretações contemporâneas sem referência verificável.
5. Imagens master devem permanecer intactas, com versões derivadas rastreáveis.
6. Primeiro uma arquitetura modular num repositório; extrair serviços só com necessidade demonstrada.
7. Privacidade desde o primeiro módulo que armazene notas pessoais.
8. Legibilidade, acessibilidade, desempenho e mobile são critérios de aceite, não acabamentos.
9. Tiragens são instrumentos simbólicos e reflexivos; não alegar previsões garantidas.

### Dentro do escopo do produto

- Catálogo completo de 78 cartas, com nomes, índices e naipes em PT-BR.
- Zoom e exploração simbólica visual das cartas.
- Descrições com interpretações em posição normal/invertida, palavras-chave, bibliografia e conteúdo editorial.
- Tiragens de 1, 3 e 10 cartas, regras sem repetição e posições identificadas.
- Diário de leituras e progresso na academia, inicialmente local e depois sincronizado.
- Lições, exercícios de reconhecimento e acompanhamento de aprendizagem.
- Seleção entre o baralho histórico e o brasileiro quando este tiver imagens publicadas.
- Estúdio editorial privado para cadastrar, revisar, aprovar e publicar novas artes.

### Fora do MVP

- Marketplace, cobranças, consultas com profissionais e comunidade social.
- Aplicativo mobile nativo (o web responsivo/PWA vem primeiro).
- IA gerativa integrada, chat oracular automatizado ou afirmações de certeza preditiva.
- Microsserviços, filas e Kubernetes.
- Toda a coleção brasileira publicada sem auditoria simbólica e de qualidade.

## 2. Arquitetura por fases

### V0.1 — Site público sem backend persistente

- Next.js App Router + React + TypeScript + Tailwind CSS.
- Biblioteca de componentes desacoplada do domínio.
- Catálogo TypeScript/JSON e conteúdo versionado no Git.
- Dados e mídia servidos por manifestos, com originais importados localmente.
- Testes unitários/de componentes e testes E2E essenciais.
- Nenhuma autenticação, banco, conta ou coleta de dados pessoais.

### V0.2 — Leitura local e armazenamento opcional no navegador

- Motor de tiragens em TypeScript puro, sem dependência de React.
- Estado de sessão e histórico local opcional em IndexedDB; privacidade explícita.
- Sem sincronização automática e sem rastrear perguntas pessoais em analytics.
- Mecanismo de exportar/importar diário local, com confirmação do usuário.

### V0.3 — Usuários e sincronização

- Introduzir PostgreSQL + Prisma e autenticação consolidada.
- Usar Route Handlers e operações de servidor do Next.js como BFF primeiro.
- Contas e histórico persistente apenas quando realmente necessários.
- Migrations, backups, regras de acesso por proprietário, exclusão/exportação de dados.

### V0.4+ — Estúdio e conteúdos estruturados

- Conteúdo editorial, revisões e publicação por permissões.
- Pipeline de assets para baralhos alternativos, com revisão visual e controle de versão.
- Extrair API NestJS somente quando houver clientes distintos, integrações intensas ou carga operacional que justifique processo independente.

## 3. Mapa de módulos do produto

| Módulo | Responsabilidade | Fase |
| --- | --- | --- |
| Home | apresentação, atalhos, novidades | V0.1 |
| Biblioteca | coleção, filtro, busca, cards, seleção de baralho | V0.1 |
| Visualizador | detalhe, zoom, informações de cada carta | V0.1 |
| Dicionário | significados, palavras-chave, posição invertida e fontes | V0.1/V0.2 |
| Tiragens | sorteio, slots, animação e interpretação contextual | V0.2 |
| Diário | notas privadas, histórico e exportação | V0.2/V0.3 |
| Academia | trilhas, lições, exercícios e progresso | V0.3 |
| Perfil | preferências, baralho padrão e conta | V0.3 |
| Estúdio | revisão de arte, metadados, aprovação, publicação | V0.4 |
| Administração | papéis, usuários, conteúdo e auditoria | V0.4 |

### Perfis de acesso

- VISITANTE: navegar e explorar catálogo, consultar significados e realizar leituras sem persistência obrigatória.
- USUARIO: diário, progresso e sincronização quando a conta existir.
- EDITOR: criar e revisar conteúdo e metadados.
- CURADOR: aprovar conteúdo/arte e publicar uma revisão.
- ADMIN: gerir permissões e configurações.
- Um visitante jamais deve precisar de login para abrir uma carta.

## 4. Navegação e rotas

| Rota | Função |
| --- | --- |
| / | landing / dashboard público |
| /cartas | grade das 78 cartas |
| /cartas/[slug] | detalhe de uma carta |
| /baralhos | escolher coleção |
| /baralhos/[deckSlug] | catálogo de uma coleção |
| /tiragens | escolher tipo de tiragem |
| /tiragens/[spreadSlug] | mesa e revelação de cartas |
| /academia | índice de lições |
| /academia/[lessonSlug] | conteúdo / exercício |
| /diario | entradas privadas (fase posterior) |
| /perfil | preferências e identidade (posterior) |
| /creditos | autores, restauração, licenças e referências |
| /estudio | área editorial restrita (posterior) |

A URL da carta identifica o **arcano canônico** e não a arte. Assim, a mesma URL pode renderizar baralhos diferentes conforme escolha explícita do usuário. Para compartilhamento reproduzível, permitir deck=... e edition=... na URL.

## 5. Identificadores, taxonomia e dados

### Identificadores canônicos

- Arcanos Maiores: major-00 até major-21.
- Arcanos Menores: minor-cups-01..14, minor-pentacles-01..14, minor-swords-01..14, minor-wands-01..14.
- São 22 maiores + 4 * 14 menores = **78**.
- O valor 00 identifica O Louco no Rider–Waite–Smith.
- Na numeração Rider–Waite–Smith, **VIII é A Força** e **XI é A Justiça**.
- Para os Menores: 01 Ás, 02..10 numéricas, 11 Pajem, 12 Cavaleiro, 13 Rainha, 14 Rei.
- Arquivos originais usam "Pents" para o naipe Pentacles/Ouros; não presumir o nome de arquivo a partir do slug pt-BR.

### Modelo conceitual

Card: id, arcanaType, majorNumber?, suit?, rank?, slug, number, namePtBr, nameEn, shortKeywords.

Deck: id, slug, title, creator, type (historical|original), publicationYear?, status (draft|partial|published), credits, licenseNote.

CardArtwork: id, cardId, deckId, revision, masterKey, masterHashSha256, format, width, height, derivativeKeys, editorialStatus, sourceUrl?, creditIds.

CardMeaning: id, cardId, orientation (upright|reversed), theme, summary, longText, topics, authorId, sourceReferences, revision, reviewedAt.

Symbol: id, cardId, canonicalLabel, archetypalRole, historicalDescription, evidenceSources.

ArtworkSymbol: id, artworkId, symbolId, normalizedX, normalizedY, caption, depictionStatus (faithful|adapted|intentionally-absent).

SpreadDefinition: id, slug, title, count, orderedPositions, allowsReversed, version.

Reading: id, userId?, deckId, spreadId, spreadVersion, question?, createdAt, privateNotes?, localOnly.

ReadingPosition: id, readingId, ordinal, positionId, cardId, isReversed, meaningRevision?, cardArtworkRevision?.

Lesson: id, slug, title, prerequisites, estimatedMinutes, contentRevision, sourceReferences.

LearningProgress: userId, lessonId, status, lastSeenAt, completionDate.

EditorialReview: id, targetType, targetId, revision, reviewerId, verdict, notes, createdAt.

User: id, displayName?, accountProvider, createdAt, dataDeletionStatus.

NÃO implementar tudo na V0.1: use objetos TypeScript/JSON de Card, Deck e CardArtwork primeiro; persistência e entidades relacionais só nas fases indicadas.

### Invariantes

- Um baralho publicado contém 78 CardArtwork aprovadas, uma por Card canônica; baralho parcial só no estúdio.
- Card.id nunca muda por tradução ou troca da arte.
- Um mesmo baralho não contém duas versões publicadas da mesma carta simultaneamente.
- Uma leitura nunca repete Card.id dentro da mesma tiragem.
- Uma leitura retém deckId, spreadVersion e revisões relevantes para reconstituição histórica.
- Material editorial precisa de origem, autoria e estado de revisão.
- Uma arte aprovada não é editada in-place: publicar nova revisão.

## 6. Arquitetura técnica e diretórios propostos

~~~text
tarot_pt-br/
├── app/
│   ├── (public)/
│   │   ├── page.tsx
│   │   ├── cartas/page.tsx
│   │   ├── cartas/[slug]/page.tsx
│   │   ├── baralhos/page.tsx
│   │   ├── tiragens/page.tsx
│   │   └── academia/page.tsx
│   ├── (private)/
│   │   ├── diario/page.tsx
│   │   └── estudio/page.tsx
│   ├── api/                  # somente quando necessário
│   ├── layout.tsx
│   └── globals.css
├── components/
│   ├── ui/                   # peças básicas
│   ├── tarot/                # CardTile, CardViewer, SymbolAnnotation
│   └── layout/
├── features/
│   ├── library/
│   ├── viewer/
│   ├── readings/
│   ├── learning/
│   ├── journal/
│   └── editorial/
├── domain/
│   ├── cards/
│   ├── decks/
│   ├── meanings/
│   └── spreads/
├── data/
│   ├── cards.pt-BR.json
│   ├── decks.json
│   ├── meanings/
│   ├── symbols/
│   └── spreads.json
├── lib/
│   ├── media/
│   ├── repositories/
│   └── validations/
├── scripts/
│   ├── importar-rws.mjs
│   ├── validate-deck.mjs
│   └── build-derivatives.mjs
├── public/decks/
│   ├── rider-waite/originals/
│   └── brasileiro/originals/
├── tests/
│   ├── unit/
│   ├── integration/
│   └── e2e/
├── docs/
├── .github/workflows/
├── package.json
└── README.md
~~~

Evitar um monorepo (apps/* / packages/*) no início. A estrutura separa domínio puro de React e de infraestrutura, permitindo extração futura.

### Contratos internos

- CardRepository.getById(id), list(filters).
- DeckRepository.listPublished(), artworkFor(cardId, deckId).
- MeaningRepository.get(cardId, orientation, locale).
- MediaService.getVariant(artworkId, usage, resolution).
- ReadingEngine.draw(deckCatalog, spreadDefinition, options, rng).

O domínio não pode importar módulos de React, Next.js, Prisma ou SDKs de CDN.

## 7. Pipeline de imagens e proveniência

### Inventário atual conhecido

- A importação local relatou 78 PNGs históricos, todos 1086 x 1810 px, incluindo Swords08.png.
- A origem remota possui mais duas capas, Cover.png e Cover_Rare.png; elas não contam como arcanos.
- O script gerou manifest.json e SHA-256 dos bytes importados.
- IMPORTANTE: hashes foram **calculados**, mas ainda não foram confrontados automaticamente com uma lista SHA-256 confiável e imutável do provedor.
- As imagens estão na máquina do usuário e são ignoradas pelo Git. **Um deploy a partir de um clone do GitHub não terá essas imagens automaticamente.**

### Política de arquivos

1. MASTER: PNG original, imutável e com hash.
2. DERIVATIVOS: WebP/AVIF/JPEG otimizados para grade, detalhe, zoom e pré-visualização.
3. METADADOS: JSON com cardId, deckId, hash, tamanho, revisão, autoria e URL pública.
4. DISTRIBUIÇÃO: storage de objetos + CDN (a escolher na implementação) ou conjunto de derivados compactos mantidos no repositório para o MVP.
5. PUBLICAÇÃO: nenhuma rota depende de /public/decks/.../originals/*.png no servidor de produção, a menos que um pipeline explícito os tenha disponibilizado.
6. ATUALIZAÇÕES: assets publicados com nomes versionados/imutáveis; trocar revisão muda a referência, não os bytes antigos.
7. Segurança: validar tipo de arquivo, magic bytes, dimensões, limites, hash e autoria/licença.

### Variantes sugeridas

- thumb: 180–320 px de largura, para grades densas.
- catalog: 480–640 px, para cards maiores e tablet.
- detail: 900–1086 px, para detalhes regulares.
- master: original 1086 x 1810 px, para zoom e preservação.
- brasileiro-master: objetivo 4344 x 7240 px (4 vezes cada dimensão da referência); distinguir resolução exportada de detalhe real capturado nativamente.

Todas mantêm razão de aspecto **3:5**. Usar responsividade, srcset, carregamento adiado e prioridade apenas para imagens visíveis. Não baixar 78 masters na tela inicial.

### Cartas brasileiras: workflow editorial

brief/arquetipo → proposta visual → geração/produção → conferência dos símbolos → revisão cultural e de fonte → controle de qualidade da imagem → aprovação → versão publicada.

Para cada carta: checklist de símbolos, contagem de elementos, cenário brasileiro, materiais, coerência regional, direitos/créditos, dimensões, aprovação humana e vínculo com a Card canônica.

O baralho brasileiro pode ficar "partial" no estúdio; visitantes só veem cartas aprovadas ou uma prévia explicitamente marcada.

### Integridade e reprodutibilidade

- Fixar referência/commit da origem em vez de apontar sempre para main.
- Conferir 78 nomes esperados e dimensões exatas ou intervalos declarados.
- Salvar SHA-256 por arquivo.
- Validar artefatos derivados e manifesto no CI.
- Nunca substituir masters silenciosamente.
- Separar fontes históricas de arte gerada por IA, inclusive os termos de uso.

## 8. Motor de tiragens — especificação

Tiragens iniciais:

- Uma carta: orientação do dia / reflexão.
- Três cartas: passado–presente–futuro ou situação–desafio–conselho, configurável.
- Cruz Celta: dez posições com nomes e explicações cuidadosamente definidos.

Algoritmo:

1. Receber lista imutável dos 78 Card.id.
2. Validar count solicitado, limites, modo de inversão e definição de spread.
3. Fazer shuffle Fisher–Yates, com fonte segura de aleatoriedade.
4. Evitar viés de módulo nos índices aleatórios (usar randomInt criptográfico no servidor ou rejeição correta no navegador).
5. Selecionar N IDs sem reposição.
6. Sortear orientação normal/invertida de forma independente segundo configuração explícita.
7. Salvar posicionamento, versão do spread e baralho usado.
8. Revelar resultados sem recalcular o sorteio durante a animação.

Critérios de teste: unicidade, contagem, ranges, detecção de distribuição anômala, reprodutibilidade dos testes por RNG injetável, modo sem invertidas e acessibilidade da mesa.

A interpretação da leitura é texto editorial referenciado + papéis das posições, não afirmação de previsão determinística.

## 9. Conteúdo educativo

Conteúdo estruturado por carta:

- nome original, nome PT-BR e índice;
- palavras-chave e tema;
- visão geral do arcano;
- significado tradicional atribuído e sua fonte;
- interpretação contemporânea, explicitamente distinguida;
- posição normal e invertida;
- símbolos, leituras visuais e relações;
- relação com outros arcanos;
- exercícios, perguntas reflexivas e referências bibliográficas.

Academia:

1. Introdução ao tarot e à história RWS.
2. Os 22 Arcanos Maiores.
3. Os quatro naipes.
4. Cartas numeradas e da corte.
5. Método de leitura, limites da interpretação e ética.
6. Prática com tiragens.
7. Comparação RWS × Tarot Brasileiro Cinematic Heritage.

Cada afirmação histórica precisa de edição, autor, obra, seção/página quando verificada. Não reproduzir longos trechos protegidos.

## 10. Design System e acessibilidade

Estética principal: **Heritage Editorial / Tarot Brasileiro**. Não confundir a interface com as molduras das artes.

- Fundo geral: tons de carvão/floresta profunda e superfícies pergaminho.
- Destaques: ouro envelhecido, cobre sutil, marfim.
- Fotografia das cartas sempre protagonista.
- Tipografia: serifada editorial para títulos; sans-serif legível para UI.
- Cartas: imagem vertical 3:5, bordas discretas, estados hover/focus/selected.
- Dark/light mode com contraste controlado, sem obrigar um tema único.
- Mobile-first: menu inferior ou navegação compacta; desktop com sidebar/topbar.
- Não usar brilhos, animações ou molduras excessivas sobre símbolos das cartas.
- Zoom com teclado, toque e controles acessíveis; ESC para fechar.
- Respeitar prefers-reduced-motion e foco visível.
- Alt text informativo por carta; labels legíveis e tratamento adequado de carta invertida.
- Meta: WCAG 2.2 AA como objetivo de conformidade, verificar em testes.

Componentes prioritários: AppShell, Header, SideNavigation, CardTile, CardGrid, CardViewer, DeckPicker, FilterBar, SymbolHotspot, MeaningSection, SpreadTable, ReadingPosition, Toast, EmptyState, LoadingSkeleton.

## 11. Autenticação, privacidade e segurança

V0.1: sem autenticação e sem dados pessoais persistidos.

Quando contas existirem:

- Sessões geridas por solução consolidada, cookies Secure/HttpOnly/SameSite.
- Autorizar operações no servidor; nunca confiar em UI para restrição de conteúdo.
- Roles: VISITOR, USER, EDITOR, CURATOR, ADMIN.
- Rate limiting em ações sensíveis e APIs.
- Validar entrada/saída com schemas, limites de tamanho e anti-CSRF conforme o fluxo adotado.
- Credenciais, segredos e tokens apenas em variáveis de ambiente do servidor.
- Logs estruturados sem perguntas pessoais ou notas do diário.
- Dados de diário privados por padrão; exportação, exclusão e política de retenção.
- Revisão de LGPD antes de persistir dados pessoais e publicar uma política de privacidade.
- Backups e restauração testada quando houver banco de dados.
- Auditoria de publicação de conteúdo e permissões para edição.

## 12. API e evolução de persistência

Na V0.1 não há necessidade de endpoints de leitura para páginas estáticas; acesso direto a dados tipados. A API começa quando houver estado de servidor.

Contratos planejados (versão futura):

- GET /api/v1/cards
- GET /api/v1/cards/:id
- GET /api/v1/decks
- GET /api/v1/decks/:id/cards
- GET /api/v1/spreads
- POST /api/v1/readings
- GET /api/v1/readings (somente usuário autenticado)
- POST /api/v1/journal
- GET /api/v1/me/progress
- POST /api/v1/editorial/artworks/:id/reviews (papel apropriado)

Requisitos: validação por schemas, paginação, filtragem, formatos de erro consistentes, autorização, versionamento e idempotência de criação quando importante. NÃO implementar APIs fictícias apenas para manter esse roteiro.

Persistência: PostgreSQL + Prisma quando o aplicativo suportar sincronização e perfis. Migrations versionadas, índices em CardArtwork(deckId, cardId, status), Reading(userId, createdAt), significado por cardId + orientation e progress por userId + lessonId.

## 13. Implantação e ambientes

- development: Windows local com npm.cmd, Node LTS compatível com dependências instaladas.
- preview: deploy automático em pull requests.
- production: branch main protegida, publicação somente com build/test/auditoria aprovados.

Opções de hospedagem: plataforma compatível com Next.js (p.ex. Vercel) ou self-hosting Node; arquivos de mídia em armazenamento independente/CDN.

A decisão final sobre hosting ocorre após medir o tamanho dos derivados e escolher se a V0.1 terá páginas totalmente estáticas ou renderização dinâmica. Para uma fase sem backend, conteúdo estático pode ser exportado, mas há limitações de recursos e processamento de imagens que precisam ser consideradas.

Observabilidade: logs técnicos sem conteúdo pessoal; erros de front com consentimento/configuração compatível; verificação de links quebrados e disponibilidade das variantes de mídia.

## 14. Qualidade, testes e CI

Camadas:

1. Unitários: normalização de IDs, mapeamentos PT-BR, filtros, regras de tiragem.
2. Contratos: 78 IDs únicos, 22/56, 4 x 14, filenames canônicos, cartas VIII/XI corretamente mapeadas.
3. Asset tests: manifesto, hashes, dimensões, formatos e variantes.
4. Componentes: filtros, viewer, zoom, navegação por teclado, inversão.
5. E2E: abrir biblioteca, filtrar Espadas, abrir Oito de Espadas, trocar baralho (quando existente), executar tiragem sem duplicação.
6. A11y: axe e auditoria manual de teclado/touch/contraste.
7. Performance: Lighthouse e orçamento por página.

CI GitHub Actions: npm ci → typecheck → lint → unit tests → build → smoke E2E → asset-manifest checks → preview deploy. Rotina pesada de processamento de masters separada do build comum.

Metas iniciais (alvos, não resultados medidos):
- 78 cartas navegáveis e pesquisáveis.
- Nenhuma imagem master carregada em massa na biblioteca.
- Sem erros de tipo e sem falhas E2E em fluxos críticos.
- LCP ideal <= 2,5 s em teste mobile controlado e CLS <= 0,1.
- Feedback visual imediato em navegação e filtros.
- Alt/teclado/contraste auditados.

## 15. Riscos e mitigação

| Risco | Mitigação |
| --- | --- |
| Deploy sem PNGs locais | gerar derivados versionados e hospedá-los explicitamente antes de publicar |
| Origem externa muda / URLs quebram | fixar commit fonte; manifesto SHA-256; não fazer fetch remoto em runtime |
| Imagens pesadas | previews separados, lazy load, CDN, zoom sob demanda |
| Cartas brasileiras inconsistentes | checklist simbólico + revisão de arte antes de publicar |
| Fonte de significados duvidosa | bibliografia rastreável e revisão editorial |
| Funcionalidades excessivas na V0.1 | critérios de escopo e entregas pequenas |
| Novo banco cedo demais | módulo de armazenamento desacoplado; banco só quando necessário |
| Diário vazando em logs ou analytics | privacidade por padrão, sem logar perguntas/notas |
| Arquitetura acoplada ao framework | domain TypeScript puro e interfaces de repositório |

## 16. Decisões que precisam ficar explícitas

**Aprovadas como proposta para implementação:** uso do baralho RWS original como primeiro catálogo; 78 cartas; identidade PT-BR; suporte a segundo baralho; modular monolith; Next.js; dados versionados; imagens separadas; teste desde V0.1.

**Pendentes de escolha antes do deploy:** storage/CDN para as imagens; hospedagem final; licença e termos da arte brasileira; tipografia comercial utilizável; política de conta/diário; conteúdo bibliográfico verificado; versão exata e lockfile das dependências.

Nenhuma decisão de arquitetura neste documento equivale a implementação ou teste concluído.

## 17. Critério de pronto do produto inicial

A V0.1 está pronta quando:

- O projeto Next.js inicia via npm.cmd run dev no Windows.
- Há 78 registros PT-BR com IDs e fontes corretos.
- A interface mostra 78 cartas com thumbnails otimizadas.
- Há filtro por Arcano Maior/Menor e pelos 4 naipes, busca por texto e contagem correta.
- Cada carta abre sua rota, com zoom acessível e metadados corretos.
- As imagens originais permanecem inalteradas, com manifesto rastreável.
- A página de créditos reconhece autores e fontes.
- A aplicação faz build, typecheck e testes básicos sem erro.
- Existe um deploy preview com mídia disponível, sem depender dos PNGs somente locais.
- Existe documentação operacional clara de instalação e validação.

**Sem tiragens, usuários, diário, academia avançada ou estúdio editorial na V0.1.** Esses recursos têm fases próprias no roadmap.
