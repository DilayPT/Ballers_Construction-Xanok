// Esperar a que el DOM esté listo
document.addEventListener("DOMContentLoaded", () => {
  const starContainers = document.querySelectorAll(".stars");

  starContainers.forEach(container => {
    const rating = parseInt(container.getAttribute("data-rating"));
    
    // Crear las 5 estrellas por cada proyecto
    for (let i = 1; i <= 5; i++) {
      const star = document.createElement("i");
      star.classList.add("fas", "fa-star");
      if (i <= rating) star.classList.add("active");

      // Evento: cuando se hace clic en una estrella
      star.addEventListener("click", () => {
        updateStars(container, i);
      });
      
      container.appendChild(star);
    }
  });
});

/**
 * Actualiza visualmente la cantidad de estrellas activas.
 */
function updateStars(container, rating) {
  const stars = container.querySelectorAll("i");
  stars.forEach((star, index) => {
    star.classList.toggle("active", index < rating);
  });
}
// Animación de entrada suave
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card, i) => {
    setTimeout(() => {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }, i * 150);
  });
});

