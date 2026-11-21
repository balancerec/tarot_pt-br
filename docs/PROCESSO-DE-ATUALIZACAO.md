# Protocolo obrigatório de atualização — Tarot PT-BR

**Versão:** 1.0 · **Início:** 2026-11-21

## Objetivo

Qualquer progresso de implementação, conteúdo, documentação ou arte realizado neste projeto deve ser refletido no [Checklist Mestre](CHECKLIST-MESTRE.md) e no [Registro de progresso](REGISTRO-DE-PROGRESSO.md), sem marcar conclusão antes de existir evidência.

## Fonte única da verdade

1. docs/CHECKLIST-MESTRE.md contém 165 tarefas identificadas por IDs e o estado consolidado.
2. docs/CHECKLIST-78-CARTAS.md contém o estado individual das 78 artes brasileiras e o critério de publicação.
3. docs/REGISTRO-DE-PROGRESSO.md mantém o histórico cronológico.
4. docs/PLANO-MESTRE-V1.md descreve arquitetura e decisões; docs/ROADMAP-V1.md define a sequência de entregas.
5. O Git, os testes, logs e imagens são as evidências; checkbox sozinho não comprova conclusão.

## Procedimento de cada avanço — obrigatório

1. **ANTES**: ler o checklist atual, registrar estado da branch, commit, pendências e IDs envolvidos.
2. **EXECUTAR**: fazer alterações em branch separada; não sobrescrever masters e não fazer merge direto no main sem autorização/fluxo aprovado.
3. **VERIFICAR**: rodar comandos reais relevantes (testes, build, typecheck, lint, E2E, auditoria de imagens, revisão visual se houver). Não inventar saída de testes.
4. **ATUALIZAR CHECKBOXES**: marcar apenas tarefas inteiramente concluídas. Tarefas parciais continuam [ ] e recebem notas de progresso no registro; gates ficam abertos até aprovação.
5. **REGISTRAR**: acrescentar entrada no registro com data, branch, commit/PR, IDs afetados, evidência (logs, hashes, URLs, prints), limitações, pendências e próximo passo. Se o commit ainda não existe, usar "commit pendente" e atualizá-lo antes de concluir.
6. **SINCRONIZAR**: atualizar README, documentos técnicos e lista das 78 artes se afetados. Conferir links, totais, ID e estados.
7. **ENTREGAR**: informar sucintamente ao usuário o que mudou, os testes e resultados, o que não foi feito e os links de GitHub.
8. **REVISAR**: abrir PR para revisão, não assumir autorização para merge no main.

## Regras para marcar [x]

Somente se houver:
- artefato efetivamente criado/modificado;
- comportamento/documento/asset auditado;
- validação suficiente para o tipo de tarefa;
- evidência localizável (commit, teste, hash, captura, documento ou log enviado pelo usuário);
- registro no changelog/progresso;
- nenhuma pendência que impeça o critério da tarefa.

Se o item for "configurar testes", apenas instalar dependências não comprova execução bem-sucedida dos testes.
Se o item for "publicar em produção", rodar localmente não comprova deploy.
Se o item for "aprovar uma carta", um esboço em conversa não comprova export/curadoria/publicação.
Se o item for "verificar hashes", calcular SHA-256 localmente não comprova igualdade com origem confiável.

## Correções e regressões

- Quando uma tarefa anteriormente concluída deixar de atender ao critério, reverta [x] para [ ] e registre o motivo.
- Não apague linhas ou renumere IDs.
- Se uma tarefa perder relevância, anote "cancelada/substituída por ID ..." no registro e discuta revisão do plano. Não marque [x] como se tivesse sido entregue.
- Não promova o percentual do projeto por mera produção de documentos não listados.
- Atualizar contador no topo e tabela de resumo após qualquer mudança de status.

## Evidência mínima por tipo

| Trabalho | Prova mínima |
| --- | --- |
| Código | commit, comando executado, resultado de testes/build |
| Interface | commit, inspeção desktop/mobile e E2E ou validação manual registrada |
| Assets | caminho, dimensão, SHA-256, fonte, revisão e contagem |
| Conteúdo histórico | referência bibliográfica verificável e revisão |
| Arte brasileira | ID da carta, checklist simbólico, master, hash, aprovação e publicação |
| Infra/Deploy | URL acessível, versão/commit implantado e smoke test |
| Segurança | testes de autorização e revisão de controles relevantes |
| Documento | link/commit e conteúdo coerente com demais planos |

## Formato de entrada no registro

### AAAA-MM-DD — Título curto

- Branch/commit/PR: ...
- IDs concluídos: ...
- IDs parcialmente trabalhados: ...
- Entregas: ...
- Evidências e testes: ...
- Não verificado / riscos: ...
- Próximo: ...

## Diretrizes operacionais

- Windows PowerShell: caso npm.ps1 esteja bloqueado por ExecutionPolicy, usar npm.cmd.
- Todo progresso documentado é feito na sessão de trabalho correspondente: **não existe atualização automática ou execução em background**.
- Quando GitHub não estiver disponível, preparar a atualização no artefato local e declarar explicitamente a pendência de sincronização.
- Se houver conflito entre texto antigo e checklist, verificar a evidência e reconciliar os documentos antes de avançar.
- Antes de fechar um marco, conferir a totalidade dos itens do gate e registrar aceite explícito.
