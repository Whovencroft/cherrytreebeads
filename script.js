
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');
const page = document.body.dataset.page;

if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  nav.querySelectorAll('a').forEach((link) => {
    if (page && link.dataset.page === page) {
      link.classList.add('is-current');
    }

    link.addEventListener('click', () => {
      nav.classList.remove('is-open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}
