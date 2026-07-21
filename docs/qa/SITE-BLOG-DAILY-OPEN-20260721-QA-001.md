# SITE-BLOG-DAILY-OPEN-20260721-QA-001

## Escopo

Revisão do par editorial publicado em `src/content/posts/pt/a-ia-saiu-da-tela-e-encontrou-o-mundo-fisico.md` e `src/content/posts/en/ai-steps-off-the-screen-and-into-the-physical-world.md`.

## Fontes primárias

- NVIDIA, anúncio do SIGGRAPH 2026, publicado em 20 de julho de 2026: https://blogs.nvidia.com/blog/siggraph-news-2026/
- Coleção oficial Cosmos 3 no Hugging Face, incluindo Cosmos3-Edge 4B: https://huggingface.co/collections/nvidia/cosmos3
- Página oficial do modelo Cosmos3-Edge: https://huggingface.co/nvidia/Cosmos3-Edge
- Repositório oficial NVIDIA Cosmos: https://github.com/NVIDIA/cosmos

As quatro páginas foram lidas durante a revisão. As três URLs públicas usadas diretamente no artigo responderam HTTP 200 em 21 de julho de 2026.

## Revisão factual

- O modelo Edge tem 4 bilhões de parâmetros e aparece na coleção oficial com atualização dentro da janela editorial.
- O repositório descreve a família Cosmos 3 como modelos de mundo omnimodais que processam linguagem, imagem, vídeo, áudio e ações em uma arquitetura Mixture-of-Transformers.
- A matriz oficial lista Super 64B, Nano 16B e Edge 4B; Edge é indicado para Jetson AGX Orin, Thor e RTX Pro 6000.
- A documentação separa Reasoner e Generator, lista as modalidades por variante e registra que Edge ainda não suporta transferência vídeo para vídeo.
- O repositório marca receitas de pós-treinamento como `Coming Soon`; o texto apresenta isso como limitação, sem sugerir disponibilidade concluída.
- O anúncio oficial lista integrações MCP para ferramentas criativas, incluindo Blender, Houdini, Unreal Editor e Affinity. O artigo descreve possibilidades documentadas e preserva revisão humana.
- Alegações promocionais de liderança e estado da arte do anúncio foram deliberadamente excluídas por falta de comparação independente nesta janela.

## Diversidade editorial

O título foi comparado com as aberturas recentes `Quando...`, `O preço real de um milhão de tokens` e `A disputa da IA desceu para a pilha`. `A IA saiu da tela e encontrou o mundo físico` muda a estrutura, a metáfora e as palavras-chave sem esconder a tese técnica.

## Validações

- `npm test`: aprovado; Astro verificou 32 arquivos sem diagnósticos, gerou 99 páginas, auditou 110 arquivos públicos sem ocorrência proibida e aprovou a auditoria editorial.
- `git diff --check`: aprovado.
- Frontmatter: campos obrigatórios presentes; data `2026-07-21`; locales `pt` e `en`; `featured: false`.
- Traduções: slugs recíprocos confirmados.
- Auditoria dedicada dos dois posts com `rg`: 0 ocorrências dos termos públicos proibidos.
- Links primários: NVIDIA, Hugging Face e GitHub responderam HTTP 200.
- Adaptação em inglês: mesma tese e mesmas fontes, com construção editorial própria e sem tradução mecânica frase a frase.

## Resultado

Aprovado para publicação. As afirmações específicas estão sustentadas pelas fontes primárias, e os limites do modelo e da evidência disponível estão explícitos.
