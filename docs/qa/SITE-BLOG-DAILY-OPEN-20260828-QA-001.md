# QA — SITE-BLOG-DAILY-OPEN-20260828-QA-001

## Escopo

- Data editorial: 2026-08-28, America/Sao_Paulo.
- Janela verificada: 2026-08-27 11:01:04 -03 a 2026-08-28 11:01:04 -03.
- PT: `src/content/posts/pt/a-pilha-de-gpu-agora-vem-com-um-agente-de-operacoes.md`.
- EN: `src/content/posts/en/the-gpu-stack-now-comes-with-an-operations-agent.md`.
- Pauta: ROCm 10 e a transformação de operações de GPU em interfaces e ciclos executáveis por agentes.

## Fontes e janela

| Fonte primária | Evidência usada | Janela |
| --- | --- | --- |
| [AMD Newsroom — ROCm 10](https://newsroom.amd.com/news/rocm-10-software-ai-native-developer-experiences/) | Metadado `datePublished: 2026-08-27T15:09:04.574Z`; três componentes do ROCm.AI; estado da CLI; medições e notas metodológicas | Dentro da janela, 1h08 após o início |
| [ROCm 10 technical overview](https://rocm.blogs.amd.com/ecosystems-and-partners/rocm-x-blog/README.html) | TheRock, CLI, skills, Hyperloom e compatibilidade declarada | Complemento técnico oficial do lançamento |
| [ROCm/TheRock](https://github.com/ROCm/TheRock) | Repositório aberto do sistema de build e release | Corroboração técnica |
| [AMD Skills](https://github.com/amd/skills) | Formato, agentes suportados, catálogo entregue e itens planejados | Corroboração técnica |
| [AMD-AGI/Hyperloom](https://github.com/AMD-AGI/Hyperloom) | Ciclo, escopo, backends e matriz atual | Corroboração técnica |
| [Hyperloom technical article](https://rocm.blogs.amd.com/software-tools-optimization/hyperloom/README.html) | Componentes, ciclo Profile → Validate e limites atuais | Contexto técnico oficial anterior |

Todas as seis URLs responderam HTTP 200 durante a revisão.

## Revisão de alegações

- O artigo distingue o ROCm 10, a experiência ROCm.AI e o escopo atual de cada componente.
- A CLI é descrita como prévia tecnológica; o texto registra que o anúncio começa em ROCm 7.13 e ainda promete suporte oficial ao ROCm 10.
- O catálogo AMD Skills não é apresentado como totalmente entregue: itens marcados como `planned` são identificados.
- O Hyperloom é descrito como um ciclo de perfil, análise, plano, otimização e validação, sem generalização para GPUs e frameworks fora da matriz declarada.
- Os números de 3,3 vezes em inferência e 2,4 vezes em treinamento são atribuídos à AMD, limitados ao cenário medido e não tratados como promessa geral.
- A comparação com o estado anterior é editorial e arquitetural; não afirma superioridade universal nem desempenho independente.
- A versão EN preserva fatos e tese, com adaptação de ritmo e vocabulário em vez de correspondência literal frase a frase.

## Duplicidade semântica

- Busca no arquivo por `ROCm`, `Hyperloom`, `AMD Skills`, `ROCm CLI`, agentes e kernels não encontrou cobertura anterior desses componentes.
- `A disputa da IA desceu para a pilha` trata da arquitetura Alibaba e da portabilidade entre software e aceleradores.
- `A IA saiu da tela e encontrou o mundo físico` trata de modelos de mundo locais e interfaces para ferramentas criativas.
- O artigo atual tem recorte próprio: o contrato operacional da pilha de GPU, do diagnóstico à verificação de otimizações.

## Schema, tradução e privacidade

- Frontmatter contém `title`, `description`, `published`, `locale`, `translation`, `tags` e `featured: false`.
- `published` é `2026-08-28` nos dois arquivos.
- `locale` é `pt` e `en` conforme o diretório.
- Os slugs de `translation` apontam reciprocamente para o par existente.
- Os novos arquivos públicos não contêm caminhos locais, artefatos internos nem os termos vedados pelo fluxo.
- Não há dados pessoais, credenciais ou informações privadas.

## Comandos e resultados

1. `git status --short --branch`: branch `main`; pendências anteriores em artefatos ESAA e em um documento QA alheio foram identificadas e preservadas.
2. `esaa --root . verify`: `ok` antes da escrita, evento 3519.
3. `esaa --root . eligible`: executado antes da escrita; uma tarefa social antiga permanecia elegível e não foi alterada.
4. Busca de idempotência por `SITE-BLOG-DAILY-OPEN-20260828`: nenhum post, tarefa, documento QA, commit ou URL social anterior.
5. Auditoria de arquivo e duplicidade semântica com `rg`: pauta nova, sem duplicata material.
6. Verificação HTTP das seis fontes com `curl -L`: seis respostas 200.
7. Primeira execução de `npm test`: `astro check`, build de 181 páginas e auditoria pública aprovados; auditoria editorial rejeitou um travessão no PT.
8. A falha foi registrada em `SITE-BLOG-DAILY-OPEN-20260828-FIX-001`, corrigida e revisada sem reabrir POST.
9. Segunda execução de `npm test`: aprovada; 181 páginas; auditoria pública em 194 arquivos e 13 rotas, zero ocorrências vedadas; auditoria editorial aprovada.
10. `git diff --check` nos arquivos do ciclo: aprovado.

## Resultado

QA aprovada. O par PT/EN está apto para commit e publicação, condicionado à sincronização com `origin/main` e ao workflow Pages.
