# SITE-BLOG-DAILY-OPEN-20260727-QA-001

## Escopo

Revisão do par editorial de 27 de julho de 2026 sobre contratos verificáveis de prontidão e encerramento em infraestrutura de agentes.

## Fontes primárias

- NVIDIA NemoClaw, commit `75871cce`, publicado em 27 de julho de 2026: https://github.com/NVIDIA/NemoClaw/commit/75871ccef2963abaa2ddb8d883f60adee7446f44
- OpenDataLab MinerU, release `v4.0.0a4`, publicado em 27 de julho de 2026: https://github.com/opendatalab/MinerU/releases/tag/v4.0.0a4
- MinerU, desenho do orçamento de encerramento do servidor: https://github.com/opendatalab/MinerU/blob/v4.0.0a4/docs/plans/2026-07-22-managed-parse-server-stop-budget-design.md

## Revisão factual

- O commit do NemoClaw foi publicado em `2026-07-27T01:15:41Z`, dentro da janela editorial.
- O contrato usa JSON Schema, é somente de leitura e exige `mutated: false`.
- Os estados `supported`, `incompatible` e `inconclusive` correspondem respectivamente aos códigos 0, 2 e 3.
- Observações, capacidades, qualificações, achados e evidências têm coleções separadas; IDs e referências cruzadas recebem validação estrutural e semântica.
- O texto preserva a limitação declarada pelo projeto: o commit define um contrato interno antes de sondas, integração com a interface de linha de comando e experiência de usuário completas.
- O release MinerU `v4.0.0a4` foi publicado em `2026-07-27T09:46:04Z`, dentro da janela editorial.
- O canal de controle usa `AF_UNIX` em Unix e `AF_PIPE` no Windows.
- O orçamento padrão de dez segundos é total e deriva de um único prazo monotônico; etapas anteriores não renovam o tempo das seguintes.
- A comparação com o comportamento anterior segue o documento oficial: três etapas de até dez segundos podiam acumular aproximadamente trinta segundos.
- As consequências para delegação, inspeção e liberação de recursos são inferências editoriais, não funcionalidades atribuídas aos projetos.
- O título foi comparado com os posts recentes e evita repetir as metáforas de infraestrutura, orçamento e freios dos últimos ciclos.

## Validações

- `npm test`: aprovado; Astro verificou 33 arquivos sem diagnósticos, gerou 119 páginas, auditou 132 artefatos públicos com 0 ocorrências proibidas e aprovou a auditoria editorial.
- `git diff --check`: aprovado.
- Frontmatter: campos obrigatórios presentes; data `2026-07-27`; locales `pt` e `en`; `featured: false`.
- Traduções: `antes-de-agir-o-agente-precisa-provar-que-esta-pronto` e `before-acting-an-agent-must-prove-it-is-ready` apontam reciprocamente uma para a outra.
- Auditoria dedicada dos dois posts com `rg` e limites de palavra: 0 ocorrências dos termos públicos proibidos, caminhos locais e artefatos internos.
- Os dois posts não contêm travessão espaçado.
- Adaptação em inglês: preserva tese, fatos, limitações e fontes com construção editorial própria.

## Resultado

Aprovado para commit. O artigo é intencionalmente estreito porque a janela de 24 horas teve poucas novidades primárias de alta relevância.
