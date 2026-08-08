# QA — SITE-BLOG-DAILY-OPEN-20260808

## Escopo

- PT: `src/content/posts/pt/uma-pasta-nao-e-uma-permissao.md`
- EN: `src/content/posts/en/a-folder-is-not-a-permission.md`
- Janela editorial: 2026-08-07 12:57 -03 a 2026-08-08 12:57 -03.
- Tema: separação entre diretório de trabalho, permissões de ferramenta e runtime de execução no llama.cpp.

## Fontes primárias e fatos

1. [llama.cpp PR #26507](https://github.com/ggml-org/llama.cpp/pull/26507), integrada em 2026-08-08 14:35:53 UTC (11:35:53 -03).
   - Confirma a opção experimental `--tools-runtime`.
   - Confirma os modos `docker:<image>` e `docker-container:<id>`.
   - O diff mostra reutilização do contêiner iniciado pelo servidor, remoção no encerramento, encaminhamento por `docker exec`/`docker cp`, execução no host quando nenhum runtime é configurado e erro para runtime desconhecido.
2. [llama.cpp PR #26762](https://github.com/ggml-org/llama.cpp/pull/26762), integrada em 2026-08-08 14:36:22 UTC (11:36:22 -03).
   - Confirma a capacidade `uses_cwd` na descrição de cada ferramenta.
   - Confirma que o seletor e `/cwd` dependem de ao menos uma ferramenta ativa que use o diretório.
   - Confirma que a interface anterior exibia o controle mesmo para ferramentas sem relação com caminhos.

Ambas as fontes retornaram HTTP 200. O texto qualifica o isolamento como inicial e experimental, não atribui ao contêiner garantias ausentes e separa inferência editorial de comportamento documentado.

## Revisão editorial

- O título rompe a sequência recente de títulos centrados em memória e infraestrutura de inferência.
- A tese é específica e não duplica semanticamente os artigos recentes: o foco está no contrato executável entre interface, capacidade e ambiente local.
- Siglas e nomes técnicos são explicados no contexto de uso.
- A versão EN é uma adaptação editorial fiel, com ritmo e construções próprias.
- Não há métricas, comparações de desempenho ou garantias de segurança não sustentadas.
- Não há chamada promocional genérica.

## Validações executadas

- `sed -n '1,10p'` nos dois posts: frontmatter obrigatório presente.
- `rg -n '^translation:'` nos dois posts: slugs recíprocos confirmados.
- Varredura focal com `rg -ni` para termos públicos proibidos nos dois posts: 0 ocorrências.
- `gh api repos/ggml-org/llama.cpp/pulls/26507`: merged em 2026-08-08T14:35:53Z.
- `gh api repos/ggml-org/llama.cpp/pulls/26762`: merged em 2026-08-08T14:36:22Z.
- `curl -LIsS` nas duas fontes: HTTP 200.
- `git diff --check`: aprovado, sem saída.
- `npm test`: aprovado.
  - `astro check`: 0 erros, 0 avisos e 0 sugestões.
  - `astro build`: 151 páginas.
  - `audit:public`: 164 arquivos, 13 rotas obrigatórias, SEO aprovado e 0 ocorrências proibidas.
  - `audit:editorial`: aprovado.

## URLs planejadas

- PT: https://elzobrito.github.io/blog/uma-pasta-nao-e-uma-permissao/
- EN: https://elzobrito.github.io/en/blog/a-folder-is-not-a-permission/

## Resultado

QA aprovada. Os posts estão aptos para commit e publicação, condicionados à nova verificação de paridade com `origin/main` antes do push e à confirmação pública de canonical e `hreflang` após o workflow Pages.
