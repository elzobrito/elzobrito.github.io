# QA do artigo diário aberto de 2026-07-30

## Escopo

- PT: `src/content/posts/pt/o-agente-fez-o-experimento-mas-nao-fez-a-pesquisa.md`
- EN: `src/content/posts/en/the-agent-ran-the-experiment-but-did-not-do-the-research.md`
- Janela editorial: 2026-07-29 11:00 a 2026-07-30 11:00 em America/Sao_Paulo.
- Tema: limites atuais de agentes de fronteira em pesquisa aberta, com distinção entre execução de engenharia e julgamento científico.

## Fontes primárias

1. Paper: https://arxiv.org/abs/2607.27191
   - v1 submetida em 2026-07-29 17:57:19 UTC, equivalente a 14:57:19 em America/Sao_Paulo.
   - Confirma dois estudos de caso, seis dias, US$ 3 mil em créditos de API, créditos de GPU, máquina virtual, acesso à web, notas gerais 2/6 e 1/6 e as cinco famílias de falha.
   - O PDF completo foi relido para conferir desenho, resultados, repetição com GPT-5.6 Sol no Codex, uso inferior a 50% do orçamento e limitações.
2. Projeto CRUX: https://cruxevals.com/
   - Confirma a definição e os compromissos das avaliações abertas, longas e não padronizadas.

As duas fontes responderam HTTP 200 em 2026-07-30.

## Revisão factual

- O texto trata os resultados como evidência inicial de dois casos, não como conclusão universal.
- A repetição com GPT-5.6 Sol e Codex é descrita como teste de robustez, sem alegar equivalência completa entre modelos ou ambientes.
- As notas, o orçamento, a duração e o consumo inferior à metade do orçamento foram conferidos no paper.
- A distinção entre tarefas verificáveis e pesquisa aberta segue o enquadramento dos autores.
- Inferências editoriais sobre adoção e desenho de agentes estão identificadas como consequências práticas, não como resultados medidos pelo estudo.
- As limitações de amostra pequena, avaliação não cega, possível preferência dos autores e rápida mudança dos sistemas estão explícitas.

## Schema, tradução e privacidade

- Frontmatter PT e EN contém `title`, `description`, `published`, `locale`, `translation`, `tags` e `featured: false`.
- `translation` é recíproco entre os slugs.
- A versão EN preserva tese, evidências e cautelas, com adaptação de ritmo e formulação em vez de tradução literal.
- Varredura focada nos dois posts para termos proibidos retornou zero ocorrências.
- A comparação com títulos recentes evitou as aberturas repetidas `Quando...` e `A...`; o título novo usa uma oposição concreta entre experimento e pesquisa.

## Comandos e resultados

```text
python -m esaa --root . verify
status: ok

python -m esaa --root . eligible
eligible_count: 0 antes da criação das tarefas

git fetch origin
git rev-list --left-right --count HEAD...origin/main
0 0 antes da escrita

rg -n -i '<termos públicos proibidos>' <post-pt> <post-en>
0 ocorrências

git diff --check
aprovado

npm test
astro check: 33 arquivos, 0 erros, 0 avisos, 0 dicas
astro build: 131 páginas
audit:public: 144 arquivos, 13 rotas obrigatórias, SEO aprovado, 0 ocorrências proibidas
audit:editorial: aprovado, nenhum travessão proibido nos posts

curl -L <fontes primárias>
arXiv: HTTP 200
CRUX: HTTP 200
```

## Resultado

QA aprovado. O par bilíngue está apto para o gate de publicação, sujeito à verificação final de histórico, push, workflow Pages e validação HTTP das URLs canônicas.
