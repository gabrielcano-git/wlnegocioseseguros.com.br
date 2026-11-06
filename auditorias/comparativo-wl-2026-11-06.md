# Comparativo do site antigo com a nova versão WL

**Data:** 06/11/2026 - America/Sao_Paulo.  
**Site antigo:** [wlnegocioseseguros.com.br](https://wlnegocioseseguros.com.br/).  
**Nova versão informada:** [prévia no GitHub Pages](https://gabrielcano-git.github.io/wlnegocioseseguros.com.br/).  
**Base anterior:** [auditoria de 06/11/2026](auditoria-wl-2026-11-06.md), parcial e textual.  
**Natureza deste relatório:** comparação de conteúdo e implementação. A aparência e o funcionamento da versão publicada não puderam ser inspecionados.

## Resumo executivo

A nova versão organiza melhor a oferta de seguros e torna o caminho até o atendimento mais específico. O visitante passa a encontrar produtos por necessidade, acessar explicações organizadas em seções e iniciar uma conversa que já informa qual seguro procura. O conteúdo institucional e os dados públicos de contato foram preservados.

As melhorias mais concretas são a contextualização das cotações, a revisão de erros editoriais, os títulos de página com identificação da empresa e a padronização das páginas internas. Há também uma base técnica explícita para acessibilidade e uma implementação estática compacta. Esses pontos foram confirmados em código e HTML gerado; seus benefícios de uso são expectativas fundamentadas, sem medição de comportamento de visitantes.

A migração ainda precisa recuperar a apresentação dos parceiros e os depoimentos dentro do novo site. Performance, acabamento visual, uso no celular, foco e interação por teclado continuam sem validação. Portanto, este relatório permite demonstrar avanços concretos de estrutura e conteúdo, mas não comprova aumento de vendas, melhora de posicionamento ou redução do tempo de carregamento.

## Escopo e qualidade das evidências

O site antigo foi analisado na auditoria textual de oito páginas: Home, Auto, Residencial, Sobre Nós, Assessoria, Projeto Condomínio Seguro, Parceiros e RC Profissional. Nesta execução, a Home antiga voltou a ser recuperada por extração indexada, com rótulo de coleta na semana anterior. Sua estrutura textual se mostrou compatível com o registro da auditoria; isso não confirma o HTML atual da origem.

Na nova versão foram inspecionados os arquivos-fonte e o HTML local das 14 páginas de conteúdo: Home e 13 internas, que contêm 95 seções editoriais. As oito páginas da base anterior têm correspondentes. As demais internas cobrem Vida, Condominial, RC Geral, Seguros de Pessoas, Vida em Grupo e DIT. Essa cobertura não significa que esses produtos foram criados pelo redesign: parte deles já aparecia na navegação antiga, mas não havia sido auditada integralmente. Existe ainda uma página 404.

Os arquivos de templates, conteúdo, estilos e JavaScript foram consultados no repositório remoto e seus hashes conferidos contra os arquivos locais: os quatro coincidem. O HTML local das 14 páginas também coincide com a geração atual dos templates. Isso vincula a análise ao código disponível no GitHub, sem confirmar que o mesmo artefato está servido pelo Pages.

Desktop 1440 × 900 e mobile 390 × 844 eram as condições previstas na auditoria. Nenhum dos dois sites teve esses viewports executados nesta coleta. Não há screenshots comparáveis, DOM vivo, estilos computados, observação de console/rede ou teste de envio. O bloqueio de acesso da ferramenta não demonstra indisponibilidade dos sites.

## Comparação por dimensão

| Dimensão | Site antigo: evidência disponível | Nova versão: evidência disponível | Avaliação |
|---|---|---|---|
| Organização e descoberta | Navegação por famílias de seguros e apresentação institucional dos pilares na extração da Home | Entrada por necessidade, produtos pessoais e empresariais, links para coberturas e escolha de seguro | Oferta mais explícita no conteúdo e no menu; facilidade real de uso ainda não medida |
| Cotação e atendimento | CTAs de diferentes páginas apontavam para mensagem genérica de seguros | Cards e páginas internas informam o produto na mensagem de WhatsApp | Melhoria confirmada nos destinos; potencial de reduzir perguntas repetidas no atendimento |
| Leitura das páginas internas | Conteúdo próprio por produto; indícios de hierarquia irregular na extração | Título principal, breadcrumb, índice de seções, subtítulos e chamadas de contato compartilhados | Estrutura de leitura padronizada e verificável no HTML |
| Conteúdo e confiança | Resíduos numéricos no Residencial, inconsistência em caso de RC e erro de digitação | Resíduos removidos, profissão uniformizada, redação revisada e ressalva sobre condições da apólice | Correções editoriais confirmadas; casos e afirmações de cobertura não foram auditados |
| Identidade visual | Não houve captura que permita avaliar cores, espaçamento ou tipografia antigos | Tokens de marca, tipografia, componentes e regras responsivas centralizados | Consistência planejada confirmada no CSS; superioridade visual não demonstrada |
| Acessibilidade | Skip link identificado; sem DOM ou contraste medidos | Idioma, região principal, um H1 por página, alternativas de imagens, foco e movimento reduzido no código | Base técnica mais explícita e verificável; sem certificação ou comparação completa |
| SEO técnico | Home retornava título pouco descritivo; metadados atuais não confirmados | Títulos com marca, descriptions e Open Graph; canonical/sitemap condicionados à configuração | Melhora na identificação das páginas; indexação definitiva ainda pendente |
| Performance mobile | Sem Lighthouse, LCP, TBT ou CLS | Sem Lighthouse, LCP, TBT ou CLS | Sem comparação numérica disponível |
| Performance desktop | Sem medição | CSS e JS compactos e imagens modernas no build, sem medição | Arquitetura favorável, sem prova de ganho de velocidade |
| Migração e credibilidade | Depoimentos e parceiros apresentados na origem, segundo extração | Acesso a depoimentos e diretório por links ao site antigo | Migração parcial; perda de autonomia dessas áreas no novo site |

## O que melhorou e por que isso importa

### 1. O atendimento recebe o contexto do seguro

No material antigo, diferentes CTAs levavam à mesma mensagem genérica. Na nova implementação, o botão de Auto monta uma mensagem sobre Seguro Auto; o de Residencial informa Seguro Residencial, e as páginas internas usam o respectivo título. O número público de atendimento foi preservado. Links gerais continuam apropriados para dúvidas sem produto definido.

Isso permite iniciar o atendimento com uma informação que antes se perdia no clique. É uma melhoria funcional dos links, sem evidência de aumento de conversão ou redução efetiva de tempo de atendimento. Evidências: `site/src/content.mjs`, função `wa`, e mensagens extraídas em `verificacao-estatica.json`.

### 2. Os produtos ficam associados ao que o visitante quer proteger

A Home passa a oferecer entradas para carro, casa e família, com acesso aos produtos empresariais. O menu distingue necessidades pessoais e de negócio. Cada card separa a ação de conversar sobre cotação da ação de conhecer coberturas. A proposta da assessoria aparece em linguagem direta, com apresentação de três etapas de acompanhamento.

A mudança cria uma sequência mais orientada à escolha do visitante. É uma avaliação da arquitetura de conteúdo; posição efetiva em tela e facilidade para encontrar os itens precisam de teste visual. Evidência: `site/src/templates.mjs`, funções `header` e `home`.

### 3. Páginas extensas ganham um índice e estrutura consistente

As 13 páginas internas compartilham breadcrumb, título, introdução, índice com links para seções e contato. O conteúdo foi organizado em 95 seções. O CSS limita a largura de leitura dos parágrafos a 70 caracteres tipográficos e prevê o índice lateral no desktop.

O benefício esperado é localizar assuntos específicos e retomar o contato sem precisar percorrer todo o texto. O funcionamento das âncoras, a rolagem e a ausência de sobreposição ainda precisam ser observados em navegador. Evidências: template `detail`, `.reading` e `.page-index`.

### 4. Erros que prejudicavam o cuidado percebido foram corrigidos

O resíduo `$9`, identificado três vezes na extração antiga de Residencial, não aparece no HTML novo. O relato de Otávio em RC mantém a profissão inicial de forma consistente, e os valores estão apresentados no padrão brasileiro. O erro de digitação observado no pilar Agilidade também foi corrigido.

Essas alterações eliminam ambiguidades editoriais conhecidas. A apresentação dos relatos informa sua origem na WL, mas não comprova sua veracidade nem esclarece integralmente se são casos reais ou ilustrativos. Evidência: conteúdo e HTML de Residencial, RC Profissional e Home.

### 5. As páginas passam a se identificar melhor

A Home antiga era retornada como “Home -”. A nova usa título descritivo seguido da marca, e todas as 14 páginas de conteúdo têm description preenchida e um H1. Os templates incluem informações de compartilhamento Open Graph e idioma português do Brasil.

Isso melhora a identificação técnica das páginas em abas e oferece metadados aos serviços que os utilizam. Não demonstra melhora de ranking ou aparência final em buscadores. Evidências: `shell` e inventário de títulos em `verificacao-estatica.json`.

### 6. Há uma base verificável para acessibilidade

O HTML declara idioma e região principal; as imagens possuem atributo alternativo, inclusive vazio quando tratadas como decorativas. Os estilos incluem foco visível e preferência por movimento reduzido. O JavaScript prevê Escape no menu e restauração do foco após fechar o diálogo de escolha de seguro. O FAQ usa elementos nativos `details` e `summary`.

Os seis pares de cores declaradas avaliados têm razões entre 5,15:1 e 7,93:1, acima de 4,5:1 para texto normal nesses pares. São cálculos de tokens, não leitura das cores efetivamente compostas em tela. O site antigo não teve contraste medido, portanto não há delta de acessibilidade demonstrado. Evidências: CSS, JavaScript e tabela de contraste deste relatório.

### 7. A manutenção ganha componentes compartilhados

Cabeçalho, rodapé, chamadas de contato e estrutura editorial são gerados por templates comuns. A mesma alteração pode ser propagada de forma consistente a todas as páginas. A aplicação entregue ao navegador usa HTML estático, CSS e JavaScript próprio; não carrega o runtime de um framework de interface nem fontes remotas.

O build contém imagens AVIF/WebP com alternativas de tamanho, lazy loading para imagens secundárias e dimensões declaradas. São características favoráveis à eficiência e à estabilidade de layout. Não é possível quantificar economia frente ao site antigo nem redução de custos operacionais. Evidências: templates, build e inventário dos assets.

### 8. As informações institucionais continuam acessíveis

Telefone, email, endereço e CNPJ permanecem no rodapé. Os pilares, a assessoria e o projeto de condomínios continuam representados. O novo rodapé também organiza links para produtos e páginas institucionais.

Aqui há preservação de um ponto forte do site antigo, combinada com nova organização. A existência desses dados não equivale a uma verificação cadastral da empresa.

## Situação dos achados da auditoria anterior

| Achado original | Situação no novo código/HTML | Evidência e limite |
|---|---|---|
| Resíduos `$9` em Residencial | Resolvido na implementação | Nenhuma ocorrência nos 14 HTMLs; comparar com registro antigo |
| Cotação perde o contexto do produto | Resolvido nos links por produto | Mensagens incluem o seguro; links gerais permanecem gerais; abertura do WhatsApp não testada |
| Inconsistência de profissão e valores em RC | Parcialmente resolvido | Redação uniformizada; natureza e veracidade dos casos ainda sem comprovação |
| Parceiros sem identificação textual clara | Alterado; não resolvido integralmente | Diretório substituído por acesso ao site antigo; empresas não identificadas localmente |
| Título da Home pouco descritivo | Resolvido no HTML gerado | Título descritivo com marca; HTML publicado não recuperado |
| Hierarquia editorial irregular | Melhorada no HTML; aceite pendente | Um H1 e seções H2 nas internas; landmarks definidos; leitura assistiva não testada |
| Erros de texto e sinais de atualização | Parcialmente resolvido | Erro de Agilidade corrigido; promessa de conteúdo semanal permanece sem histórico verificado |

## Medições disponíveis e limites de comparação

| Indicador | Antigo | Novo | Interpretação |
|---|---|---|---|
| Lighthouse mobile e desktop | Não obtido | Não obtido | Sem score ou diferença calculável |
| LCP, TBT e CLS | Não obtidos | Não obtidos | Sem conclusão sobre carregamento e estabilidade percebida |
| Dados reais CrUX | Disponibilidade desconhecida | Disponibilidade desconhecida | Sem evidência da experiência de visitantes |
| Páginas de conteúdo inspecionadas | 8 por extração na auditoria | 14 em HTML local | Diferença de escopo; não significa aumento de 75% na oferta |
| CSS do build | Não medido | 23.550 bytes | Arquivo não comprimido; não representa tráfego ou peso total da página |
| JavaScript do build | Não medido | 6.189 bytes | Arquivo não comprimido; sem comparação com a origem |
| Assets da pasta do build | Não medidos | 988.447 bytes | Soma de todas as alternativas de imagem e recursos; não é download de uma visita |

Não houve condições equivalentes para medir os dois sites. Nenhuma diferença percentual de performance, tráfego, leads, receita ou classificação SEO foi estimada. PageSpeed Insights ficou inacessível nas tentativas mobile das duas URLs; desktop também não foi medido. Uma execução futura deve registrar dispositivo, versão do Lighthouse, throttling e JSON de cada URL.

### Contraste calculado dos tokens do novo site

| Texto / fundo declarado | Razão | Referência para texto normal |
|---|---|---|
| Marrom `#6B4A30` / branco `#FFFFFF` | 7,93:1 | Acima de 4,5:1 |
| Marrom `#6B4A30` / verde claro `#C8DFBE` | 5,57:1 | Acima de 4,5:1 |
| Branco `#FFFFFF` / verde escuro `#435B3E` | 7,49:1 | Acima de 4,5:1 |
| Secundário `#71675D` / branco `#FFFFFF` | 5,53:1 | Acima de 4,5:1 |
| Secundário `#71675D` / claro `#F8F7F3` | 5,15:1 | Acima de 4,5:1 |
| Verde escuro `#435B3E` / verde claro `#C8DFBE` | 5,26:1 | Acima de 4,5:1 |

Pares computados no navegador: nenhum. Os valores não cobrem transparências, texto sobre fotografia, estados de interação ou todos os componentes e não certificam conformidade WCAG.

## Pendências e pontos de atenção

As prioridades usam High para tarefa importante bloqueada ou seriamente prejudicada, Medium para fricção relevante e Low para ajuste limitado. Não foi confirmado um bloqueio High na jornada publicada.

### Medium - Recuperar parceiros e depoimentos no novo site

A nova página de parceiros não oferece o diretório completo, e a seção de depoimentos envia o visitante à Home antiga. Isso interrompe a experiência de consulta dentro da nova versão e mantém dependência da origem. É uma limitação concreta da migração frente ao conteúdo anterior, sem evidência de perda comercial. Recuperar os materiais reais e seus nomes/destinos antes de substituir a origem. Evidências: Home e `/parceiros-wl/` no template/conteúdo.

### Medium para lançamento definitivo - Configurar indexação

O `robots.txt` local contém `Disallow: /`. Canonical e sitemap só são gerados quando `SITE_URL` está configurada; as 14 páginas locais não têm canonical. O workflow local chama o build sem definir essa variável. Essa configuração é coerente com uma prévia, mas exige ajuste antes da publicação definitiva. O robots servido pelo Pages não foi recuperado; não se afirma bloqueio atual dos buscadores no domínio final.

### Medium - Validar layout, teclado e escolha de seguro

Testar desktop, mobile, reflow a 320px, zoom, foco, menu, diálogo, tabela condominial e links de contato. Existe código para esses estados, mas sua execução não foi observada. O botão de cotação no cabeçalho é um botão dependente de JavaScript; sem JavaScript, os links de produtos e contato permanecem, mas esse gatilho não oferece um link alternativo direto. A prioridade se refere ao principal caminho comercial e à necessidade de verificar acesso equivalente.

### Low - Conferir a página 404 no subdiretório

A 404 usa caminhos a partir da raiz, enquanto a prévia informada está em `/wlnegocioseseguros.com.br/`. Ajustar ou testar esses destinos para evitar que a recuperação de uma URL inexistente leve à raiz de outro contexto. Risco restrito à jornada de erro, identificado estaticamente; ocorrência pública não testada.

### Low - Completar revisão editorial e materiais de marca

A promessa de conteúdo semanal continua sem histórico confirmado. O novo layout usa assinatura tipográfica e imagens ilustrativas geradas por IA, segundo a documentação do projeto; não devem ser apresentadas como fotos reais de clientes ou equipe. Confirmar identidade oficial, imagens, origem dos relatos e conteúdo securitário com a WL. A revisão desta análise se limita à consistência editorial.

## Evidências visuais e roteiro de conclusão

Não foram obtidas capturas do site antigo nem do novo. Não há comparação visual lado a lado neste relatório, e os arquivos de imagem ilustrativos do projeto não foram usados como evidência de telas reais.

Para concluir a avaliação visual, capturar Home, Residencial, RC e Parceiros em 1440 × 900 e 390 × 844 nos dois sites; testar menu, âncoras e cotação sem enviar mensagens; observar console e rede; medir estilos computados e rodar Lighthouse mobile/desktop sob as mesmas condições. A aprovação final deve também verificar os caminhos do GitHub Pages e a migração do conteúdo que ainda depende do site antigo.

## Fontes e rastreabilidade

- [Site antigo - Home](https://wlnegocioseseguros.com.br/): extração indexada recuperada nesta execução, compatível com a base textual.
- [Nova versão informada](https://gabrielcano-git.github.io/wlnegocioseseguros.com.br/): acesso direto não concluído pelas ferramentas.
- [Templates no GitHub](https://github.com/gabrielcano-git/wlnegocioseseguros.com.br/blob/main/site/src/templates.mjs), [conteúdo](https://github.com/gabrielcano-git/wlnegocioseseguros.com.br/blob/main/site/src/content.mjs), [estilos](https://github.com/gabrielcano-git/wlnegocioseseguros.com.br/blob/main/site/src/styles.scss) e [JavaScript](https://github.com/gabrielcano-git/wlnegocioseseguros.com.br/blob/main/site/src/app.js): recuperados pelo conector; correspondência local confirmada por hash Git de blob. Hashes identificam os arquivos coletados, independentemente de alterações futuras em `main`.
- [Auditoria anterior](auditoria-wl-2026-11-06.md) e [evidências anteriores](evidencias-2026-11-06/observacoes.json).
- [Inventário e verificações desta execução](comparativo-evidencias-2026-11-06/verificacao-estatica.json), [hashes remotos](comparativo-evidencias-2026-11-06/github-coleta.json) e [limitações de acesso](comparativo-evidencias-2026-11-06/limitacoes.md).
- Código coletado em `comparativo-evidencias-2026-11-06/remoto/`. Reexecutar a coleta local com `node auditorias/comparativo-evidencias-2026-11-06/coletar.mjs`.
- Documentação de apoio: `site/docs/mapeamento.md`, `site/docs/visual-assets.md`, `site/docs/desktop-review/README.md` e `.github/workflows/pages.yml`. Esses registros não substituem verificação atual do ambiente servido.
