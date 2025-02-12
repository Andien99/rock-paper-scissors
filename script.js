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
    } else if ((Math.random() < 0.33)) {
        return "paper";
    } else {
        return "rock"; 
    }}
console.log(getComputerChoice())

let choice = prompt("rock,paper or scissors?")
function getHumanChoice(choice) {
    return choice;
}
console.log(getHumanChoice(choice))


