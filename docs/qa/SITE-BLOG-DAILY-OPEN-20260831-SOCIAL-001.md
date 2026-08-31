# Social — SITE-BLOG-DAILY-OPEN-20260831-SOCIAL-001

## Pré-condições

- Artigo PT: https://elzobrito.github.io/blog/a-latencia-multimodal-comeca-antes-da-gpu/ — HTTP 200, canonical e hreflang verificados.
- Artigo EN: https://elzobrito.github.io/en/blog/multimodal-latency-starts-before-the-gpu/ — HTTP 200, canonical e hreflang verificados.
- PUBLISH: `done` após o workflow Pages `33401343933` concluir com `success`.
- Memória, tarefa SOCIAL e este documento foram verificados antes de cada canal; não havia URL pública de LinkedIn nem de X para 2026-08-31.

## LinkedIn

- Estado: **bloqueado e retomável**.
- URL pública: ausente.
- Envio realizado: não.
- Texto preparado:

> Nem toda latência de uma IA multimodal nasce no modelo ou na GPU. Antes da inferência, o servidor ainda precisa baixar, ler e decodificar imagens, áudio e vídeo.
>
> Uma mudança pequena no vLLM expôs uma fila invisível: itens da mesma modalidade já avançavam em paralelo, mas cada grupo esperava o anterior terminar. Ao sobrepor modalidades independentes, um dos caminhos medidos ficou 22,2% mais curto, com equivalência de entrada e saída verificada na configuração testada.
>
> A consequência prática é direta: diagnosticar um endpoint multimodal exige medir download, decodificação, preparação, execução e entrega separadamente. A GPU pode estar ociosa enquanto espera o mundo virar dados legíveis.
>
> PT: https://elzobrito.github.io/blog/a-latencia-multimodal-comeca-antes-da-gpu/
>
> EN: https://elzobrito.github.io/en/blog/multimodal-latency-starts-before-the-gpu/

## X

- Estado: **bloqueado e retomável**.
- URL pública: ausente.
- Envio realizado: não.
- Texto preparado: 245 caracteres.

> Multimodal latency starts before the GPU. A vLLM fix overlaps image, audio and video preparation; one measured parser path fell 22.2% with identical tested output. https://elzobrito.github.io/en/blog/multimodal-latency-starts-before-the-gpu/ #AI

## Evidência do bloqueio

- Horário da checagem: 2026-08-31 11:17:55 -03.
- A conexão suportada ao Chrome falhou duas vezes com `Browser is not available: chrome`.
- O diagnóstico passivo confirmou Google Chrome instalado, extensão ChatGPT instalada e habilitada no perfil `Default` e host nativo correto.
- O Chrome não estava em execução.
- Nenhuma janela foi aberta; Edge, navegador interno, API, script de postagem, credenciais e contorno de autenticação não foram usados.

## Retomada

Com uma sessão Chrome já aberta e autenticada, reconfirmar separadamente a ausência de URL pública no LinkedIn e no X. Publicar somente o canal ainda sem URL, registrar horário, texto efetivo e URL canônica. A tarefa SOCIAL permanece `in_progress` até ambos os canais terem URL pública registrada.
