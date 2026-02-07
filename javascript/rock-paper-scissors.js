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

function getHumanChoice() {
  const humanValue = prompt(
    `Choose either "rock", "paper" or "scissors"`
  ).toLowerCase();

  return humanValue;
}


function playGame() {

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

  const humanChoice1 = getHumanChoice();
  const computerChoice1 = computerChoice();
  console.log(playRound(humanChoice1, computerChoice1));

  const humanChoice2 = getHumanChoice();
  const computerChoice2 = computerChoice();
  console.log(playRound(humanChoice2, computerChoice2));

  const humanChoice3 = getHumanChoice();
  const computerChoice3 = computerChoice();
  console.log(playRound(humanChoice3, computerChoice3));

  const humanChoice4 = getHumanChoice();
  const computerChoice4 = computerChoice();
  console.log(playRound(humanChoice4, computerChoice4));

  const humanChoice5 = getHumanChoice();
  const computerChoice5 = computerChoice();
  console.log(playRound(humanChoice5, computerChoice5));

  if (humanScore > computerScore) {
    console.log(`Congratulations! You won the game with a score of ${humanScore} to ${computerScore}.`);
  } else if (computerScore > humanScore) {
    console.log(`Computer wins the game with a score of ${computerScore} to ${humanScore}. Better luck next time!`);
  } else {
    console.log(`It's a tie game with a score of ${humanScore} to ${computerScore}.`);
  }
}

playGame();