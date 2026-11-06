import postcss from 'postcss';

// Keep the original rule and media-query order. Only selectors for the first
// screen are copied; the full stylesheet remains the source of truth.
const shared = new Set(['js', 'container', 'section', 'eyebrow', 'icon', 'button',
  'text-link', 'skip-link', 'announcement', 'header', 'brand', 'nav', 'quote', 'desktop-break']);

export function criticalCSS(css, page) {
  const allowed = new Set([...shared, ...(page === 'home'
    ? ['hero', 'service-strip', 'section-heading', 'product', 'insurance', 'grid', 'gap-6', 'md']
    : ['breadcrumb', 'detail-hero', 'reading-layout', 'reading', 'page-index', 'coverage-table'])]);
  const root = postcss.parse(css);
  root.walkRules(rule => {
    const selectors = rule.selectors.filter(selector =>
      [...selector.matchAll(/\.([a-zA-Z_-][\w-]*)/g)].every(([, name]) =>
        allowed.has(name.split('__')[0].split('--')[0])));
    if (selectors.length) rule.selector = selectors.join(',');
    else rule.remove();
  });
  root.walkAtRules(at => {
    if (at.name === 'media' && (at.params === 'print' || !at.nodes.length)) at.remove();
  });
  const result = root.toString();
  if (Buffer.byteLength(result) > 14 * 1024) throw Error(`Critical CSS exceeds 14 KiB: ${page}`);
  return result;
}
