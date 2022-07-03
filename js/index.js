const bars = document.querySelector("#bars");
const menuLinks = document.querySelector(".mobile-div");
const close = document.querySelector("#close");

// Herro img Slider Dom Elements
const leftArrow = document.querySelector("#hero-left-arrow");
const rightArrow = document.querySelector("#hero-right-arrow");
const heroImages = document.querySelectorAll(".hero-img");
const imagesContainer = document.querySelector(".hero-img-container");

// Testimonials Dom elements
const testLeftArrow = document.querySelector("#test-left-arrow");
const testRightArrow = document.querySelector("#test-right-arrow");
const testSlider = document.querySelectorAll(".testimonial-slider");
const testSliderParent = document.querySelector(".test-slider-parent");
const testSliderIndex = document.querySelectorAll(".index");

// Mobile screens navbar toggle
bars.addEventListener("click", () => {
  menuLinks.style.display = "grid";
  close.addEventListener("click", () => {
    menuLinks.style.display = "none";
  });
});

// Hero img slider

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

// Testimonials Slider
let testCounter = 1;

const testSize = testSlider[0].clientWidth;

testSliderParent.style.transform = `translateX(${-testSize}px)`;

testRightArrow.addEventListener("click", () => {
  testSliderParent.style.transition = "transform 0.8s ease-in-out";
  testCounter++;
  testSliderParent.style.transform = `translateX(${-testSize * testCounter}px)`;
});
