const slides = document.querySelectorAll('.slide');

let currentSlide = 0;
let slidesCount = slides.length;

function nextSlide() {
  slides[currentSlide].classList.toggle('active');
  currentSlide = (currentSlide + 1) % slidesCount;
  slides[currentSlide].classList.toggle('active');
}

let slideInterval = setInterval(nextSlide, 2000);

