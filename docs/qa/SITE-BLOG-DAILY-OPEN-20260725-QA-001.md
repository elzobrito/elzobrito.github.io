# SITE-BLOG-DAILY-OPEN-20260725-QA-001

## Escopo

Revisão do par editorial de 25 de julho de 2026 sobre o Claude Opus 5 e a transformação de esforço, custo, velocidade e fallback em variáveis operacionais.

## Fontes primárias

- Anthropic, lançamento do Claude Opus 5, publicado em 24 de julho de 2026: https://www.anthropic.com/news/claude-opus-5
- GitHub, disponibilidade do Claude Opus 5 no Copilot, publicado em 24 de julho de 2026: https://github.blog/changelog/2026-07-24-claude-opus-5-is-now-available-in-github-copilot/
- AWS, disponibilidade do Claude Opus 5 no Amazon Bedrock, atualizado em 24 de julho de 2026: https://www.aboutamazon.com/news/aws/anthropic-claude-4-opus-sonnet-amazon-bedrock

## Revisão factual

- Preços de US$ 5 por milhão de tokens de entrada e US$ 25 por milhão de tokens de saída, modo Fast cerca de 2,5 vezes mais rápido pelo dobro do preço-base e níveis de esforço seguem o anúncio da Anthropic.
- Resultados do Frontier-Bench v0.1 e CursorBench 3.2 são atribuídos explicitamente à Anthropic, acompanhados da ressalva de que dependem de configuração e não substituem avaliação local.
- As descrições de tarefas longas, verificação do próprio trabalho e iteração foram mantidas como capacidades declaradas e relatos de testes iniciais, sem generalização indevida.
- A distinção entre descoberta de vulnerabilidades e criação de exploits, as categorias bloqueadas e o fallback para Opus 4.8 seguem a seção de segurança do anúncio.
- Mudanças de ferramentas durante a conversa, fallbacks automáticos e cache de contexto foram descritos sem prometer comportamento além do documentado.
- A disponibilidade no Copilot, a liberação gradual e a exigência de habilitação administrativa para Business e Enterprise seguem o GitHub.
- A disponibilidade no Amazon Bedrock foi confirmada na página oficial da AWS.
- O título foi comparado com os posts recentes e evita repetir as aberturas e metáforas dos ciclos anteriores.

## Validações

- `npm test`: aprovado; Astro verificou 33 arquivos sem diagnósticos, gerou 109 páginas, auditou 122 artefatos públicos com 0 ocorrências proibidas e aprovou a auditoria editorial.
- `git diff --check`: aprovado.
- Frontmatter: campos obrigatórios presentes; data `2026-07-25`; locales `pt` e `en`; `featured: false`.
- Traduções: `inteligencia-virou-uma-variavel-de-orcamento` e `intelligence-is-now-a-budget-variable` apontam reciprocamente uma para a outra.
- Auditoria dedicada dos dois posts com `rg`: 0 ocorrências dos termos públicos proibidos após correção governada por `SITE-BLOG-DAILY-OPEN-20260725-FIX-001`.
- Os dois posts não contêm travessão espaçado.
- As três fontes primárias responderam HTTP 200 e foram lidas para conferência factual.
- Adaptação em inglês: preserva tese, fatos, ressalvas e fontes com construção editorial própria.

## Resultado

Aprovado para commit. O texto trata benchmarks de fornecedor como evidência situada, explica a consequência prática do roteamento e evita transformar disponibilidade em garantia de desempenho.
