# Comparativo: site antigo e nova versão da WL

**Data:** 06/11/2026, America/Sao_Paulo.  
**Antigo:** https://wlnegocioseseguros.com.br/  
**Novo:** https://gabrielcano-git.github.io/wlnegocioseseguros.com.br/  
**Auditoria-base:** [auditoria de 06/11/2026](auditoria-wl-2026-11-06.md), parcial e textual.  
**Comparativo anterior:** [conteúdo e implementação](comparativo-wl-2026-11-06.md).  
**Skills:** `site-audit-comparison` para a base e `site-redesign-comparison` para esta comparação.  
**Escopo:** oito páginas antigas por extração textual; 14 páginas novas no código; 84 relatórios Lighthouse locais arquivados; estado do deploy no GitHub. Sem inspeção atual do DOM das URLs públicas.

## Resumo

O redesign apresenta avanços verificáveis na organização do conteúdo, na contextualização das cotações e na consistência editorial. As internas compartilham breadcrumb, índice, títulos e contato. O telefone e as informações institucionais foram preservados. São melhorias de implementação e conteúdo; seu efeito sobre conversão e satisfação ainda não foi medido.

A evidência nova mais relevante é a auditoria de performance arquivada: **100/100 em todas as 84 execuções**, cobrindo 14 páginas, dois dispositivos e três repetições. A Home teve mediana de LCP de **1,877 s no mobile** e **0,442 s no desktop**, com CLS zero nos dois. Esses resultados foram obtidos em `http://127.0.0.1:4173/`, não no GitHub Pages. O site antigo permanece sem medição comparável; não há percentual de ganho de velocidade demonstrado.

O GitHub registra deploy concluído com sucesso em 06/11/2026 às 16:26, para o commit `5f75d9769beaafcd65fadf322adf4fc0fe7a20e5`. Foi possível confirmar a publicação pelo workflow, mas a ferramenta não conseguiu inspecionar a página servida. [Execução do deploy](https://github.com/gabrielcano-git/wlnegocioseseguros.com.br/actions/runs/42279534348).

A principal perda frente ao conteúdo antigo é a migração incompleta de parceiros e depoimentos: a nova versão encaminha essas consultas à origem. Antes de substituir o site antigo, também faltam validar a indexação definitiva, a recuperação de erros no subdiretório e o funcionamento por teclado e no celular.

## Escopo e qualidade das evidências

| Evidência | O que foi verificado | Limite |
|---|---|---|
| Site antigo | Home, Auto, Residencial, Sobre Nós, Assessoria, Projeto Condomínio Seguro, Parceiros e RC Profissional | Cópias indexadas com idades relativas entre uma semana e um ano; não são HTML atual da origem |
| Código novo | Fontes no commit publicado; geração em memória das 14 páginas e 95 seções internas | Estrutura do código, sem teste do DOM público |
| Relatórios novos | 84 JSONs e respectivos resultados; arquivos locais conferidos contra hashes Git do commit | Laboratório local, executado anteriormente, não repetido nesta coleta |
| Publicação | Etapa de deploy e workflow concluídos com sucesso | Não comprova ausência de erros na experiência pública |
| Capturas novas | Seis miniaturas e seis páginas completas extraídas dos relatórios arquivados | Telas locais; não há captura correspondente do antigo |
| PageSpeed Insights | Tentativas mobile e desktop para ambas as URLs | Quatro acessos indisponíveis; sem scores públicos ou confirmação de CrUX |

Os viewports previstos na auditoria-base eram **1440×900** e **390×844**. Não foram executados nesta coleta: o Playwright encerrou o Chromium antes da navegação. Os relatórios arquivados usam **1350×940, DPR 1** no desktop e **412×823, DPR 1,75** no mobile. Portanto, não há comparação visual sob viewports equivalentes.

Foram conferidos 186 arquivos locais contra os hashes remotos selecionados, sem divergências, incluindo fontes e relatórios. A coleta não alterou os sites, não publicou conteúdo e não enviou mensagens ou formulários. [Proveniência](comparativo-publicado-evidencias-2026-11-06/github-proveniencia.json), [verificação](comparativo-publicado-evidencias-2026-11-06/lighthouse-verificado.json) e [limitações](comparativo-publicado-evidencias-2026-11-06/limitacoes.md).

## Comparação por dimensão

| Dimensão | Antigo | Novo | Conclusão e evidência |
|---|---|---|---|
| Descoberta de produtos | Navegação por categorias e destaques de produtos | Entradas pessoais e empresariais; cards separam cotação e coberturas | Oferta mais explícita no conteúdo; facilidade de encontrar opções não testada com usuários |
| Cotação | Mensagem genérica nos CTAs amostrados | Mensagem de WhatsApp informa o produto da página/card | Contexto preservado nos links; abertura do aplicativo e atendimento não testados |
| Leitura das internas | Organização varia entre páginas na extração | Breadcrumb, um H1, índice e seções compartilhados | Padronização confirmada nas 14 páginas geradas e observável nas capturas locais |
| Conteúdo e credibilidade | Informações úteis e identificação empresarial; alguns erros editoriais | Correções de resíduos e inconsistências; dados institucionais mantidos | Melhoria editorial confirmada; relatos e coberturas não foram verificados com a empresa |
| Parceiros e depoimentos | Materiais apresentados na origem | Consulta depende de links ao antigo | Migração incompleta; conteúdo perde autonomia na nova versão |
| Identidade visual | Sem captura utilizável nesta comparação | Capturas locais mostram paleta verde/marrom, tipografia de sistema, imagens e componentes consistentes | Nova apresentação documentada; superioridade visual frente ao antigo não demonstrada |
| Acessibilidade | Skip link identificado; demais condições sem DOM | Idioma, main, um H1, alternativas e dimensões nas imagens; foco e movimento reduzido no CSS | Base técnica verificável; sem auditoria completa de acessibilidade nem delta de conformidade |
| Performance mobile | Sem medição | 42 execuções locais com 100/100; LCP entre 0,751 e 1,880 s | Resultado favorável local; sem comparação de velocidade com a origem |
| Performance desktop | Sem medição | 42 execuções locais com 100/100; LCP entre 0,361 e 0,444 s | Mesmo limite: não mede a hospedagem pública |
| SEO técnico | Home retornada com título genérico; metadados atuais não confirmados | Títulos descritivos, descriptions e Open Graph; canonical/sitemap condicionais | Melhora no código; indexação definitiva requer configuração e conferência pública |
| Manutenção | CMS provável, sem acesso editorial avaliado | Templates compartilhados e geração de HTML estático | Consistência técnica centralizada; não foi avaliada a facilidade de edição por administradores |

## Tecnologias identificadas

| Categoria | Antigo | Novo | Evidência e confiança |
|---|---|---|---|
| CMS | WordPress provável, versão desconhecida | Nenhum CMS demonstrado no pipeline inspecionado | Antigo: mídias em `/wp-content/uploads/`, documentadas na auditoria-base; sem generator/cabeçalhos independentes. Novo: conteúdo e templates no repositório; não permite concluir sobre sistemas externos à implementação |
| Frontend | Framework/construtor não determinado | HTML estático, CSS e JavaScript próprio | Templates, script e build no commit confirmado. Não há runtime de React/Vue nesses arquivos; não se atribui tecnologia backend por ausência de assinatura |
| Ferramentas de build | Não determinadas | Node.js, Sass, Tailwind e PostCSS | Manifesto, lockfile e build conferidos contra o commit. São ferramentas de compilação, não frameworks carregados no navegador |
| Hospedagem | Não determinada | GitHub Pages confirmado pelo deploy | Workflow e etapa de publicação concluídos com sucesso; cabeçalhos e cache público não inspecionados |
| Canais externos | WhatsApp | WhatsApp | Destinos extraídos; nenhum envio realizado |

Fontes do novo: [templates](https://github.com/gabrielcano-git/wlnegocioseseguros.com.br/blob/5f75d9769beaafcd65fadf322adf4fc0fe7a20e5/site/src/templates.mjs), [conteúdo](https://github.com/gabrielcano-git/wlnegocioseseguros.com.br/blob/5f75d9769beaafcd65fadf322adf4fc0fe7a20e5/site/src/content.mjs), [build](https://github.com/gabrielcano-git/wlnegocioseseguros.com.br/blob/5f75d9769beaafcd65fadf322adf4fc0fe7a20e5/site/scripts/build.mjs) e [workflow](https://github.com/gabrielcano-git/wlnegocioseseguros.com.br/blob/5f75d9769beaafcd65fadf322adf4fc0fe7a20e5/.github/workflows/pages.yml).

## Performance: laboratório e site público

### URLs públicas

| Site | Dispositivo | Performance / Acessibilidade / Boas práticas / SEO | LCP / TBT / CLS | CrUX |
|---|---|---|---|---|
| Antigo | Mobile | Não obtidos | Não obtidos | Desconhecido |
| Antigo | Desktop | Não obtidos | Não obtidos | Desconhecido |
| Novo | Mobile | Não obtidos via PSI público | Não obtidos via PSI público | Desconhecido |
| Novo | Desktop | Não obtidos via PSI público | Não obtidos via PSI público | Desconhecido |

Não foi calculado delta entre os sites. O bloqueio das ferramentas não indica que as URLs estejam indisponíveis ao público.

### Novo: relatórios locais arquivados

**Ferramenta:** Lighthouse 13.6.0, HeadlessChrome 156.  
**Execuções:** 06/11/2026, 16:03:29–16:16:55, horário de São Paulo.  
**Origem testada:** `http://127.0.0.1:4173/` e suas 13 internas.  
**Mobile:** simulação, RTT 150 ms, throughput 1638,4 Kbps, CPU 4×.  
**Desktop:** simulação, RTT 40 ms, throughput 10240 Kbps, CPU 1×.  
**Repetições:** três por página/dispositivo, com reset de armazenamento habilitado.  
**Categoria avaliada:** somente performance; não há notas de acessibilidade, SEO ou boas práticas nesses relatórios.

A tabela mostra a mediana de três execuções por métrica para as oito páginas correspondentes à auditoria-base. Todas as outras seis também tiveram três notas 100 por dispositivo.

| Página | Performance mobile / desktop | LCP mobile | LCP desktop | TBT mobile / desktop | CLS mobile / desktop |
|---|---:|---:|---:|---:|---:|
| Home | 100 / 100 | 1,877 s | 0,442 s | 1 / 0 ms | 0 / 0 |
| Seguro Auto | 100 / 100 | 1,501 s | 0,361 s | 0 / 0 ms | 0 / 0 |
| Seguro Residencial | 100 / 100 | 1,501 s | 0,362 s | 0 / 0 ms | 0 / 0 |
| Sobre Nós | 100 / 100 | 1,351 s | 0,362 s | 0 / 0 ms | 0 / 0 |
| Assessoria | 100 / 100 | 1,501 s | 0,362 s | 0 / 0 ms | 0 / 0 |
| Projeto Condomínio Seguro | 100 / 100 | 0,751 s | 0,362 s | 12 / 0 ms | 0 / 0 |
| Parceiros | 100 / 100 | 1,651 s | 0,362 s | 0 / 0 ms | 0 / 0 |
| RC Profissional | 100 / 100 | 1,501 s | 0,362 s | 0 / 0 ms | 0 / 0 |

Nas 84 execuções, o maior TBT foi 24 ms, no mobile, e o CLS foi zero. Isso descreve a navegação inicial desses testes; não mede estabilidade após todas as interações nem INP de visitantes reais. A hospedagem local também não reproduz latência da origem pública, CDN, cache ou compressão HTTP do GitHub Pages.

Mesmo com nota 100, a primeira amostra da Home mobile aponta oportunidades estimadas de entrega de imagens (~56 KiB) e cache (~156 KiB); a amostra desktop aponta CSS não utilizado (~12 KiB) e cache (~169 KiB). São diagnósticos locais, não economias medidas no Pages nem valores somáveis sem verificar sobreposição. O servidor local não fornece as mesmas políticas da hospedagem definitiva.

[Resumo original versionado](https://github.com/gabrielcano-git/wlnegocioseseguros.com.br/blob/5f75d9769beaafcd65fadf322adf4fc0fe7a20e5/site/docs/core-web-vitals/lighthouse/summary.json), [resumo preservado](comparativo-publicado-evidencias-2026-11-06/lighthouse-resumo-remoto.json) e [métricas, condições e hashes verificados](comparativo-publicado-evidencias-2026-11-06/lighthouse-verificado.json).

## Situação dos achados da auditoria

“Resolvido no código” significa conferência na implementação associada ao deploy; o aceite na URL pública permanece pendente.

| Achado original | Situação no novo | Evidência |
|---|---|---|
| Resíduos `$9` em Residencial | Resolvido no código | Ausentes nas 14 páginas geradas; a extração antiga ainda retorna três ocorrências |
| Cotação sem contexto do produto | Resolvido nos links por produto | Função `wa(subject)` e mensagens das páginas; links gerais continuam gerais |
| Profissão e valores inconsistentes em RC | Parcialmente resolvido | Engenheiro preservado e formato monetário revisto; natureza e veracidade dos relatos não comprovadas |
| Parceiros sem identificação textual clara | Alterado, não integralmente resolvido | Diretório não foi migrado; a nova página remete à origem |
| Título genérico da Home | Resolvido no código | Título descritivo com marca, description e Open Graph |
| Hierarquia editorial irregular | Melhorada no código | Um H1 por página e seções H2; sem validação assistiva completa |
| Erros editoriais e atualização | Parcialmente resolvido | Digitação corrigida; a promessa de conteúdo semanal permanece sem histórico verificado |
| Performance sem medição | Evidência local adicionada | 84 execuções conferidas; antigo e novo públicos continuam sem PSI/CrUX nesta coleta |

## Acessibilidade e contraste

Na nova implementação, as 14 páginas possuem idioma `pt-BR`, região principal, description e um H1. Todas as imagens geradas têm atributo `alt` e dimensões; a presença desses atributos não prova adequação das alternativas. Há skip link, estilos de foco e preferência por movimento reduzido. O código contempla Escape no menu e retorno de foco após o diálogo; essas interações não foram executadas nesta coleta.

| Texto / fundo declarado | Razão | Referência para texto normal |
|---|---:|---|
| `#6B4A30` / `#FFFFFF` | 7,93:1 | ≥ 4,5:1 |
| `#6B4A30` / `#C8DFBE` | 5,57:1 | ≥ 4,5:1 |
| `#FFFFFF` / `#435B3E` | 7,49:1 | ≥ 4,5:1 |
| `#71675D` / `#FFFFFF` | 5,53:1 | ≥ 4,5:1 |
| `#71675D` / `#F8F7F3` | 5,15:1 | ≥ 4,5:1 |
| `#435B3E` / `#C8DFBE` | 5,26:1 | ≥ 4,5:1 |

São cálculos dos tokens do CSS, não pares computados em tela. Nenhum contraste do antigo foi medido. Transparências, fotografias e estados de interação não estão cobertos; não há certificação WCAG. [Estrutura e pares avaliados](comparativo-publicado-evidencias-2026-11-06/estrutura-verificada.json).

## Mudanças favoráveis comprovadas

1. **Cotação contextualizada:** produto preservado na mensagem de WhatsApp, sem iniciar o envio automaticamente. Isso fornece informação ao atendimento; redução de tempo ou aumento de conversão não foram medidos.
2. **Leitura consistente:** 13 internas e 95 seções com estrutura compartilhada. O índice e a coluna de leitura aparecem nas capturas locais de desktop.
3. **Revisão editorial:** resíduos de edição, profissão e formatação de valores corrigidos no conteúdo novo. A validação do conteúdo securitário permanece com o responsável pelo produto.
4. **Implementação eficiente no laboratório:** HTML estático, imagens AVIF/WebP responsivas, CSS inicial incorporado, preload e JavaScript adiado, acompanhados de resultados locais favoráveis.
5. **Informações institucionais preservadas:** dados de contato e CNPJ continuam no rodapé. A existência desses dados não equivale a verificação cadastral.

## Pendências e prioridades

Critérios: **High** para tarefa importante bloqueada ou seriamente prejudicada; **Medium** para fricção ou exclusão relevante; **Low** para ajuste limitado. Nenhum bloqueio High foi confirmado.

### Medium — Migrar parceiros e depoimentos

- **Observação:** o antigo apresenta depoimentos em imagens e um diretório de parceiros; o novo remete essas consultas ao site antigo. Fontes: [Home antiga](https://wlnegocioseseguros.com.br/), [parceiros antigos](https://wlnegocioseseguros.com.br/parceiros-wl/) e templates novos.
- **Impacto:** o visitante precisa sair da nova experiência para consultar materiais de confiança. Se a origem for substituída, esses destinos podem retornar ao próprio site sem os materiais esperados.
- **Recomendação/aceite:** migrar conteúdo real autorizado, nomes de empresas, destinos e alternativas textuais; confirmar que a jornada termina no material prometido sem depender da origem antiga.

### Medium para substituição definitiva — Configurar e conferir indexação

- **Observação:** o build padrão gera `Disallow: /`; canonical e sitemap dependem de `SITE_URL`. O workflow confirmado não define essa variável. O `robots.txt` público não pôde ser recuperado.
- **Impacto:** a configuração serve a uma prévia, mas pode prejudicar descoberta se mantida no lançamento definitivo.
- **Recomendação/aceite:** configurar a origem definitiva com HTTPS, gerar canonical/sitemap e conferir as respostas públicas e URLs legadas. Isso é recomendação de lançamento, não constatação de bloqueio atual do domínio antigo.

### Medium — Concluir testes públicos de interação e acessibilidade

- **Observação:** não houve execução de teclado, menu, diálogo, âncoras, zoom ou reflow nas URLs públicas. O CTA principal de cotação depende de JavaScript; existem links alternativos de contato e produto no conteúdo.
- **Impacto:** a principal jornada comercial ainda não tem aceite funcional documentado para esses cenários.
- **Recomendação/aceite:** testar os dois sites em 1440×900 e 390×844, reflow a 320 px, teclado e foco, leitor de tela, menu e seleção de seguro; abrir os destinos sem enviar mensagens. Medir estilos computados, console e rede.

### Low — Conferir 404 no subdiretório do Pages

- **Observação:** o template 404 usa caminhos a partir de `/`; a prévia está em `/wlnegocioseseguros.com.br/`.
- **Impacto:** navegação e assets da recuperação de uma URL inexistente podem apontar ao contexto errado. Trata-se de risco estático, sem falha pública reproduzida.
- **Recomendação/aceite:** testar uma URL inexistente dentro do subdiretório e confirmar estilos, retorno à Home e menu.

### Low — Validar materiais e promessas editoriais

- **Observação:** fotos ilustrativas geradas por IA estão documentadas no projeto; a Home promete conteúdo semanal, e RC mantém relatos atribuídos à WL.
- **Impacto:** o material pode criar expectativas de autenticidade ou frequência que não foram verificadas.
- **Recomendação/aceite:** confirmar identidade oficial, origem e autorização dos relatos e rotina de publicação; não apresentar as fotos ilustrativas como clientes ou equipe reais.

## Capturas e comparação visual

Não há capturas do antigo. As imagens abaixo são miniaturas reais dos relatórios locais arquivados da nova versão, não capturas atuais da URL publicada. A comparação visual lado a lado permanece incompleta.

| Antigo | Novo — laboratório local |
|---|---|
| Desktop: captura indisponível | ![Home nova em viewport de 1350×940; miniatura extraída do Lighthouse local](comparativo-publicado-evidencias-2026-11-06/capturas/novo-home-desktop.jpg) |
| Mobile: captura indisponível | ![Home nova em viewport de 412×823; miniatura extraída do Lighthouse local](comparativo-publicado-evidencias-2026-11-06/capturas/novo-home-mobile.jpg) |

Na captura desktop nova, título, ações e fotografia ocupam duas colunas; no mobile, o conteúdo passa a uma coluna e o menu está recolhido. Isso documenta o estado capturado, sem validar abertura do menu, estabilidade durante uso ou superioridade sobre o antigo.

Páginas completas em resolução original:

- Home: [desktop](comparativo-publicado-evidencias-2026-11-06/capturas/novo-home-desktop-pagina-completa.webp) e [mobile](comparativo-publicado-evidencias-2026-11-06/capturas/novo-home-mobile-pagina-completa.webp).
- Seguro Residencial: [desktop](comparativo-publicado-evidencias-2026-11-06/capturas/novo-seguro-residencial-desktop-pagina-completa.webp) e [mobile](comparativo-publicado-evidencias-2026-11-06/capturas/novo-seguro-residencial-mobile-pagina-completa.webp).
- Parceiros: [desktop](comparativo-publicado-evidencias-2026-11-06/capturas/novo-parceiros-wl-desktop-pagina-completa.webp) e [mobile](comparativo-publicado-evidencias-2026-11-06/capturas/novo-parceiros-wl-mobile-pagina-completa.webp).

## Rastreabilidade

- [Auditoria-base e suas limitações](auditoria-wl-2026-11-06.md).
- [Coleta textual atual: oito páginas e tentativas de PSI](comparativo-publicado-evidencias-2026-11-06/coleta-web.json).
- [Proveniência GitHub e deploy](comparativo-publicado-evidencias-2026-11-06/github-proveniencia.json).
- [Árvore de arquivos do commit](comparativo-publicado-evidencias-2026-11-06/github-arvore.json).
- [Fontes preservadas](comparativo-publicado-evidencias-2026-11-06/remoto/site/src/templates.mjs).
- [Estrutura das páginas e contraste declarado](comparativo-publicado-evidencias-2026-11-06/estrutura-verificada.json).
- [Resultados Lighthouse conferidos](comparativo-publicado-evidencias-2026-11-06/lighthouse-verificado.json).
- [Registro dos bloqueios e limites](comparativo-publicado-evidencias-2026-11-06/limitacoes.md).

Esta coleta acrescenta evidência de laboratório e de deploy ao comparativo anterior. Ela ainda não demonstra melhora de ranking, vendas, experiência de usuários reais ou velocidade relativa entre as duas URLs públicas.
