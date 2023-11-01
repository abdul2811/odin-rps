const RPS = ["rock", "paper", "scissors"];
// let compScore = 0;
// let playerScore = 0;

function getComputerChoice() {
    return RPS[(Math.floor(Math.random() * RPS.length))]
}

function getPlayerChoice() {
    let choice = prompt("rock, paper, or scissors?");
    while (choice.toLowerCase() != "rock" && choice.toLowerCase() != "paper" && choice.toLowerCase() != "scissors") {
        choice = prompt("Enter a valid choice:");
    }
    return choice.toLowerCase()
}

function game() {
    let compScore = 0;
    let playerScore = 0;

    while (compScore != 5 && playerScore != 5) {
        let comp = getComputerChoice();
        let player = getPlayerChoice();

        if (player === "rock") {
            if (comp === "rock") {
                console.log("It's a tie!");
            } else if (comp === "scissors") {
                playerScore += 1;
                console.log("Rock beats scissors, you win!");
            } else if (comp === "paper") {
                compScore += 1;
                console.log("Paper beats rock, you lose!");
            }
        } else if (player === "paper") {
            // Handle the other cases similarly
        } else if (player === "scissors") {
            // Handle the other cases similarly
        }

        console.log(`${playerScore}-${compScore}`);
    }

    if (playerScore === 5) {
        return "You Win!";
    } else {
        return "You Lose!";
    }
}

console.log(game());
