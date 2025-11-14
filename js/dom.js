const btnClass = document.getElementById("btn");
const btnClose = document.querySelector("#btnClose");
const myDiv = document.querySelector("div");

console.log(myDiv);

btnClass.addEventListener("click", () => {
  myDiv.style.display = "block";
});
btnClose.addEventListener("click", () => {
  myDiv.style.display = "none";
});
