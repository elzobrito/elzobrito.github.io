# SITE-BLOG-DAILY-OPEN-20260715-QA-001

## Escopo

Validação editorial, técnica e pública do artigo bilíngue sobre revisões de segurança assistidas por IA antes do merge.

## Janela editorial e fontes primárias

Janela: 2026-07-14 11:00 a 2026-07-15 11:00 em America/Sao_Paulo.

- Security reviews now available in the GitHub Copilot app, publicado em 2026-07-14: <https://github.blog/changelog/2026-07-14-security-reviews-now-available-in-the-github-copilot-app/>
- Code scanning shows AI security detections on pull requests, publicado em 2026-07-14: <https://github.blog/changelog/2026-07-14-code-scanning-shows-ai-security-detections-on-pull-requests/>

As duas páginas primárias responderam HTTP 200. A releitura confirmou as classes de vulnerabilidade citadas, a origem anterior do comando no Copilot CLI, o rótulo `AI`, o acionamento em abertura ou atualização de pull request, a disponibilidade em preview, os requisitos de CodeQL e GitHub Code Security, o consumo de créditos e o caráter informativo dos achados. O texto não converte essas descrições em promessa de completude ou bloqueio automático.

## Validação técnica

- `npm test`: aprovado.
- `astro check`: 27 arquivos, 0 erros, 0 avisos e 0 sugestões.
- `astro build`: 85 páginas geradas.
- `audit:public`: 97 arquivos, 11 rotas obrigatórias e 0 ocorrências vedadas.
- Frontmatter: campos obrigatórios presentes, data 2026-07-15, locales PT/EN e traduções recíprocas.
- Slugs: `seguranca-por-ia-chega-antes-do-merge` e `ai-security-moves-before-the-merge`.
- `git diff --check`: aprovado.
- Links das duas fontes: HTTP 200.

## Auditoria editorial e de privacidade

A varredura foi limitada aos dois novos posts públicos e não encontrou termos vedados, caminhos locais ou referências a artefatos internos.

A edição em inglês preserva tese, fatos, limites operacionais e fontes, com construções adaptadas ao idioma em vez de correspondência mecânica frase a frase.

## Decisão

Aprovado para publicação.
