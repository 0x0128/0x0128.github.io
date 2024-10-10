// Mostrar el popup de idioma al cargar la página
window.onload = function() {
  const popup = document.getElementById('language-popup');
  popup.style.display = 'flex'; // Muestra el popup

  // Botón para español
  const spanishBtn = document.getElementById('spanish-btn');
  spanishBtn.addEventListener('click', function() {
    window.location.href = 'code/index.html'; // Redirigir a la versión en español
  });

  // Botón para inglés
  const englishBtn = document.getElementById('english-btn');
  englishBtn.addEventListener('click', function() {
    window.location.href = 'code/index2.html'; // Redirigir a la versión en inglés
  });
};
