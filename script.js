// script.js
document.addEventListener('DOMContentLoaded', function () {
    const carouselImages = document.querySelector('.carousel-images');
    const images = document.querySelectorAll('.carousel-images img');
    let index = 0; // Índice inicial

    function nextImage() {
        index++; // Avança para a próxima imagem
        if (index >= images.length) {
            index = 0; // Volta ao início quando chega à última imagem
        }
        carouselImages.style.transform = `translateX(${-index * 100}%)`; // Move as imagens
    }

    setInterval(nextImage, 2000); // Altera a imagem a cada 3 segundos
});
