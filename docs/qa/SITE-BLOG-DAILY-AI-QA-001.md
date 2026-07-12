# SITE-BLOG-DAILY-AI-QA-001

## Escopo

Revisão do post diário criado a partir dos sinais de IA de 2026-07-12, com foco em:

- validade do schema de conteúdo;
- build estático do Astro;
- par bilíngue PT/EN;
- restrições editoriais PACER v1.4;
- privacidade e ausência de origem visível no artefato público.

## Arquivos revisados

- `src/content/posts/pt/agentes-de-ia-entre-autonomia-e-governanca.md`
- `src/content/posts/en/ai-agents-between-autonomy-and-governance.md`

## Evidências

### Build e schema

Comando:

```bash
npm test
```

Resultado:

- `astro check`: 0 errors, 0 warnings, 0 hints.
- `astro build`: concluído com 73 páginas geradas.
- `audit:public`: `Public artifact audit passed: 84 files, 11 required routes, 0 forbidden matches.`

Rotas geradas:

- `/blog/agentes-de-ia-entre-autonomia-e-governanca/`
- `/en/blog/ai-agents-between-autonomy-and-governance/`

### Auditoria editorial PACER

Verificações aplicadas:

- artigo em português do Brasil com tese clara;
- desenvolvimento em cinco seções;
- fechamento reflexivo;
- texto autônomo, sem marcas de reaproveitamento;
- sem chamadas promocionais ou CTA comercial;
- sem menção à origem, formato ou processo de transformação do material-fonte;
- sem nomes de remetentes, provedores de envio ou marcas de distribuição do material-fonte;
- versão em inglês criada para preservar a navegação bilíngue do blog.

### Auditoria de privacidade

Comando:

```bash
rg -n -i 'email|newsletter|clipping|superhuman|superintelligence|the neuron|beehiiv|/home/|\.roadmap|activity\.jsonl|conversation-esaa' \
  src/content/posts/pt/agentes-de-ia-entre-autonomia-e-governanca.md \
  src/content/posts/en/ai-agents-between-autonomy-and-governance.md \
  dist/blog/agentes-de-ia-entre-autonomia-e-governanca/index.html \
  dist/en/blog/ai-agents-between-autonomy-and-governance/index.html
```

Resultado:

- nenhum match nos arquivos Markdown do post;
- nenhum match de origem do material-fonte no conteúdo renderizado;
- a palavra `Email` aparece apenas no rodapé global de contato do site já existente, como link `mailto:elzobrito@gmail.com`, fora do corpo do artigo.

### ESAA

Comando:

```bash
esaa --root . verify
```

Resultado:

- `verify_status`: `ok`
- `last_event_seq`: `467`

## Decisão

Aprovado. O post cumpre o PACER v1.4, preserva a navegação bilíngue, passa no build de produção e não expõe origem, caminhos locais, `.roadmap`, conversas ou dados privados no conteúdo publicado.
