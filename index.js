import "./style-global.scss";
import "./style-index.scss";

//------
//slides
let slides = document.querySelectorAll(".mySlides");
let dots = document.querySelectorAll(".dot");
let slideIndex = 0;

showSlides(slideIndex);

dots.forEach((dot, index) => {
  dot.addEventListener("click", function () {
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

//------------------------------------------------------------
// mobil touch screen

//-------------------------------------------------------------
// scroll to
const scrollBtn1 = document.querySelector(".btnScrollTo1");
const scrollBtn2 = document.querySelector(".btnScrollTo2");
const text1 = document.querySelector(".image-containerleft");
const text2 = document.querySelector(".text-container");

scrollBtn1.addEventListener("click", function (e) {
  text1.scrollIntoView({ behavior: "smooth" });
});
scrollBtn2.addEventListener("click", function (e) {
  text2.scrollIntoView({ behavior: "smooth" });
});

const returnToTop = document.querySelector(".return");
const theTop = document.querySelector("header");
returnToTop.addEventListener("click", function () {
  theTop.scrollIntoView({ behavior: "smooth" });
});
//----------------------------------------------------------
//links
const toggle = document.querySelectorAll(".toggle")[0];
const nav = document.querySelectorAll("nav")[0];
let toggle_open_text = "Open";
let toggle_close_text = "Close";

toggle.addEventListener(
  "click",
  function () {
    nav.classList.toggle("open");
    if (nav.classList.contains("open")) {
      toggle.innerHTML = toggle_close_text;
    } else {
      toggle.innerHTML = toggle_open_text;
    }
  },
  false
);
