# Tarot PT-BR 🔮

Aplicativo de tarot em português brasileiro, iniciado com as **78 cartas históricas Rider–Waite–Smith** e planejado para suportar uma segunda coleção autoral, **Tarot Brasileiro — Cinematic Heritage**.

> **V0.1 em desenvolvimento na branch `feature/v01-foundation`:** interface Next.js com catálogo e páginas das 78 cartas. O motor de tiragens, autenticação, APIs de dados e academia ainda não foram implementados. As imagens masters originais não estão incorporadas ao Git.

## Planejamento e acompanhamento

O desenvolvimento é acompanhado por checkboxes com IDs estáveis e evidências:

- [Checklist Mestre — 165 tarefas](docs/CHECKLIST-MESTRE.md) (fonte única do andamento).
- [Checklist individual — 78 cartas brasileiras](docs/CHECKLIST-78-CARTAS.md).
- [Registro de progresso](docs/REGISTRO-DE-PROGRESSO.md).
- [Protocolo obrigatório de atualização](docs/PROCESSO-DE-ATUALIZACAO.md).
- [Plano Mestre de Arquitetura](docs/PLANO-MESTRE-V1.md), [Roadmap](docs/ROADMAP-V1.md) e [Diagramas](docs/DIAGRAMAS-V1.md).

**Regra:** toda entrega concluída deve atualizar checklist, registro cronológico e documentação afetada no mesmo PR. Não marcar tarefas sem evidência. No momento, a arquitetura está em branch de planejamento e o aplicativo ainda não existe.

## Executar o app V0.1 no Windows (branch de implementação)

> A branch `main` ainda não contém o aplicativo. A feature depende da documentação do PR #2 e está no [PR #3](https://github.com/balancerec/tarot_pt-br/pull/3), sem merge.

```powershell
git fetch origin
git switch feature/v01-foundation
npm.cmd install
npm.cmd run catalog:check
npm.cmd run test:unit
npm.cmd run typecheck
npm.cmd run lint
npm.cmd run build
npm.cmd run dev
```

Navegue em **http://localhost:3000**. Requer Node.js 20.9 ou superior (recomendado Node.js 22 LTS).

As imagens RWS devem continuar em `public/decks/rider-waite/originals`. Se ainda não existirem neste checkout, execute `npm.cmd run assets:import`. O npm.cmd é recomendado em PowerShell quando `npm.ps1` for bloqueado por ExecutionPolicy.

**IMPORTANTE:** `npm.cmd install` gera um `package-lock.json`. O lockfile precisa ser revisado e commitado na branch antes do gate V0.1; até lá o CI usa `npm install` e não `npm ci`.

### Funcionalidades já codificadas

- Página inicial, catálogo de 78 cartas com busca/filtros, páginas individuais, navegação anterior/próxima, página de baralhos e créditos.
- Catálogo canônico: `data/cards.pt-BR.json`; validação: `npm.cmd run catalog:check`; seis testes unitários em `npm.cmd run test:unit`.
- Layout visual Heritage Editorial e Tailwind CSS 4; revisão visual real em browser pendente.
- A imagem de detalhe abre o PNG original em nova aba; zoom acessível completo ainda está no roadmap.

**Pendência para produção:** os masters PNG estão ignorados pelo Git, portanto um deploy limpo não inclui as imagens. Geraremos derivados menores e os publicaremos por manifesto/CDN antes de liberar um ambiente externo.

Mais detalhes: [V0.1 — Implementação](docs/V01-IMPLEMENTACAO.md).

## Fonte das cartas

- Acervo: [mixvlad/TarotCards — full-png](https://github.com/mixvlad/TarotCards/tree/main/tarot/rider-waite/full-png)
- 22 Arcanos Maiores e 56 Arcanos Menores, **78 PNGs**.
- A pasta de origem também contém `Cover.png` e `Cover_Rare.png`, que **não** entram na contagem de cartas.
- Artista: **Pamela Colman Smith**; orientação do baralho: **Arthur Edward Waite**; primeira publicação: 1909.
- Digitalizações da edição Pam-A, restauradas por Steve P., conforme a [declaração de fontes do acervo](https://github.com/mixvlad/TarotCards/blob/main/SOURCES.md).
- Os originais devem ser preservados sem alterações. Derivados otimizados e cartas brasileiras são conjuntos independentes.

## Estrutura inicial

```text
tarot_pt-br/
├── README.md
├── .gitignore
├── docs/
│   ├── ARQUITETURA.md
│   └── FONTES-E-CREDITOS.md
├── data/
│   └── README.md
├── scripts/
│   └── importar-rws.mjs
└── public/
    └── decks/
        ├── rider-waite/
        │   └── originals/    # preenchido pelo importador; sem commit automático
        └── brasileiro/
            └── originals/    # futuras artes próprias
```

## Como importar o acervo RWS

Instale **Node.js 20 ou superior** e execute na raiz do projeto:

```bash
node scripts/importar-rws.mjs
```

O script consulta a API pública do GitHub, valida que foram encontradas 78 cartas e baixa os PNGs no diretório `public/decks/rider-waite/originals`. Não faz push, não altera as imagens e não inclui os arquivos pesados no controle de versão. Para apenas verificar os arquivos na origem:

```bash
node scripts/importar-rws.mjs --dry-run
```

Para publicar imagens em produção, será necessário decidir entre hospedagem de assets separada, Git LFS ou versões WebP/AVIF otimizadas.

## Próxima etapa

Criar aplicativo responsivo com catálogo em PT-BR, visualizador das 78 cartas, baralhos selecionáveis, motor de tiragens, diário e biblioteca de significados verificáveis. Planejamento em [docs/ARQUITETURA.md](docs/ARQUITETURA.md).

## Créditos

As ilustrações Rider–Waite–Smith e as digitalizações do acervo têm proveniência registrada em [docs/FONTES-E-CREDITOS.md](docs/FONTES-E-CREDITOS.md). Direitos sobre novas interpretações autorais devem ser documentados separadamente.
