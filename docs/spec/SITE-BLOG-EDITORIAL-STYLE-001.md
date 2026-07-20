# SITE-BLOG-EDITORIAL-STYLE-001: estilo editorial

Data: 2026-07-20. Escopo: todos os textos publicados em
`src/content/posts/pt/` e `src/content/posts/en/`.

## Regra obrigatoria

- O texto nao deve usar a sequencia formada por espaco, travessao e espaco.
- A restricao vale para titulos, descricoes, subtitulos, corpo, notas e links.
- A frase deve ser reescrita com ponto, virgula, dois-pontos, ponto e virgula ou
  parenteses, conforme o sentido. Nao basta trocar o travessao por outro sinal
  de aparencia semelhante.
- A regra vale para novos posts e para qualquer revisao de textos existentes.

## Verificacao

`npm run audit:editorial` examina todos os arquivos Markdown e MDX das colecoes
PT e EN. A presenca da sequencia proibida interrompe o comando com a indicacao
do arquivo e da linha. O comando integra `npm test`.
