# Auditoria do site: WL Negócios & Seguros

**URL:** https://wlnegocioseseguros.com.br/  
**Data da análise:** 2026-11-06 — America/Sao_Paulo  
**Status:** análise parcial e provisória; baseline textual para revalidação.  
**Escopo:** oito páginas públicas, conteúdo, jornadas de cotação, sinais de acessibilidade e SEO e identificação tecnológica observável.  
**Viewports previstos:** desktop 1440 × 900 e mobile 390 × 844. **Não foram capturados nem testados.**  
**Ferramentas:** consulta web pública; tentativas de Playwright/Chrome, navegador integrado e PageSpeed Insights.  
**Limitações:** conteúdo retornado de cópias indexadas em datas diferentes; sem inspeção visual, HTML bruto, DOM vivo, medições de performance ou confirmação de atendimento. [Registro completo](evidencias-2026-11-06/limitacoes.md).

## Resumo executivo

A estrutura editorial atende a três necessidades: conhecer os produtos, entender o trabalho da assessoria e iniciar contato comercial pelo WhatsApp. Há explicações úteis, identificação empresarial no rodapé e um serviço específico para condomínios. Esses elementos formam uma base aproveitável.

As prioridades observadas são revisar resíduos de edição na página residencial, contextualizar os links de cotação e corrigir inconsistências nos exemplos de responsabilidade civil. A extração também sugere oportunidades de melhoria em títulos, hierarquia de headings e identificação textual de parceiros.

**Os achados descrevem o conteúdo retornado pela ferramenta, que pode estar desatualizado.** Não há evidência suficiente para declarar um bloqueio importante de jornada, atribuir prioridade High, avaliar o layout responsivo ou concluir que o site é lento ou inacessível. A auditoria integral prevista na skill depende dos testes de navegador pendentes.

### Páginas e jornadas analisadas

| Página | Jornada | Antiguidade indicada pela fonte na coleta |
|---|---|---|
| [Home](https://wlnegocioseseguros.com.br/) | Descoberta e cotação | Semana anterior |
| [Seguro Auto](https://wlnegocioseseguros.com.br/seguro-auto/) | Entender produto e cotar | Ano anterior |
| [Seguro Residencial](https://wlnegocioseseguros.com.br/seguro-residencial/) | Coberturas e cotação | 8 meses |
| [Sobre Nós](https://wlnegocioseseguros.com.br/sobre-nos/) | Confiança institucional | 3 meses |
| [Assessoria de Seguros](https://wlnegocioseseguros.com.br/assessoria-de-seguros/) | Contratação, suporte e renovação | 6 meses |
| [Projeto Condomínio Seguro](https://wlnegocioseseguros.com.br/projeto-condominio-seguro/) | Diagnóstico para condomínios | Ano anterior |
| [Parceiros WL](https://wlnegocioseseguros.com.br/parceiros-wl/) | Ecossistema de parceiros | 10 meses |
| [RC Profissional](https://wlnegocioseseguros.com.br/rc-profissional/) | Explicação e exemplos | 4 meses |

As idades acima são rótulos relativos apresentados pela ferramenta, não datas de publicação ou de última alteração. Não houve transação, envio de formulário, mensagem ou apólice. A página de Seguro Condominial não pôde ser recuperada; isso não demonstra indisponibilidade do site.

## Tecnologias identificadas

| Categoria | Tecnologia | Evidência e URL | Confiança e limitações |
|---|---|---|---|
| CMS | WordPress, versão desconhecida | Mídias da Home resolvem para caminhos como [`/wp-content/uploads/2025/01/base-home.png`](https://wlnegocioseseguros.com.br/wp-content/uploads/2025/01/base-home.png) e [`/wp-content/uploads/2025/02/seguro-carro.jpg`](https://wlnegocioseseguros.com.br/wp-content/uploads/2025/02/seguro-carro.jpg); parceiros usam a mesma estrutura | **Provável.** Sinais repetidos da mesma família de caminhos, sem confirmação independente em generator, HTML ou cabeçalhos. Um site estático pode preservar esses caminhos |
| Framework de frontend | Não determinado | Não foi possível inspecionar bundles, scripts ou marcadores de runtime | Não atribuir React, Vue, Next.js ou outro framework |
| Tema/construtor | Não determinado | Textos de navegação e skip link não identificam tema ou construtor com segurança | Não atribuir Astra ou Elementor a partir desses elementos |
| Canal externo | Links de WhatsApp `wa.me` | CTAs de Home, Auto, Residencial e Projeto Condomínio apontam para o mesmo telefone e mensagem genérica | Destinos identificados; entrega e funcionamento do aplicativo não testados |
| Hospedagem, CDN e backend | Não determinados | Sem cabeçalhos ou resposta direta da origem | Não inferir PHP, fornecedor ou versão pelo conteúdo extraído |

## Performance

URL solicitada ao PSI em 2026-11-06: `https://wlnegocioseseguros.com.br/`.

| Dispositivo | Lighthouse: Performance / Acessibilidade / Boas práticas / SEO | LCP | TBT | CLS | Tipo de dado |
|---|---|---|---|---|---|
| Mobile | Não obtido | Não obtido | Não obtido | Não obtido | Laboratório indisponível |
| Desktop | Não obtido | Não obtido | Não obtido | Não obtido | Laboratório indisponível |

As interfaces e o endpoint público do PageSpeed Insights não ficaram acessíveis pela ferramenta. A presença de **CrUX é desconhecida**. Não foram estimados scores, métricas nem oportunidades de economia de bytes. Também não há waterfall ou evidência para responsabilizar imagens, JavaScript, servidor ou plugins por lentidão.

Uma próxima execução deve preservar o JSON do PSI, versão do Lighthouse e condições de teste; separar dados de laboratório de dados reais do CrUX. Uma execução isolada não representa toda a experiência dos visitantes, e scores de SEO ou acessibilidade não certificam qualidade ou conformidade.

## Achados prioritários

Critérios: **High** para tarefa importante bloqueada ou seriamente prejudicada; **Medium** para fricção ou exclusão relevante; **Low** para ajuste de alcance limitado. As prioridades abaixo são propostas para revalidação. Nenhum High foi confirmado.

### Medium — Resíduos numéricos na descrição de coberturas

- **Observação/evidência:** em [Seguro Residencial](https://wlnegocioseseguros.com.br/seguro-residencial/), o token `$9` ocorre três vezes entre os blocos de coberturas, nas linhas 72, 78 e 83 da extração registrada. Viewport não aplicável à leitura textual.
- **Interpretação/impacto:** em um contexto de contratação, esse valor solto pode parecer preço, franquia ou informação incompleta. A ambiguidade justifica Medium; não há comprovação de abandono ou perda financeira.
- **Recomendação:** conferir o componente atual, remover o resíduo se indevido e revisar se existe informação comercial que deveria ocupar esse espaço.
- **Aceite:** blocos sem números inexplicados, verificados visualmente e na leitura por tecnologia assistiva.

### Medium — Cotação perde o contexto do produto no WhatsApp

- **Observação/evidência:** os destinos extraídos de Home, Auto, Residencial e Projeto Condomínio usam o mesmo número e mensagem de interesse em seguros de modo geral. O [destino observado](https://wa.me/5511932039326?text=Ol%C3%A1%21+Gostaria+de+mais+informa%C3%A7%C3%B5es+sobre+seguros.) não identifica produto nem intenção de avaliar uma apólice.
- **Interpretação/impacto:** o atendimento pode precisar perguntar novamente qual serviço motivou o contato. Isso acrescenta fricção à principal jornada comercial, embora o link não tenha sido demonstrado como quebrado.
- **Recomendação:** gerar mensagem por contexto: cotação de Auto, Residencial ou avaliação de seguro condominial; nomear os CTAs conforme o próximo passo. Evitar dados pessoais em URLs.
- **Aceite:** cada CTA abre a intenção correspondente em teste de navegador, sem enviar a mensagem.

### Medium — Exemplos de RC precisam de revisão de consistência e procedência

- **Observação/evidência:** em [RC Profissional](https://wlnegocioseseguros.com.br/rc-profissional/), o exemplo de Otávio inicia com uma profissão e depois o identifica como outra; há também formato monetário americano em meio ao padrão brasileiro. A extração não esclarece se os exemplos são reais, anonimizados ou ilustrativos.
- **Interpretação/impacto:** inconsistências prejudicam a confiança em uma explicação usada para decidir sobre proteção profissional. Não foi verificada a veracidade dos casos nem a validade das coberturas descritas.
- **Recomendação:** uniformizar profissão e valores; indicar a natureza dos exemplos e revisar as condições de cobertura com o responsável pelo produto. Publicar casos reais somente com respaldo e autorização apropriados.
- **Aceite:** casos coerentes, identificados e condicionados aos limites e termos aplicáveis.

### Medium, a confirmar no DOM — Parceiros pouco identificáveis na representação textual

- **Observação/evidência:** [Parceiros WL](https://wlnegocioseseguros.com.br/parceiros-wl/) orienta navegação por imagens; a extração apresenta nomes genéricos como `LOGO`, `padrao1-branco` e `imagem logo`, em vez de identificar claramente as empresas.
- **Interpretação/impacto:** se essa representação corresponder aos nomes acessíveis dos links, pessoas que dependem de leitores de tela terão dificuldade para escolher um parceiro. O extrator pode omitir atributos; não é uma falha de WCAG confirmada.
- **Recomendação:** verificar cada imagem e seu link; disponibilizar nome da empresa, breve atividade e destino compreensível. Para imagem que constitui um link, o nome acessível deve explicar sua finalidade.
- **Aceite:** navegação por teclado e leitor de tela identifica cada parceiro sem depender de reconhecer o logotipo.

### Medium, a confirmar no HTML — Título da Home pouco descritivo

- **Observação/evidência:** a ferramenta retorna o título `Home -` para a [página inicial](https://wlnegocioseseguros.com.br/). As páginas internas retornam nomes dos produtos sem uma marca identificável no sufixo.
- **Interpretação/impacto:** caso corresponda ao `<title>` atual, a Home comunica pouco sobre empresa e serviço em abas e resultados de busca. Não foram medidos indexação, ranking ou taxa de cliques.
- **Recomendação:** conferir o HTML e configurar títulos únicos e descritivos. Sugestão editorial para a Home: `WL Negócios & Seguros | Assessoria e cotação de seguros`. Revisar descriptions, canonical e compartilhamento após leitura do HTML.
- **Aceite:** título atual confirmado no navegador e HTML; páginas com identificação específica e marca.

### Low — Hierarquia editorial merece revisão semântica

- **Observação/evidência:** Home e Auto apresentam saltos de níveis de títulos na extração. Em algumas páginas internas, o título principal aparece como texto simples, sem marcador H1.
- **Interpretação/impacto:** pode dificultar o entendimento da estrutura por leitores de tela, dependendo do DOM real. A ferramenta não permite concluir ausência de H1 ou de landmarks.
- **Recomendação:** confirmar uma hierarquia coerente de seções no DOM; usar níveis por estrutura, preservando a aparência pelo CSS. Verificar também idioma, landmarks e nomes acessíveis.
- **Aceite:** sequência de headings e regiões documentada em inspeção real, sem depender apenas desta extração.

### Low — Revisão de texto e sinais de atualização

- **Observação/evidência:** há erros de digitação na Home e uma junção de palavras na página residencial. A Home anuncia periodicidade editorial, mas esta coleta não verificou o histórico de publicações. O rodapé retornado menciona 2025.
- **Interpretação/impacto:** erros reduzem o cuidado percebido; datas antigas e promessas de frequência merecem conferência, sem provar abandono ou descumprimento.
- **Recomendação:** revisão ortográfica e editorial; conferir links para artigos e manter apenas compromissos de frequência sustentados pelo histórico real. A data do copyright, isoladamente, não exige correção nem demonstra desatualização.
- **Aceite:** textos revisados e promessas editoriais verificadas na produção atual.

## Pontos fortes

- Os produtos possuem páginas próprias e explicações que ajudam a formular dúvidas antes do contato comercial.
- Endereço, telefone, email e CNPJ estão publicados no rodapé das páginas consultadas. Isso oferece referências verificáveis, embora a situação cadastral não tenha sido checada.
- A página de assessoria explica etapas de atendimento, acompanhamento e renovação, tornando o serviço mais concreto.
- O projeto para condomínios diferencia a oferta por meio de atividades de diagnóstico e orientação.
- Há CTAs recorrentes de contato e um skip link aparece na extração de páginas internas. Visibilidade, foco e funcionamento continuam pendentes.

## Acessibilidade, SEO e credibilidade: limites da conclusão

| Verificação | Resultado desta coleta |
|---|---|
| Contraste | Não medido; nenhum par de cores computadas disponível. Sem razões calculadas. Próxima coleta: texto normal 4,5:1, texto grande 3:1 e componentes aplicáveis 3:1 |
| Teclado, foco e menus | Não testados; não inferir funcionamento pelos textos de menu |
| Mobile, overflow, toque, zoom e reflow | Não testados; tamanhos previstos não foram executados |
| Movimento reduzido | Não testado |
| Alternativas textuais e headings | Indícios na extração; atributos e DOM precisam de confirmação |
| Idioma e landmarks | Não inspecionados no DOM |
| Console e requisições | Sem observação em runtime; erros da ferramenta não são erros do site |
| Metatags, canonical, robots, sitemap e dados estruturados | Não confirmados; falha de recuperação não prova ausência |
| Privacidade e envio de apólices | CTAs solicitam documentos; orientação de tratamento e políticas não confirmadas. Não é uma conclusão de irregularidade |
| Afirmações legais e de cobertura | Conteúdo identificado, sem auditoria jurídica ou validação de produtos |

## Evidências visuais e registros

**Nenhuma captura obtida.** Não há imagens de desktop ou mobile para embutir. A evidência deste relatório é textual, com fontes públicas vinculadas em cada achado.

- [Observações por página, destinos e condições previstas](evidencias-2026-11-06/observacoes.json).
- [Falhas de acesso, tentativas PSI e roteiro de reexecução](evidencias-2026-11-06/limitacoes.md).

## Ordem sugerida de execução

1. Revalidar na produção atual os resíduos de edição, links de WhatsApp e exemplos de RC; corrigir os que persistirem.
2. Confirmar títulos, nomes acessíveis de parceiros e estrutura semântica no HTML/DOM.
3. Completar inspeção em desktop e mobile, teclado e contraste, com capturas e console/rede.
4. Obter PSI mobile/desktop e verificar CrUX antes de priorizar otimizações de performance.

Para uma comparação futura com redesign, preservar esta versão como análise parcial e acrescentar uma coleta visual atual do site antigo. Sem essa etapa, a comparação deve se limitar aos aspectos textuais efetivamente observados.
