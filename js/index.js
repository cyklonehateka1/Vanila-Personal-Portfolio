const bars = document.querySelector("#bars");
const menuLinks = document.querySelector(".mobile-div");
const close = document.querySelector("#close");

bars.addEventListener("click", () => {
  menuLinks.style.display = "grid";
  bars.style.display = "none";
  close.addEventListener("click", () => {
    menuLinks.style.display = "none";
  });
});
