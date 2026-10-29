// Menu do celular: fecha ao escolher um link, ao apertar Esc ou ao clicar fora.
// Sem JavaScript, o menu continua funcionando (é um <details> nativo).
(function () {
  var menu = document.querySelector('.menu-mobile');
  if (!menu) return;

  menu.addEventListener('click', function (e) {
    if (e.target.closest('a')) menu.removeAttribute('open');
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && menu.open) {
      menu.removeAttribute('open');
      menu.querySelector('summary').focus();
    }
  });

  document.addEventListener('click', function (e) {
    if (menu.open && !menu.contains(e.target)) menu.removeAttribute('open');
  });
})();
