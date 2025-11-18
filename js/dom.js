const btn = document.querySelectorAll(".btn");
const modle = document.querySelector(".modle");
const icon = document.querySelector(".icon");
const btnClick = () => {
  document.querySelector(".para").innerHTML = "Hello";
  document.querySelector(".para").classList.add("he");

  document.querySelector(".main").appendChild("h1");
};

btn[0].addEventListener("click", () => {
  btnClick();
});

btn[2].addEventListener("click", () => {
  modle.style.display = "none";
});
icon.addEventListener("click", () => {
  btnClick();
});
