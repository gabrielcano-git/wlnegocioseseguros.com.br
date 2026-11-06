# Revisão das páginas internas — 06/11/2026

## Correção aplicada

O layout anterior colocava um índice de 17rem e um intervalo de 5rem antes do corpo do artigo. Em desktop, o início do texto ficava deslocado aproximadamente 22rem em relação ao título e ao breadcrumb, além de haver um limite independente de 47rem dentro da coluna restante.

As páginas internas agora usam, a partir de 768px:

- artigo na coluna esquerda, alinhado à borda do container do título e do breadcrumb;
- índice na coluna direita, de 14 a 18rem, com altura limitada ao viewport e rolagem própria;
- coluna principal com `minmax(0, 1fr)` e largura de parágrafos limitada a 70ch;
- espaçamento de colunas entre 2,5 e 5rem;
- imagem do cabeçalho com proporção 4:3 e largura máxima de 28rem;
- separação consistente entre as seções do artigo.

Nenhum texto foi alterado. As regras novas se restringem a `min-width: 48rem`; o layout mobile existente foi mantido. A página inicial não recebeu alterações de layout nesta revisão.

## Validação

- Build estático: passou.
- Verificação estática das 15 páginas HTML, incluindo a 404: passou.
- Inspeção da AST do CSS compilado: confirmou as regras de desktop sob `min-width:48rem`.
- Sintaxe do script de Playwright: passou.
- Playwright executado com Chromium instalado: **bloqueado antes de abrir a primeira página**. O macOS/sandbox negou `bootstrap_check_in ... MachPortRendezvousServer` com `Permission denied (1100)`.
- Nenhuma das 91 combinações de página/viewport foi executada. Não foram obtidos screenshots ou medições de DOM. O registro integral está em [playwright.json](playwright.json).

## Reexecutar em ambiente com navegador disponível

Na raiz do projeto:

```sh
npm ci --prefix site
npm run build
(cd site && npx playwright install chromium)
npm run check:browser
```

O script usa um navegador real com `route.fulfill` para servir os arquivos de `dist`; não depende de abrir uma porta TCP nem de conexão ao site de produção.

A validação cobre as 13 páginas internas, 95 seções e sete larguras: 320, 390, 768, 1024, 1280, 1440 e 1920px. Confere título, quantidade e conteúdo das seções, imagens, tabela de coberturas, âncoras, menus, diálogo de cotação, erros de console/recursos, overflow e relação de alinhamento entre artigo, hero, breadcrumb e índice. Não envia mensagens ou solicita cotações reais.

Em uma execução concluída, os resultados são gravados em `playwright.json` e as capturas em `site/.cache/playwright/`. Os resultados atuais registram somente a tentativa bloqueada.
