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

console.log(swiper)
