# QA — SITE-BLOG-DAILY-OPEN-20260821-QA-001

## Escopo revisado

- PT: `src/content/posts/pt/a-tela-registra-passos-nao-explica-o-trabalho.md`
- EN: `src/content/posts/en/a-screen-records-steps-not-the-work.md`
- Data editorial: 2026-08-21, `America/Sao_Paulo`.
- Janela estrita: após 2026-08-20 13:52 -03, calculada no início da execução.

## Fonte primária e janela temporal

- Paper: [Inducing Task Models from Computer-Use Traces](https://arxiv.org/abs/2608.20319), versão 1.
- Submissão registrada pelo arXiv: 2026-08-20 17:57:00 UTC, equivalente a 2026-08-20 14:57:00 -03.
- Resultado: fonte dentro da janela de 24 horas por aproximadamente 1 hora e 5 minutos.
- Verificação HTTP: `curl -L -sS -o /dev/null -w '%{http_code} %{url_effective}' https://arxiv.org/abs/2608.20319` retornou `200`.

## Auditoria das alegações

| Alegação no artigo | Evidência primária | Decisão de QA |
|---|---|---|
| TMI parte de capturas de tela e eventos de mouse/teclado, agrupa eventos em ações e atividades e descobre tarefas latentes | Seções 3.1 e 3.2 do paper | Mantida |
| O modelo final combina hierarquia de objetivos e controle de fluxo observável | Seção 3.3 | Mantida; seleção não foi apresentada como observável porque o paper a considera normalmente latente |
| Avaliação humana usa 38 sessões, 15 tarefas e cinco domínios | Seção 4, Datasets | Mantida |
| Separação sintética de tarefas atinge ARI 0,974 | Seção 4.1 e Tabela 1 | Mantida com explicação de que o Índice Rand Ajustado corrige o acaso |
| Descrição de passos atinge 74,9% contra 30,3% | Seção 4.3 e Tabela 4, juiz gpt-5.5 | Mantida como resultado sob um dos avaliadores, sem generalização universal |
| Precisão em tarefas não vistas passa de 14,29% para 18,57%, ganho relativo de 30% | Seção 5 e Tabela 5 | Mantida; explicitado que é ganho relativo contra a melhor linha de base |
| Rastros podem conter dados pessoalmente identificáveis e devem ser ocultados antes da indução | Limitações, seção 7 | Mantida; o efeito da ocultação na qualidade continua não medido |

O texto evita afirmar disponibilidade ampla, superioridade geral ou prontidão para produção. A recombinação sintética de sessões e o uso de modelos de linguagem como avaliadores aparecem como limites explícitos.

## Duplicidade e qualidade editorial

- Os títulos PT e EN existentes foram indexados, e os 20 pares mais recentes foram relidos antes da escolha do título.
- Uma busca em todo o arquivo PT/EN por `task model`, `modelo de tarefa`, `computer-use`, `uso do computador`, `rastro`, `traço`, `workflow`, `fluxo de trabalho`, `skill` e `habilidade reutilizável` encontrou textos relacionados a agentes e habilidades, mas nenhum artigo sobre indução conjunta de objetivos e procedimentos a partir de sessões intercaladas.
- O título não repete as aberturas recentes com “O agente”, “O cache”, “A IA” ou “Quando”.
- O inglês preserva tese, evidências, ressalvas e fechamento, com redação adaptada em vez de correspondência literal entre frases.
- Siglas são explicadas na primeira ocorrência: Task Model Induction (TMI) e Índice Rand Ajustado.

## Schema, reciprocidade e metadados locais

- Frontmatter obrigatório presente nos dois posts: `title`, `description`, `published`, `locale`, `translation`, `tags`, `featured`.
- `published: 2026-08-21` nos dois idiomas.
- Traduções recíprocas:
  - PT aponta para `a-screen-records-steps-not-the-work`.
  - EN aponta para `a-tela-registra-passos-nao-explica-o-trabalho`.
- Build local gerou:
  - PT: `/blog/a-tela-registra-passos-nao-explica-o-trabalho/`.
  - EN: `/en/blog/a-screen-records-steps-not-the-work/`.
- HTML local contém os títulos esperados, canonical próprio e `hreflang` recíproco PT/EN, além de `x-default` para PT.

## Comandos e resultados

1. `git status --short --branch`
   - Branch `main...origin/main`; alterações preexistentes em `.roadmap` e em `docs/qa/SITE-BLOG-AGENT-ENGINEERING-20260803-PUBLISH-001.md` preservadas.
2. `esaa --root . verify`
   - `verify_status: ok` antes do trabalho de conteúdo.
3. `esaa --root . eligible`
   - Executado antes do trabalho de conteúdo.
4. `git fetch origin && git rev-list --left-right --count HEAD...origin/main`
   - `0 0` antes da criação do artigo.
5. Auditoria focal com `rg` somente nos dois novos posts para os termos públicos vedados.
   - Zero ocorrências.
6. Verificação explícita dos campos `translation`.
   - Reciprocidade aprovada.
7. `npm test`
   - `astro check`: 33 arquivos, 0 erros, 0 avisos, 0 sugestões.
   - `astro build`: 173 páginas geradas.
   - `audit:public`: 186 arquivos, 13 rotas obrigatórias, SEO aprovado, 0 ocorrências vedadas.
   - `audit:editorial`: aprovado, sem travessão proibido.
8. `git diff --check`
   - Aprovado, sem saída.
9. `curl` para a fonte primária.
   - HTTP 200.

## Parecer

QA aprovada. Os posts estão prontos para publicação, condicionada ao gate de paridade com `origin/main`, ao deploy Pages com resultado `success` e à verificação HTTP posterior das duas URLs canônicas.
