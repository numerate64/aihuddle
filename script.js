const header = document.querySelector('[data-header]');
const menuButton = document.querySelector('[data-menu-button]');
const nav = document.querySelector('[data-nav]');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const setHeaderState = () => {
  header?.classList.toggle('scrolled', window.scrollY > 16);
};

const closeMenu = () => {
  if (!menuButton || !nav) return;
  menuButton.setAttribute('aria-expanded', 'false');
  nav.classList.remove('open');
  document.body.classList.remove('menu-open');
};

menuButton?.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!open));
  nav?.classList.toggle('open', !open);
  document.body.classList.toggle('menu-open', !open);
});

nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
window.addEventListener('scroll', setHeaderState, { passive: true });
window.addEventListener('resize', () => {
  if (window.innerWidth > 900) closeMenu();
});
setHeaderState();

document.querySelectorAll('[data-year]').forEach((element) => {
  element.textContent = String(new Date().getFullYear());
});

const reveals = document.querySelectorAll('.reveal');
if (reducedMotion || !('IntersectionObserver' in window)) {
  reveals.forEach((element) => element.classList.add('visible'));
} else {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -30px' });
  reveals.forEach((element) => observer.observe(element));
}
