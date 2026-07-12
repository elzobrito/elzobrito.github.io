# SITE-BLOG-DAILY-AI-PUBLISH-001

## Escopo

Publicação do post diário de IA criado sob o PACER v1.4 e governado pelo ESAA.

## Tarefas ESAA relacionadas

- `SITE-BLOG-DAILY-AI-POST-001`: `done`
- `SITE-BLOG-DAILY-AI-QA-001`: `done`
- `SITE-BLOG-DAILY-AI-PUBLISH-001`: em fechamento neste recibo

## Commit publicado

- Commit: `2db3e77843765c1d3e91f134fed95f2b9668dadc`
- Mensagem: `Publish daily AI governance post`
- Branch: `main`
- Remote: `origin`

## Workflow GitHub Pages

- Workflow: `Deploy static hub to GitHub Pages`
- Run ID: `29205458667`
- URL: `https://github.com/elzobrito/elzobrito.github.io/actions/runs/29205458667`
- Resultado: `success`

Etapas observadas no run:

- `npm ci`: aprovado
- `npm run check`: aprovado
- `npm run build`: aprovado
- `npm run audit:public`: aprovado
- upload do artefato Pages: aprovado
- deploy GitHub Pages: aprovado

## Verificação pública

Comandos:

```bash
curl -L -s -o /tmp/esaa-post-pt.html -w '%{http_code} %{url_effective}\n' https://elzobrito.github.io/blog/agentes-de-ia-entre-autonomia-e-governanca/
curl -L -s -o /tmp/esaa-post-en.html -w '%{http_code} %{url_effective}\n' https://elzobrito.github.io/en/blog/ai-agents-between-autonomy-and-governance/
rg -n 'Agentes de IA entre autonomia e governança|AI agents between autonomy and governance' /tmp/esaa-post-pt.html /tmp/esaa-post-en.html
```

Resultado:

- `200 https://elzobrito.github.io/blog/agentes-de-ia-entre-autonomia-e-governanca/`
- `200 https://elzobrito.github.io/en/blog/ai-agents-between-autonomy-and-governance/`
- título PT encontrado no HTML público;
- título EN encontrado no HTML público;
- `canonical` e `hreflang` presentes nas duas páginas renderizadas.

## Validação local antes da publicação

Comando:

```bash
npm test
```

Resultado:

- `astro check`: 0 errors, 0 warnings, 0 hints;
- `astro build`: 73 páginas geradas;
- `audit:public`: `Public artifact audit passed: 84 files, 11 required routes, 0 forbidden matches.`

## Decisão

Publicado. O post está disponível publicamente em português e inglês no GitHub Pages, com build e auditoria aprovados.
