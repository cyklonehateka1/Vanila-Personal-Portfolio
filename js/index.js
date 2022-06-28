const bars = document.querySelector("#bars");
const menuLinks = document.querySelector(".mobile-div");
const close = document.querySelector("#close");

// Slider Dom Elements
const leftArrow = document.querySelector("#left-arrow");
const rightArrow = document.querySelector("#right-arrow");
const heroImages = document.querySelector(".hero-img");
const imagesContainer = document.querySelector(".hero-img-container");

bars.addEventListener("click", () => {
  menuLinks.style.display = "grid";
  bars.style.display = "none";
  close.addEventListener("click", () => {
    menuLinks.style.display = "none";
  });
});

// slider
leftArrow.addEventListener("click", () => {});
