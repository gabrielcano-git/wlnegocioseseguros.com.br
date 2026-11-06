# Condições da coleta — 06/11/2026

- Oito páginas antigas foram consultadas novamente pela ferramenta web. São extrações indexadas com idades relativas de uma semana a um ano, não respostas atuais do HTML da origem.
- A Home nova e a interna de Seguro Residencial retornaram `is not accessible via this tool`.
- `curl -I --max-time 15` para a Home nova retornou `Could not resolve host: gabrielcano-git.github.io` (exit 6).
- Playwright com o Chrome for Testing instalado, revisão 1243, encerrou o navegador com SIGABRT antes de criar a página. Não houve navegação, viewport executado ou captura nova.
- Não foi repetido o acesso nativo ao Chrome que já havia sido recusado por Computer Use na execução anterior; nenhuma permissão foi alterada.
- PageSpeed Insights foi solicitado para as duas URLs, nos modos mobile e desktop. As quatro páginas retornaram `is not accessible via this tool`. Sem métricas públicas ou informação sobre CrUX.
- Não foram executados testes de teclado, abertura do menu/diálogo, zoom/reflow, leitor de tela, estilos computados, console ou rede da URL pública.
- Viewports pretendidos para nova coleta: desktop 1440×900 e mobile 390×844; ambos não executados.
- Evidência alternativa obtida: fontes e relatórios versionados no commit `5f75d9769beaafcd65fadf322adf4fc0fe7a20e5`, e execução de deploy `42279534348` concluída com sucesso. O deploy bem-sucedido não substitui uma inspeção do HTML público.
- Os 84 relatórios Lighthouse JSON, seus HTMLs e o resumo têm correspondência com os hashes Git do commit. Seus resultados foram conferidos, mas não reexecutados nesta coleta.
- As imagens de tela salvas em `capturas/` foram extraídas desses relatórios de laboratório local. Não são capturas da URL pública. Condições: desktop 1350×940 / DPR 1; mobile 412×823 / DPR 1,75. As miniaturas JPEG têm resolução reduzida pelo Lighthouse; as capturas completas preservam a largura original.
- Contrastes calculados usam tokens declarados no CSS; nenhum par computado no navegador foi medido.
- Nenhum envio de mensagem, formulário, contratação, alteração de código do site ou nova publicação foi realizado nesta comparação.
