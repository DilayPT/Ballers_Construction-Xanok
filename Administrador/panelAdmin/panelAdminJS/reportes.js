
document.addEventListener("DOMContentLoaded", () => {
  const btnGenerar = document.getElementById("btnGenerar");
  const resumen = document.getElementById("resumen");

  // Datos Quemados 
  const proyectosSimulados = [
    { nombre: "Edificio Central", progreso: 85 },
    { nombre: "Residencial Los Sauces", progreso: 55 },
    { nombre: "Parque Industrial", progreso: 100 }
  ];

  const empleadosSimulados = [
    { nombre: "Juan Pérez" }, { nombre: "Laura Gómez" }, { nombre: "Andrés Díaz" }
  ];

  // Presionando el botón generamos un resumen (simulando una petición con setTimeout)
  btnGenerar.addEventListener("click", () => {
    // Indicador visual de carga
    resumen.innerHTML = "<p>Cargando datos del reporte...</p>";

    // setTimeout simula espera de datos remotos 
    setTimeout(() => {
      // Calculos simples con los datos simulados
      const totalProyectos = proyectosSimulados.length;
      const finalizados = proyectosSimulados.filter(p => Number(p.progreso) === 100).length;
      const promedioProgreso = (proyectosSimulados.reduce((acc, p) => acc + Number(p.progreso), 0) / totalProyectos).toFixed(1);
      const totalEmpleados = empleadosSimulados.length;

      // Renderizado del resumen con DOM
      resumen.innerHTML = `
        <h3>Resumen generado</h3>
        <p><strong>Total proyectos:</strong> ${totalProyectos}</p>
        <p><strong>Finalizados:</strong> ${finalizados}</p>
        <p><strong>Progreso promedio:</strong> ${promedioProgreso}%</p>
        <p><strong>Total empleados:</strong> ${totalEmpleados}</p>
        <p><small>Última actualización: ${new Date().toLocaleString()}</small></p>
      `;
    }, 600); // 600ms de retardo 
  });

   logoutBtn.addEventListener("click", () => {
    // Uso de confirm (entrada sincrónica) + condicionales
    const confirmar = confirm("¿Seguro que deseas cerrar sesión?");
    if (confirmar) {
      localStorage.removeItem("adminLogged");
      window.location.href = "../../FormularioSesion/index.html";
    }
  });

});
