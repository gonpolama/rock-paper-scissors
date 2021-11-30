function computerPlay() {
  let outcomes = ["rock", "paper", "scissors"];
  let randomNum = Math.floor(Math.random() * 3);

  return outcomes[randomNum];
}

function playRound(playerSelection, computerSelection) {
  let playerLower = playerSelection.toLowerCase();

  if (playerLower === computerSelection) {
    return "Try Again!";
  }
  else if (playerLower === "rock" && computerSelection === "scissors") {
    return "You Win! Rock beats Paper";
  } else if (playerLower === "paper" && computerSelection === "rock") {
    return "You Win! Paper beats Rock";
  } else if (playerLower === "scissors" && computerSelection === "paper") {
    return "You Win! Scissors beats Paper";
  } else if (playerLower === "rock" && computerSelection === "paper") {
    return "You Lose! Paper beats Rock";
  } else if (playerLower === "paper" && computerSelection === "scissors") {
    return "You Lose! Scissors beats Paper";
  } else {
    return "You Lose! Rock beats Scissors";
  }
}

const playerSelection = "Rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
