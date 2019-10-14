function playRockPaperScissors(userChoice, computerChoice) {
    "use strict";
    userChoice = userChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();
    if (userChoice === 'rock' && computerChoice === 'scissors') {
        window.alert("Rock destroys Scissors..You win ! ");
    } else if (userChoice === 'scissors' && computerChoice === 'rock') {
        window.alert("Rock destroys Scissors..You lose ! ");
    } else if (userChoice === 'scissors' && computerChoice === 'paper') {
        window.alert("Scissors cut paper... You win ! ");
    } else if (userChoice === 'paper' && computerChoice === 'scissors') {
        window.alert("Scissors cut paper... You lose ! ");
    } else if (userChoice === 'paper' && computerChoice === 'rock') {
        window.alert("Paper covers rock... You win ! ");
    } else if (userChoice === 'paper' && computerChoice === 'scissors') {
        window.alert("Paper covers rock... You lose ! ");
    } else if (userChoice === computerChoice) {
        window.alert("It's a tie ! ");
    }
}

function computeComputerChoice() {
    "use strict";
    var result;
    var randomNo = Math.floor(Math.random() * 10);
    if (randomNo < 3) {
        result = "Rock";
    } else if (randomNo < 7) {
        result = "Paper";
    } else if (randomNo < 10) {
        result = "Scissors";
    }
    return result;

}

function init() {
    "use strict";
    var userInput;
    var validInputs = ["rock", "paper", "scissors"];
    var userInputLowerCase;
    var ifContinue = "Y";
    do {
        while (true) {
            userInput = window.prompt("Please enter your choice ");
            userInputLowerCase = userInput.toLowerCase();
            if (validInputs.indexOf(userInputLowerCase) > -1) {
                break;
            } else {
                window.alert("Please enter a valid input ");
            }
        }
        playRockPaperScissors(userInput, computeComputerChoice());
        ifContinue = window.prompt("Do you wanna play again (Y/n) ?");
    } while (ifContinue === "Y");
}


window.addEventListener("load", function () {
    "use strict";
    init();
});