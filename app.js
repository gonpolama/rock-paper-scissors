let buttons = Array.from(document.querySelectorAll('button'));
let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let scissors = document.querySelector(".scissors");
let results = document.querySelector(".results")

function computerPlay() {
  let outcomes = ["rock", "paper", "scissors"];
  let randomNum = Math.floor(Math.random() * 3);

  return outcomes[randomNum];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    results.innerHTML = "<p>Try Again!</p>";
  }
  else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore++;
    results.innerHTML = "<p>You Win! Rock beats Paper</p>";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore++;
    results.innerHTML = "<p>You Win! Paper beats Rock</p>";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore++;
    results.innerHTML = "<p>You Win! Scissors beats Paper</p>";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    computerScore++;
    results.innerHTML = "<p>You Lose! Paper beats Rock</p>";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    computerScore++;
    results.innerHTML = "<p>You Lose! Scissors beats Paper</p>";
  } else {
    computerScore++;
    results.innerHTML = "<p>You Lose! Rock beats Scissors</p>";
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
