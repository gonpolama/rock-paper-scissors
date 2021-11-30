function computerPlay() {
  let outcomes = ["rock", "paper", "scissors"];
  let randomNum = Math.floor(Math.random() * 3);

  return outcomes[randomNum];
}

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
  let playerLower = playerSelection.toLowerCase();

  if (playerLower === computerSelection) {
    return "Try Again!";
  }
  else if (playerLower === "rock" && computerSelection === "scissors") {
    playerScore++;
    console.log("You Win! Rock beats Paper");
  } else if (playerLower === "paper" && computerSelection === "rock") {
    playerScore++;
    console.log("You Win! Paper beats Rock");
  } else if (playerLower === "scissors" && computerSelection === "paper") {
    playerScore++;
    console.log("You Win! Scissors beats Paper");
  } else if (playerLower === "rock" && computerSelection === "paper") {
    computerScore++;
    console.log("You Lose! Paper beats Rock");
  } else if (playerLower === "paper" && computerSelection === "scissors") {
    computerScore++;
    console.log("You Lose! Scissors beats Paper");
  } else if (playerLower === "scissors" && computerSelection === "rock") {
    computerScore++;
    console.log("You Lose! Rock beats Scissors");
  } else {
    console.log("That is not an acceptable response")
  }
}

function game() {
  for (let i=0; i<5; i++) {
    playRound(prompt("Rock, Paper, or Scissors?"), computerPlay());
    console.log()
  }

  if (playerScore > computerScore) {
    console.log(`You Win! ${playerScore} - ${computerScore}`);
  } else if (computerScore > playerScore) {
    console.log(`You Lose! ${computerScore} - ${playerScore}`);
  } else {
    console.log(`It's a tie! ${computerScore} - ${playerScore}`);
  }
}

game();
