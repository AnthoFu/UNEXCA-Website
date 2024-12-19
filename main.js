// Selecciona el icono de hamburguesa y el menú de navegación
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');

// Agrega un evento de clic al icono de hamburguesa
hamburger.addEventListener('click', () => {
    nav.classList.toggle('active'); // Alternar la clase 'active'
});