let rules = document.querySelector("#rules");
let gameSec = document.querySelector(".game-section");
let gameZone = document.querySelector(".game-zone");
let finalres = document.querySelector("#result");
let paper = document.querySelector(".select-paper");
// let scissor = document.querySelector("#selected-scissor");
// let stone = document.querySelector("#selected-stone");
// let house_paper = document.querySelector(".house-paper");
// let house_scissor = document.querySelector(".house-scissor");
// let house_stone = document.querySelector(".house-stone");
// let score=document.querySelector("#score-val");
// let computerChoice;
// let userChoice;
// let previousRandomNumber;

function resetComputerChoice() {
  let num = generateUniqueRandomNumber();

  if (num == 1) {
    computerChoice = "paper";
    console.log(`computer selected paper`);
    house_paper.style.display = "block";
  } else if (num == 2) {
    computerChoice = "scissor";
    console.log(`computer selected scissor`);
    house_scissor.style.display = "block";
  } else {
    computerChoice = "stone";
    console.log(`computer selected stone`);
    house_stone.style.display = "block";
  }
}

resetComputerChoice(); // Initialize computerChoice on page load

function handleGameResult() {
  if (userChoice == computerChoice) {
    finalres.innerHTML = "WON";
  } else {
    finalres.innerHTML = "LOST";
  }
}
function handleScore(){
    let finalRes=0;
    score.innerHTML=finalRes
    if (userChoice == computerChoice) {
        return finalRes=finalRes+1;
      } else {
        return finalRes
      }
}
function handleClick(choice) {
  userChoice = choice;
  console.log("User chose:", choice);
  if (userChoice == "paper") {
    paper.style.display = "block";
  } else if (userChoice == "scissor") {
    scissor.style.display = "block";
  } else {
    stone.style.display = "block";
  }
  handleGameResult();
  resetComputerChoice(); // Reset the computerChoice after user makes a choice
}

function openrules() {
  rules.style.display = "block";
}

function closerules() {
  rules.style.display = "none";
}

function close_gameSection() {
  gameSec.style.display = "none";
  gameZone.style.display = "block";
}

function open_gameSection() {
  gameSec.style.display = "block";
  gameZone.style.display = "none";
  paper.style.display = "none";
  scissor.style.display = "none";
  stone.style.display = "none";
  resetComputerChoice(); // Reset the computerChoice when opening the game section
}

// Earlier, same numbers were repeating so I used a do-while loop to get unique numbers
function generateUniqueRandomNumber() {
  let randomNumber;
  do {
    randomNumber = Math.floor(Math.random() * 3) + 1;
  } while (randomNumber === previousRandomNumber);
  previousRandomNumber = randomNumber;
  return randomNumber;
}
