import "./style-global.scss";
import "./style-index.scss";

let slides = document.querySelectorAll(".mySlides");
let dots = document.querySelectorAll(".dot");
let slideIndex = 0;

showSlides(slideIndex);

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    slideIndex = index;
    showSlides(slideIndex);
  });
});

function showSlides(n) {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dots[i].classList.remove("active");
  }
  slideIndex = (n + slides.length) % slides.length;
  slides[slideIndex].style.display = "block";
  dots[slideIndex].classList.add("active");
}

let slideIndexAuto = 0;
showSlidesAuto();

function showSlidesAuto() {
  if (slideIndex === 0) {
    slideIndex = 1;
  } else {
    slideIndex = 0;
  }
  showSlides(slideIndex);
  setTimeout(showSlidesAuto, 5000);
}
