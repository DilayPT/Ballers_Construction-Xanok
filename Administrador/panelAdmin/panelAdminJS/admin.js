
// addEventListener para escuchar cuando la página termina de cargar
document.addEventListener("DOMContentLoaded", () => {
  const totalProyectos = document.getElementById("totalProyectos");
  const totalEmpleados = document.getElementById("totalEmpleados");
  const totalReportes = document.getElementById("totalReportes");

  // Simulación de datos
  let proyectos = 3;
  let empleados = 3;
  let reportes = 1;

  // Verificar si el usuario administrador está logueado
  const adminLogged = localStorage.getItem("adminLogged");
  if (!adminLogged) {
    alert("Acceso denegado. Por favor, inicia sesión como administrador.");
    window.location.href = "../../FormularioSesion/index.html";
    return; // detiene ejecución si no está logueado
  }

  // Manipulación del DOM
  totalProyectos.textContent = proyectos;
  totalEmpleados.textContent = empleados;
  totalReportes.textContent = reportes;

 
  // Cerrar sesion
  document.getElementById("logoutBtn").addEventListener("click", () => {
    const confirmLogout = confirm("¿Seguro que quieres cerrar sesión?");
    if (confirmLogout) {
      // Limpia datos temporales
      localStorage.clear();
      sessionStorage.clear();
      window.location.href = "../../FormularioSesion/index.html";
    }
  });
});
