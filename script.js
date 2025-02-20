// Psudocode
// 1. Promt User will select a choice between variables: "rock", "paper", "scissors"
// 2. Ask CPU to generate a number (generateNumber) between 0 to 1
// 3. If:
    // generateNumber < 0.33: assign "scissors"
    // generateNumber > 0.66: assign "paper"
    // generateNumber else: assign "rock"
    
// 4. Each this number will be inputted in a unique function based on the player's variable choice
// 5. The function will determine, winner,loser and draw


let humanScore = 0;
let computerScore = 0;
const scoreBoard = document.querySelector("#scoreBoard")
let displayHumanScore = document.createElement("p");
    displayHumanScore.textContent = "Player 1: " + humanScore
    scoreBoard.appendChild(displayHumanScore);
let displayComputerScore = document.createElement("p");
    displayComputerScore.textContent = "CPU: " + computerScore
    scoreBoard.appendChild(displayComputerScore);
// let computerChoice = getComputerChoice();
// console.log ("the computer played " + computerChoice)  
// let humanChoice = prompt("rock,paper or scissors?").toLowerCase()

let computerChoice = "";
getComputerChoice()

function getComputerChoice() {
    if (Math.random() > 0.66) {
        computerChoice = "scissors"
        return "scissors";
    } else if ((Math.random() < 0.33)) {
        computerChoice = "paper"
        return "paper";
    } else {
        computerChoice = "rock"
        return "rock"; 
    }}


//DOM Manipulation Section
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        console.log("Player chose " + button.id);
        let humanChoice = button.id
        console.log("CPU played " + computerChoice)
        playRound(button.id, computerChoice);
        getComputerChoice()
    })
});

    // console.log ("you played " + humanChoice)
    function playRound(humanChoice, computerChoice) {
        if (computerChoice == humanChoice) {
            console.log("The score is " + humanScore + " to " + computerScore);
            displayHumanScore.textContent = "Player 1: " + humanScore
            displayComputerScore.textContent = "CPU: " + computerScore
            checkForWinner()
            return "It's a tie!"
        } else if (computerChoice == "paper" && humanChoice == "rock") {
            ++computerScore;
            console.log("The score is " + humanScore + " to " + computerScore);
            displayHumanScore.textContent = "Player 1: " + humanScore
            displayComputerScore.textContent = "CPU: " + computerScore
            checkForWinner()
            return "you lose!";
        } else if (computerChoice == "scissors" && humanChoice == "rock") {
            ++humanScore;
            console.log("The score is " + humanScore + " to " + computerScore);
            displayHumanScore.textContent = "Player 1: " + humanScore
            displayComputerScore.textContent = "CPU: " + computerScore
            checkForWinner()
            return "you win!";
        } else if (computerChoice == "scissors" && humanChoice == "paper") {
            ++computerScore;
            console.log("The score is " + humanScore + " to " + computerScore);
            displayHumanScore.textContent = "Player 1: " + humanScore
            displayComputerScore.textContent = "CPU: " + computerScore
            checkForWinner()
            return "you lose!";
        } else if (computerChoice == "rock" && humanChoice == "paper") {
            ++humanScore;
            console.log("The score is " + humanScore + " to " + computerScore);
            displayHumanScore.textContent = "Player 1: " + humanScore
            displayComputerScore.textContent = "CPU: " + computerScore
            checkForWinner()
            return "you win!";
        } else if (computerChoice == "rock" && humanChoice == "scissors") {
            ++computerScore;
            console.log("The score is " + humanScore + " to " + computerScore);
            displayHumanScore.textContent = "Player 1: " + humanScore
            displayComputerScore.textContent = "CPU: " + computerScore
            checkForWinner()
            return "you lose!";
        } else (computerChoice == "paper" && humanChoice == "scissors") 
            ++humanScore;   
            console.log("The score is " + humanScore + " to " + computerScore);
            displayHumanScore.textContent = "Player 1: " + humanScore
            displayComputerScore.textContent = "CPU: " + computerScore
            checkForWinner()
            return "you win!";
        }
    
    function checkForWinner() {
        if (humanScore >= 5) {
            alert("HUMANS WIN")
        } else if (computerScore >= 5) {
            alert("CPU WINS")
        } else {
            getComputerChoice()
        }}