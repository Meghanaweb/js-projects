const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);
const questel = document.getElementById("question");
const formel = document.getElementById("form");
const inputel = document.getElementById("input");
let score = 0;
questel.innerText = `what is ${num1} multiply ${num2} ?`;
const correctans = num1 * num2;
formel.addEventListener("submit", () => {
  const usevalue = +inputel.value;
  console.log(usevalue);
  if (uservalue === correctans) {
    score++;
  } else {
    score--;
  }
});
