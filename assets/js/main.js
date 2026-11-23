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

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  function scrollBehavior() { return reduceMotion.matches ? 'auto' : 'smooth'; }

  // ---------------------------------------------------------------- galería de capturas
  var track = document.querySelector('[data-gallery]');
  if (track) {
    var items = Array.prototype.slice.call(track.querySelectorAll('[data-gallery-item]'));
    var prevBtn = document.querySelector('[data-gallery-prev]');
    var nextBtn = document.querySelector('[data-gallery-next]');
    var dotsBox = document.querySelector('[data-gallery-dots]');
    var dots = [];

    var currentIndex = function () {
      var box = track.getBoundingClientRect();
      var ref = window.matchMedia('(min-width: 640px)').matches ? box.left : box.left + box.width / 2;
      var best = 0, bestDist = Infinity;
      items.forEach(function (it, i) {
        var r = it.getBoundingClientRect();
        var point = window.matchMedia('(min-width: 640px)').matches ? r.left : r.left + r.width / 2;
        var d = Math.abs(point - ref);
        if (d < bestDist) { bestDist = d; best = i; }
      });
      return best;
    };

    var goTo = function (i) {
      i = Math.max(0, Math.min(items.length - 1, i));
      var left = items[i].offsetLeft - items[0].offsetLeft;
      if (!window.matchMedia('(min-width: 640px)').matches) {
        left -= (track.clientWidth - items[i].offsetWidth) / 2;
      }
      track.scrollTo({ left: left, behavior: scrollBehavior() });
    };

    items.forEach(function (it, i) {
      if (!dotsBox) return;
      var title = it.querySelector('figcaption p');
      var dot = document.createElement('button');
      dot.type = 'button';
      dot.className = 'gallery-dot';
      dot.setAttribute('aria-label', 'Ir a la captura ' + (i + 1) + ' de ' + items.length + (title ? ': ' + title.textContent : ''));
      dot.setAttribute('aria-controls', track.id);
      dot.appendChild(document.createElement('span'));
      dot.addEventListener('click', function () { goTo(i); });
      dotsBox.appendChild(dot);
      dots.push(dot);
    });

    var update = function () {
      var i = currentIndex();
      dots.forEach(function (d, k) { d.setAttribute('aria-current', k === i ? 'true' : 'false'); });
      var atStart = track.scrollLeft <= 4;
      var atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 4;
      if (prevBtn) prevBtn.disabled = atStart;
      if (nextBtn) nextBtn.disabled = atEnd;
    };

    var ticking = false;
    track.addEventListener('scroll', function () {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(function () { update(); ticking = false; });
    }, { passive: true });
    window.addEventListener('resize', update);

    if (prevBtn) prevBtn.addEventListener('click', function () { goTo(currentIndex() - 1); });
    if (nextBtn) nextBtn.addEventListener('click', function () {
      // En escritorio caben varias capturas: avanza a la primera que no se ve completa.
      var box = track.getBoundingClientRect();
      var target = currentIndex() + 1;
      for (var k = 0; k < items.length; k++) {
        if (items[k].getBoundingClientRect().right > box.right + 2) { target = k; break; }
      }
      goTo(target);
    });

    // Flechas del teclado cuando el carrusel tiene el foco.
    track.addEventListener('keydown', function (e) {
      if (e.target !== track) return;
      if (e.key === 'ArrowRight') { e.preventDefault(); goTo(currentIndex() + 1); }
      if (e.key === 'ArrowLeft') { e.preventDefault(); goTo(currentIndex() - 1); }
    });

    update();
  }

  // ---------------------------------------------------------------- ampliación de capturas
  var dialog = document.querySelector('[data-lightbox-dialog]');
  var triggers = document.querySelectorAll('[data-lightbox]');
  if (dialog && triggers.length) {
    var bigImg = dialog.querySelector('[data-lightbox-img]');
    var caption = dialog.querySelector('[data-lightbox-caption]');
    var closeBtn = dialog.querySelector('[data-lightbox-close]');
    var opener = null;
    var supported = typeof dialog.showModal === 'function';

    Array.prototype.forEach.call(triggers, function (btn) {
      btn.addEventListener('click', function () {
        var full = btn.getAttribute('data-full');
        if (!supported) { window.location.href = full; return; }
        var thumb = btn.querySelector('img');
        bigImg.src = full;
        bigImg.alt = thumb ? thumb.alt : '';
        caption.textContent = btn.getAttribute('data-caption') || '';
        opener = btn;
        dialog.showModal();
        closeBtn.focus();
      });
    });

    closeBtn.addEventListener('click', function () { dialog.close(); });
    // Tocar fuera de la imagen (sobre el fondo) cierra.
    dialog.addEventListener('click', function (e) { if (e.target === dialog) dialog.close(); });
    // Esc lo maneja el navegador; al cerrar, el foco vuelve a la captura que lo abrió.
    dialog.addEventListener('close', function () {
      bigImg.removeAttribute('src');
      if (opener) opener.focus();
    });
  }
})();
