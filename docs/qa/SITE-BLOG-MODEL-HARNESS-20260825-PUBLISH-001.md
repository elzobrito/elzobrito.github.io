# Publicação — SITE-BLOG-MODEL-HARNESS-20260825-PUBLISH-001

## Resultado

- Estado: publicado e verificado.
- Commit de conteúdo: `1ee7f6c94510806486aa47cd42ab82b0465721ab`.
- Mensagem: `Publish model and harness article`.
- Branch: `main`.
- Push: `origin/main` atualizado sem force push.
- Workflow: [Deploy static hub to GitHub Pages — 32863871916](https://github.com/elzobrito/elzobrito.github.io/actions/runs/32863871916).
- Conclusão do workflow: `success`.

## URLs canônicas

- PT: https://elzobrito.github.io/blog/o-modelo-e-um-cerebro-numa-jarra/
- EN: https://elzobrito.github.io/en/blog/the-model-is-a-brain-in-a-jar/

## Verificação pública

As duas URLs retornaram HTTP 200 após a conclusão do deploy.

### PT

- Título `O modelo é um cérebro numa jarra`: presente.
- Canonical próprio: presente.
- `hreflang` EN para a URL inglesa: presente.
- `hreflang` PT-BR e `x-default`: presentes.

### EN

- Título `The model is a brain in a jar`: presente.
- Canonical próprio: presente.
- `hreflang` PT-BR para a URL portuguesa: presente.
- `hreflang` EN e `x-default`: presentes.

## Integridade do envio

- Antes do commit, `git fetch origin` e `git rev-list --left-right --count HEAD...origin/main` retornaram `0 0`.
- O staging incluiu somente os posts PT/EN.
- Alterações preexistentes em `.roadmap` e `docs/qa/SITE-BLOG-AGENT-ENGINEERING-20260803-PUBLISH-001.md` permaneceram fora do commit.
- A anotação do workflow sobre a migração de actions de Node.js 20 para Node.js 24 não impediu build ou deploy; ambos os jobs concluíram com sucesso.
