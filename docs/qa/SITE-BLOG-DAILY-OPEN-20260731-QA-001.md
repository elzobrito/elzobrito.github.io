# QA do artigo diário aberto de 2026-07-31

## Escopo

- PT: `src/content/posts/pt/a-ia-precisa-mostrar-o-caminho.md`
- EN: `src/content/posts/en/ai-needs-to-show-its-work.md`
- Fontes primárias: OSReward (`arXiv:2607.28609`) e AskChem (`arXiv:2607.28618`), ambos submetidos em 2026-07-30.

## Revisão factual e editorial

- Datas, dimensões dos modelos, corpus, custos e métricas foram comparados com os resumos oficiais e a página pública do AskChem.
- O texto identifica OSReward como trabalho em andamento.
- O texto limita a interpretação do AskChem-Bench ao domínio avaliado e registra que ele contém 30 perguntas.
- Siglas DOI e MCP são explicadas na primeira ocorrência.
- A versão EN preserva tese, limites e evidências, com adaptação idiomática própria.
- O título foi comparado com os artigos recentes e evita repetir as estruturas `Quando...`, `O agente...` e `A segurança...`.

## Validação

- `npm test`: aprovado; `astro check` sem diagnósticos; 133 páginas geradas.
- `audit:public`: aprovado em 146 arquivos, 13 rotas obrigatórias e zero ocorrências proibidas.
- `audit:editorial`: aprovado.
- `git diff --check`: aprovado.
- Frontmatter e `translation` recíprocos: aprovados.
- Fontes `https://arxiv.org/abs/2607.28609` e `https://arxiv.org/abs/2607.28618`: HTTP 200.
- Varredura focal dos dois posts para termos vedados: zero ocorrências.

## Resultado

QA aprovado. O par bilíngue está apto para publicação.
