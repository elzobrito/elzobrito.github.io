# Divulgação social — SITE-BLOG-DAILY-OPEN-20260826-SOCIAL-001

## Estado idempotente por canal

| Canal | Estado | URL pública | Envio nesta execução |
|---|---|---|---|
| LinkedIn | bloqueado e retomável | nenhuma | não |
| X | bloqueado e retomável | nenhuma | não |

A memória da automação e o estado ESAA foram verificados antes da conexão. Não havia URL pública do LinkedIn nem do X associada à data editorial 2026-08-26.

## Pré-condição pública

- PT: https://elzobrito.github.io/blog/contexto-longo-virou-um-problema-de-arquitetura/ — HTTP 200, título, canonical e `hreflang` verificados.
- EN: https://elzobrito.github.io/en/blog/long-context-became-an-architecture-problem/ — HTTP 200, título, canonical e `hreflang` verificados.
- PUBLISH: `done` antes de qualquer tentativa de divulgação.

## Evidência do bloqueio

- A conexão suportada ao Chrome retornou `Browser is not available: chrome` em duas verificações separadas.
- O diagnóstico passivo informou `Google Chrome running: no`.
- Google Chrome está instalado em `/usr/bin/google-chrome`.
- A extensão ChatGPT está instalada e habilitada no perfil `Default`.
- O manifesto do host nativo existe, contém o nome e as origens esperadas e foi classificado como correto.
- Nenhuma janela foi aberta porque o escopo permite apenas uma sessão já aberta e autenticada.
- O navegador interno não tinha abas abertas e não foi usado como substituto para publicar.
- Nenhuma API, script de envio, credencial, desafio de segurança ou mecanismo de contorno foi usado.

## Texto preparado para LinkedIn

> Uma janela de contexto enorme não explica como um modelo encontra o detalhe certo sem reler tudo com a mesma intensidade.
>
> O Qwen3.8-Flash-Next divide esse trabalho: atenção linear mantém o fluxo, atenção esparsa procura blocos relevantes, gates controlam o caminho entre camadas e embeddings de n-gramas guardam padrões com outra relação entre memória e computação.
>
> A consequência prática é menos glamourosa e mais útil: antes de perguntar quantos tokens cabem, precisamos perguntar quanto custa recuperar um fato e se o runtime entende a arquitetura que os pesos descrevem.
>
> PT: https://elzobrito.github.io/blog/contexto-longo-virou-um-problema-de-arquitetura/
>
> EN: https://elzobrito.github.io/en/blog/long-context-became-an-architecture-problem/

## Texto preparado para X

259 caracteres, incluindo URL e hashtag:

> Long context is no longer one attention problem. Qwen3.8-Flash-Next splits the work across linear memory, block-sparse retrieval, gated residual paths, and n-gram embeddings. https://elzobrito.github.io/en/blog/long-context-became-an-architecture-problem/ #AI

## Regra de conclusão

Cada canal só muda para `publicado` após a captura de sua URL pública canônica. A tarefa SOCIAL permanece em andamento até ambos os canais terem URL registrada.

## Retomada segura

1. Não refazer pesquisa, posts, QA, commit de conteúdo ou deploy.
2. Com uma sessão Chrome já aberta e autenticada, verificar novamente memória, tarefa e este documento separadamente para cada canal.
3. Publicar apenas o canal que continuar sem URL pública.
4. Registrar horário local, texto efetivamente enviado e URL canônica imediatamente após cada sucesso.
