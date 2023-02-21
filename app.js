const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result 

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  console.log(e)
  userChoice = e.target.id
  console.log(userChoice)
  userChoiceDisplay.innerHTML = userChoice
  generateComputerChoice()
  getResult()
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
        result = "Sorry, you lost"
    }
    if (computerChoice === "Scissors" && userChoice === "Paper"){
        result = "Sorry, you lost"
    }
    if (computerChoice === "Paper" && userChoice === "Rock"){
        result = "Sorry, you lost"
    }
    if (computerChoice === "Paper" && userChoice === "Scissors"){
        result = "Congrats you won!"
    }
    if (computerChoice === "Rock" && userChoice === "Paper"){
        result = "Congrats you won!"
    }
    if (computerChoice === "Scissors" && userChoice === "Rock"){
        result = "Congrats you won!"
    }

    resultDisplay.innerHTML = result
}