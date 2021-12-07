let buttons = Array.from(document.querySelectorAll('button'));
let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let scissors = document.querySelector(".scissors");
let results = document.querySelector(".results");
let playScore = document.querySelector(".playScore");
let compScore = document.querySelector(".compScore");

let playerScore = 0;
let computerScore = 0;

function computerPlay() {
  let outcomes = ["Rock", "Paper", "Scissors"];
  let randomNum = Math.floor(Math.random() * 3);

  return outcomes[randomNum];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    results.innerHTML = "<p>Try Again!</p>";
  }
  
  else if( (playerSelection === "Rock" && computerSelection === "Scissors") ||
           (playerSelection === "Paper" && computerSelection === "Rock") ||
           (playerSelection === "Scissors" && computerSelection === "Paper")) {
    playerScore++;
    results.innerHTML = `<p>You Win! ${playerSelection} beats ${computerSelection}</p>`;

    if (playerScore === 5) {
      alert("You win the game! Reload the page to play again.")
    }
  }

  else if ( (playerSelection === "Rock" && computerSelection === "Paper") ||
            (playerSelection === "Paper" && computerSelection === "Scissors") ||
            (playerSelection === "Scissors" && computerSelection === "Rock")) {
    computerScore++;
    results.innerHTML = `<p>You Lose! ${computerSelection} beats ${playerSelection}</p>`;

    if (computerScore === 5) {
      alert ("The computer won the game! Reload the page to play again.")
    }
  }

  playScore.innerHTML = playerScore;
  compScore.innerHTML = computerScore;
}

function random() {
  if (playerScore === 5) {
    alert("Player Wins!");
    return;
  } else if (computerScore === 5) {
    alert("Computer Wins!");
    return;
  }

  if (this === rock) {
    playRound("Rock", computerPlay());
  }
  else if (this === paper) {
    playRound("Paper", computerPlay());
  }
  else {
    playRound("Scissors", computerPlay());
  }
}

buttons.forEach(button => button.addEventListener('click', random));
