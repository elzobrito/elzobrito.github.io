# SITE-SCHOLAR-ARTICLES-20260716-QA-001

## Escopo

Validação e publicação da nova seção bilíngue de artigos e publicações acadêmicas.

## Fonte e completude

- Perfil: <https://scholar.google.com/citations?user=hSP8J9EAAAAJ&hl=pt-BR>
- Autor confirmado no perfil: Elzo Brito dos Santos Filho.
- O perfil foi carregado integralmente pelo Chrome autenticado até o botão `Mostrar mais` ficar desabilitado.
- Total no perfil: 29 registros.
- Total em `src/data/scholar-publications.ts`: 29 registros.
- As versões distintas mantidas pelo Google Acadêmico foram preservadas como registros separados.
- Cada publicação aponta para seu registro individual no Google Acadêmico.
- Indicadores exibidos: 68 citações e índice h 4, conforme o perfil consultado em 2026-07-16.

## Validação técnica e visual

- `npm test`: aprovado.
- `astro check`: 31 arquivos, 0 erros, 0 avisos e 0 sugestões.
- `astro build`: 89 páginas geradas, incluindo `/artigos/` e `/en/articles/`.
- `audit:public`: 100 arquivos, 11 rotas obrigatórias e 0 ocorrências vedadas.
- `git diff --check`: aprovado.
- Inspeção local em `http://127.0.0.1:4321/artigos/`: título, hero, indicadores, navegação e 29 cards confirmados.
- Canonical PT e alternate EN confirmados; as páginas usam o mesmo layout responsivo, tema e navegação do site.

## Publicação

Pendente de commit, push, workflow do GitHub Pages e verificação HTTP das duas rotas.
