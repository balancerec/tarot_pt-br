# AGENTS.md — Protocolo do Codex para Tarot PT-BR

## Escopo

Instruções para agentes que trabalham neste repositório. O projeto começa com uma biblioteca de 78 cartas Rider–Waite–Smith e evoluirá para uma plataforma em PT-BR com tiragens, estudo, diário e baralho brasileiro autoral.

## Leia ANTES de fazer alterações

1. docs/CHECKLIST-MESTRE.md — tarefas, IDs, estados e gates.
2. docs/REGISTRO-DE-PROGRESSO.md — evidências e histórico.
3. docs/PROCESSO-DE-ATUALIZACAO.md — procedimento obrigatório.
4. docs/PLANO-MESTRE-V1.md e docs/ROADMAP-V1.md — arquitetura e fases.
5. docs/CHECKLIST-78-CARTAS.md — se o trabalho envolver arte brasileira.

Se algum documento ainda estiver apenas em outra branch, comunique isso e NÃO suponha que o plano esteja integrado ao main.

## Regra principal

**Todo avanço deve atualizar o checklist, o registro cronológico e a documentação relevante no mesmo PR/entrega.** Marcar [x] apenas em tarefa concluída com evidência. Não inventar testes, commits, screenshots, hashes ou verificação manual.

## Limites de execução

- Não reformatar, substituir ou apagar os 78 PNGs RWS masters.
- Os masters ficam em public/decks/rider-waite/originals e são ignorados pelo Git.
- Não publicar cartas brasileiras sem revisão editorial e condições de aceite.
- Não adicionar autenticação, API ou banco à V0.1 sem decisão explícita.
- Não fazer merge nem push direto no main sem aprovação expressa.
- Manter arquitetura de domínio separada de componentes React e infraestrutura.
- Evitar dependências desnecessárias e versões não fixadas.
- Usar npm.cmd no PowerShell quando npm.ps1 for bloqueado por ExecutionPolicy.

## Saída obrigatória de cada execução

- O que foi modificado e por quê.
- IDs do checklist concluídos e IDs trabalhados ainda pendentes.
- Comandos de testes e resultados reais.
- Branch/commit e URLs pertinentes.
- Riscos e pendências restantes.
- Próximo conjunto de IDs a executar.

Se não puder atualizar o GitHub, declarar que os arquivos estão apenas preparados localmente e listar o que falta sincronizar.
