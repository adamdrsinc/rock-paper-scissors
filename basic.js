const rock = "rock";
const paper = "paper";
const scissors = "scissors";

function getComputerChoice(){
    let number = Math.random();
    if(number < 0.34){
        return rock;
    } else if (number < 0.67) {
        return paper;
    } else {
        return scissors;
    }
}