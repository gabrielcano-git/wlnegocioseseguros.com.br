# Core Web Vitals — 6 de novembro de 2026

As otimizações foram implementadas no site estático local com a skill
`../../../.claude/skills/core-web-vitals/SKILL.md`. A nota 100 ainda não foi
medida. Não houve publicação nem alterações no WordPress de produção.

## Alterações

- `src/templates.mjs`: candidatos AVIF e WebP de 320, 480, 640 e 1024 px,
  com `sizes` por componente. Os cards deixam de anunciar metade da tela
  quando ocupam um terço do container. As imagens abaixo da primeira tela
  continuam com `loading="lazy"`; a imagem principal continua eager/high.
- `scripts/build.mjs` e `scripts/critical-css.mjs`: estilos da primeira tela
  copiados do CSS compilado, preservando a ordem das regras e media queries.
  O HTML inclui 12.788 bytes de CSS na home e 10.986 nas internas. O CSS
  completo carrega sem bloquear a primeira renderização, com fallback
  `noscript`. A imagem principal tem preload responsivo com os mesmos
  candidatos e tamanhos do `picture`.
- `src/app.js`: a classe que oculta o menu móvel passa a ser definida no
  `head`, antes da primeira pintura, pelo build. Antes, dependia da execução
  do script externo com `defer`, permitindo o menu expandido na primeira tela.
- `src/styles.scss`: `scrollbar-gutter: stable` reserva o espaço da barra
  de rolagem ao abrir o diálogo de cotação. O efeito visual depende de
  verificação no navegador.

## Arquivos de imagem gerados

As 32 variantes em `assets/` foram reexportadas diretamente dos quadrantes
de 627×627 px de `design/fotografias-originais.png`, usando Sharp 0.35.5,
AVIF qualidade 45 e WebP qualidade 76, esforço 6. As imagens de 1024 px
continuam sendo ampliações da fonte; não contêm detalhes adicionais.
Todas as variantes foram decodificadas e suas dimensões conferidas. A
comparação visual das quatro fotos foi feita em uma montagem antes/depois,
sem validação do layout das páginas.

| AVIF de 640 px | Antes | Depois | Redução |
| --- | ---: | ---: | ---: |
| Auto | 36.166 bytes | 24.817 bytes | 31,4% |
| Residencial | 39.331 bytes | 27.455 bytes | 30,2% |
| Vida | 29.475 bytes | 20.228 bytes | 31,4% |
| Condomínio | 63.644 bytes | 46.771 bytes | 26,5% |

A home passa de 30.577 para 47.119 bytes de HTML, por incorporar o CSS e
mais candidatos de imagem. Com gzip, passa de 6.802 para 10.360 bytes.
O inventário total de assets cresce porque oferece mais resoluções;
o navegador seleciona um candidato por imagem. Esses números são tamanhos
de arquivos e compressão local, não uma medição de transferência ou LCP.

## Validação

`npm run build`, `npm run check` e `git diff --check` passaram. O check
estático cobre as 15 páginas geradas, arquivos referenciados em `srcset`,
correspondência do preload, dimensões, metadados, links e contraste dos
tokens. Também verifica limites de 14 KiB de CSS crítico, 80 KiB de HTML,
10 KiB de JavaScript e 50 KiB por AVIF de 640 px.

O servidor local recebeu `listen EPERM` em `127.0.0.1:4173`. O Chromium
instalado encerrou antes da navegação; a versão esperada pelo Playwright não
está instalada. O registry npm não resolveu (`ENOTFOUND`), impedindo baixar
Lighthouse. A revisão pelo Chrome também não estava autorizada pela
ferramenta de Computer Use. Nenhum teste visual de página, LCP, INP, CLS ou
nota Lighthouse foi concluído neste ambiente.

Evidências:

- [Comparação estática e tamanhos](static-comparison.json).
- [Checks estáticos](../validacao-estatica.json).
- [Tentativa de Playwright](../desktop-review/playwright.json).
- [Tentativa da auditoria](lighthouse/summary.json).

## Medir a meta de 100

Em um ambiente com rede, Chrome e permissão para abrir a porta local, rode
na raiz do repositório:

```sh
npm run build
npm run audit:performance
```

O comando obtém Lighthouse pelo npm, testa as 14 páginas de conteúdo em
mobile e desktop e registra três execuções por combinação. Os relatórios
HTML/JSON e `summary.json` ficam em `site/docs/core-web-vitals/lighthouse/`.
A versão do Lighthouse e os dados do ambiente ficam registrados nos
resultados. Há erro se a mediana de qualquer combinação ficar abaixo de
100, ou se a execução for bloqueada. Para uma checagem rápida, use
`AUDIT_RUNS=1 npm run audit:performance`.

O runner local usa o mesmo HTML do build, mas não verifica CDN, compressão
HTTP, cache, latência ou TTFB da hospedagem definitiva. Após a publicação,
é necessário medir também a URL pública.

Lighthouse fornece métricas de laboratório e TBT; ele não certifica INP de
usuários reais. Core Web Vitals devem ser conferidos no percentil 75 de
visitas reais, com LCP ≤ 2,5 s, INP ≤ 200 ms e CLS ≤ 0,1. A nota de
performance pode variar entre execuções.

Referências: [otimizar LCP](https://web.dev/articles/optimize-lcp),
[otimizar CLS](https://web.dev/articles/optimize-cls),
[otimizar INP](https://web.dev/articles/optimize-inp) e
[pontuação Lighthouse](https://developer.chrome.com/docs/lighthouse/performance/performance-scoring).
