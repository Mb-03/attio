const closePopUp = document.querySelector("#close");
const popUp = document.querySelector("#pop-up");

closePopUp.addEventListener("click", () => {
  popUp.classList.add("hidden");
  console.log("added");
});
