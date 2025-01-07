// Selecciona el icono de hamburguesa y el menú de navegación
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');

// Agrega un evento de clic al icono de hamburguesa
hamburger.addEventListener('click', () => {
    nav.classList.toggle('active'); // Alternar la clase 'active'
});


// Carreras disponibles
const careers = [
    {
        title: "PNF EN DISTRIBUICION Y LOGISTICA",
        description: "Este programa capacita a los estudiantes en la gestión eficiente de la cadena de suministro, abarcando desde la planificación hasta la distribución de productos.  Sedes: Altagracia, La Urbina y La Guaira. ",
        image: "assets/resources/sample-image.png" // Cambia la ruta de la imagen según sea necesario
    },
    {
        title: "PNF EN INGENIERÍA INFORMÁTICA",
        description: "Los estudiantes adquieren habilidades en programación, desarrollo de software y gestión de sistemas informáticos, preparándolos para enfrentar los retos tecnológicos actuales.  Sedes: Altagracia, La Floresta y La Guaira. ",
        image: "assets/resources/sample-image.png" // Cambia la ruta de la imagen según sea necesario
    },
    {
        title:"PNF EN TRABAJO SOCIAL",
        description:"Los estudiantes aprenden a identificar y abordar problemáticas sociales, diseñando e implementando programas de intervención que promuevan el bienestar y desarrollo comunitario.  Sedes: Altagracia y La Guaira. " ,
        image: "assets/resources/sample-image.png" // Cambia la ruta de la imagen según sea necesario
    },
    {
        title:"PNF EN ADMINISTRACIÓN",
        description:"Este programa forma profesionales en la gestión de recursos humanos, finanzas y marketing, preparándolos para liderar organizaciones y optimizar procesos administrativos.  Sedes: Altagracia, La Urbina, La Floresta y La Guaira." ,
        image: "assets/resources/sample-image.png" // Cambia la ruta de la imagen según sea necesario
    },
    {
        title: "PNF EN TURISMO",
        description: "Este programa capacita a los estudiantes en la gestión de servicios turísticos, promoción de destinos y atención al cliente, fomentando el desarrollo sostenible del sector turístico. Sedes: La Floresta, La Urbina y La Guaira. ",
        image: "assets/resources/sample-image.png" // Cambia la ruta de la imagen según sea necesario
    },
    {
        title: "PNF EN CONTADURIA",
        description: "Los futuros contadores aprenderán a manejar la información financiera, realizar auditorías y asesorar en la gestión económica de empresas, garantizando la transparencia y legalidad. Sedes: Altagracia y La Guaira. ",
        image: "assets/resources/sample-image.png" // Cambia la ruta de la imagen según sea necesario
    },
    {
        title: "PNF EN EDUCACIÓN INICIAL",
        description: "Este programa forma educadores especializados en la enseñanza de niños en sus primeros años, promoviendo metodologías innovadoras y un enfoque integral en el desarrollo infantil. Sedes: La Floresta y La Guaira.",
        image: "assets/resources/sample-image.png" // Cambia la ruta de la imagen según sea necesario
    },
    {
        title:"PDF EN EDUCACIÓN ESPECIAL",
        description:"Capacita a profesionales en la atención a personas con necesidades educativas especiales, desarrollando estrategias inclusivas y adaptadas a diferentes contextos. Sedes: La Urbina y La Guaira. " ,
        image: "assets/resources/sample-image.png" // Cambia la ruta de la imagen según sea necesario
    },
    {
        title:"PNF EN INGENIERÍA AGROALIMENTARIA",
        description:"Este programa forma expertos en la producción, procesamiento y gestión de alimentos, promoviendo prácticas sostenibles y la seguridad alimentaria. Sedes: Altagracia y La Guaira." ,
        image: "assets/resources/sample-image.png" // Cambia la ruta de la imagen según sea necesario
    },
];

let currentIndex = 0;
let itemsToShow = 3; // Número de carreras a mostrar por defecto

// Función para mostrar las carreras actuales
function showCareers(index) {
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = ''; // Limpiar el contenido actual

    // Mostrar las carreras en el rango actual
    for (let i = 0; i < itemsToShow; i++) {
        const careerIndex = (index + i) % careers.length; // Asegurarse de que el índice no exceda el número de carreras
        gallery.innerHTML += `
            <div class="offers">
                <div class="image-container"> <!-- Nuevo div para la imagen -->
                    <a href="">
                        <img src="${careers[careerIndex].image}" alt="${careers[careerIndex].title}" id="careers">
                    </a>
                </div>
                <div class="desc">
                    <h3>${careers[careerIndex].title}</h3>
                    <p>${careers[careerIndex].description}</p>
                </div>
                <div id="more">
                    <a href=""><h3>Más información</h3></a> 
                </div>
            </div>
        `;
    }
}

// Funciones para navegar entre las carreras
document.getElementById('prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + careers.length) % careers.length;
    showCareers(currentIndex);
});

// Selecciona el botón "next"
document.getElementById('next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % careers.length; // Incrementa el índice
    showCareers(currentIndex); // Muestra las carreras actuales
});

// Función para ajustar el número de elementos a mostrar según el tamaño de la pantalla
function adjustItemsToShow() {
    if (window.innerWidth <= 768) {
        itemsToShow = 1; // Mostrar solo 1 oferta en pantallas pequeñas
    } else {
        itemsToShow = 3; // Mostrar 3 ofertas en pantallas más grandes
    }
    showCareers(currentIndex); // Actualiza la visualización
}

// Llama a la función al cargar la página
adjustItemsToShow();

// Agrega un evento para ajustar el número de elementos al redimensionar la ventana
window.addEventListener('resize', adjustItemsToShow);



showCareers(currentIndex);