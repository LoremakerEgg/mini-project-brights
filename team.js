import "./style-global.scss";
import "./style-team.scss";

let slides = document.getElementsByClassName("slides");
let dots = document.getElementsByClassName("dot");

function showSlides(n) {
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
// Show Next/previous (+/-1) slide
function plusSlides(n) {
  showSlides((slideIndex += n));
}

//initialization of page
let slideIndex = 1;
showSlides(slideIndex);

const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
prev.addEventListener("click", () => {
  plusSlides(-1);
});
next.addEventListener("click", () => {
  plusSlides(1);
});

// Dots controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

dots[0].addEventListener("click", () => {
  currentSlide(1);
});
dots[1].addEventListener("click", () => {
  currentSlide(2);
});
dots[2].addEventListener("click", () => {
  currentSlide(3);
});
