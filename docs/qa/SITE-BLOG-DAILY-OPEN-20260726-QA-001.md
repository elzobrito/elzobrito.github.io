# SITE-BLOG-DAILY-OPEN-20260726-QA-001

## Escopo

Revisão do par editorial de 26 de julho de 2026 sobre limites de recursos e endurecimento de segurança no vLLM 0.26.0.

## Fonte primária

- vLLM, release 0.26.0, publicado em 25 de julho de 2026: https://github.com/vllm-project/vllm/releases/tag/v0.26.0

## Revisão factual

- A data, o número de 411 commits e 212 contribuidores, com 61 novos, seguem as notas oficiais.
- Limite da lista de entradas no endpoint de completions, timeout de compilação de regex, validação de recursos em endpoints de derenderização e sanitização de caminhos seguem a seção Security.
- A substituição de `diskcache` é descrita apenas como eliminação de desserialização por `pickle`, sem atribuir exploração ou impacto não documentados.
- A condição de corrida é apresentada como capaz de contornar uma remediação anterior, exatamente no limite da descrição do release.
- Suporte a Inkling, melhorias de DeepSeek-V4, cache KV em camadas, backends de atenção por grupo e frontend Rust seguem os destaques oficiais.
- Ganhos de kernels não foram reproduzidos como garantias; o texto exige validação por hardware, modelo e configuração.
- Inferências editoriais sobre contenção, isolamento entre clientes e testes de carga estão identificadas como consequências operacionais, não como alegações do projeto.
- O título foi comparado com os ciclos recentes e evita repetir as aberturas e metáforas anteriores.

## Validações

- `npm test`: aprovado; Astro verificou 33 arquivos sem diagnósticos, gerou 113 páginas, auditou 126 artefatos públicos com 0 ocorrências proibidas e aprovou a auditoria editorial.
- `git diff --check`: aprovado.
- Frontmatter: campos obrigatórios presentes; data `2026-07-26`; locales `pt` e `en`; `featured: false`.
- Traduções: `a-infraestrutura-de-ia-aprendeu-a-dizer-nao` e `ai-infrastructure-learns-to-say-no` apontam reciprocamente uma para a outra.
- Auditoria dedicada dos dois posts com `rg`: 0 ocorrências dos termos públicos proibidos após correção retrospectivamente governada por `SITE-BLOG-DAILY-OPEN-20260726-FIX-001`.
- Os dois posts não contêm travessão espaçado.
- A fonte primária foi lida e confirma lançamento em 25 de julho de 2026.
- Adaptação em inglês: preserva tese, fatos, ressalvas e fonte com construção editorial própria.

## Resultado

Aprovado para commit. O artigo é intencionalmente estreito e não preenche um dia de poucas novidades com itens de baixa relevância.
