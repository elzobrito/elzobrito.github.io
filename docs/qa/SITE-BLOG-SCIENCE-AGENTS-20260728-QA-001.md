# SITE-BLOG-SCIENCE-AGENTS-20260728-QA-001

## Escopo

Revisão do par editorial adicional de 28 de julho de 2026 sobre o relatório de campo *Scientific computing in the age of agentic AI*. Este fluxo é independente de `SITE-BLOG-DAILY-OPEN-20260728`.

## Fonte primária

- Relatório da OpenAI, 55 páginas: https://cdn.openai.com/pdf/scientific-computing-in-the-age-of-agentic-ai-an-exploratory-field-report.pdf
- Verificação HTTP: `200`, `Content-Type: application/pdf`.

## Distinção editorial

O acervo já contém um artigo geral sobre verificadores. O novo texto foi aceito porque sua tese é específica e não redundante: os oito casos mostram a transferência de esforço da implementação para especificação, validação científica, interpretação de discrepâncias e responsabilidade de manutenção. O título também evita os moldes recentes sobre prontidão, infraestrutura, orçamento e controle.

## Revisão factual

- MHCflurry: migração TensorFlow/Keras para PyTorch, quase 10 mil linhas em aproximadamente 130 arquivos, pesos anteriores preservados e previsões dentro de pequenas tolerâncias.
- rustar-aligner: reimplementação de mais de 20 mil linhas; concordância reportada de `99,815%` para leituras de uma ponta e `99,883%` para pares no conjunto de 10 mil leituras de levedura.
- RustQC: tempo sequencial agregado de `15 h 34 min` para `14 min 54 s`, tráfego de disco de `2,5 TB` para `0,1 TB`, com equivalência numérica reportada.
- HelixForge: aceleração reportada de `98,6x` na edição e `59,6x` ponta a ponta no cenário avaliado.
- hifiasm: redução de runtime de `25,1%` em dados sintéticos reservados e `14,7%` em leituras reais do cromossomo 20.
- bayesm: extensões inicialmente plausíveis, mas defeituosas, descobertas por diagnósticos de convergência, calibração baseada em simulação e comparação de referência.
- HI.SIM: o oitavo caso e a exceção de autonomia quase integral são representados na síntese geral; o artigo não sugere que esse padrão se estenda aos outros sete.
- Limitações: coleta retrospectiva, amostra pequena e selecionada, ausência de protocolo comum, métricas reportadas pelos contribuidores e reprodução independente incompleta estão explícitas.
- O texto diferencia resultados do relatório de inferências editoriais e não apresenta os cenários econômicos como economia observada.

## Validações

- `npm test`: aprovado.
- `astro check`: 33 arquivos, 0 erros, 0 avisos e 0 sugestões.
- `astro build`: 125 páginas geradas.
- `audit:public`: 138 artefatos, SEO aprovado e 0 ocorrências proibidas.
- `audit:editorial`: aprovado, sem travessões proibidos.
- `git diff --check`: aprovado.
- Auditoria dedicada dos dois posts com `rg`: nenhuma ocorrência de linguagem de processo, caminhos locais, identificadores internos ou termos públicos proibidos.
- Frontmatter: todos os campos obrigatórios presentes; data `2026-07-28`; locales `pt` e `en`; `featured: false`.
- Traduções: `agentes-escrevem-o-codigo-mas-nao-carregam-a-prova` e `agents-write-the-code-not-the-proof` apontam reciprocamente.
- Extensão: 1.345 palavras em PT e 1.264 em EN.
- A versão inglesa preserva tese, fatos, limites e estrutura argumentativa sem tradução mecânica frase a frase.

## Resultado

Aprovado para publicação.
