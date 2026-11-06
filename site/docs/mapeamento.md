# Mapeamento do redesign — 06/11/2026

## Referências e método

- Cores: `../../DESIGN.md`. Verde claro `#C8DFBE`, verde suave `#758C6E`, marrom `#6B4A30`, marrom médio `#B07A51`, branco. Verde de ação `#435B3E` derivado para contraste com texto branco; cinzas e fundo neutros de apoio.
- Conteúdo: [WL Negócios & Seguros](https://wlnegocioseseguros.com.br/), páginas internas e extrações indexadas consultadas em 06/11/2026.
- Estrutura: [Youse](https://www.youse.com.br/): navegação por produtos, cotação em destaque, acesso à equipe, confiança na assessoria e navegação institucional. Não foram copiados preços, clientes, promoções ou funcionalidades da Youse.
- Stack inicial: repositório sem aplicação ativa, com exclusões anteriores em andamento, `DESIGN.md`, auditoria textual e workflow de GitHub Pages. As exclusões anteriores foram preservadas. `RTK.md` não foi encontrado no projeto ou nos ancestrais consultados.
- O inventário usa o conteúdo extraído pela ferramenta web, não uma inspeção de DOM. A busca indexada recuperou Vida, Condominial e RC depois de as aberturas diretas retornarem `Cache miss`.

## Rotas cobertas

| Rota | Conteúdo e interações |
|---|---|
| `/` | Hero, Auto/Residencial/Vida, produtos empresariais, assessoria, projeto para condomínios, quatro pilares, diferenciais, acesso a depoimentos, conteúdo RC, FAQ e contato |
| `/seguro-auto/` | Casco, opcionais, motorista de aplicativo, RCF, APP, preço e cotação |
| `/seguro-residencial/` | Cobertura básica e seu valor, adicionais, danos a terceiros, assistência e preço |
| `/seguro-de-vida/` | Definição, personagens, capital segurado, morte, IFPD, IPA, DMHO, acidentes, doenças graves, DIT e planejamento |
| `/seguro-condominial/` | Contratação, responsabilidades, projeto, coberturas e tabela Simples × Ampla |
| `/seguros-de-responsabilidade-civil/` | Definição, danos, ação judicial, indenização, exclusões e modalidades de RC |
| `/rc-profissional/` | E&O, contratação, indenização, elegibilidade, exclusões e relatos publicados pela WL |
| `/seguros-de-pessoas/` | Sobrevivência, risco, individual/coletivo, previdência e vida |
| `/seguro-de-vida-em-grupo/` | Individual/coletivo, contratação compulsória/facultativa, convenções e atendimento |
| `/seguro-diaria-de-incapacidade-temporaria-dit/` | Situação de João apresentada na origem, incapacidade temporária, diárias e valor contratado |
| `/sobre-nos/` | História, missão, visão e valores |
| `/assessoria-de-seguros/` | Renovação, cotação, esclarecimentos, contratação e suporte |
| `/projeto-condominio-seguro/` | Visita diagnóstica, personalização, valores, capacitação, plantão e escopo do seguro |
| `/parceiros-wl/` | Apresentação da rede e acesso ao diretório original |
| `/404.html` | Retorno à página inicial |

`Seguros de Bens` na origem resolve para `www.wlnegocioseseguros.com.br/`, sem página de categoria confirmada. No redesign, os produtos estão no menu Seguros e na seção inicial.

## Estados implementados

- Menu de navegação móvel com estado aberto/fechado, `aria-expanded`, nome contextual e Escape.
- Submenus de produtos e institucional usando `details/summary`; fechamento externo e Escape.
- Diálogo nativo para escolher o produto e abrir o WhatsApp; fechamento por botão, Escape e clique fora; restauração de foco ao gatilho.
- FAQ com `details/summary`, disponível sem JavaScript.
- Navegação interna por âncoras e índice de seções nas páginas de conteúdo.
- Links de WhatsApp incluem o produto, sem dados pessoais e sem envio automático.
- Sem formulário, armazenamento de dados pessoais, contratação ou cálculo de prêmio.
- Layouts previstos para 320, 390, 768, 1024 e 1440px, sem medição visual efetiva. Textos editoriais a partir de 14px, foco visível, imagens dimensionadas e movimento reduzido.

## Conteúdo preservado e revisão editorial

Todos os produtos identificados no menu da origem foram representados. Os temas e dados recuperados foram transpostos para seções de leitura, com ajustes de pontuação, erros evidentes e textos de interface. A página de DIT conserva a narrativa; as datas inconsistentes da linha do tempo original não foram convertidas em uma nova cronologia factual. Os exemplos de RC são identificados como relatos publicados pela WL; não constituem nova comprovação de casos ou resultados.

Foram retirados resíduos `$9` da página residencial e a referência a uma seta da apresentação de assessoria. A inconsistência engenheiro/arquiteto foi uniformizada com a identificação inicial do relato. As afirmações de coberturas e normas foram transpostas do material institucional e não receberam auditoria jurídica ou securitária.

Limitações de preservação de conteúdo:

1. As imagens de depoimentos não foram recuperadas nem transcritas. A seção mantém acesso à home original; nenhum depoimento foi inventado.
2. Nomes e destinos dos oito parceiros não foram confirmados. A página mantém link ao diretório original; logotipos e empresas não foram inventados.
3. Diagramas em imagem sobre coberturas opcionais e itens de avaliação do condomínio não foram recuperados. Acesso às páginas originais preservado.
4. Posts/links mencionados no texto extraído sem destino verificável não foram inventados. As páginas relevantes mantêm acesso ao original e à equipe.
5. A logo é apresentada como assinatura tipográfica WL. O arquivo vetorial oficial não estava disponível no repositório.

## Validação executada

- `node --check` nos arquivos JavaScript de aplicação e build: passou.
- `npm --prefix site run build`: passou; HTML, CSS compilado, JS e imagens em `dist`.
- `npm --prefix site run check`: verificação estática de todas as páginas, destinos internos, âncoras, metadados, imagens, destinos de WhatsApp e tokens de contraste. Resultado em `validacao-estatica.json`.
- Razões de contraste calculadas sobre os tokens declarados, entre 5,15:1 e 7,93:1. Não foram lidos estilos computados em navegador ou fundos efetivos.
- Tentativa Playwright com Chromium headless instalado: bloqueada antes da criação da página, com `MachPortRendezvousServer: Permission denied`.
- Navegador integrado: inventário sem browsers, `The browser access host is unavailable`.
- Servidor local de prévia: `listen EPERM` na porta 4173. Nenhuma prévia HTTP foi verificada.
- PageSpeed/Lighthouse: não medidos. Performance, Acessibilidade, Boas práticas e SEO sem scores.

## Verificação ainda necessária em ambiente com navegador

1. Abrir cada rota em desktop 1440×900, tablet 768×1024 e mobile 390×844; conferir também reflow a 320px e zoom de 200%.
2. Capturar telas reais e conferir imagens, quebras de texto, tabelas, menus e ausência de overflow.
3. Testar cotação, FAQ, navegação por teclado, foco e diálogo sem enviar mensagens.
4. Conferir console, requisições e acessibilidade automatizada com axe.
5. Rodar Lighthouse mobile/desktop no build servido; registrar os quatro scores, URL, versão e métricas.
6. Recuperar logotipo oficial, depoimentos, parceiros e diagramas da origem para a migração integral da mídia.

Sem runtime WebMCP especificado: não foi inventada uma API. A navegação utiliza HTML semântico, nomes acessíveis e URLs estáveis.
