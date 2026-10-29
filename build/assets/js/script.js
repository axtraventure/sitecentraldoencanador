/**
 * Central do Encanador - Script Principal
 */

document.addEventListener('DOMContentLoaded', () => {
  const header = document.getElementById('main-header');

  // Adiciona sombra no header ao rolar
  const handleScroll = () => {
    if (window.scrollY > 20) {
      header?.classList.add('shadow-md');
    } else {
      header?.classList.remove('shadow-md');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // Fecha o menu mobile do Alpine quando um link âncora é clicado
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (window.Alpine) {
        const alpineComponent = document.querySelector('[x-data]');
        if (alpineComponent && alpineComponent._x_dataStack) {
          alpineComponent._x_dataStack[0].mobileMenuOpen = false;
        }
      }
    });
  });
});
