function getComputerChoice() {
  let computerChoice; 
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
    humanChoice = humanChoice.trim().toLowerCase(); 
  }
  return humanChoice; 
}

console.log(getHumanChoice()); 
