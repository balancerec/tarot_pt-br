# Tarot PT-BR 🔮

Aplicativo de tarot em português brasileiro, iniciado com as **78 cartas históricas Rider–Waite–Smith** e planejado para suportar uma segunda coleção autoral, **Tarot Brasileiro — Cinematic Heritage**.

> Estado: bootstrap do repositório. A interface, a API e o motor de tiragens ainda serão implementados. As imagens originais não estão incorporadas neste commit.

## Planejamento e acompanhamento

O desenvolvimento é acompanhado por checkboxes com IDs estáveis e evidências:

- [Checklist Mestre — 165 tarefas](docs/CHECKLIST-MESTRE.md) (fonte única do andamento).
- [Checklist individual — 78 cartas brasileiras](docs/CHECKLIST-78-CARTAS.md).
- [Registro de progresso](docs/REGISTRO-DE-PROGRESSO.md).
- [Protocolo obrigatório de atualização](docs/PROCESSO-DE-ATUALIZACAO.md).
- [Plano Mestre de Arquitetura](docs/PLANO-MESTRE-V1.md), [Roadmap](docs/ROADMAP-V1.md) e [Diagramas](docs/DIAGRAMAS-V1.md).

**Regra:** toda entrega concluída deve atualizar checklist, registro cronológico e documentação afetada no mesmo PR. Não marcar tarefas sem evidência. No momento, a arquitetura está em branch de planejamento e o aplicativo ainda não existe.

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
