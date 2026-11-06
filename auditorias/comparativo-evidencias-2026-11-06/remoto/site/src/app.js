(() => {
  document.documentElement.classList.add('js');
  const toggle = document.querySelector('.header__toggle');
  const nav = document.querySelector('.nav');
  const closeMenu = () => {
    nav.classList.remove('nav--open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Abrir menu');
  };
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') !== 'true';
    nav.classList.toggle('nav--open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
  });
  nav.addEventListener('click', event => {
    if (event.target.closest('a')) closeMenu();
  });
  const groups = [...nav.querySelectorAll('details')];
  groups.forEach(group => group.addEventListener('toggle', () => {
    if (group.open) groups.forEach(other => { if (other !== group) other.open = false; });
  }));
  document.addEventListener('click', event => {
    if (!nav.contains(event.target) && !toggle.contains(event.target)) {
      groups.forEach(group => group.open = false);
      closeMenu();
    }
  });
  document.addEventListener('keydown', event => {
    if (event.key !== 'Escape') return;
    const openGroup = groups.find(group => group.open);
    if (openGroup) {
      openGroup.open = false;
      openGroup.querySelector('summary').focus();
    } else if (nav.classList.contains('nav--open')) {
      closeMenu();
      toggle.focus();
    }
  });
  matchMedia('(min-width: 64rem)').addEventListener('change', closeMenu);
  const dialog = document.querySelector('.quote');
  const triggers = [...document.querySelectorAll('[data-quote]')];
  let activeTrigger;
  if (typeof dialog.showModal === 'function') {
    triggers.forEach(trigger => trigger.addEventListener('click', () => {
      activeTrigger = trigger;
      dialog.showModal();
      document.body.style.overflow = 'hidden';
    }));
    const close = () => dialog.close();
    dialog.querySelector('.quote__close').addEventListener('click', close);
    dialog.addEventListener('click', event => {
      if (event.target !== dialog) return;
      const rect = dialog.getBoundingClientRect();
      if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) close();
    });
    dialog.addEventListener('close', () => {
      document.body.style.overflow = '';
      activeTrigger?.focus();
    });
  }

  // Progressive WebMCP support: browser agents can discover these tools when
  // the browser supports the API. The regular links and controls remain the
  // fallback for every other browser.
  if (document.modelContext?.registerTool) {
    const registerTool = definition => {
      try { Promise.resolve(document.modelContext.registerTool(definition)).catch(() => {}); } catch { /* Keep the regular site usable if this experimental API rejects. */ }
    };
    registerTool({
      name: 'wl_find_page_content',
      description: 'Encontra páginas, seguros, seções e formas de contato disponíveis neste site.',
      inputSchema: {
        type: 'object',
        properties: {
          query: { type: 'string', description: 'Assunto ou nome que a pessoa procura.' }
        },
        required: ['query']
      },
      execute({ query }) {
        const term = typeof query === 'string' ? query.trim().toLocaleLowerCase('pt-BR') : '';
        if (!term) return { error: 'Informe o assunto que deseja encontrar.' };
        const matches = [...document.querySelectorAll('main a[href], main h1, main h2, main h3, header a[href], footer a[href]')]
          .map(element => ({
            title: (element.innerText || element.getAttribute('aria-label') || '').trim().replace(/\\s+/g, ' '),
            url: element.href || location.href,
            type: element.matches('a') ? 'link' : 'section'
          }))
          .filter(item => item.title && item.title.toLocaleLowerCase('pt-BR').includes(term))
          .slice(0, 12);
        return { query, results: matches };
      },
      annotations: { readOnlyHint: true }
    });

    registerTool({
      name: 'wl_navigate_to_section',
      description: 'Rola até uma seção desta página e informa o título e o endereço da seção.',
      inputSchema: {
        type: 'object',
        properties: {
          section: { type: 'string', description: 'Nome ou parte do título da seção.' }
        },
        required: ['section']
      },
      execute({ section }) {
        const term = typeof section === 'string' ? section.trim().toLocaleLowerCase('pt-BR') : '';
        if (!term) return { error: 'Informe o título da seção.' };
        const matches = [...document.querySelectorAll('main h1, main h2, main h3')]
          .filter(heading => heading.innerText.trim().toLocaleLowerCase('pt-BR').includes(term));
        if (matches.length !== 1) {
          return {
            error: matches.length ? 'A busca encontrou mais de uma seção.' : 'Nenhuma seção corresponde à busca.',
            choices: matches.slice(0, 8).map(heading => heading.innerText.trim())
          };
        }
        const heading = matches[0];
        const target = heading.closest('section[id]') || heading;
        target.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth', block: 'start' });
        return { title: heading.innerText.trim(), url: `${location.href.split('#')[0]}${target.id ? `#${target.id}` : ''}` };
      }
    });

    registerTool({
      name: 'wl_get_contact_options',
      description: 'Mostra os canais públicos de contato da WL Negócios e Seguros sem iniciar uma conversa.',
      inputSchema: { type: 'object', properties: {} },
      execute() {
        return [...document.querySelectorAll('a[href^="tel:"], a[href^="mailto:"], a[href*="wa.me/"]')]
          .map(link => ({ label: (link.innerText || link.getAttribute('aria-label') || '').trim(), url: link.href }))
          .filter((item, index, items) => item.url && items.findIndex(other => other.url === item.url) === index);
      },
      annotations: { readOnlyHint: true }
    });
  }
})();
