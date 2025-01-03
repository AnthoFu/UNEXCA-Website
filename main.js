let currentIndex = 0;
const items = document.querySelectorAll('.carrera-item');
const totalItems = items.length;

function showNextCarrera() {
    currentIndex = (currentIndex + 1) % totalItems;
    const offset = -100 * currentIndex;
    document.querySelector('.carrusel').style.transform = `translateX(${offset}%)`;
}

setInterval(showNextCarrera, 4000); // Cambia la carrera cada 4 segundos

// Para los botones de navegación (si los agregas)
document.querySelector('.prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    const offset = -100 * currentIndex;
    document.querySelector('.carrusel').style.transform = `translateX(${offset}%)`;
});

document.querySelector('.next').addEventListener('click', () => {
    showNextCarrera();
});