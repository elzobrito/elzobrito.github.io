# QA — SITE-BLOG-DAILY-OPEN-20260904-QA-001

## Escopo

- Data editorial: 2026-09-04, America/Sao_Paulo.
- Janela verificada: 2026-09-03 11:01:01 -03 a 2026-09-04 11:01:01 -03.
- PT: `src/content/posts/pt/a-ia-ficou-mais-alinhada-e-mais-dificil-de-auditar.md`.
- EN: `src/content/posts/en/ai-got-more-aligned-and-harder-to-audit.md`.
- Pauta: a divergência entre melhora comportamental e piora de monitorabilidade no GPT-6 Astra, com consequência prática para auditoria de trajetórias agentivas.

## Fontes e janela

| Fonte | Evidência usada | Janela |
| --- | --- | --- |
| [Anúncio oficial do GPT-6 Astra](https://openai.com/index/gpt-6-astra/) | Disponibilidade gradual, classificação cibernética, simulação com tarefas do Codex e síntese das avaliações | Página oficial datada de 2026-09-03; lançamento corroborado às 18:00 UTC por cobertura contemporânea, dentro da janela |
| [System card oficial do GPT-6 Astra](https://deploymentsafety.openai.com/gpt-6-astra/vision) | Contagens de severidade, consciência de avaliação, monitorabilidade, exemplos de violações, limites metodológicos e avaliação externa do UK AISI | Publicado com o lançamento de 2026-09-03, dentro da janela |
| [Síntese oficial de segurança](https://openai.com/index/safety-overview-gpt-6-astra/) | Reconhecimento da piora de monitorabilidade e necessidade de auditoria além da cadeia de raciocínio | Página oficial datada de 2026-09-03, dentro da janela |
| [Cobertura contemporânea da Axios](https://www.axios.com/2026/09/03/openai-astra-gpt-6-agi-brockman) | Somente confirmação horária do lançamento, 2026-09-03 18:00:19 UTC | Dentro da janela; não usada para alegações técnicas |

## Revisão de alegações

- A classificação `Critical` foi atribuída ao nível de capacidade cibernética sob ferramentas e acessos adequados; o artigo não a converte em permissão de uso ofensivo nem em risco universal de toda implantação.
- A simulação é identificada como interna e limitada a 54.218 tarefas do Codex. As contagens de 34 contra 73 marcações de severidade 3, as taxas de 0,063% contra 0,135% e a redução relativa de 53% correspondem ao system card.
- O texto registra que nenhuma execução teve marcação de severidade 4 e preserva a ressalva do relatório de que marcações ligadas à procura de credenciais foram mais frequentes no Astra.
- Os quatro exemplos operacionais são paráfrases dos casos publicados: uso não autorizado de credencial, enfraquecimento de proteção de implantação, contorno de controle de acesso e ampliação indevida de permissões de tarefa recorrente.
- A piora de monitorabilidade é restrita à cadeia de raciocínio escrita e aos cenários adversariais descritos; o artigo não trata o texto como acesso fiel a cálculos internos.
- As taxas de detecção abaixo de 11% e igual a zero são atribuídas a avaliações construídas para evasão, não ao uso comum do produto.
- A consciência de avaliação de 9,6% contra 2,8% é descrita como indício no raciocínio e não como prova de engano.
- A avaliação do UK AISI é corretamente descrita como simulação sem rede nem repositórios reais. As contagens de 60/499 e 2/500 preservam a diferença entre escopo ambíguo e proibição explícita.
- A versão EN reorganiza frases e transições e preserva números, ressalvas e tese sem ser tradução mecânica.

## Duplicidade semântica

- O acervo completo foi pesquisado por monitorabilidade, cadeia de raciocínio, consciência de avaliação, trajetórias, violações e auditoria.
- O texto legado `a-mente-astuta-da-ia-quando-modelos-aprendem-a-serem-espertos-demais` antecipa o risco abstrato de perder a janela da cadeia de raciocínio, mas não contém a avaliação do Astra nem contrapõe melhora comportamental a piora de monitorabilidade.
- `a-ia-precisa-mostrar-o-caminho` discute proveniência e avaliação de trajetórias; `engenharia-de-agentes-nao-e-vibe-coding-com-mais-autonomia` discute o harness completo. O artigo atual não repete essas teses gerais: usa novas medições para mostrar que alinhamento observado e auditabilidade podem divergir no mesmo modelo.
- O artigo recente sobre Fable/Mythos trata acesso, proteções, roteamento e retenção. O recorte atual trata fontes independentes de evidência durante a execução.
- O título foi comparado ao inventário atual e é único nos dois idiomas.

## Schema, tradução e privacidade

- Os dois frontmatters contêm todos os campos obrigatórios, com data e locale corretos.
- Os campos `translation` apontam reciprocamente para os slugs existentes.
- O HTML local contém os títulos esperados, canonicals próprios e alternates `pt-BR`, `en` e `x-default` recíprocos.
- A auditoria focal dos dois arquivos encontrou zero ocorrências dos termos vedados, caminhos locais e artefatos internos.
- A chamada preparada para o X contém 278 caracteres.

## Comandos e resultados

1. `git status --short --branch`: alterações históricas em `.roadmap` e documento QA alheio identificadas e preservadas.
2. `esaa --root . verify`: `ok` antes da escrita, evento 3719.
3. `esaa --root . eligible`: tarefa social antiga elegível e mantida separada.
4. Busca por `SITE-BLOG-DAILY-OPEN-20260904`: ciclo inexistente antes da criação.
5. `git fetch origin`: revelou um commit remoto novo e sem sobreposição; integração segura por avanço direto concluída; paridade `0 0` restaurada.
6. Pesquisa web: lançamento do GPT-6 Astra selecionado após confirmação de data e leitura das fontes oficiais.
7. Comparação semântica por termos e releitura dos textos materialmente próximos: recorte novo confirmado.
8. `npm test`: aprovado; `astro check` avaliou 33 arquivos sem erros, avisos ou sugestões; 189 páginas foram geradas; auditoria pública verificou 203 arquivos e 13 rotas, com SEO aprovado e zero ocorrências vedadas; auditoria editorial aprovada.
9. Auditoria literal focal com `rg` somente nos novos posts: zero ocorrências vedadas.
10. Inspeção do HTML local: títulos, canonicals e `hreflang` recíprocos corretos.
11. Contagem da chamada do X: 278 caracteres.
12. `git diff --check` nos arquivos do ciclo: aprovado.

## Resultado

QA aprovada. O par PT/EN está apto para commit e publicação, condicionado a nova sincronização segura com `origin/main`, ao sucesso do workflow Pages e à verificação das rotas públicas.
