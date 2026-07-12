# SITE-HUB-SPEC-001 — Hub bilíngue e site ESAA no GitHub Pages

## Objetivo

Transformar `https://elzobrito.github.io/` em um hub bilíngue de marca pessoal com áreas estáticas para consultoria, blog e ESAA, publicado exclusivamente pelo GitHub Pages.

## Escopo

- Hub em `/`, consultoria em `/consultoria/`, blog em `/blog/` e ESAA em `/esaa/`.
- Geração estática com Astro e TypeScript, sem backend, SSR, banco, autenticação ou processos persistentes.
- Português e inglês em todas as páginas da primeira versão.
- Tema claro como padrão e escuro opcional persistido no navegador.
- Conteúdo público curado; nenhum estado operacional privado do ESAA pode ser publicado.
- Build e deploy pelo GitHub Actions Pages.

## Arquitetura de rotas

| Área | Português | Inglês |
| --- | --- | --- |
| Hub | `/` | `/en/` |
| Consultoria | `/consultoria/` | `/en/consulting/` |
| Blog | `/blog/` | `/en/blog/` |
| Posts | `/blog/<slug>/` | `/en/blog/<slug>/` |
| ESAA | `/esaa/` | `/en/esaa/` |

O seletor de idioma deve apontar para a tradução equivalente. A home deve preservar os anchors `sobre`, `atuacao`, `consultorias`, `pesquisa` e `contato`.

## Requisitos

1. O build deve produzir apenas HTML, CSS, JavaScript, imagens, XML e arquivos de metadados em `dist/`.
2. O hub deve priorizar exploração de projetos e oferecer acesso direto a ESAA, consultoria e blog.
3. A consultoria deve usar linguagem agnóstica de stack e contatos reais por e-mail, GitHub e LinkedIn.
4. O blog deve oferecer índice, tags, três artigos inaugurais bilíngues e RSS por idioma.
5. O ESAA deve oferecer Overview, Why ESAA, Architecture, Workflow, Quickstart, Runners, Trust e Docs em uma página navegável por seções.
6. Exemplos do ESAA devem ser fictícios ou sanitizados. `.roadmap`, conversas, caminhos locais e dados de clientes são proibidos no artefato.
7. Todas as páginas devem incluir title, description, canonical, Open Graph e alternates `hreflang`.
8. O site deve gerar sitemap, `robots.txt`, RSS e página 404.
9. O tema claro deve ser usado na primeira visita e a escolha posterior deve ser persistida em `localStorage`.
10. O workflow deve validar conteúdo, executar build, auditar `dist/` e publicar com as Actions oficiais do GitHub Pages.
11. A solução deve funcionar em `https://elzobrito.github.io/` sem recursos da máquina local após o build.
12. Nenhum analytics, cookie de rastreamento, CMS, formulário server-side ou dependência de CDN será introduzido.

## Identidade visual

- Direção editorial técnica: tipografia expressiva, grades limpas, diagramas, cartões e alto contraste.
- Base neutra com acentos por área: âmbar para marca, azul para consultoria, coral para blog e verde para ESAA.
- ESAA possui navegação contextual e superfícies inspiradas em instrumentos operacionais, sem alegar dados em tempo real.
- A foto profissional existente deve ser otimizada e servida localmente.

## Conteúdo inicial

- Hub: posicionamento, projetos, biografia, áreas de atuação e contatos.
- Consultoria: proposta, serviços, método, entregáveis e chamada para contato.
- Blog: artigos sobre governança de agentes, Event Sourcing e IA com evidência/revisão humana.
- ESAA: conceito, arquitetura, fluxo, instalação, runners, trust e documentação.

## Critérios de aceitação

1. `astro check` e `astro build` terminam sem erro.
2. Existem páginas navegáveis para todas as rotas PT/EN definidas.
3. Sitemap, dois feeds RSS, `robots.txt` e 404 são gerados.
4. Links internos, alternates de idioma e assets não apresentam referências quebradas.
5. Navegação por teclado, foco visível, landmarks, textos alternativos e contraste atendem WCAG AA.
6. Lighthouse alcança pelo menos 95 em acessibilidade, SEO e boas práticas e 90 em desempenho mobile, salvo limitação reproduzível documentada.
7. Busca recursiva em `dist/` não encontra `.roadmap`, `activity.jsonl`, `.conversation-esaa`, `/home/`, segredos ou dados privados.
8. O workflow do Pages gera e publica `dist/` no domínio canônico com HTTPS.
9. `esaa --root . verify` permanece `ok` e todas as tarefas deste roadmap terminam em `done`.

