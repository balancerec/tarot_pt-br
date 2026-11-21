# Tarot PT-BR — Roadmap Executivo e Backlog V1

**Referência principal:** [PLANO-MESTRE-V1.md](PLANO-MESTRE-V1.md)  
**Status:** proposta, nenhuma etapa futura implementada.

## Marco 0 — Base confirmada (concluído pelo usuário)

- Repositório remoto criado e clonado.
- Script npm.cmd run assets:check passou, confirmando 78 referências na origem.
- npm.cmd run assets:import concluiu com 78 PNGs locais 1086 x 1810 px.
- manifest.json local gerado com hashes SHA-256.

**Ressalvas:** o script não verifica ainda os hashes em comparação com um manifesto upstream imutável. Arquivos PNG locais não foram commitados; um deploy limpo não terá essas imagens.

## V0.1 — Biblioteca pública (primeira entrega funcional)

### Sprint 1 — Fundação do app

- [ ] Transformar bootstrap em aplicação Next.js com TypeScript e Tailwind.
- [ ] Fixar versões coerentes e lockfile; atualizar requisito Node se necessário.
- [ ] Configurar lint, formatação, typecheck, testes e build.
- [ ] Criar tokens de cor, tipografia, espaçamento e componentes-base.
- [ ] Criar AppShell responsivo, Header, menu mobile e créditos.
- [ ] Gerar catálogo de 78 cartas em PT-BR a partir de mapeamento explícito.
- [ ] Validar IDs, naipes, hierarquia, VIII Força, XI Justiça e corte 11..14.

**Gate:** build e lint/testes passam; 78 cards tipados e únicos.

### Sprint 2 — Assets e imagens

- [ ] Corrigir importador para registrar versão de commit de origem e checar manifest.
- [ ] Criar script build-derivatives em Node/Sharp, separado do app.
- [ ] Gerar miniaturas (thumb/catalog/detail), preservar originals sem alteração.
- [ ] Criar deck manifest com URLs, hashes, dimensões e créditos.
- [ ] Selecionar estratégia de mídia para preview/deploy e provar build limpo.
- [ ] Testar imagem inválida, ausente, proporção errada e nome duplicado.

**Gate:** página preview mostra assets sem acesso ao disco local do desenvolvedor.

### Sprint 3 — Catálogo e visualizador

- [ ] Criar /cartas com grade, skeleton, busca PT-BR, filtros e ordenação.
- [ ] Criar /cartas/[slug] com visualizador, zoom, setas anterior/próximo.
- [ ] Implementar apresentação de naipe, número, rank e palavras-chave.
- [ ] Garantir navegação por teclado e mobile.
- [ ] Criar /baralhos com RWS publicado e baralho brasileiro como "em produção".
- [ ] Criar /creditos e links de origem.
- [ ] Testes E2E: abrir /cartas, filtrar Espadas, selecionar Oito de Espadas.

**Gate V0.1:** 78 cartas visíveis, caminhos válidos, preview publicado, nenhum backend obrigatório, builds verdes, sem alteração de masters.

## V0.2 — Tiragens e significados

### Sprint 4 — Conteúdo editorial

- [ ] Esquema de significados PT-BR normal/invertido, autores e fontes.
- [ ] Revisão dos primeiros verbetes; separar significado histórico e moderno.
- [ ] Implementar dicionário por carta e busca de palavras-chave.
- [ ] Implementar simbolismo com anotações por deck, onde revisado.

### Sprint 5 — Motor de leitura

- [ ] Domínio independente de UI, RNG injetável, teste de sem repetição.
- [ ] Implementar tiragens de 1 e 3 cartas.
- [ ] Implementar Cruz Celta, posições explícitas e modo de invertidas.
- [ ] Adicionar salvar leitura local opcional.
- [ ] Testes de acessibilidade/reduced motion e compartilhamento seguro.

**Gate V0.2:** tiragem válida, sem cartas duplicadas; interpretação contextual; não fazer alegações determinísticas.

## V0.3 — Diário, academia e usuários

- [ ] Diário local com exportação/importação e política de armazenamento clara.
- [ ] Trilhas educativas, lições e exercícios básicos.
- [ ] Decidir autenticação; implementar sem bloquear conteúdo público.
- [ ] PostgreSQL + Prisma; migrações e controle de acesso por proprietário.
- [ ] Sincronização opcional do histórico e progresso.
- [ ] Exportação e exclusão de dados, testes de autorização e backup.

**Gate V0.3:** diário privado e seguro, lições navegáveis, dados persistentes somente com permissão/conta, migrações reproduzíveis.

## V0.4 — Estúdio editorial de baralhos

- [ ] Cadastro do baralho brasileiro como versão editorial separada.
- [ ] Pipeline de propostas, artes, hashes e variantes.
- [ ] Checklist simbólico, cultural, visual e técnico.
- [ ] Atribuição de autores e licença por revisão.
- [ ] Aprovação por CURADOR; publicação atômica de nova revisão.
- [ ] Comparador RWS x Brasileiro e hotspots de simbolismo.

**Gate V0.4:** nenhuma arte em rascunho chega ao catálogo público como aprovada; versões anteriores recuperáveis.

## V0.5–V1.0 — Polimento e expansão

- [ ] Analytics com privacidade, sem armazenar perguntas pessoais.
- [ ] Performance com testes reais por dispositivo/rede.
- [ ] PWA progressiva com política de cache e sincronização segura.
- [ ] Conteúdo bibliográfico aprofundado e trilhas completas.
- [ ] Internacionalização opcional, se houver demanda.
- [ ] Revisão de segurança e direitos comerciais.
- [ ] Documentação de deploy, backup e resposta a incidentes.

## Métricas de aceitação objetivas

| Dimensão | Critério |
| --- | --- |
| Integridade | 78 IDs canônicos únicos, 22/56, 14 cartas por naipe |
| Fidelidade RWS | A Força=VIII, A Justiça=XI; números da corte corretos |
| Assets | 78 masters locais intactos; derivativos por manifesto; sem masters na grade |
| UX | busca e filtros funcionais; UI desktop/tablet/mobile |
| Acessibilidade | teclado, labels, foco, zoom e reduced motion |
| Qualidade | npm ci, typecheck, lint, tests, build, smoke E2E passam |
| Produção | deploy independente dos arquivos ignorados no Git |
| Leitura | sem repetição na mesma tiragem, posições e inversão explícitas |
| Segurança | sem acesso entre usuários; sem logging de perguntas/notas |
| Auditoria | revisão e hash por arte publicada, fontes no conteúdo |

## Branching e processo de trabalho

- Branch principal: main, tratada como estável.
- Planejamento: docs/architecture-master-v1 (somente documentação).
- Implementação: feature/v01-app-foundation, feature/v01-assets, feature/v01-library.
- PR pequeno por assunto, com lista de testes e captura visual.
- Não dar merge nem push direto no main sem aceite da etapa.
- Nenhuma modificação destrutiva dos PNGs importados.

## Ordem de implementação recomendada ao Codex

1. Auditoria do repositório sem modificações e inventário de dependências.
2. Setup do Next.js sem apagar scripts existentes.
3. Modelo tipado de 78 cartas e testes.
4. Pipeline de thumbnails/manifest.
5. Design System.
6. Catálogo visual e visualizador.
7. Smoke tests reais, documentação e preview.
8. Fechamento da V0.1 com relatório de testes e pendências.

Foco: qualidade verificável, não quantidade de módulos implementados de uma vez.
