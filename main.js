const winPlayerElm = document.querySelector(".winner");
const winScoreElm = document.querySelector(".lucky-number span");
const p1ScoreElm = document.querySelector(".p1");
const p2ScoreElm = document.querySelector(".p2");
const formElm = document.querySelector("form");
const inputElm = document.querySelector("#luck-input");
const resetBtnElm = document.querySelector("#resetBtn");
const p1BtnElm = document.querySelector(".p1Btn");
const p2BtnElm = document.querySelector(".p2Btn");

let winScore;
let p1Score;
let p2Score;
let p1Turn;
let p2Turn;

function setIntialValue() {
  winScore = Math.floor(Math.random() * 10) + 1;
  p1Score = 0;
  p2Score = 0;
  p1Turn = true;
  p2Turn = false;
}
setIntialValue();

function setInitialDOM() {
  winScoreElm.textContent = winScore;
  p1ScoreElm.textContent = p1Score;
  p2ScoreElm.textContent = p2Score;
  if (!p1Turn) {
    p1BtnElm.setAttribute("disabled", "disabled");
  }
  if (!p2Turn) {
    p2BtnElm.setAttribute("disabled", "disabled");
  }
}
setInitialDOM();

const validateInput = function (inputVal) {
  let isInvalid = false;
  if (!inputVal || inputVal !== inputVal) {
    alert(`Please fill the input or insert a valid number.`);
    isInvalid = true;
  }
  return isInvalid;
};

function resetInput() {
  inputElm.value = "";
}
resetInput();

formElm.addEventListener("submit", (evt) => {
  evt.preventDefault();

  const inputVal = Number(inputElm.value);

  const checkIfInvalid = validateInput(inputVal);
  if (checkIfInvalid) {
    return;
  }

  resetInput();

  winScoreElm.textContent = inputVal;
  winScore = inputVal;
});

p1BtnElm.addEventListener("click", () => {
  if (p1Turn) {
    p1Score = Math.floor(Math.random() * 10) + 1;
    p1ScoreElm.textContent = p1Score;
  }

  p1Turn = false;
  p1BtnElm.setAttribute("disabled", "disabled");
  p2Turn = true;
  p2BtnElm.removeAttribute("disabled");

  if (p1Score === winScore) {
    p2Turn = false;
    p2BtnElm.setAttribute("disabled", "disabled");
    winPlayerElm.textContent = "Player 1 has won!";
  }
});

p2BtnElm.addEventListener("click", () => {
  if (p2Turn) {
    p2Score = Math.floor(Math.random() * 10) + 1;
    p2ScoreElm.textContent = p2Score;
  }

  p2Turn = false;
  p2BtnElm.setAttribute("disabled", "disabled");
  p1Turn = true;
  p1BtnElm.removeAttribute("disabled");

  if (p2Score === winScore) {
    p2Turn = false;
    p2BtnElm.setAttribute("disabled", "disabled");
    winPlayerElm.textContent = "Player 2 has won!";
  }
});

resetBtnElm.addEventListener("click", () => {
  setIntialValue();
  setInitialDOM();
  winPlayerElm.textContent = "";
  p1BtnElm.removeAttribute("disabled");
});
