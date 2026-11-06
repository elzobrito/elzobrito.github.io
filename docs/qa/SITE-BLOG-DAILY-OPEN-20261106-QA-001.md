# QA — SITE-BLOG-DAILY-OPEN-20261106-QA-001

## Escopo

- Data editorial: 2026-11-06, America/Sao_Paulo.
- PT: `src/content/posts/pt/o-primeiro-modelo-critico-como-o-gpt-6-cyber-e-seus-948-exploits-no-linux-redefinem-a-seguranca-de-software.md`
- EN: `src/content/posts/en/the-first-critical-model-how-gpt-6-cyber-and-its-948-linux-exploits-redefine-software-security.md`
- Tese: O lançamento do GPT-6 Cyber marca o primeiro modelo classificado com nível de risco "Crítico" no Preparedness Framework da OpenAI, após demonstrar a descoberta autônoma de 948 vulnerabilidades e exploits funcionais no kernel Linux e 48,5% no ExploitGym. A capacidade de sintetizar zero-days em ciclos fechados sem intervenção humana altera o equilíbrio entre defesa e ataque, inviabilizando a segurança puramente manual em código aberto e comprovando que a contenção de agentes cibernéticos deve ser feita por gateways determinísticos no nível do sistema operacional (ESAA), e não por system prompts ou filtros estocásticos.

## Frontmatter e integridade de par

- Campos obrigatórios verificados: `title`, `description`, `published: 2026-11-06`, `locale`, `translation`, `tags`, `featured: false`.
- Slugs recíprocos validados:
  - PT aponta para `the-first-critical-model-how-gpt-6-cyber-and-its-948-linux-exploits-redefine-software-security`.
  - EN aponta para `o-primeiro-modelo-critico-como-o-gpt-6-cyber-e-seus-948-exploits-no-linux-redefinem-a-seguranca-de-software`.
- Sem imagem dedicada no frontmatter (utiliza o `social-card.png` padrão).
- Sem menções expostas a diretórios locais privados ou arquivos de log não-públicos (em conformidade com `audit:public`).

## Proveniência e fontes primárias

- Fonte primária oficial: [OpenAI Research Announcement — Introducing GPT-6 Cyber](https://openai.com/index/introducing-gpt-6-cyber/) (5 de novembro de 2026).
- Documentação de segurança: [OpenAI Deployment Safety Hub — GPT-6 Cyber System Card](https://deploymentsafety.openai.com/gpt-6-cyber).
- Documentação de API: [OpenAI API Changelog — gpt-6-cyber](https://developers.openai.com/api/docs/changelog).
- Dados empíricos e benchmarks validados:
  - Rating oficial "Crítico" no Preparedness Framework da OpenAI.
  - 948 vulnerabilidades e exploits funcionais descobertos no kernel Linux.
  - Taxa de sucesso de 48,5% no ExploitGym (+51% relativo sobre GPT-5.6 Cyber e superior a GPT-6 Astra em 42,4%).
  - Taxa de desvio de escopo de teste inferior a 1% (contra ~5% na geração anterior).
  - Programa Daybreak Red de acesso restrito a equipes de segurança homologadas.

## Validação de estilo e vocabulário

- Ausência de termos restritos e superlativos de marketing.
- Pontuação editorial padronizada com travessão sem espaços (`—`).
- Links canônicos internos para `/blog/a-regra-continua-no-resumo-mas-o-agente-a-ignora-como-a-compactacao-de-contexto-destroi-a-seguranca-agentica/`, `/blog/copilot-fusion-e-a-reengenharia-do-git-quando-agentes-de-codigo-forcam-a-redesenhar-a-infraestrutura-do-software/`, `/blog/agentes-viram-plataformas-skills-plugins-e-controle-local/`, `/blog/a-ordem-nunca-foi-do-modelo-para-improvisar-aws-conecta-step-functions-ao-mcp-e-resolve-a-execucao-deterministica/` e `/blog/do-prompt-a-criptografia-como-o-signet-ai-e-o-fim-das-chaves-mestras-redefinem-a-seguranca-de-agentes/` verificados.

## Resultado

QA aprovada. O par PT/EN está íntegro e pronto para publicação.
