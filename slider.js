/* Gabriel Parola
 * 1.0
 * 27 de mayo de 2024
 * El siguiente script controla el slider
 */

document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.slider-container');
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.querySelector('.slider-btn.prev');
    const nextButton = document.querySelector('.slider-btn.next');
    let index = 0;

    function showSlide(n) {
        index = (n + slides.length) % slides.length;
        slider.style.transform = `translateX(${-index * 100}%)`;
    }

    prevButton.addEventListener('click', () => showSlide(index - 1));
    nextButton.addEventListener('click', () => showSlide(index + 1));
});