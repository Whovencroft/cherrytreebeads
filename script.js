
const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');

if (menuToggle && siteNav) {
  menuToggle.addEventListener('click', () => {
    const open = siteNav.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', String(open));
  });

  siteNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      siteNav.classList.remove('is-open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const panels = Array.from(document.querySelectorAll('.panel'));
const tabs = Array.from(document.querySelectorAll('.tab'));
const panelLinks = Array.from(document.querySelectorAll('[data-panel-link]'));
const hashToPanel = {
  '#design-panel': 'design-panel',
  '#artisan-panel': 'artisan-panel',
  '#showroom-panel': 'showroom-panel',
  '#wholesale-panel': 'wholesale-panel',
  '#about-panel': 'about-panel',
  '#contact-panel': 'contact-panel'
};

function activatePanel(panelId, updateHash = true) {
  if (!panels.length) return;
  panels.forEach((panel) => {
    const active = panel.id === panelId;
    panel.classList.toggle('is-active', active);
    panel.hidden = !active;
  });

  tabs.forEach((tab) => {
    const active = tab.dataset.panel === panelId;
    tab.classList.toggle('is-active', active);
    tab.setAttribute('aria-selected', String(active));
  });

    const onHomePath = window.location.pathname.endsWith('index.html') || window.location.pathname === '/' || window.location.pathname === '';
  if (updateHash && onHomePath) {
    history.replaceState(null, '', `#${panelId}`);
  }
}

if (tabs.length) {
  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      activatePanel(tab.dataset.panel);
    });
  });

  panelLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      if (document.body.dataset.page !== 'home') return;
      const panelId = link.dataset.panelLink;
      if (!panelId) return;
      event.preventDefault();
      activatePanel(panelId);
      const target = document.querySelector('#explore-panels');
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  const initial = hashToPanel[window.location.hash];
  if (initial) activatePanel(initial, false);
}


window.addEventListener('hashchange', () => {
  const panelId = hashToPanel[window.location.hash];
  if (panelId && panels.length) activatePanel(panelId, false);
});
