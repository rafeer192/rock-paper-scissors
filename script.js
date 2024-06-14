const NUM_ROUNDS = 5; 
let humanScore = 0; 
let computerScore = 0; 
let roundNum = 1; 

const rockBtn = document.querySelector(".container .rock"); 
const paperBtn = document.querySelector(".container .paper"); 
const scissorBtn = document.querySelector(".container .scissors"); 
const resultList = document.querySelector(".results"); 

function rockHandler() {
  paperBtn.classList.remove("chosen"); 
  scissorBtn.classList.remove("chosen"); 
  if(!rockBtn.classList.contains("chosen"))
    rockBtn.classList.add("chosen"); 
  playRound("rock", getComputerChoice()); 
}
function paperHandler() {
  rockBtn.classList.remove("chosen"); 
  scissorBtn.classList.remove("chosen"); 
  if(!paperBtn.classList.contains("chosen"))
    paperBtn.classList.add("chosen"); 
  playRound("paper", getComputerChoice()); 
}
function scissorHandler() {
  paperBtn.classList.remove("chosen"); 
  rockBtn.classList.remove("chosen"); 
  if(!scissorBtn.classList.contains("chosen"))
    scissorBtn.classList.add("chosen"); 
  playRound("scissors", getComputerChoice()); 
}

rockBtn.addEventListener("click", rockHandler); 
paperBtn.addEventListener("click", paperHandler); 
scissorBtn.addEventListener("click", scissorHandler); 

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
  scoreUpdate.style.marginBottom = "18px";
  resultList.appendChild(winnerMessage); 
  resultList.appendChild(scoreUpdate); 
  if(roundNum === 5) {
    endGame(); 
  } else {
    roundNum++; 
  }
}


function endGame() {
  rockBtn.removeEventListener("click", rockHandler);  // want to prevent game from continuing
  paperBtn.removeEventListener("click", paperHandler); 
  scissorBtn.removeEventListener("click", scissorHandler); 

  const finalScoreMsg = document.createElement("p"); 
  const replayBtn = document.createElement("button"); 
  replayBtn.textContent = "Play Again"; 
  finalScoreMsg.classList.add("final-msg"); 

  finalScoreMsg.textContent = "GAME OVER! "
  if(humanScore > computerScore) {
    finalScoreMsg.textContent += `You WON ${humanScore} - ${computerScore}`; 
    finalScoreMsg.style.cssText = "color: green"; 
  }
  else if(humanScore < computerScore) {
    finalScoreMsg.textContent += `You LOST ${humanScore} - ${computerScore}`; 
    finalScoreMsg.style.cssText = "color: red"; 
  }
  else {
    finalScoreMsg.textContent += `You TIED ${humanScore} - ${computerScore}`; 
    finalScoreMsg.style.cssText = "color: blue"; 
  }
  resultList.appendChild(finalScoreMsg); 
  replayBtn.addEventListener("click", () => {
    location.reload(); 
  });
  resultList.appendChild(replayBtn); 
}

