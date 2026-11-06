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
  const trigger = document.querySelector('[data-quote]');
  if (typeof dialog.showModal === 'function') {
    trigger.addEventListener('click', event => {
      event.preventDefault();
      dialog.showModal();
      document.body.style.overflow = 'hidden';
    });
    const close = () => dialog.close();
    dialog.querySelector('.quote__close').addEventListener('click', close);
    dialog.addEventListener('click', event => {
      if (event.target !== dialog) return;
      const rect = dialog.getBoundingClientRect();
      if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) close();
    });
    dialog.addEventListener('close', () => {
      document.body.style.overflow = '';
      trigger.focus();
    });
  }
})();
