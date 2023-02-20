import "./style-global.scss";
import "./style-index.scss";

const imageContainer = document.querySelector(".image-container");
const images = document.querySelectorAll(".image-container img");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

let currentIndex = 0;

function showImage(index) {
  images.forEach((image) =>
    image.classList.remove("active", "previous", "next")
  );
  images[index].classList.add("active");
  if (index === 0) {
    images[images.length - 1].classList.add("previous");
    images[index + 1].classList.add("next");
  } else if (index === images.length - 1) {
    images[index - 1].classList.add("previous");
    images[0].classList.add("next");
  } else {
    images[index - 1].classList.add("previous");
    images[index + 1].classList.add("next");
  }
}

prevBtn.addEventListener("click", () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }
  showImage(currentIndex);
});

nextBtn.addEventListener("click", () => {
  currentIndex++;
  if (currentIndex > images.length - 1) {
    currentIndex = 0;
  }
  showImage(currentIndex);
});

showImage(currentIndex);
