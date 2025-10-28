// Simulación de envío de formulario
document.getElementById("formCotizacion").addEventListener("submit", (e) => {
  e.preventDefault();
  const nombre = document.getElementById("nombre").value.trim();
  alert(`¡Gracias ${nombre}! Hemos recibido tu solicitud de cotización.\nNos pondremos en contacto contigo pronto.`);
  e.target.reset();
});
