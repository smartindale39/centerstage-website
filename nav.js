function openMenu() {
  const hamburger = document.getElementById('hamburger');
  const menuOverlay = document.getElementById('menuOverlay');
  hamburger.classList.add('open');
  menuOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeMenu(callback) {
  const hamburger = document.getElementById('hamburger');
  const menuOverlay = document.getElementById('menuOverlay');
  hamburger.classList.remove('open');
  menuOverlay.classList.remove('open');
  document.body.style.overflow = '';
  if (callback) {
    callback();
  }
}

function navigateTo(url) {
  const hamburger = document.getElementById('hamburger');
  const menuOverlay = document.getElementById('menuOverlay');
  hamburger.classList.remove('open');
  menuOverlay.classList.remove('open');
  document.body.style.overflow = '';
  window.location.href = url;
}

document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const menuOverlay = document.getElementById('menuOverlay');
  const navbar = document.getElementById('navbar');

  hamburger.addEventListener('click', () => {
    hamburger.classList.contains('open') ? closeMenu() : openMenu();
  });

  let lastScroll = 0;
  let ticking = false;

  window.addEventListener('scroll', () => {
    if (ticking) return;
    window.requestAnimationFrame(() => {
      const current = window.scrollY;
      navbar.classList.toggle('scrolled', current > 40);
      if (!menuOverlay.classList.contains('open')) {
        if (current > lastScroll && current > 80) {
          navbar.classList.add('hidden');
        } else {
          navbar.classList.remove('hidden');
        }
      }
      lastScroll = current <= 0 ? 0 : current;
      ticking = false;
    });
    ticking = true;
  });
});