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
        title: "PNF EN CONTADURIA",
        description: "Adquiere profundos conocimientos de las Ciencias Contables y Sociales para ser capaz de elaborar, revisar, examinar, presentar y dar fe pública de la información financiera de identidades públicas y privadas.",
        image: "assets/resources/sample-image.png" // Cambia la ruta de la imagen según sea necesario
    },
    {
        title: "PNF EN ADMINISTRACION",
        description: "Adquiere profundos conocimientos de las Ciencias Contables y Sociales para ser capaz de gestionar y dirigir organizaciones de manera eficiente.",
        image: "assets/resources/sample-image.png" // Cambia la ruta de la imagen según sea necesario
    },
    {
        title: "PNF EN INFORMATICA",
        description: "Adquiere conocimientos en programación, desarrollo de software y gestión de sistemas informáticos.",
        image: "assets/resources/sample-image.png" // Cambia la ruta de la imagen según sea necesario
    },
    {
        title: "PNF EN ING. CIVIL",
        description: "Desarrolla habilidades en el diseño y construcción de infraestructuras.",
        image: "assets/resources/sample-image.png" // Cambia la ruta de la imagen según sea necesario
    },
    {
        title: "PNF EN PSICOLOGIA",
        description: "Estudia el comportamiento humano y los procesos mentales.",
        image: "assets/resources/sample-image.png" // Cambia la ruta de la imagen según sea necesario
    }
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