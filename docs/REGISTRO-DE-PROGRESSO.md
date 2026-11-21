# Tarot PT-BR — Registro cronológico de progresso

**Última atualização:** 2026-11-21  
**Branch de documentação:** docs/architecture-master-v1 (não mesclada no main)

Este log registra **entregas realmente executadas** e distingue tarefas comprovadas de tarefas planejadas. O estado normativo está em [CHECKLIST-MESTRE.md](CHECKLIST-MESTRE.md). Processos em [PROCESSO-DE-ATUALIZACAO.md](PROCESSO-DE-ATUALIZACAO.md).

## 2026-11-21 — Bootstrap do repositório

- **Branch:** main.
- **Commit de referência ao final do bootstrap:** 4713585d56a1891f38acc7748ccd8c3e9ac4428c.
- **IDs confirmados:** M00-01, M00-03, M00-08, M00-09.
- **Entregas:** repositório público, README, package.json, importador RWS, estrutura do acervo, gitignore, fontes/créditos.
- **Evidência:** https://github.com/balancerec/tarot_pt-br
- **Limites:** nesta data não havia frontend Next.js nem API. PNGs não foram commitados.

## 2026-11-21 — Importação local relatada e conferida via terminal do usuário

- **Branch:** checkout local do main.
- **Commits locais adicionais:** não informados; execução de scripts, sem alteração de código registrada.
- **IDs confirmados:** M00-02, M00-04, M00-05, M00-06, M00-07.
- **Comandos observados:**
  - git clone https://github.com/balancerec/tarot_pt-br.git
  - npm.cmd run assets:check → "Acervo validado: 78 cartas (22 maiores + 56 menores)."
  - npm.cmd run assets:import → 78 linhas "OK", cada uma indicando 1086x1810; final "manifesto SHA-256 gerado".
  - (Get-ChildItem ".\public\decks\rider-waite\originals" -Filter "*.png").Count → 78.
- **Limites:** saídas foram fornecidas pelo usuário e não reproduzidas nesta sessão. O manifesto gerou hashes mas não houve cotejo SHA-256 com referência upstream fixada; M00-11/12 permanecem abertos.
- **Pendências:** pipeline de derivados e distribuição de imagens em deploy futuro.

## 2026-11-21 — Planejamento da arquitetura em branch isolada

- **Branch:** docs/architecture-master-v1.
- **Commit de referência do índice:** 34220c0a326716f6511bc8247b1edec6eeedfa38.
- **IDs confirmados:** M00-10.
- **Entregas:** docs/PLANO-MESTRE-V1.md, docs/ROADMAP-V1.md, docs/DIAGRAMAS-V1.md e índice docs/ARQUITETURA.md atualizado.
- **Evidência:** https://github.com/balancerec/tarot_pt-br/tree/docs/architecture-master-v1/docs
- **Limites:** apenas documentação, ainda não revisada/mesclada no main; todas as features previstas permanecem pendentes.

## 2026-11-21 — Implantação do controle de execução por checklist

- **Branch:** docs/architecture-master-v1.
- **Commits conhecidos:** 91cb7f842eac2fca556f37c4821e91052dbad5d9 (checklist mestre); 7b588c10b7826181ae38bcd5cebf9de17c4d9080 (lista de cartas e correção do ID do Oito de Espadas).
- **IDs confirmados:** GOV-01, GOV-02, GOV-03, GOV-04.
- **Entregas:** checklist mestre de 165 itens identificados; inventário separado de 78 cartas autorais; protocolo de atualização; registro cronológico; instruções ao Codex e template de PR.
- **Evidência:** links relativos de documentação e histórico de commits na branch.
- **Limites:** GOV-05 (aprovação de arquitetura) e GOV-06 (revisão e merge) não concluídos; arte brasileira ainda não publicada; V0.1 não implementada.
- **Próximo:** revisão de arquitetura e implementação da fundação Next.js V01A-01 a V01A-10 em branch específica.

---

## Instruções para próximas entradas

Adicionar novos registros **no topo do histórico**, com data, IDs, branch, commit, testes e pendências. Não alterar o relato de resultados antigos sem motivo rastreável.
