
document.addEventListener("DOMContentLoaded", function () {
    // Selecciona todos los botones de Ver más
    const viewMoreButtons = document.querySelectorAll(".view-more");
    
    // Modal y elementos relacionados
    const modal = document.getElementById("popup");
    const closeModalButton = document.querySelector(".modal .close");
  
    // Añade evento a cada botón de Ver más
    viewMoreButtons.forEach(function (button) {
      button.addEventListener("click", function (event) {
        // Si el data-project está establecido en "no-link", muestra el pop-up
        if (button.getAttribute("data-project") === "no-link") {
          event.preventDefault(); // Evita el comportamiento normal del enlace
          modal.style.display = "block"; // Muestra el pop-up
        }
      });
    });
  
    // Cerrar el pop-up cuando se pulsa la X
    closeModalButton.addEventListener("click", function () {
      modal.style.display = "none";
    });
  
    // Cerrar el pop-up si se hace clic fuera del contenido
    window.addEventListener("click", function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    });
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger-menu");
    const navbarMenu = document.querySelector(".navbar-menu");
  
    hamburger.addEventListener("click", function () {
      hamburger.classList.toggle("active"); // Activa/desactiva el icono de hamburguesa
      navbarMenu.classList.toggle("active"); // Muestra/oculta el menú con la animación
    });
  });
  
  function detectDevice() {
    const width = window.screen.width;
    const height = window.screen.height;
    
    // Detección del agente de usuario (User-Agent) para detectar dispositivos móviles y tablets
    const userAgent = navigator.userAgent.toLowerCase();
    const isMobile = /iphone|ipod|android|blackberry|webos|windows phone|opera mini/i.test(userAgent);
    const isTablet = /ipad|android(?!.*mobile)/i.test(userAgent);
    
    // Condiciones para dispositivos permitidos: Móvil, Tablet o PC con pantalla menor o igual a 1440px de ancho
    if (isMobile || isTablet || (width <= 1921 && height <= 1081)) {
      // Permitimos acceso: es móvil, tablet o PC con resolución aceptada
      return;
    } else {
      // Redirigir a página de error si no es un dispositivo permitido
      window.location.href = "code/error.html";  // Cambia esto a la URL de tu página de error
    }
  }
  
  // Ejecutar la función al cargar la página
  window.onload = detectDevice;
