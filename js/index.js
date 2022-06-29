const bars = document.querySelector("#bars");
const menuLinks = document.querySelector(".mobile-div");
const close = document.querySelector("#close");

// Slider Dom Elements
const leftArrow = document.querySelector("#left-arrow");
const rightArrow = document.querySelector("#right-arrow");
const heroImages = document.querySelectorAll(".hero-img");
const imagesContainer = document.querySelector(".hero-img-container");

bars.addEventListener("click", () => {
  menuLinks.style.display = "grid";
  close.addEventListener("click", () => {
    menuLinks.style.display = "none";
  });
});

// slider

let counter = 1;

const size = heroImages[0].clientWidth;

imagesContainer.style.transform = `translateX(${-size * counter}px)`;

rightArrow.addEventListener("click", () => {
  if (counter >= heroImages.length - 1) return;
  imagesContainer.style.transition = "transform 0.5s ease-in-out";
  counter++;
  imagesContainer.style.transform = `translateX(${-size * counter}px)`;
});
leftArrow.addEventListener("click", () => {
  if (counter <= 0) return;
  imagesContainer.style.transition = "transform 0.5s ease-in-out";
  counter--;
  imagesContainer.style.transform = `translateX(${-size * counter}px)`;
});

imagesContainer.addEventListener("transitioned", () => {
  if (heroImages[counter].id === "last-clone") {
    imagesContainer.style.transition = "none";
    counter = heroImages.length - 2;
    imagesContainer.style.transform = `translateX(${-size * counter}px)`;
  }

  if (heroImages[counter].id === "first-clone") {
    imagesContainer.style.transition = "none";
    counter = heroImages.length - counter;
    imagesContainer.style.transform = `translateX(${-size * counter}px)`;
  }
});
