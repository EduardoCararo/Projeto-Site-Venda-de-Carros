// CARROSSEL PRINCIPAL
let currentIndex = 0;
const images = document.querySelectorAll('.carousel-images img');
const carouselImages = document.querySelector('.carousel-images');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

function updateCarousel() {
    const width = images[0].clientWidth;
    carouselImages.style.transform = `translateX(-${currentIndex * width}px)`;
}

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateCarousel();
});

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateCarousel();
});

window.addEventListener('resize', updateCarousel);
window.addEventListener('load', updateCarousel);

// MODAL (Zoom ao clicar)
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const modalClose = document.querySelector(".close");
const modalNext = document.querySelector(".modal-next");
const modalPrev = document.querySelector(".modal-prev");

let modalIndex = 0;

images.forEach((img, index) => {
    img.addEventListener("click", () => {
        modal.style.display = "block";
        modalImg.src = img.src;
        modalIndex = index;
    });
});

modalClose.onclick = () => {
    modal.style.display = "none";
};

modalNext.onclick = () => {
    modalIndex = (modalIndex + 1) % images.length;
    modalImg.src = images[modalIndex].src;
};

modalPrev.onclick = () => {
    modalIndex = (modalIndex - 1 + images.length) % images.length;
    modalImg.src = images[modalIndex].src;
};

window.onclick = (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};
