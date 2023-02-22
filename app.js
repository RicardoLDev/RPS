const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
const computerRock = document.getElementById("comp-rock");
const computerPaper = document.getElementById("comp-paper");
const computerScissors = document.getElementById("comp-scissors");
const userRock = document.getElementById("Rock");
const userPaper = document.getElementById("Paper");
const userScissors = document.getElementById("Scissors");
let userChoice
let computerChoice
let result 

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  userChoice = e.target.id
  if (userChoice.length > 0){
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
    removeChoices()
  }
}))


function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3) + 1 // or you can use possibleChoices.length

    if (randomNumber === 1){
        computerChoice = "Rock"
    }
    if (randomNumber === 2){
        computerChoice = "Paper"
    }
    if (randomNumber === 3){
        computerChoice = "Scissors"
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult(){
    if (computerChoice === userChoice){
        result = "It's a Draw"
    }
    if (computerChoice === "Rock" && userChoice === "Scissors"){
        computerScissors.remove();
        computerPaper.remove();
        result = "Sorry, you lost"
    }
    if (computerChoice === "Scissors" && userChoice === "Paper"){
        computerRock.remove();
        computerPaper.remove();
        result = "Sorry, you lost"
    }
    if (computerChoice === "Paper" && userChoice === "Rock"){
        computerRock.remove();
        computerScissors.remove();
        result = "Sorry, you lost"
    }
    if (computerChoice === "Paper" && userChoice === "Scissors"){
        computerRock.remove();
        computerScissors.remove();
        result = "Congrats you won!"
    }
    if (computerChoice === "Rock" && userChoice === "Paper"){
        computerScissors.remove();
        computerPaper.remove();
        result = "Congrats you won!"
    }
    if (computerChoice === "Scissors" && userChoice === "Rock"){
        computerRock.remove();
        computerPaper.remove();
        result = "Congrats you won!"
    }

    resultDisplay.innerHTML = result
}

function removeChoices(){
    if (userChoice === "Rock"){
        userPaper.remove();
        userScissors.remove();
    }
    if (userChoice === "Paper"){
        userRock.remove();
        userScissors.remove();
    }
    if (userChoice === "Scissors"){
        userPaper.remove();
        userRock.remove();
    }
}