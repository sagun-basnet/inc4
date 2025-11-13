const btnClass = document.getElementById("btn");
const myDiv = document.querySelector("body");

console.log(myDiv);

btnClass.addEventListener("click", () => {
  myDiv.style.backgroundColor = "black";
});
