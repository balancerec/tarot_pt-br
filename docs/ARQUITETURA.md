# Arquitetura — Tarot PT-BR

Este documento é o índice da documentação de arquitetura. Os detalhes foram expandidos para arquivos específicos, na branch de planejamento.

**Progresso oficial e checkboxes:** [CHECKLIST-MESTRE.md](CHECKLIST-MESTRE.md) · **histórico:** [REGISTRO-DE-PROGRESSO.md](REGISTRO-DE-PROGRESSO.md).

1. [Plano Mestre V1.0](PLANO-MESTRE-V1.md) — produto, módulos, modelo de dados, stack, segurança, imagens, testes e implantação.
2. [Roadmap V1.0](ROADMAP-V1.md) — fases, entregáveis, gates de qualidade e backlog.
3. [Diagramas V1.0](DIAGRAMAS-V1.md) — arquitetura, entidades, mídia e fluxo editorial.
4. [Checklist Mestre](CHECKLIST-MESTRE.md) — 165 tarefas identificadas; atualização obrigatória a cada avanço.
5. [Checklist das 78 cartas brasileiras](CHECKLIST-78-CARTAS.md) — uma tarefa por arcano.
6. [Registro de progresso](REGISTRO-DE-PROGRESSO.md) — logs e evidências do que foi entregue.
7. [Protocolo de atualização](PROCESSO-DE-ATUALIZACAO.md) — regra de conclusão e atualização documental.
8. [Fontes e créditos](FONTES-E-CREDITOS.md) — procedência histórica e orientações de atribuição.

## Estado confirmado

- Importador existente, validado no terminal do usuário com 78 PNGs (22 maiores e 56 menores).
- Arquivos importados localmente com 1086 x 1810 pixels.
- Manifesto SHA-256 gerado localmente.
- Nenhum app Next.js, sistema de tiragens, API ou banco de dados implementado no repositório nesta fase.
- Os PNGs mestres não são enviados ao Git e não estarão disponíveis automaticamente no ambiente de deploy.

## Decisão inicial

Desenvolver primeiro a V0.1: **catálogo, pesquisa, filtros, zoom, visualizador e créditos**. Depois implementar tiragens, significados, diário, academia e estúdio da arte brasileira.

Esta documentação é **proposta para revisão**, não implementação concluída. Não mesclar no main antes da revisão.
