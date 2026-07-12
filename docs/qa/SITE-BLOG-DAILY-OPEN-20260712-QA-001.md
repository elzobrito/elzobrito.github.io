# SITE-BLOG-DAILY-OPEN-20260712-QA-001

## Escopo

Validação editorial, técnica e pública do artigo diário bilíngue sobre skills, plugins e controle local para agentes.

## Fontes primárias revisadas

- <https://github.com/google-labs-code/stitch-skills>
- <https://github.com/openai/plugins>
- <https://github.com/wonderwhy-er/DesktopCommanderMCP>
- Contexto de destaque diário: <https://github.com/trending>

O texto descreve capacidades documentadas nos repositórios e apresenta tendências como análise editorial, sem atribuir datas de lançamento ou métricas de desempenho não verificadas.

## Validação técnica

- `npm test`: aprovado
- Astro check: 0 erros, 0 avisos, 0 sugestões
- Build: 77 páginas
- Auditoria pública: 88 arquivos, 11 rotas obrigatórias, 0 ocorrências proibidas
- `git diff --check`: aprovado
- Frontmatter PT/EN: data, locale e traduções recíprocas válidas

## Auditoria editorial

A primeira varredura encontrou o termo `prompt` em duas passagens conceituais. Embora não revelasse o processo de produção, o contrato público o proíbe. As passagens foram substituídas por `instruções` e `instructions` antes da aprovação.

Nova varredura nos dois artigos não encontrou referências a processo de coleta, caminhos locais, estado ESAA ou artefatos internos.

## Decisão

Validação concluída com correção obrigatória antes da publicação: remover as duas ocorrências identificadas e repetir a auditoria em tarefa QA independente.
