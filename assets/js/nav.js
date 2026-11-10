// Mobile menu: the header's menu button opens and closes the main nav
// on screens narrower than 1100px (see "Responsive" in styles.css).
(function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('main-nav');
  if (!toggle || !nav) return;

  function setOpen(open) {
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    document.body.classList.toggle('nav-open', open);
  }

  toggle.addEventListener('click', function () {
    setOpen(toggle.getAttribute('aria-expanded') !== 'true');
  });

  // Close on Escape, after following a link, or when the screen widens to desktop.
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && document.body.classList.contains('nav-open')) {
      setOpen(false);
      toggle.focus();
    }
  });
  nav.addEventListener('click', function (event) {
    if (event.target.closest('a')) setOpen(false);
  });
  window.matchMedia('(max-width: 1099px)').addEventListener('change', function (event) {
    if (!event.matches) setOpen(false);
  });
})();
