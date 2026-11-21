# ✅ TAROT PT-BR — CHECKLIST MESTRE DE EXECUÇÃO

**Atualizado:** 2026-11-21 · **Branch:** docs/architecture-master-v1 · **[PR #2 em revisão](https://github.com/balancerec/tarot_pt-br/pull/2)** · **Status:** 30 de 165 tarefas confirmadas; V0.1 em implementação, sem gate aprovado.

**Documentos:** [Plano Mestre](PLANO-MESTRE-V1.md) · [Roadmap](ROADMAP-V1.md) · [Diagramas](DIAGRAMAS-V1.md) · [Registro de progresso](REGISTRO-DE-PROGRESSO.md) · [Regra de atualização](PROCESSO-DE-ATUALIZACAO.md) · [78 cartas autorais](CHECKLIST-78-CARTAS.md)

> **Fonte única de verdade do progresso:** este checklist. Itens concluídos no M00 são sustentados pelo repositório e pelas saídas de terminal informadas pelo usuário (não reexecutadas aqui). Os hashes foram gerados, mas ainda não confrontados com referência imutável do upstream.

## Regras de status e aceite

- **[x]** feito com evidência; **[ ]** pendente ou sem evidência.
- IDs são estáveis: não renumerar, remover ou marcar sem verificação.
- A cada entrega, atualizar este checklist, o registro cronológico e os documentos alterados no **mesmo PR/commit**.
- Registrar data, branch, commit, testes, validação visual (se houver), limitações e próximo item.
- **Não concluir GATES** sem satisfazer todos os critérios obrigatórios da versão.
- Não há trabalho automático fora das sessões: sempre que avançarmos juntos, efetuaremos a atualização explicitamente.

## Painel de progresso inicial

| Grupo | Confirmadas | Total | Estado |
|---|---:|---:|---|
| M00 — Repositório e acervo histórico | 10 | 14 | Parcial |
| GOV — Gestão e rastreabilidade | 4 | 10 | Parcial |
| V0.1-A — Fundação Next.js | 4 | 10 | Parcial |
| V0.1-B — Modelo de dados e catálogo | 8 | 9 | Parcial |
| V0.1-C — Imagens e manifesto de publicação | 0 | 9 | Pendente |
| V0.1-D — Interface da biblioteca | 2 | 12 | Parcial |
| V0.1-E — Qualidade e publicação MVP | 2 | 10 | Parcial |
| V0.2-A — Dicionário e conteúdo editorial | 0 | 9 | Pendente |
| V0.2-B — Motor de tiragens | 0 | 14 | Pendente |
| V0.3-A — Diário local e academia | 0 | 7 | Pendente |
| V0.3-B — Contas e persistência opcional | 0 | 12 | Pendente |
| V0.4 — Estúdio do baralho brasileiro | 0 | 18 | Pendente |
| V0.5 — Desempenho e experiência | 0 | 11 | Pendente |
| V1.0 — Lançamento consolidado | 0 | 10 | Pendente |
| Q — Controles transversais | 0 | 10 | Pendente |

**Total:** 30/165 checkboxes marcados (não inclui as 78 artes individuais nem os modelos de execução).

---

## M00 — Repositório e acervo histórico

- [x] **M00-01** Criar repositório público balancerec/tarot_pt-br.
- [x] **M00-02** Clonar repositório no Windows.
- [x] **M00-03** Criar README, estrutura inicial, package.json e importador RWS.
- [x] **M00-04** Validar 78 referências remotas com npm.cmd run assets:check.
- [x] **M00-05** Importar o acervo com npm.cmd run assets:import.
- [x] **M00-06** Conferir 78 arquivos PNG locais com 1086 × 1810 px.
- [x] **M00-07** Gerar manifesto local com hashes SHA-256 (ainda sem cotejo com manifesto imutável externo).
- [x] **M00-08** Separar diretórios RWS e brasileiro; ignorar PNGs mestres no Git.
- [x] **M00-09** Publicar documentação de créditos e origem do acervo.
- [x] **M00-10** Registrar plano de arquitetura, roadmap e diagramas em branch de planejamento.
- [ ] **M00-11** Fixar commit/tag da origem e hashes esperados para auditoria reprodutível.
- [ ] **M00-12** Implementar verificação offline de hash, arquivos faltantes e extras.
- [ ] **M00-13** Implementar reimportação idempotente, retries e retomada sem download desnecessário.
- [ ] **M00-14** Revisar direitos aplicáveis à distribuição das digitalizações em produção.

## GOV — Gestão e rastreabilidade

- [x] **GOV-01** Criar checklist mestre com IDs estáveis e estado verificável.
- [x] **GOV-02** Criar registro de progresso cronológico.
- [x] **GOV-03** Estabelecer regra documentada de atualização em toda entrega.
- [x] **GOV-04** Criar checklist individual das 78 cartas autorais brasileiras.
- [ ] **GOV-05** Revisar e aprovar a arquitetura antes de mesclar a branch de documentação.
- [ ] **GOV-06** Abrir/validar PR de planejamento e fazer merge controlado se aprovado.
- [ ] **GOV-07** Estabelecer política de releases, tags e changelog.
- [ ] **GOV-08** Implantar issues e rastreio por ID do checklist quando apropriado.
- [ ] **GOV-09** Revisar riscos, dependências e bloqueios a cada milestone.
- [ ] **GOV-10** Verificar em cada PR a atualização do checklist e do registro de progresso.

## V0.1-A — Fundação Next.js

- [x] **V01A-01** Implantar Next.js App Router, React e TypeScript preservando importador existente.
- [ ] **V01A-02** Integrar Tailwind CSS e tokens semânticos para temas.
- [ ] **V01A-03** Fixar versões compatíveis de Node/dependências e gerar lockfile.
- [ ] **V01A-04** Configurar ESLint, formatter, TypeScript strict e scripts npm.
- [ ] **V01A-05** Instalar Vitest e Testing Library para testes.
- [ ] **V01A-06** Configurar Playwright para testes E2E.
- [x] **V01A-07** Criar estrutura modular app/components/features/domain/data/lib/tests.
- [x] **V01A-08** Implementar layout raiz, página inicial, metadados e 404.
- [x] **V01A-09** Implementar rotas /cartas, /cartas/[slug], /baralhos e /creditos.
- [ ] **V01A-10** Validar dev/build/lint/typecheck/testes no ambiente Windows.

## V0.1-B — Modelo de dados e catálogo

- [x] **V01B-01** Definir tipos Card, Deck, CardArtwork e IDs independentes de framework.
- [x] **V01B-02** Gerar catálogo com 78 cartas, nomes PT-BR e originais em inglês.
- [x] **V01B-03** Validar 22 Maiores, incluindo VIII Força e XI Justiça.
- [x] **V01B-04** Validar 56 Menores e corte 11 Pajem/12 Cavaleiro/13 Rainha/14 Rei.
- [x] **V01B-05** Mapear os 78 filenames do acervo, incluindo Pents para Ouros.
- [x] **V01B-06** Criar testes de unicidade, contagens, taxonomia e identificação.
- [x] **V01B-07** Modelar RWS publicado e brasileiro em produção, com estados separados.
- [ ] **V01B-08** Criar interfaces de repositório de cartas e resolução de artwork.
- [x] **V01B-09** Gerar links e metadados únicos para cada carta.

## V0.1-C — Imagens e manifesto de publicação

- [ ] **V01C-01** Criar script de geração de variantes otimizado e reproduzível.
- [ ] **V01C-02** Gerar imagens thumb, catalog e detail sem alterar masters.
- [ ] **V01C-03** Validar dimensões, proporção 3:5 e hashes de derivados.
- [ ] **V01C-04** Criar manifesto versionado contendo cardId, deckId, URLs e créditos.
- [ ] **V01C-05** Configurar loading/sizes/srcset e recuperação de erro de imagem.
- [ ] **V01C-06** Selecionar hospedagem de assets/CDN ou alternativa leve para MVP.
- [ ] **V01C-07** Provar deploy limpo sem os masters PNG ignorados pelo Git.
- [ ] **V01C-08** Testar arquivo ausente, duplicado, formato inválido e tamanho inesperado.
- [ ] **V01C-09** Documentar reprocessamento e publicação imutável de versões.

## V0.1-D — Interface da biblioteca

- [x] **V01D-01** Definir Design System Heritage Editorial e tipografia legível.
- [ ] **V01D-02** Criar AppShell, cabeçalho e navegação responsiva desktop/mobile.
- [ ] **V01D-03** Criar CardGrid e CardTile 3:5.
- [ ] **V01D-04** Adicionar filtros por Maiores/Menores e por naipe.
- [ ] **V01D-05** Adicionar busca por nome PT-BR com normalização de acentos.
- [ ] **V01D-06** Adicionar ordenação, contagens, skeleton e empty state.
- [ ] **V01D-07** Criar página de detalhe com nomenclatura, índice e metadados.
- [ ] **V01D-08** Criar visualizador com zoom, teclado, Escape e gestos mobile.
- [ ] **V01D-09** Criar navegação anterior/próxima carta.
- [ ] **V01D-10** Criar seletor de decks, sem publicar artes brasileiras incompletas.
- [x] **V01D-11** Publicar página de créditos e contexto interpretativo do tarot.
- [ ] **V01D-12** Validar interfaces mobile/tablet/desktop e reduced-motion.

## V0.1-E — Qualidade e publicação MVP

- [x] **V01E-01** Cobrir invariantes canônicos por testes unitários.
- [ ] **V01E-02** Testar componentes, filtros, busca, erros e loading.
- [ ] **V01E-03** Rodar E2E: catálogo → filtro Espadas → Oito de Espadas → zoom.
- [ ] **V01E-04** Auditar teclado, foco, contraste, textos alternativos e zoom.
- [ ] **V01E-05** Medir performance mobile e impedir carregamento massivo dos masters.
- [ ] **V01E-06** Configurar CI GitHub Actions para lint, types, tests, build e assets.
- [ ] **V01E-07** Publicar preview acessível com imagens disponíveis no servidor.
- [x] **V01E-08** Atualizar instruções Windows e troubleshooting no README.
- [ ] **V01E-09** Auditar 78 URLs, imagens, responsividade e créditos.
- [ ] **V01E-10** GATE V0.1: aceitar biblioteca com build, testes, preview e evidências.

## V0.2-A — Dicionário e conteúdo editorial

- [ ] **V02A-01** Definir schema de significados, orientação, autor, revisão e fontes.
- [ ] **V02A-02** Separar explicitamente tradição histórica e interpretações modernas.
- [ ] **V02A-03** Pesquisar/revisar significados dos 22 Arcanos Maiores.
- [ ] **V02A-04** Pesquisar/revisar significados dos 56 Arcanos Menores.
- [ ] **V02A-05** Cadastrar palavras-chave, temas, descrição, normal/invertida.
- [ ] **V02A-06** Modelar símbolos canônicos e anotações particulares por artwork.
- [ ] **V02A-07** Implementar MeaningSection e SymbolHotspot acessíveis.
- [ ] **V02A-08** Permitir busca por palavras-chave, temas e símbolos.
- [ ] **V02A-09** Revisar atribuições, bibliografia, licenças de conteúdo e citações.

## V0.2-B — Motor de tiragens

- [ ] **V02B-01** Modelar SpreadDefinition, versões, posições e orientações.
- [ ] **V02B-02** Implementar motor em TypeScript puro com fonte segura de aleatoriedade.
- [ ] **V02B-03** Usar shuffle sem viés e sorteio sem reposição.
- [ ] **V02B-04** Permitir inverter cartas com configuração explícita.
- [ ] **V02B-05** Implementar tiragem de uma carta.
- [ ] **V02B-06** Implementar tiragens de três cartas com posições configuráveis.
- [ ] **V02B-07** Implementar Cruz Celta com dez posições documentadas.
- [ ] **V02B-08** Criar mesa de leitura adaptável, com reduced-motion.
- [ ] **V02B-09** Impedir re-sorteio durante revelação da mesma sessão.
- [ ] **V02B-10** Exibir interpretação por carta, posição e orientação.
- [ ] **V02B-11** Permitir exportar/salvar sessão local opcionalmente.
- [ ] **V02B-12** Testar contagem, unicidade, orientação e aleatoriedade.
- [ ] **V02B-13** Documentar ética e limites de interpretações simbólicas.
- [ ] **V02B-14** GATE V0.2: tiragens e significados revisados e testados.

## V0.3-A — Diário local e academia

- [ ] **V03A-01** Implementar diário opcional local com IndexedDB.
- [ ] **V03A-02** Permitir exportar e importar histórico local.
- [ ] **V03A-03** Permitir excluir histórico local por ação do usuário.
- [ ] **V03A-04** Definir currículo da academia de tarot.
- [ ] **V03A-05** Criar lições com referências verificáveis.
- [ ] **V03A-06** Criar exercícios e feedback de aprendizagem.
- [ ] **V03A-07** Registrar progresso de lições localmente.

## V0.3-B — Contas e persistência opcional

- [ ] **V03B-01** Decidir autenticação e política de identidade.
- [ ] **V03B-02** Instalar PostgreSQL e Prisma com migrations versionadas.
- [ ] **V03B-03** Modelar User, Reading, ReadingPosition, Lesson, LearningProgress.
- [ ] **V03B-04** Implementar sessões e autorização por proprietário no servidor.
- [ ] **V03B-05** Implementar endpoints de sincronização conforme demanda real.
- [ ] **V03B-06** Migrar dados locais para conta somente com consentimento.
- [ ] **V03B-07** Permitir exportação e exclusão de dados de conta.
- [ ] **V03B-08** Criar backup, restauração e monitoramento técnico.
- [ ] **V03B-09** Documentar privacidade, LGPD e política de retenção.
- [ ] **V03B-10** Testar isolamento de usuários, permissões e segurança.
- [ ] **V03B-11** Garantir que o catálogo continue aberto a visitantes.
- [ ] **V03B-12** GATE V0.3: diário/academia seguros e sincronização comprovada.

## V0.4 — Estúdio do baralho brasileiro

- [ ] **V04-01** Cadastrar deck brasileiro em estado draft/partial com autoria.
- [ ] **V04-02** Formalizar Master Prompt, direção de arte e padrão 3:5.
- [ ] **V04-03** Criar cadastro de metadata e revisões de artes.
- [ ] **V04-04** Criar fluxo brief → imagem → auditoria → aprovação → publicação.
- [ ] **V04-05** Criar papéis Editor, Curador e Admin com autorização no servidor.
- [ ] **V04-06** Cadastrar simbologia essencial por carta, inclusive contagens.
- [ ] **V04-07** Criar checklist de coerência cultural/regional e contexto.
- [ ] **V04-08** Padronizar export master alvo 4344 × 7240 pixels.
- [ ] **V04-09** Distinguir qualidade real da captura de upscaling na auditoria.
- [ ] **V04-10** Registrar hash, autoria, créditos, direitos e revisão por arte.
- [ ] **V04-11** Criar pré-visualização, comparação RWS x Brasil e hotspots.
- [ ] **V04-12** Publicar apenas após aprovação e preservar revisões anteriores.
- [ ] **V04-13** Impedir acesso público a artes não aprovadas como se fossem publicadas.
- [ ] **V04-14** Produzir e aprovar as 78 cartas da lista individual.
- [ ] **V04-15** Validar 78 artworks publicados por ID de carta no deck brasileiro.
- [ ] **V04-16** Habilitar troca de baralho e persistência da preferência.
- [ ] **V04-17** Testar aprovação, rejeição, reversão, publicação e permissões.
- [ ] **V04-18** GATE V0.4: estúdio e workflow de publicação aprovados.

## V0.5 — Desempenho e experiência

- [ ] **V05-01** Medir e otimizar Core Web Vitals em dispositivos reais/controlados.
- [ ] **V05-02** Implantar PWA e política segura de cache.
- [ ] **V05-03** Implementar offline parcial com estados claros.
- [ ] **V05-04** Otimizar peso de imagens e monitorar falhas de CDN.
- [ ] **V05-05** Auditar WCAG 2.2 AA com testes automatizados e manuais.
- [ ] **V05-06** Refinar animações e motion com acessibilidade.
- [ ] **V05-07** Implementar observabilidade sem registrar perguntas nem diário.
- [ ] **V05-08** Revisar SEO, sitemap e compartilhamento de cartas.
- [ ] **V05-09** Testar navegadores, desktops, tablets e celulares.
- [ ] **V05-10** Revisar custos, recuperação e infraestrutura de hospedagem.
- [ ] **V05-11** GATE V0.5: registrar evidência de performance e estabilidade.

## V1.0 — Lançamento consolidado

- [ ] **V10-01** Validar jornada completa biblioteca → estudo → tiragem → diário.
- [ ] **V10-02** Revisar completude editorial, autoria e referências.
- [ ] **V10-03** Validar metadados, hashes e créditos dos baralhos oferecidos.
- [ ] **V10-04** Revisar segurança, privacidade, backups e restauração.
- [ ] **V10-05** Publicar privacidade, termos aplicáveis e página de créditos.
- [ ] **V10-06** Garantir deploy reproduzível sem dependência de assets locais.
- [ ] **V10-07** Executar regressão, E2E e revisão visual mobile/desktop.
- [ ] **V10-08** Documentar suporte, incidentes, versionamento e rollback.
- [ ] **V10-09** Publicar release notes, changelog e tag V1.0.
- [ ] **V10-10** GATE V1.0: lançamento aprovado com evidências.

## Q — Controles transversais

- [ ] **Q-01** Manter testes automáticos para invariantes do domínio.
- [ ] **Q-02** Executar e registrar lint/types/tests/build por milestone.
- [ ] **Q-03** Executar E2E e revisão visual a cada mudança substancial de UI.
- [ ] **Q-04** Manter auditoria de acessibilidade (contraste, teclado e movimento).
- [ ] **Q-05** Versionar conteúdo editorial e suas fontes.
- [ ] **Q-06** Rever direitos e créditos quando novos assets forem adicionados.
- [ ] **Q-07** Impedir vazamento de segredos, logs de perguntas e dados privados.
- [ ] **Q-08** Atualizar checklist, registro e docs no mesmo PR de mudanças.
- [ ] **Q-09** Atualizar checklist individual de cartas por aprovação.
- [ ] **Q-10** Revisar riscos e pendências antes de fechar cada versão.

---

## Checklist-modelo para cada entrega (copiar para a descrição do PR)

- [ ] Mudança de código/conteúdo/asset concluída.
- [ ] Testes e verificações executados, com saídas anexadas.
- [ ] Evidências registradas (SHA, logs, screenshots ou links).
- [ ] IDs pertinentes marcados no checklist mestre, somente se completos.
- [ ] Checklist individual de artes atualizado, quando aplicável.
- [ ] Registro de progresso atualizado com data, branch, commit, resultado e pendências.
- [ ] README/arquitetura/roadmap atualizados, se impactados.
- [ ] Usuário informado sobre entregue, ainda pendente e próximo marco.

**Próximo foco:** concluir a fundação V0.1 com package-lock, tooling de testes de interface e verificação no Windows; depois pipeline de miniaturas e revisão visual. O app Next.js já está codificado e compilado em CI, mas sem preview com imagens.
