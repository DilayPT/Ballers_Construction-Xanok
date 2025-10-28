
document.addEventListener("DOMContentLoaded", () => {
  // Referencias DOM (acceso a elementos de la página)
  const form = document.getElementById("formProyecto");
  const lista = document.getElementById("listaProyectos");
  const totalDinamicos = document.getElementById("totalDinamicos");
  const totalCompletados = document.getElementById("totalCompletados");
  const totalEnCurso = document.getElementById("totalEnCurso");

  // Array en meoria que contendrá los proyectos añadidos dinamicamente
  let proyectos = [];

  // renderizar la lista dinámica de proyectos ciclo forEach 
  function renderizarProyectos() {
    lista.innerHTML = ""; // limpiar antes de renderizar

    if (proyectos.length === 0) {
      // Si no hay datos dinámicos, dejamos un mensaje estático
      lista.innerHTML = '<p class="muted">No hay proyectos dinámicos añadidos aún.</p>';
      actualizarEstadisticas();
      return;
    }

    // Por cada proyecto creamos un bloque visual
    proyectos.forEach((p, index) => {
      // createElement evita reescrituras complejas 
      const cont = document.createElement("div");
      cont.className = "proyecto-item dynamic";

      cont.innerHTML = `
        <h3>${escapeHtml(p.nombre)}</h3>
        <p><strong>Ubicación:</strong> ${escapeHtml(p.ubicacion)}</p>
        <p><strong>Progreso:</strong> ${Number(p.progreso)}%</p>
        <p><small>${escapeHtml(p.descripcion || "")}</small></p>
        <div class="controls">
          <button data-index="${index}" class="btn-eliminar">Eliminar</button>
        </div>
      `;

      lista.appendChild(cont);
    });

    // Asignar eventos a los botones recién creados
    document.querySelectorAll(".btn-eliminar").forEach(btn => {
      btn.addEventListener("click", (e) => {
        const idx = Number(e.target.dataset.index);
        eliminarProyecto(idx);
      });
    });

    actualizarEstadisticas();
  }

  // agregar proyecto  
  form.addEventListener("submit", (e) => {
    e.preventDefault(); 

    // Lectura de campos (DOM)
    const nombre = document.getElementById("nombreProyecto").value.trim();
    const ubicacion = document.getElementById("ubicacionProyecto").value.trim();
    const progreso = Number(document.getElementById("progresoProyecto").value);
    const descripcion = document.getElementById("descripcionProyecto").value.trim();

    // Validaciones sencillas 
    if (nombre === "" || ubicacion === "" || isNaN(progreso)) {
      alert("Completa los campos obligatorios correctamente.");
      return;
    }

    // Insertar nuevo proyecto en el array 
    proyectos.push({ nombre, ubicacion, progreso, descripcion });

    // Actualizar pantalla
    renderizarProyectos();

    // Limpiar formulario 
    form.reset();
  });

  // eliminar proyecto 
  function eliminarProyecto(index) {
    if (!confirm("¿Eliminar este proyecto?")) return;
    proyectos.splice(index, 1); 
    renderizarProyectos();
  }

  // actualizar estadísticas locales
  function actualizarEstadisticas() {
    const total = proyectos.length;
    const completados = proyectos.filter(p => Number(p.progreso) === 100).length;
    const enCurso = proyectos.filter(p => Number(p.progreso) < 100).length;

    totalDinamicos.textContent = total;
    totalCompletados.textContent = completados;
    totalEnCurso.textContent = enCurso;
  }

  // escapar texto para evitar inyección en ejemplos
  function escapeHtml(text) {
    if (!text) return "";
    return text.replace(/[&<>"']/g, (m) => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    }[m]));
  }
  logoutBtn.addEventListener("click", () => {
    // Uso de confirm (entrada sincrónica) + condicionales
    const confirmar = confirm("¿Seguro que deseas cerrar sesión?");
    if (confirmar) {
      localStorage.removeItem("adminLogged");
      window.location.href = "../../FormularioSesion/index.html";
    }
  });

  // Render inicial 
  renderizarProyectos();
});
