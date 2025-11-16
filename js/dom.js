const btn = document.querySelectorAll(".btn");
const modle = document.querySelector(".modle");
const icon = document.querySelector(".icon");

btn[0].addEventListener("click", () => {
  modle.style.display = "flex";
});

btn[2].addEventListener("click", () => {
  modle.style.display = "none";
});
icon.addEventListener("click", () => {
  modle.style.display = "none";
});
