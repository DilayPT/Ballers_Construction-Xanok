// Animación suave al hacer clic en los enlaces del menú
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const seccion = document.querySelector(link.getAttribute('href'));
    if (seccion) {
      seccion.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
