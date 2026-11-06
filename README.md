# WL Negócios & Seguros — redesign

Site estático com a paleta de `DESIGN.md` e organização inspirada na referência estrutural da Youse. A identidade visual utiliza fotografias, verdes suaves, marrom e tipografia de sistema. Não há setas decorativas, ícones de fonte, fontes remotas ou frameworks de JavaScript no navegador.

## Abrir localmente

Requisitos: Node.js 22 ou superior e npm.

```sh
npm ci --prefix site
npm run build
npm run dev
```

Acesse `http://127.0.0.1:4173`. Depois de alterações, rode `npm run build` novamente e recarregue a página. O servidor não faz compilação nem live reload. Também é possível abrir `site/dist/index.html` diretamente no navegador; as páginas usam caminhos relativos.

```sh
npm run check
```

Para conferir o conteúdo e o layout das páginas internas com Playwright:

```sh
(cd site && npx playwright install chromium)
npm run check:browser
```

O teste cobre as 13 páginas internas em sete larguras, compara as 95 seções com o conteúdo-fonte e verifica alinhamento, overflow, imagens, tabelas e navegação. Veja [a revisão do desktop e o resultado da execução](site/docs/desktop-review/README.md). A tentativa neste ambiente foi bloqueada antes da navegação; não há aprovação visual de navegador.

Esse comando verifica o resultado estático: destinos locais, âncoras, imagens, metadados, idioma, H1, destinos de WhatsApp e contraste dos tokens usados. Ele não substitui testes em navegador.

## Estrutura

- `site/src/content.mjs`: textos, produtos e destinos de atendimento.
- `site/src/templates.mjs`: componentes reutilizados e templates de páginas.
- `site/src/icons.mjs`: SVGs Font Awesome Free.
- `site/src/styles.scss`: estilos BEM e tokens da marca.
- `site/src/app.js`: menu, seleção de seguros e comportamento do diálogo.
- `site/assets/`: fotografias otimizadas em AVIF/WebP e favicon.
- `site/tailwind.config.cjs`: utilitários de layout e configuração do Tailwind.
- `site/scripts/`: compilação, servidor local e verificações estáticas.
- `site/dist/`: HTML, CSS, JS e imagens compilados; saída descartável para hospedagem estática.

SCSS é compilado por Sass; Tailwind gera os utilitários a partir dos templates. Nenhum desses pacotes é carregado no navegador. O site mantém conteúdo e navegação disponíveis sem JavaScript; o diálogo de cotação é uma melhoria progressiva sobre o link para os seguros.

## Entrega e limites de validação

Foram geradas 14 páginas de conteúdo e uma página 404. Todas as páginas têm navegação e rodapé compartilhados. As cotações levam ao número público da WL com a mensagem contextualizada, sem enviar automaticamente uma mensagem.

O build e as verificações estáticas passaram. A execução de Chromium/Playwright foi bloqueada pelo ambiente (`MachPortRendezvousServer: Permission denied`). O servidor de prévia também não pôde abrir a porta por `listen EPERM`. Assim, não foram realizados testes visuais, de overflow, teclado ou interação em runtime. PageSpeed/Lighthouse não foram medidos.

Conteúdo da origem foi recuperado por extrações indexadas de datas diferentes; não foi possível capturar o DOM atual. Depoimentos em imagem e o diretório completo de parceiros continuam acessíveis por links ao site original. As imagens novas são ilustrativas e geradas por IA, não fotografias de clientes ou da equipe. Veja [mapeamento e pendências](site/docs/mapeamento.md) e [origem das imagens](site/docs/visual-assets.md).

## Publicação

Nenhuma publicação, push ou alteração no WordPress de produção foi feita. O workflow existente do GitHub Pages agora usa `site/dist` como artefato de build.

Sem `SITE_URL`, o build gera `robots.txt` que bloqueia rastreamento da prévia. Ao preparar uma publicação definitiva, configure a origem completa com HTTPS para gerar canonical, sitemap e robots de produção:

```sh
SITE_URL=https://dominio-definitivo.example npm run build
```

A URL de produção precisa considerar eventual subdiretório do GitHub Pages. Os links das páginas de conteúdo são relativos; a página 404 usa caminhos a partir da raiz e deve ser ajustada se o destino definitivo tiver um prefixo de caminho.
