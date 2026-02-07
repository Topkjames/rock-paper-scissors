console.log("Hello World");

function computerChoice() {
  const randomValue = Math.random();

  if (randomValue < 0.34) {
    return "rock";
  } else if (randomValue < 0.67) {
    return "paper";
  } else {
    return "scissors";
  }
}

console.log(computerChoice());

function getHumanChoice() {
  const humanValue = prompt(
    `Choose either "rock", "paper" or "scissors"`
  ).toLowerCase();

  return humanValue;
}

console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return `It's a tie!`;
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    return `You win! ${humanChoice.toUpperCase()} beats ${computerChoice}`;
  } else {
    computerScore++;
    return `Computer wins! ${computerChoice.toUpperCase()} beats ${humanChoice}`;
  }
}