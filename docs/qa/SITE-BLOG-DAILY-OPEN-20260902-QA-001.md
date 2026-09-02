# QA — SITE-BLOG-DAILY-OPEN-20260902-QA-001

## Escopo

- Data editorial: 2026-09-02, America/Sao_Paulo.
- Janela verificada: 2026-09-01 11:42:53 -03 a 2026-09-02 11:42:53 -03.
- PT: `src/content/posts/pt/a-inteligencia-agora-depende-do-cracha.md`.
- EN: `src/content/posts/en/intelligence-now-depends-on-the-badge.md`.
- Pauta: Claude Fable 5.1 e Mythos 5.1 como o mesmo modelo oferecido sob regimes distintos de acesso, proteções, roteamento e retenção.

## Fontes e janela

| Fonte primária | Evidência usada | Janela |
| --- | --- | --- |
| [Anúncio do Claude Fable 5.1 e Mythos 5.1](https://www.anthropic.com/claude-fable-and-mythos-5-1) | Relação entre as duas versões; disponibilidade; preços; cache; proteções; roteamento; ressalvas de benchmarks; demonstrações científicas | Metadado `2026-09-01T17:54:35Z`, ou 14:54:35 -03, dentro da janela |
| [Orientação sobre blocos preservados de raciocínio](https://support.claude.com/en/articles/16761192-preserved-thinking-changing-how-the-messages-api-handles-thinking-blocks-to-protect-against-distillation) | Novo contrato de continuidade para contas de API criadas a partir do Fable 5.1 e impacto em integrações que reescrevem contexto | Atualizada em 2026-09-02, dentro da janela |

As duas fontes responderam HTTP 200 durante a revisão.

## Revisão de alegações

- O texto identifica Fable 5.1 e Mythos 5.1 como o mesmo modelo com proteções e acesso diferentes, conforme a descrição oficial.
- A disponibilidade geral é atribuída somente ao Fable 5.1; o Mythos 5.1 permanece limitado aos programas de acesso confiável descritos pela Anthropic.
- A estimativa de 60% menos intervenções é apresentada como afirmação da fornecedora e limitada às proteções cibernéticas por sessão do Claude Code, em comparação com o Fable 5.
- Os preços de US$ 10 por milhão de tokens de entrada, US$ 50 por milhão de saída e US$ 0,25 por milhão de leituras de cache foram conferidos na fonte. As estimativas de economia de 25% e até aproximadamente 45% permanecem condicionadas ao perfil da carga.
- O artigo distingue avaliação com proteções de produção de testes de capacidade com controles removidos e registra que algumas intervenções recebem zero ou acionam outro modelo.
- Os casos científicos são descritos como relatos da própria Anthropic e como evidência inicial, sem generalização de autonomia ou superioridade.
- A versão EN preserva a tese e os limites factuais, mas reorganiza frases e transições para soar como texto autoral em inglês.

## Duplicidade semântica

- O arquivo PT/EN completo foi pesquisado por Fable 5.1, Mythos 5.1, cache, modelo subjacente, proteções e roteamento.
- Há textos anteriores sobre custo por nível de esforço, cache, segurança e produtos construídos em torno do mesmo modelo, mas nenhum cobre este lançamento nem a divisão explícita de um modelo em regimes Fable/Mythos.
- O recorte atual é próprio: o sistema efetivo passa a incluir identidade, acesso, proteção, retenção e rota alternativa, além dos pesos.
- O título foi comparado aos títulos recentes e evita repetir a estrutura das últimas publicações sobre latência, pilha, contexto e arquitetura.

## Schema, tradução e privacidade

- O frontmatter contém `title`, `description`, `published`, `locale`, `translation`, `tags` e `featured: false` nos dois arquivos.
- `published` é `2026-09-02`; `locale` corresponde ao diretório.
- Os campos `translation` apontam reciprocamente para os slugs existentes.
- O HTML local contém títulos, canonicals e alternates `pt-BR`, `en` e `x-default` corretos.
- A auditoria focal dos dois novos arquivos públicos encontrou zero ocorrências dos termos vedados, caminhos locais e artefatos internos.

## Comandos e resultados

1. `git status --short --branch`: branch `main`; alterações preexistentes em `.roadmap`, artefatos ESAA históricos e num documento QA alheio foram identificadas e preservadas.
2. `python -m esaa --root . verify`: `ok` antes da escrita, evento 3661.
3. `python -m esaa --root . eligible`: uma tarefa social antiga estava elegível e foi mantida separada do ciclo atual.
4. Busca exata por `SITE-BLOG-DAILY-OPEN-20260902` em memória, commits, posts, tarefas e `docs/qa`: ciclo inexistente antes da criação.
5. `git fetch origin` e `git rev-list --left-right --count HEAD...origin/main`: `0 0` antes da autoria.
6. Pesquisa de fontes primárias das últimas 24 horas: o lançamento Fable 5.1/Mythos 5.1 foi selecionado após comparação com novos papers, anúncios de produto e segurança.
7. Comparação semântica com o arquivo PT/EN: nenhuma cobertura materialmente duplicada.
8. `curl -LfsS` nas duas fontes: HTTP 200.
9. `npm test`: aprovado; `astro check` avaliou 33 arquivos, com zero erros, avisos ou sugestões; 185 páginas foram geradas; a auditoria pública verificou 198 arquivos e 13 rotas, com SEO aprovado e zero ocorrências vedadas; auditoria editorial aprovada.
10. Auditoria literal focal com `rg` somente nos dois posts: zero ocorrências vedadas.
11. Inspeção do HTML local: títulos, canonicals e `hreflang` recíprocos corretos nas duas rotas.
12. `git diff --check` nos arquivos do ciclo: aprovado.

## Resultado

QA aprovada. O par PT/EN está apto para commit e publicação, condicionado à nova sincronização segura com `origin/main`, ao sucesso do workflow Pages e à verificação das rotas públicas.
