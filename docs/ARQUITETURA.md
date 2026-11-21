# Arquitetura inicial — Tarot PT-BR

## Objetivo

Aplicativo responsivo, em português brasileiro, com estudo e leituras dos 78 arcanos RWS, seguido de suporte ao baralho brasileiro Cinematic Heritage.

## Direção sugerida (a implementar)

- Frontend: Next.js + TypeScript + Tailwind CSS.
- Backend futuro: NestJS + Prisma + PostgreSQL quando usuários, diário e sincronização exigirem API.
- Primeira entrega: catálogo e visualização de cartas, sem obrigar login.
- Motor de leitura: amostragem sem reposição das 78 cartas com aleatoriedade criptograficamente segura e configuração explícita para cartas invertidas.
- Modelagem: identificador estável por carta; nome em PT-BR; arcano; naipe; valor; imagem por baralho; interpretação com atribuição de fonte.
- Arte: separar /rider-waite/ das novas cartas /brasileiro/ e conservar mestres intactos.

## Etapas

1. Importar e validar os 78 PNGs (integridade, hash, dimensões e nomes).
2. Gerar catálogo JSON tipado em PT-BR e previews WebP/AVIF.
3. Criar interface de baralho/catálogo responsiva.
4. Implementar tiragens (1/3 cartas e Cruz Celta) com testes de contagem e não repetição.
5. Criar verbetes e diário; documentar autorias, bibliografia e origem de cada interpretação.
6. Integrar coleção brasileira e habilitar troca de baralho.

## Critérios de aceitação para importação

- Exatamente 22 maiores: 00_Fool a 21_World.
- Exatamente 56 menores: Cups, Pents, Swords, Wands de 01 a 14.
- Excluir Cover.png e Cover_Rare.png da contagem.
- Não adicionar masters PNG ao Git automaticamente.
- Falhar explicitamente se qualquer nome esperado estiver ausente ou se houver arquivo extra de carta.
