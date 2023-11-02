const container = document.querySelector('div');

const body = document.querySelector('body');

const rock = document.createElement('button');
rock.textContent = "Rock";

const paper = document.createElement('button');
paper.textContent = "Paper";

const scissors = document.createElement('button');
scissors.textContent = "Scissors";

// const container = document.querySelector('div');


body.appendChild(rock);
body.appendChild(paper);
body.appendChild(scissors);
// body.appendChild(container);



const RPS = ["rock", "paper", "scissors"];
let compScore = 0;
let playerScore = 0;

function getComputerChoice() {
    return RPS[(Math.floor(Math.random() * RPS.length))]
}

rock.addEventListener('click', () => {
    if (compScore != 5 && playerScore != 5){
        game("rock")
    }
})

paper.addEventListener('click', () => {
    if (compScore != 5 && playerScore != 5){
        game("paper")
    }
})

scissors.addEventListener('click', () => {
    if (compScore != 5 && playerScore != 5){
        game("scissors")
    }
})



// function getPlayerChoice() {
//     let choice = prompt("rock, paper, or scissors?");
//     while (choice.toLowerCase() != "rock" && choice.toLowerCase() != "paper" && choice.toLowerCase() != "scissors") {
//         choice = prompt("Enter a valid choice:");
//     }
//     return choice.toLowerCase()
// }

function game(player) {

    // while (compScore != 5 && playerScore != 5) {

        let comp = getComputerChoice();

        if (player === "rock") {
            if (comp === "rock") {
                container.textContent = `It's a tie! ${playerScore}-${compScore}`;
            } else if (comp === "scissors") {
                playerScore += 1;
                container.textContent =  `Rock beats scissors, you win! ${playerScore}-${compScore}`;
            } else if (comp === "paper") {
                compScore += 1;
                container.textContent = `Paper beats rock, you lose! ${playerScore}-${compScore}`;
            }
        } else if (player === "paper") {
            if (comp === "rock") {
                playerScore += 1
                container.textContent = `Paper beats rock, you win! ${playerScore}-${compScore}`;
            } else if (comp === "scissors") {
                compScore += 1;
                container.textContent =  `Scissors beats paper, you lose! ${playerScore}-${compScore}`;
            } else if (comp === "paper") {
                container.textContent = `It's a tie! ${playerScore}-${compScore}`;
            }
        } else if (player === "scissors") {
            if (comp === "rock") {
                compScore += 1
                container.textContent = `Rock beats scissors, you lose! ${playerScore}-${compScore}`;
            } else if (comp === "scissors") {
                container.textContent =  `It's a tie! ${playerScore}-${compScore}`;
            } else if (comp === "paper") {
                playerScore += 1
                container.textContent = `Scissors beats paper, you win! ${playerScore}-${compScore}`;
            }
        }

        // console.log(`${playerScore}-${compScore}`);
    }

    if (playerScore === 5) {
        container.textContent = "You Win!";
    } else if (compScore === 5) {
        container.textContent = "You Lose!";
    }

// }

// console.log(game());
