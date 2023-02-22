import "./style-global.scss";
import "./style-team.scss";

const navButton = document.getElementById("nav-menu");
const navBar = document.querySelector(".navbar");

let slides = document.getElementsByClassName("slides");
let dots = document.querySelectorAll(".dot");

function showSlides(n) {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dots[i].classList.remove("active");
  }
  slideIndex = (n + slides.length) % slides.length;
  slides[slideIndex].style.display = "block";
  dots[slideIndex].className += " active";
}
//initialization of page
let slideIndex = 0;
showSlides(slideIndex);

const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
// Show Next/previous (+/-1) slide
function plusSlides(n) {
  showSlides((slideIndex += n));
}

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

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentSlide(index);
  });
});

navButton.addEventListener("click", () => {
  navBar.classList.toggle("show");
});
