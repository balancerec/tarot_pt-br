# V0.1 — Fundação de aplicativo (implementação parcial)

**Branch de trabalho:** feature/v01-foundation (criada a partir de docs/architecture-master-v1; não mesclada no main).

## Entregue nesta primeira implementação

- Esqueleto Next.js App Router, React e TypeScript com Tailwind CSS.
- Página inicial de estilo Heritage Editorial, cabeçalho e rodapé.
- Catálogo JSON em PT-BR de 78 cartas, com IDs estáveis, nomes ingleses, naipes, ranks e filenames originais.
- Biblioteca com busca normalizada em português e filtros.
- Páginas de cada carta com imagem histórica e links anterior/próxima.
- Páginas de baralhos e de créditos.
- Script de validação e testes com o Node.js (independem de Next.js).
- Workflow de CI criado para executar testes, tipos, lint e build.

## Dependências/limitações ainda abertas

1. Neste ambiente local isolado não há acesso ao registry npm, mas o GitHub Actions **instalou dependências, validou 78 cartas, executou 6 testes, typecheck, lint e build com sucesso**: https://github.com/balancerec/tarot_pt-br/actions/runs/44901593778. A execução no Windows e os fluxos reais no navegador continuam pendentes.
2. O arquivo package-lock.json ainda não existe. Deve ser gerado com \`npm.cmd install\` no ambiente Windows com acesso ao registry e validado no CI; depois trocar \`npm install\` por \`npm ci\`.
3. O catálogo usa PNG masters locais diretamente. **É apenas uma integração inicial:** ainda falta a pipeline thumb/catalog/detail para velocidade e deploy.
4. Os masters estão ignorados pelo Git: um deploy que só possua o checkout do repo não exibirá as imagens até existir pipeline de asset/CDN.
5. A interação de zoom inicial é abertura da imagem PNG em outra aba; o visualizador avançado com toque/teclado está pendente.
6. Tiragens, significados editoriais, contas, banco e academia ainda não foram implementados.
7. A UI precisa de validação visual real em desktop e celular antes de marcar as tarefas de interface como completas.

## Executar localmente (PowerShell)

~~~powershell
git fetch origin
git switch feature/v01-foundation
npm.cmd install
npm.cmd run catalog:check
npm.cmd run test:unit
npm.cmd run typecheck
npm.cmd run lint
npm.cmd run build
npm.cmd run dev
~~~

Abra http://localhost:3000.

Se os masters importados já estiverem em public/decks/rider-waite/originals, eles continuarão no disco ao trocar de branch, pois são ignorados. Caso não estejam, execute \`npm.cmd run assets:import\`.

Depois de instalar, commitar o package-lock.json na branch de feature para builds determinísticos. A partir daí, o pipeline pode ser migrado de npm install para npm ci.

## Validação comprovada em CI (2026-11-21)

- Instalação em Ubuntu via `npm install`: aprovada.
- Catálogo RWS completo: aprovado.
- 6 testes unitários Node: aprovados.
- Typecheck: aprovado.
- ESLint: aprovado.
- Build Next.js: aprovado (84 páginas estáticas, incluindo 78 rotas de cartas).
- Testes no Windows/Playwright, imagens no deploy, screenshots e lockfile: **pendentes**.
- Antes de corrigir exportações de tipos do domínio, duas execuções de CI falharam; a correção foi validada pelo CI aprovado no link acima.

## Gate de validação

Não concluir V01A-10, V01E-50 nem outros gates sem logs reais dos comandos, teste de navegador e confirmação de imagens. Atualizar checklist e registro no mesmo PR/entrega.
