# Registro de limitações — 2026-11-06

Esta pasta contém evidências textuais e o registro das tentativas de medição. Não contém capturas de tela: nenhuma captura foi obtida.

## Acesso e ferramentas

- Skill lida: `/Users/gabrielcano/.codex/skills/site-audit-comparison/SKILL.md` e seu template `references/audit-report-template.md`.
- A referência `@RTK.md` foi procurada no projeto e em diretórios superiores relevantes; arquivo não encontrado.
- Ferramenta web: oito páginas retornaram conteúdo extraído com indicação de rastreamentos anteriores. As idades relativas estão preservadas em `observacoes.json`. Não se trata de uma coleta de HTML vivo feita em navegador.
- Terminal: `curl -IL --max-time 25 https://wlnegocioseseguros.com.br/` retornou `curl: (6) Could not resolve host: wlnegocioseseguros.com.br`. Isso evidencia uma limitação deste ambiente, não indisponibilidade pública do site.
- Navegador integrado: `The browser access host is unavailable`; inventário sem browsers disponíveis.
- Playwright instalado foi localizado. O primeiro carregamento do pacote do runtime falhou; o pacote alternativo carregou, mas o Chromium esperado não estava instalado. A tentativa com `channel: 'chrome'` encerrou com SIGABRT / `Target page, context or browser has been closed`, e registro de `kill EPERM`. A navegação não chegou a ocorrer. Nenhum teste de DOM foi executado.
- Fallback de UI nativa: `Computer Use was not approved to use Google Chrome`. Não houve inspeção visual.
- Nenhum formulário, conversa ou envio de documento foi submetido; o site não foi alterado.

## PageSpeed Insights

Tentativas públicas para `https://wlnegocioseseguros.com.br/`:

- [Interface mobile](https://pagespeed.web.dev/analysis?url=https%3A%2F%2Fwlnegocioseseguros.com.br%2F&form_factor=mobile).
- [Interface desktop](https://pagespeed.web.dev/analysis?url=https%3A%2F%2Fwlnegocioseseguros.com.br%2F&form_factor=desktop).
- Endpoint público `https://www.googleapis.com/pagespeedonline/v5/runPagespeed` com a URL do site e estratégias `mobile` e `desktop`.

As quatro tentativas não ficaram acessíveis pela ferramenta web. Nenhum resultado Lighthouse, LCP, TBT, CLS ou CrUX foi recebido. Não existe score zero ou estimativa substituindo dados ausentes.

## Outros recursos sem confirmação

`/robots.txt`, `/sitemap_index.xml`, `/feed/`, `/seguro-condominial/`, `/rc-profissional/embed/`, imagens e o destino WhatsApp não foram recuperados pela ferramenta. Houve erros de acesso ou `Cache miss`, sem status HTTP de origem verificável. Não devem ser classificados como 404, links quebrados ou falha do servidor.

## Reexecução necessária para fechar a baseline

1. Abrir as oito URLs em Playwright com acesso à rede e navegador operacional; salvar HTML, cabeçalhos, horário, versão do navegador e URLs finais.
2. Capturar viewport e página completa em 1440 × 900 e 390 × 844; salvar PNGs nesta pasta e embuti-los no relatório.
3. Testar menus, submenus, links internos e foco por teclado sem enviar formulários nem mensagens. Registrar overflow, alvos de toque, landmarks, nomes acessíveis, idioma e imagens.
4. Medir cores computadas e fundos efetivos, inclusive sobre imagens: razão mínima 4,5:1 para texto normal, 3:1 para texto grande e componentes aplicáveis. Registrar par, razão e critério; não calcular sobre cores presumidas.
5. Testar zoom de 200%, reflow a 320 CSS px, movimento reduzido, console e requisições com falha.
6. Rodar PSI mobile e desktop, preservar JSON e configuração, separar laboratório e CrUX. Anotar data, URL final, versão Lighthouse e métricas.
7. Revalidar os achados do relatório contra o DOM atual antes de tratá-los como defeitos confirmados da produção.
