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

// WhatsApp flutuante: some enquanto os botões do topo ou a seção de contato estão na tela.
// Sem JavaScript (ou sem IntersectionObserver), o botão continua sempre visível.
(function () {
  var botao = document.querySelector('.whatsapp-flutuante');
  var alvos = document.querySelectorAll('.hero-botoes, #contato');
  if (!botao || !alvos.length || !('IntersectionObserver' in window)) return;

  var visiveis = [];
  var observador = new IntersectionObserver(function (entradas) {
    entradas.forEach(function (e) {
      var i = visiveis.indexOf(e.target);
      if (e.isIntersecting && i < 0) visiveis.push(e.target);
      if (!e.isIntersecting && i >= 0) visiveis.splice(i, 1);
    });
    botao.classList.toggle('whatsapp-flutuante--oculto', visiveis.length > 0);
  });

  Array.prototype.forEach.call(alvos, function (el) { observador.observe(el); });
})();
