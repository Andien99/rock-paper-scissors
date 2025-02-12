// Psudocode
// 1. User will select a choice between variables: "rock", "paper", "scissors"
// 2. Prompt CPU to generate a number (generateNumber) between 0 to 1
// 3. If:
    // generateNumber < 0.33: assign "scissors"
    // generateNumber is [0.33,0.66]: assign "rock"
    // generateNumber > 0.66: assign "paper"
// 4. Each this number will be inputted in a unique function based on the player's variable choice
// 5. The function will determine, winner,loser and draw

function getComputerChoice() {
    if (Math.random() > 0.66) {
        return "scissors";
        let 
    } else if ((Math.random() < 0.33)) {
        return "paper";choice
    } else {
        return "rock"; 
    }}
let computerChoice = getComputerChoice();
console.log ("the computer played " + getComputerChoice())

let humanChoice = prompt("rock,paper or scissors?")


console.log ("you played " + humanChoice)

function playRound() {
if (computerChoice == humanChoice) {
    return "same"
} else if (computerChoice == "paper" && humanChoice == "rock") {
    return "you lose 1!";
} else if (computerChoice == "scissors" && humanChoice == "rock") {
    return "you win 1!";
} else if (computerChoice == "scissors" && humanChoice == "paper") {
    return "you lose 2!";
} else if (computerChoice == "rock" && humanChoice == "paper") {
    return "you win 2!";
} else if (computerChoice == "rock" && humanChoice == "scissors") {
    return "you lose 3!";
} else (computerChoice == "paper" && humanChoice == "scissors") 
    return "you win 3!";
}
console.log(playRound())
