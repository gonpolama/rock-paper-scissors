let buttons = Array.from(document.querySelectorAll('button'));
let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let scissors = document.querySelector(".scissors");

function computerPlay() {
  let outcomes = ["rock", "paper", "scissors"];
  let randomNum = Math.floor(Math.random() * 3);

  return outcomes[randomNum];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    console.log("Try Again!");
  }
  else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore++;
    console.log("You Win! Rock beats Paper");
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore++;
    console.log("You Win! Paper beats Rock");
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore++;
    console.log("You Win! Scissors beats Paper");
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    computerScore++;
    console.log("You Lose! Paper beats Rock");
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    computerScore++;
    console.log("You Lose! Scissors beats Paper");
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    computerScore++;
    console.log("You Lose! Rock beats Scissors");
  } else {
    console.log("That is not an acceptable response")
  }
}

function random() {
  if (this === rock) {
    playRound("rock", computerPlay());
  }
  else if (this === paper) {
    playRound("paper", computerPlay());
  }
  else {
    playRound("scissors", computerPlay());
  }

}

buttons.forEach(button => button.addEventListener('click', random));

let playerScore = 0;
let computerScore = 0;

// function game() {
//   for (let i=0; i<5; i++) {
//     playRound(prompt("Rock, Paper, or Scissors?"), computerPlay());
//     console.log()
//   }
//
//   if (playerScore > computerScore) {
//     console.log(`You Win! ${playerScore} - ${computerScore}`);
//   } else if (computerScore > playerScore) {
//     console.log(`You Lose! ${computerScore} - ${playerScore}`);
//   } else {
//     console.log(`It's a tie! ${computerScore} - ${playerScore}`);
//   }
// }

// game();
