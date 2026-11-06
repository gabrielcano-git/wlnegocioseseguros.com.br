import { shell, esc } from './templates.mjs';

// Source PDFs stay outside site/; only the listed public reports enter the build.
export const reports = [
  {
    file: 'comparativo-publicado-wl-2026-11-06.pdf',
    title: 'Comparativo atualizado dos sites',
    description: 'Comparação do site antigo com a nova versão, incluindo resultados de laboratório, capturas e limitações da análise.'
  },
  {
    file: 'comparativo-site-antigo-novo-wl-2026-11-06.pdf',
    title: 'Comparativo inicial de conteúdo e implementação',
    description: 'Primeira comparação da organização, dos textos e da implementação das duas versões.'
  },
  {
    file: 'relatorio-site-atual-wl-2026-11-06.pdf',
    title: 'Auditoria do site antigo',
    description: 'Relatório-base do site original, com os achados e as limitações da coleta.'
  }
];

export function reportsPage() {
  return shell({
    title: 'Relatórios do site',
    description: 'Auditoria e comparativos do site WL Negócios & Seguros em PDF.',
    base: '../',
    body: `<section class="section"><div class="container"><p class="eyebrow">AUDITORIAS E COMPARATIVOS</p><h1>Relatórios do site</h1><div class="reading"><p>Relatórios de 6 de novembro de 2026. Consulte as condições de medição e as limitações registradas em cada documento.</p>${reports.map((report, index) => `<section id="relatorio-${index + 1}"><h2>${esc(report.title)}</h2><p>${esc(report.description)}</p><p><a class="text-link" href="../output/pdf/${report.file}" type="application/pdf">Abrir PDF: ${esc(report.title)}</a></p></section>`).join('')}</div></div></section>`
  });
}
