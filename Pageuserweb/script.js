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

// Cerrar sesión con confirmación
document.getElementById("logoutBtn").addEventListener("click", () => {
    const confirmLogout = confirm("¿Seguro que quieres cerrar sesión?");
    if (confirmLogout) {
      // Limpia datos temporales
      localStorage.clear();
      sessionStorage.clear();
      window.location.href = "../../FormularioSesion/index.html";
    }
  });