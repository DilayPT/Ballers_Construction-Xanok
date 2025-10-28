
document.addEventListener("DOMContentLoaded", () => {
  // Espera a que todo el documento HTML esté completamente cargado
  const form = document.getElementById("formEmpleado");
  const lista = document.getElementById("listaEmpleados");
  const total = document.getElementById("totalEmpleados");
  const logoutBtn = document.getElementById("logoutBtn");

  // Recuperación de datos guardados en localStorage
  let empleados = JSON.parse(localStorage.getItem("empleados")) || [];

  // Función para guardar los empleados actualizados en localStorage
  const guardarEmpleados = () => {
    localStorage.setItem("empleados", JSON.stringify(empleados));
  };


  const renderEmpleados = () => {
    lista.innerHTML = ""; 

    // Uso de forEach para recorrer el arreglo de empleados
    empleados.forEach((emp, index) => {
    
      const li = document.createElement("li");
      li.innerHTML = `
        <strong>${emp.nombre}</strong> - ${emp.cargo}
        <button class="editar">✎</button>
        <button class="eliminar">🗑</button>
      `;

      // Uso de eventListener para eliminar empleados 
      li.querySelector(".eliminar").addEventListener("click", () => {
        empleados.splice(index, 1);
        guardarEmpleados();
        renderEmpleados();
      });

      // entrada sincrónica prompt + edición de empleado
      li.querySelector(".editar").addEventListener("click", () => {
        const nuevoNombre = prompt("Nuevo nombre:", emp.nombre);
        const nuevoCargo = prompt("Nuevo cargo:", emp.cargo);
        if (nuevoNombre && nuevoCargo) {
          empleados[index] = { nombre: nuevoNombre, cargo: nuevoCargo };
          guardarEmpleados();
          renderEmpleados();
        }
      });

      lista.appendChild(li);
    });

    // Manipulación del DOM para mostrar el total de empleados
    total.textContent = empleados.length;
  };


  form.addEventListener("submit", (e) => {
    e.preventDefault(); 
    const nombre = document.getElementById("nombreEmpleado").value.trim();
    const cargo = document.getElementById("cargoEmpleado").value.trim();

    // Uso de condicionales para validar entradas
    if (!nombre || !cargo) {
      alert("Por favor completa todos los campos.");
      return;
    }
    empleados.push({ nombre, cargo });
    guardarEmpleados();
    renderEmpleados();
    form.reset(); 
  });

  logoutBtn.addEventListener("click", () => {
    // Uso de confirm (entrada sincrónica) + condicionales
    const confirmar = confirm("¿Seguro que deseas cerrar sesión?");
    if (confirmar) {
      localStorage.removeItem("adminLogged");
      window.location.href = "../../FormularioSesion/index.html";
    }
  });

  // Render inicial al cargar
  renderEmpleados();
});
