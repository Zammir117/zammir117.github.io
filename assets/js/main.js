/* PettyPets — interacciones mínimas del sitio (sin dependencias). */
(function () {
  'use strict';

  // ---------------------------------------------------------------- menú móvil accesible
  var button = document.querySelector('[data-menu-button]');
  var menu = document.querySelector('[data-menu]');
  var label = document.querySelector('[data-menu-label]');

  function setMenu(open) {
    if (!button || !menu) return;
    button.setAttribute('aria-expanded', String(open));
    menu.classList.toggle('hidden', !open);
    if (label) label.textContent = open ? 'Cerrar menú' : 'Abrir menú';
  }

  if (button && menu) {
    button.addEventListener('click', function () {
      setMenu(button.getAttribute('aria-expanded') !== 'true');
    });
    // Cerrar al elegir un enlace, con Escape o al pasar a escritorio.
    menu.addEventListener('click', function (e) {
      if (e.target.closest('a')) setMenu(false);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && button.getAttribute('aria-expanded') === 'true') {
        setMenu(false);
        button.focus();
      }
    });
    var desktop = window.matchMedia('(min-width: 1280px)');
    var onChange = function (mq) { if (mq.matches) setMenu(false); };
    if (desktop.addEventListener) desktop.addEventListener('change', onChange);
    else if (desktop.addListener) desktop.addListener(onChange);
  }

  // ---------------------------------------------------------------- año del pie de página
  var year = String(new Date().getFullYear());
  document.querySelectorAll('[data-year]').forEach(function (el) { el.textContent = year; });

  // ---------------------------------------------------------------- sombra de la barra al desplazarse
  var header = document.querySelector('[data-header]');
  if (header) {
    var onScroll = function () { header.classList.toggle('shadow-card', window.scrollY > 8); };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // ---------------------------------------------------------------- abrir la FAQ enlazada (#faq-...)
  function openHashTarget() {
    if (!location.hash) return;
    var target = document.getElementById(location.hash.slice(1));
    if (target && target.tagName === 'DETAILS') target.open = true;
  }
  openHashTarget();
  window.addEventListener('hashchange', openHashTarget);
})();
