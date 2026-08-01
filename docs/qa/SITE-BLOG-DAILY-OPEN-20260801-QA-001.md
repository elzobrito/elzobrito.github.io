# QA do artigo diário aberto de 2026-08-01

## Escopo

Revisão do par PT/EN sobre isolamento de cache de prefixos em ambientes multiusuário.

## Fontes primárias

- PR vLLM `#49498`, mesclado em 2026-08-01 07:36 UTC: https://github.com/vllm-project/vllm/pull/49498
- Issue vLLM `#46688`, fechado pela mudança: https://github.com/vllm-project/vllm/issues/46688
- Documentação do servidor compatível com OpenAI: https://docs.vllm.ai/en/stable/serving/online_serving/openai_compatible_server/

A fonte nova foi mesclada dentro da janela editorial das últimas 24 horas. O texto distingue reutilização do cálculo de prefixo de reutilização de respostas e apresenta o risco como sinal lateral descrito pelo projeto, sem afirmar vazamento direto de conteúdo.

## Verificações editoriais e técnicas

- `npm test`: aprovado.
- `astro check`: 33 arquivos, 0 erros, 0 avisos e 0 sugestões.
- Build: 135 páginas.
- `audit:public`: 148 artefatos, 13 rotas obrigatórias, SEO aprovado e 0 ocorrências proibidas.
- `audit:editorial`: aprovado.
- Varredura focal dos dois novos posts: nenhuma ocorrência de termos internos, caminhos locais ou linguagem de processo.
- `git diff --check`: aprovado.
- Frontmatter PT/EN com data 2026-08-01, locales coerentes e translations recíprocas.
- A versão EN é adaptação editorial fiel, sem tradução mecânica frase a frase.

## Limites preservados

O artigo registra que o colaborador não executou a suíte completa localmente por ausência de CUDA/PyTorch e que operadores devem validar a versão implantada. `cache_salt` não é apresentado como substituto de autenticação, autorização, criptografia ou separação de memória.

## Resultado

Aprovado para publicação.
