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
let randomNumber = 0;
let previousRandomNumber;
let userChoice;
// let computerChoice;

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
  //   resetComputerChoice(); // Reset the computerChoice when opening the game section
}
function handleClick(choice) {
  userChoice = choice;
  console.log("User chose:", choice);
  if (userChoice == "paper") {
    paper.style.display = "flex";
  } else if (userChoice == "scissor") {
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
  handleGameResult()
}
function generateUniqueRandomNumber() {
  do {
    randomNumber = Math.floor(Math.random() * 3) + 1;
  } while (randomNumber === previousRandomNumber);
  previousRandomNumber = randomNumber;
  return randomNumber;
}

function handleGameResult() {
  let resultSpan = document.getElementById("result");
  if (userChoice === "scissor" && computerChoice === "paper") {
    resultSpan.innerText = `You win! `;
  } else if (userChoice === "stone" && computerChoice === "scissor") {
    resultSpan.innerText = `You win! `;
  } else if (userChoice === "paper" && computerChoice === "stone") {
    resultSpan.innerText = `You win! `;
  } else if (computerChoice === "scissor" && userChoice === "paper") {
    resultSpan.innerText = `You Lost`;
  } else if (computerChoice === "stone" && userChoice === "scissor") {
    resultSpan.innerText = `You Lost`;
  } else if (computerChoice === "paper" && userChoice === "stone") {
    resultSpan.innerText = `You Lost`;
  } else {
    resultSpan.innerText = `It's a tie!`;
  }
}
