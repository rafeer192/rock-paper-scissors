const NUM_ROUNDS = 5; 
let humanScore = 0; 
let computerScore = 0; 
let roundNum = 1; 

const rockBtn = document.querySelector(".container .rock"); 
const paperBtn = document.querySelector(".container .paper"); 
const scissorBtn = document.querySelector(".container .scissors"); 
const resultList = document.querySelector(".results"); 


  rockBtn.addEventListener("click", () => {
    playRound("rock", getComputerChoice()); 
  }); 
  paperBtn.addEventListener("click", () => {
    playRound("paper", getComputerChoice()); 
  }); 
  scissorBtn.addEventListener("click", () => {
    playRound("scissors", getComputerChoice()); 
  }); 

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

  function playRound(humanChoice, computerChoice) {
    const winnerMessage = document.createElement("p"); 
    const scoreUpdate = document.createElement("p"); 
    winnerMessage.textContent = `Round ${roundNum}: The computer chose ${computerChoice}. `;  //user knows clearly what computer chose
    if(humanChoice === computerChoice) {
      winnerMessage.textContent += `It's a TIE! (You both chose ${humanChoice})`; 
    } 
    else if(humanChoice === "scissors" && computerChoice === "paper" || 
            humanChoice === "paper" && computerChoice === "rock" || 
            humanChoice === "rock" && computerChoice === "scissors") {
      winnerMessage.textContent += `You WIN! (${humanChoice} beats ${computerChoice})`; 
      humanScore++; 
    }
    else {
      winnerMessage.textContent += `You LOSE! (${computerChoice} beats ${humanChoice})`; 
      computerScore++; 
    }
    scoreUpdate.textContent = `Current score is ${humanScore} - ${computerScore}`; 
    resultList.appendChild(winnerMessage); 
    resultList.appendChild(scoreUpdate); 
    roundNum++; 
    if(roundNum === 5) endGame(); 
  }


function endGame() {
  const finalScoreMsg = document.createElement("p"); 
  finalScoreMsg.textContent = "GAME OVER! "
  if(humanScore > computerScore) {
    finalScoreMsg.textContent += `You WON ${humanScore} - ${computerScore}`; 
  }
  else if(humanScore < computerScore) {
    finalScoreMsg.textContent += `You LOST ${humanScore} - ${computerScore}`; 
  }
  else {
    finalScoreMsg.textContent += `You TIED ${humanScore} - ${computerScore}`; 
  }
  resultList.appendChild(finalScoreMsg); 
}

