const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');

if (menuToggle && siteNav) {
  menuToggle.addEventListener('click', () => {
    const open = siteNav.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', String(open));
  });

  siteNav.querySelectorAll('a, button').forEach((link) => {
    link.addEventListener('click', () => {
      siteNav.classList.remove('is-open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const homeNavTabs = Array.from(document.querySelectorAll('[data-home-view]'));
const homeViewPanels = Array.from(document.querySelectorAll('.view-panel[data-view]'));
const homeHashMap = {
  '#home': 'home',
  '#design': 'design',
  '#artisan': 'artisan',
  '#showroom': 'showroom',
  '#wholesale': 'wholesale',
  '#about': 'about',
  '#contact': 'contact'
};

function activateHomeView(viewName, updateHash = true, scrollToMain = true) {
  if (!homeViewPanels.length) return;

  homeViewPanels.forEach((panel) => {
    const active = panel.dataset.view === viewName;
    panel.classList.toggle('is-active', active);
    panel.hidden = !active;
  });

  homeNavTabs.forEach((button) => {
    const active = button.dataset.homeView === viewName;
    button.classList.toggle('is-current', active);
    button.setAttribute('aria-pressed', String(active));
  });

  if (updateHash) {
    const nextHash = viewName === 'home' ? '#home' : `#${viewName}`;
    history.replaceState(null, '', nextHash);
  }

  if (scrollToMain) {
    const main = document.querySelector('#main');
    if (main) {
      window.scrollTo({ top: main.offsetTop - 80, behavior: 'smooth' });
    }
  }
}

if (homeNavTabs.length && homeViewPanels.length) {
  homeNavTabs.forEach((button) => {
    button.addEventListener('click', () => activateHomeView(button.dataset.homeView, true, true));
  });

  const initialView = homeHashMap[window.location.hash] || 'home';
  activateHomeView(initialView, false, false);

  window.addEventListener('hashchange', () => {
    const viewName = homeHashMap[window.location.hash];
    if (viewName) activateHomeView(viewName, false, false);
  });
}

const slideshows = Array.from(document.querySelectorAll('.slideshow'));

slideshows.forEach((slideshow) => {
  const slides = Array.from(slideshow.querySelectorAll('img'));
  if (slides.length < 2) return;

  let index = slides.findIndex((slide) => slide.classList.contains('is-active'));
  if (index < 0) index = 0;
  slides[index].classList.add('is-active');

  const rotateMs = Number(slideshow.dataset.rotate || 4500);

  window.setInterval(() => {
    slides[index].classList.remove('is-active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('is-active');
  }, rotateMs);
});
