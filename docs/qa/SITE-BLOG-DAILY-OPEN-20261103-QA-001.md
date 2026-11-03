# QA — SITE-BLOG-DAILY-OPEN-20261103

## Escopo

- PT: `src/content/posts/pt/estado-rapido-nao-e-estado-confiavel.md`
- EN: `src/content/posts/en/fast-state-is-not-trusted-state.md`
- Janela editorial: 2026-11-02 11:00 a 2026-11-03 11:00, America/Sao_Paulo.

## Fontes primárias e revisão de alegações

1. [Anthropic — Message threads](https://platform.claude.com/docs/en/build-with-claude/message-threads), documentação e release note de 2026-11-02.
   - Confirmados: beta header `message-threads-2026-08-12`; envio apenas de mensagens novas após a criação; aplicação como fonte de verdade; expiração após cinco minutos de inatividade; eliminação em até uma hora; incompatibilidade com ZDR e HIPAA; replay após `thread_not_found`.
2. [OpenAI — Scaling Git at OpenAI](https://openai.com/index/scaling-git-at-openai/), publicado em 2026-11-02.
   - Confirmados: motivação por paralelismo do Codex; confiabilidade abaixo de 90% em momentos anteriores; packfiles imutáveis; versões causais por referência; serialização dentro de cada referência; reutilização de packfiles; caches regionais; validação em fluxo; milhares de clientes concorrentes; simulações identificadas como modelos didáticos sintéticos.

As comparações entre os dois sistemas são síntese editorial. Não foram atribuídas métricas além das declaradas pelas fontes. As limitações e os contratos de recuperação foram preservados.

## Validações executadas

- `esaa --root . verify`: ok.
- `astro check`: 33 arquivos, 0 erros, 0 avisos, 0 dicas.
- `astro build`: sucesso, 217 páginas.
- `npm run audit:public`: sucesso, 234 arquivos, 13 rotas obrigatórias, SEO ok e 0 ocorrências proibidas.
- `npm test`: não-zero somente em `audit:editorial`, por 20 ocorrências de espaço-travessão-espaço em dois posts preexistentes no `HEAD`: `the-prompt-describes-the-cycle-esaa-institutes-it.md` e `o-prompt-descreve-o-ciclo-o-esaa-o-institui.md`. Nenhuma ocorrência pertence aos novos arquivos; a pendência alheia foi preservada.
- Auditoria focal dos dois novos arquivos com `rg` para os termos vedados do contrato: 0 ocorrências.
- `git diff --check` nos dois novos posts: sucesso.
- Fonte Anthropic: resposta HTTP alcançada; fonte OpenAI: conteúdo confirmado pela página primária, embora o `curl -I` direto tenha recebido 403 do perímetro HTTP.
- Páginas estáticas geradas em `dist`: títulos, canonical e `hreflang` recíproco presentes.

## Frontmatter e tradução

- `published`, `locale`, `translation`, `tags` e `featured: false` seguem o schema existente.
- PT aponta para `fast-state-is-not-trusted-state`.
- EN aponta para `estado-rapido-nao-e-estado-confiavel`.
- A versão inglesa preserva a tese e as evidências, com adaptação editorial de ritmo e formulação.

## Resultado

Artigos aprovados no escopo. O único resultado não-verde do comando agregado é uma dívida editorial preexistente e não relacionada, explicitamente excluída deste fluxo.
