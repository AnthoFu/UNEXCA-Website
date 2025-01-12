// Selecciona el icono de hamburguesa y el menú de navegación
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');

// Agrega un evento de clic al icono de hamburguesa
hamburger.addEventListener('click', () => {
    nav.classList.toggle('active'); // Alternar la clase 'active'
});

//SLIDER DE PROGRAMAS ACADEMICOS
$('.slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 1500,
    infinite: true,
    arrows : false,
      responsive: [
    {    
      breakpoint: 1366,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },
    {    
      breakpoint: 975,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
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
