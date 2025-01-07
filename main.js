// Selecciona el icono de hamburguesa y el menú de navegación
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');

// Agrega un evento de clic al icono de hamburguesa
hamburger.addEventListener('click', () => {
    nav.classList.toggle('active'); // Alternar la clase 'active'
});

//SLIDER DE PROGRAMAS ACADEMICOS
$('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows : false,
});

//INTERACTIVIDAD DE LAS UBICACIONES DEL MAPA
const fotos = document.querySelectorAll('.fotos-sedes img');
const mapa = document.getElementById('mapa');

  fotos.forEach(foto => {
  foto.addEventListener('click', () => {
const newMap = foto.getAttribute('data-map');
    mapa.src = newMap;
  });
});