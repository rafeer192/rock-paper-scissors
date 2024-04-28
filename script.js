const NUM_ROUNDS = 5; 
let humanScore = 0; 
let computerScore = 0; 

function getComputerChoice() {
  let computerChoice = ""; 
  const randomValue = Math.floor(Math.random() * 3); 

  if(randomValue === 0) {
    computerChoice = "rock"; 
  } else if (randomValue === 1) {
    computerChoice = "paper"; 
  } else {
    computerChoice = "scissors"; 
  }
  return computerChoice; 
}

function getHumanChoice() {
  let humanChoice = prompt("Enter your choice: rock, paper, or scissors: "); 
  humanChoice = humanChoice.trim().toLowerCase(); 
  while(humanChoice !== "rock" && humanChoice !== "paper" && humanChoice !== "scissors") {
    humanChoice = prompt("Invalid entry. Please enter rock, paper, or scissors"); 
    humanChoice = humanChoice.trim().toLowerCase();  //all lowercase for easy comparisons
  }
  return humanChoice; 
}


function playGame() {
  for(let i = 1; i <= NUM_ROUNDS; ++i) {
    playRound(getHumanChoice(), getComputerChoice()); 
  }
  if(humanScore > computerScore) {
    console.log(`CONGRATULATIONS! You won with a score of ${humanScore} - ${computerScore}`); 
  } else if(computerScore > humanScore) {
    console.log(`Game over! You LOST with a score of ${humanScore} - ${computerScore}`); 
  } else {
    console.log(`You and the computer TIED with a score of ${humanScore} - ${computerScore}`); 
  }

  function playRound(humanChoice, computerChoice) {
    console.log(`The computer chose: ${computerChoice}`);  //so user can know clearly what computer chose
    if(humanChoice === computerChoice) {
      console.log(`It's a TIE! (You both chose ${humanChoice})`); 
    } 
    else if(humanChoice === "scissors" && computerChoice === "paper" || 
            humanChoice === "paper" && computerChoice === "rock" || 
            humanChoice === "rock" && computerChoice === "scissors") {
      console.log(`You WIN! (${humanChoice} beats ${computerChoice})`); 
      humanScore++; 
    }
    else {
      console.log(`You LOSE! (${computerChoice} beats ${humanChoice})`); 
      computerScore++; 
    }
  }
}

playGame(); 
