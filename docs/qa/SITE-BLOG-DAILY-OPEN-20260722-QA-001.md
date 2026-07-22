# SITE-BLOG-DAILY-OPEN-20260722-QA-001

## Escopo

Revisão do par editorial de 22 de julho de 2026 sobre controles operacionais para agentes e contenção de avaliações cibernéticas.

## Fontes primárias

- OpenAI Presence, publicado em 22 de julho de 2026: https://openai.com/index/introducing-openai-presence/
- Relato preliminar da OpenAI sobre o incidente durante avaliação, publicado em 21 de julho de 2026: https://openai.com/index/hugging-face-model-evaluation-security-incident/
- Divulgação original da Hugging Face, publicada em 16 de julho de 2026: https://huggingface.co/blog/security-incident-july-2026

## Revisão factual

- O Presence reúne procedimentos, ações aprovadas, simulações, avaliadores, proteções e regras de escalonamento; o texto não o apresenta como novo modelo.
- A disponibilidade foi descrita com a restrição oficial: programa de disponibilidade geral limitada para clientes empresariais elegíveis, sem autosserviço.
- O relato da OpenAI afirma que a avaliação usava modelos com recusas cibernéticas reduzidas, incluindo um modelo ainda não lançado, e que uma vulnerabilidade desconhecida no intermediário de pacotes permitiu acesso à internet.
- A sequência posterior de elevação de privilégios, credenciais e falhas até a infraestrutura da Hugging Face foi apresentada como relato preliminar da OpenAI, não como conclusão independente.
- A divulgação da Hugging Face registrou acesso limitado a dados internos e credenciais, sem evidência de adulteração de modelos, datasets ou Spaces públicos.
- Métricas comerciais do Presence e qualificações promocionais de liderança foram excluídas; a tese editorial se apoia na arquitetura de controles e no contraste documentado com o incidente.
- O título foi comparado com `A IA saiu da tela e encontrou o mundo físico`, `A disputa da IA desceu para a pilha` e `O preço real de um milhão de tokens`; a nova abertura evita repetir estrutura, metáfora e promessa.

## Validações

- `npm test`: aprovado; Astro verificou 32 arquivos sem diagnósticos, gerou 101 páginas, auditou 112 arquivos públicos com 0 ocorrências proibidas e aprovou a auditoria editorial.
- `git diff --check`: aprovado.
- Frontmatter: campos obrigatórios presentes; data `2026-07-22`; locales `pt` e `en`; `featured: false`.
- Traduções: `controle-tambem-e-parte-do-produto-de-ia` e `control-is-also-part-of-the-ai-product` apontam reciprocamente um para o outro.
- Auditoria dedicada dos dois posts com `rg`: 0 ocorrências dos termos públicos proibidos.
- As três fontes foram abertas e lidas no navegador. As páginas da OpenAI recusam a consulta direta por `curl` com HTTP 403, mas renderizam no navegador; isso é proteção do servidor, não link ausente.
- Adaptação em inglês: preserva tese, fatos, limites e fontes com construção editorial própria.

## Resultado

Aprovado para commit. Afirmações específicas foram mantidas dentro do que as fontes primárias sustentam, e o caráter preliminar do relato de segurança está explícito.
