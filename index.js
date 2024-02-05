let rules = document.querySelector("#rules");
let gameSec = document.querySelector(".game-section");
let gameZone = document.querySelector(".game-zone");
let paper = document.querySelector(".selected-paper");
let scissor = document.querySelector(".selected-scissor");
let rock = document.querySelector(".selected-rock");
let house_paper = document.querySelector(".home-paper");
let house_scissor = document.querySelector(".home-scissor");
let house_stone = document.querySelector(".home-stone");
let finalRes = document.querySelector("#result");
let scoreSpan = document.querySelector("#score-val");
let randomNumber = 0;
let score = 0;
let previousRandomNumber;
let userChoice;
let computerChoice;
alert("Click on Rules button to get to know about rules ")
function openrules() {
  rules.style.display = "block";
}

function closerules() {
  rules.style.display = "none";
}
function close_gameSection() {
  gameSec.style.display = "none";
  gameZone.style.display = "flex";
  if (gameZone.style.display === "flex") {
    houseChoice();
  }
}

function open_gameSection() {
  gameSec.style.display = "flex";
  gameZone.style.display = "none";
  paper.style.display = "none";
  scissor.style.display = "none";
  rock.style.display = "none";
}
function handleClick(choice) {
  userChoice = choice;
  console.log("User chose:", choice);
  if (userChoice === 'paper') {
    paper.style.display = "flex";
  } else if (userChoice === 'scissor') {
    scissor.style.display = "flex";
  } else {
    rock.style.display = "flex";
  }
}
function houseChoice() {
  let num = generateUniqueRandomNumber();

  if (num == 1) {
    computerChoice = "paper";
    console.log(`computer selected paper`);
    house_paper.style.display = "flex";
    house_scissor.style.display = "none";
    house_stone.style.display = "none";
  } else if (num == 2) {
    computerChoice = "scissor";
    console.log(`computer selected scissor`);
    house_scissor.style.display = "flex";
    house_paper.style.display = "none";
    house_stone.style.display = "none";
  } else {
    computerChoice = "stone";
    console.log(`computer selected stone`);
    house_stone.style.display = "flex";
    house_paper.style.display = "none";
    house_scissor.style.display = "none";
  }
}
function generateUniqueRandomNumber() {
  do {
    randomNumber = Math.floor(Math.random() * 3) + 1;
  } while (randomNumber === previousRandomNumber);
  previousRandomNumber = randomNumber;
  return randomNumber;
}

let resultSpan = document.getElementById("result");
if (userChoice === computerChoice) {
  resultSpan.innerText = "It's a tie!";
} else {
  let userWin = true;
  if (userChoice == "stone") {
    userWin = computerChoice === "paper" ? true:false ;
  } else if (userChoice === "paper") {
    userWin = computerChoice == "scissor" ? true:false;
  } else {
    userWin = computerChoice === "stone" ? true:false;
  }
  printWinner(userWin);
}
const printWinner = (userWin) => {
  if (userWin) {
    resultSpan.innerText = "YOU WIN !";
    score++;
    scoreSpan.innerText = score;
  } else {
    resultSpan.innerText = "Sorry,Computer Wins !";
  }
};
console.log(score)
