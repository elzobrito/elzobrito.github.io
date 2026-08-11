# QA — artigo diário aberto — 2026-08-11

## Escopo revisado

- PT: `src/content/posts/pt/o-benchmark-agora-vem-com-instrucoes-de-montagem.md`
- EN: `src/content/posts/en/the-benchmark-now-comes-with-assembly-instructions.md`
- Data editorial: 2026-08-11, America/Sao_Paulo.
- Janela primária: 2026-08-10 11:00 -03 a 2026-08-11 11:00 -03.

## Fontes primárias e janela

| Fonte | Evidência temporal | Uso editorial | HTTP |
|---|---|---|---|
| [Cartão do Nemotron 3.5 Lightning 30B A3B BF16](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16) | Data de lançamento declarada: 2026-08-11 | Arquitetura, parâmetros totais e ativos, formatos, contexto, finalidade das variantes e resultados divulgados | 200 |
| [Commit das receitas de avaliação](https://github.com/NVIDIA-NeMo/Gym/commit/a62c30035519f738e583b6c1f08254cde70ced1b) | 2026-08-11 12:16:31 UTC | Confirma a publicação das receitas dentro da janela | 200 |
| [Guia de reprodução](https://github.com/NVIDIA-NeMo/Gym/blob/main/nemotron_recipes/lightning-3.5/reproducibility.md) | Incluído no commit acima | Cobertura das avaliações, variação entre execuções e dependência da configuração de serviço | 200 |
| [OpenMDW 1.1](https://openmdw.ai/license/1-1/) | Versão 1.1 vigente | Termos aplicáveis aos pesos | 200 |

## Revisão factual

- 30 bilhões de parâmetros totais e 3 bilhões ativos: confirmado no cartão.
- Arquitetura híbrida com MoE, Mamba-2 e atenção: confirmada no cartão.
- BF16 como referência para adaptação e NVFP4 para serviço otimizado: confirmado no cartão.
- Contexto máximo de um milhão e exemplo de serviço em H100 com 256 mil: confirmado no cartão.
- Valores de SWE-bench Verified e IFBench, inclusive comparações: transcritos da tabela do fornecedor e identificados no texto como medição da NVIDIA.
- Treze avaliações do modelo ajustado, 21 de contexto curto do modelo-base e RULER: confirmados no guia.
- Limites de variação, execução reduzida e influência da pilha de serviço: confirmados no guia.
- Dependências adicionais de AWS, contêineres e conjuntos de referência: confirmadas nas instruções do modelo ajustado.
- Nenhuma superioridade geral foi inferida; os resultados foram apresentados como mistos e dependentes do ambiente.

## Schema, reciprocidade e linguagem

- Frontmatter obrigatório presente nos dois arquivos.
- `published`, `locale`, `translation`, `tags` e `featured` válidos.
- Slugs de tradução recíprocos.
- Versão EN revisada como adaptação editorial fiel, com estrutura e exemplos equivalentes sem espelhamento mecânico.
- Varredura focal dos dois posts: 0 ocorrências dos termos públicos vedados.
- Nenhum endereço de máquina ou artefato interno foi exposto.

## Comandos e resultados

1. `npm test`
   - Primeira execução: conteúdo, schema, build de 157 páginas e auditoria pública aprovados; o gate editorial apontou duas construções tipográficas no post PT.
   - Correção registrada separadamente em `SITE-BLOG-DAILY-OPEN-20260811-FIX-001` e revisada até `done`.
   - Segunda execução: aprovada integralmente.
   - `astro check`: 0 erros, 0 avisos e 0 sugestões no diagnóstico.
   - Build: 157 páginas.
   - Auditoria pública: 170 arquivos, 13 rotas obrigatórias, SEO aprovado e 0 ocorrências vedadas.
   - Auditoria editorial: aprovada.
2. Conferência focal de frontmatter e reciprocidade: aprovada.
3. Varredura focal dos arquivos novos: 0 ocorrências.
4. `git diff --check`: aprovado.
5. Fontes primárias por HTTP: quatro respostas 200.

## Decisão

**Aprovado para publicação.** O conteúdo está sustentado pelas fontes primárias, explicita os limites dos resultados divulgados e passou pelos gates técnicos e editoriais em 2026-08-11 11:10 -03.
