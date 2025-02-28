// Obtener elementos del DOM
const comunicacionCard = document.getElementById("comunicacion-card");
const comunicacionModal = document.getElementById("comunicacion-modal");
const closeModalBtn = document.getElementById("close-modal");

// Abrir modal al hacer clic en la tarjeta
comunicacionCard.addEventListener("click", () => {
  comunicacionModal.style.display = "block";
});

// Cerrar modal al hacer clic en el botón de cerrar
closeModalBtn.addEventListener("click", () => {
  comunicacionModal.style.display = "none";
});

// Cerrar modal al hacer clic fuera del contenido
window.addEventListener("click", (event) => {
  if (event.target === comunicacionModal) {
    comunicacionModal.style.display = "none";
  }
});