// Rock Paper Scissors game
// Plays 5 rounds between the human and the computer
// Scores are tracked and a final winner is declared at the end

// Quick test to confirm the script is linked correctly
console.log("Rock Paper Scissors game is ready!, let's play!");

// Generates a random choice for the computer
// Uses Math.random() to return either "rock", "paper", or "scissors"

function computerChoice() {
  
  // Math.random() returns a number between 0 (inclusive) and 1 (exclusive)
  const randomValue = Math.random();

  if (randomValue < 0.34) {
    return "rock";
  } else if (randomValue < 0.67) {
    return "paper";
  } else {
    return "scissors";
  }
}

// Prompts the user for a choice and normalizes input to lowercase
// This prevents case-sensitive errors (e.g., "Rock" vs "rock")

function getHumanChoice() {
  const humanValue = prompt(
    `Choose either "rock", "paper" or "scissors"`
  ).toLowerCase();

  return humanValue;
}

// Controls the overall game flow
// Runs 5 rounds, tracks scores, and announces the final winner
function playGame() {

  // Track total wins across all rounds
  let humanScore = 0;
  let computerScore = 0;

  // Plays a single round of the game
  // Compares human and computer choices
  // Updates scores based on the winner

  function playRound(humanChoice, computerChoice) {
    
    // Check for a tie before evaluating win conditions
  if (humanChoice === computerChoice) {
    return `It's a tie!, Both chose ${humanChoice}`;
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
  // Manually playing 5 rounds (loops will be introduced later)

  if (humanScore > computerScore) {
    console.log(`Congratulations! You won the game with a score of ${humanScore} to ${computerScore}.`);
  } else if (computerScore > humanScore) {
    console.log(`Computer wins the game with a score of ${computerScore} to ${humanScore}. Better luck next time!`);
  } else {
    console.log(`It's a tie game with a score of ${humanScore} to ${computerScore}.`);
  }
}

// Start the game when the script is loaded
playGame();