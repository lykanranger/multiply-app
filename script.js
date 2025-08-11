const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);

const questionEl = document.getElementById("question");

const inputEl = document.getElementById("input");

const formEl = document.getElementById("form");

const scoreEl = document.getElementById("score");

let score = 0;
let correctAns = num1 * num2;

scoreEl.innerText = `score: ${score}`;

questionEl.innerText = `What is ${num1} multiplied by ${num2}?`;

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  const userAns = +inputEl.value;
  if (userAns === correctAns) {
    score++;
  } else {
    score--;
  }
  scoreEl.innerText = `score: ${score}`;
  inputEl.value = "";
  const newNum1 = Math.ceil(Math.random() * 10);
  const newNum2 = Math.ceil(Math.random() * 10);
  correctAns = newNum1 * newNum2; // Update correctAns with new numbers
  questionEl.innerText = `What is ${newNum1} multiplied by ${newNum2}?`;
});
