const newGame = document.querySelector(".new-game");
const holdPlayer1 = document.querySelector(".hold-player1");
const holdPlayer2 = document.querySelector(".hold-player2");
const rollDicePlayer1 = document.querySelector(".roll-dice-player1");
const rollDicePlayer2 = document.querySelector(".roll-dice-player2");
const currentPlayer1 = document.querySelector(".current-player1 > span");
const scorePlayer1 = document.querySelector(".score-player1 > p");
const currentPlayer2 = document.querySelector(".current-player2 > span");
const scorePlayer2 = document.querySelector(".score-player2 > p");
const redPointPlayer1 = document.querySelector(".player1 > span");
const redPointPlayer2 = document.querySelector(".player2 > span");
var countCurrentPlayer1 = [];
var countScorePlayer1 = [];
var countCurrentPlayer2 = [];
var countScorePlayer2 = [];

function resultScorePlayer1() {
  let total = 0;
  for (const resultScorePlayer1 of countCurrentPlayer1) {
    total += resultScorePlayer1;
  }
  return total;
}
function resultScoreGlobalPlayer1() {
  let total = 0;
  for (const resultScoreGlobalPlayer1 of countScorePlayer1) {
    total += resultScoreGlobalPlayer1;
  }
  return total;
}
function resultScorePlayer2() {
  let total = 0;
  for (const resultScorePlayer2 of countCurrentPlayer2) {
    total += resultScorePlayer2;
  }
  return total;
}
function resultScoreGlobalPlayer2() {
  let total = 0;
  for (const resultScoreGlobalPlayer2 of countScorePlayer2) {
    total += resultScoreGlobalPlayer2;
  }
  return total;
}
function finishPlayer1() {
  if (countScorePlayer1 >= 100) {
    document.querySelector(".victory").innerHTML =
      "LE JOUEUR 1 GAGNE LA PARTIE";
  }
}

function finishPlayer2() {
  if (countScorePlayer2 >= 100) {
    document.querySelector(".victory").innerHTML =
      "LE JOUEUR 2 GAGNE LA PARTIE";
  }
}

function passRoundPlayer1() {
  countCurrentPlayer1 = [];
  currentPlayer1.innerHTML = "0";
  rollDicePlayer1.style.visibility = "hidden";
  rollDicePlayer2.style.visibility = "visible";
  holdPlayer1.style.visibility = "hidden";
  holdPlayer2.style.visibility = "visible";
  redPointPlayer1.style.visibility = "hidden";
  redPointPlayer2.style.visibility = "visible";
}

function passRoundPlayer2() {
  countCurrentPlayer2 = [];
  currentPlayer2.innerHTML = "0";
  rollDicePlayer2.style.visibility = "hidden";
  rollDicePlayer1.style.visibility = "visible";
  holdPlayer2.style.visibility = "hidden";
  holdPlayer1.style.visibility = "visible";
  redPointPlayer2.style.visibility = "hidden";
  redPointPlayer1.style.visibility = "visible";
}

rollDicePlayer1.addEventListener("click", (e) => {
  let valueDice = Math.floor(Math.random() * 6) + 1;
  document
    .getElementById("dice")
    .setAttribute("src", "./img/dice" + valueDice + ".png");
  countCurrentPlayer1.push(valueDice);

  if (valueDice >= 2) {
    currentPlayer1.innerHTML = resultScorePlayer1();
  } else {
    countScorePlayer1 = [];
    scorePlayer1.innerHTML = "00";
    passRoundPlayer1()
  }
});

holdPlayer1.addEventListener("click", (e) => {
  countScorePlayer1.push(resultScorePlayer1());
  scorePlayer1.innerHTML = resultScoreGlobalPlayer1();
  passRoundPlayer1()
  finishPlayer1();
});

rollDicePlayer2.addEventListener("click", (e) => {
  let valueDice = Math.floor(Math.random() * 6) + 1;
  document
    .getElementById("dice")
    .setAttribute("src", "./img/dice" + valueDice + ".png");
  countCurrentPlayer2.push(valueDice);
  const scoreGlobalPlayer2 = resultScorePlayer2(countScorePlayer2);

  if (valueDice >= 2) {
    resultScorePlayer2();
    currentPlayer2.innerHTML = scoreGlobalPlayer2;
  } else {
    countScorePlayer2 = [];
    scorePlayer2.innerHTML = "00";
    passRoundPlayer2()
  }
});

holdPlayer2.addEventListener("click", (e) => {
  countScorePlayer2.push(resultScorePlayer2());
  scorePlayer2.innerHTML = resultScoreGlobalPlayer2();
  passRoundPlayer2()
  finishPlayer2();
});

newGame.addEventListener("click", (e) => {
  window.location.reload();
});

// -------------MODAL BOOTSTRAP −−−−−−−−−−−−−−//

const myModal = document.getElementById("myModal");
const myInput = document.getElementById("myInput");

myModal.addEventListener("shown.bs.modal", () => {
  myInput.focus();
});
