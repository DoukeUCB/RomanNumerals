import romanNumber from "./romanNumber";

const number = document.querySelector("#numero");
const form = document.querySelector("#form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const numberString = Number.parseInt(number.value);

  div.innerHTML = "<p>" + romanNumber(numberString) + "</p>";
});
