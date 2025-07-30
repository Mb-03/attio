const closePopUp = document.querySelector("#close");
const popUp = document.querySelector("#pop-up");

closePopUp.addEventListener("click", () => {
  popUp.classList.add("hidden");
  console.log("added");
});

const swiper = new Swiper(".my-swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
});

const burgerMenu = document.querySelector("#burger");
const mobileMenu = document.querySelector("#mobile-nav");
const burgerSpan = document.querySelector(".burger-menu");

burgerMenu.addEventListener("click", () => {
  mobileMenu.classList.toggle("burger-active");
  burgerSpan.classList.toggle("burger-menu-white");
});
