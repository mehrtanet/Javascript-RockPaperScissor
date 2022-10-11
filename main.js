const choices = ["rock", "paper", "scissor"];

const userChoice = prompt("Choose rock or paper or scissors");
if (userChoice) {
    console.log(`You choose: ${userChoice}`);
} else {
    console.log("You cheated!")
}

const randomNumber = Math.floor(Math.random() * 3);
const computerChoice = choices[randomNumber];
console.log(`Computer chooses: ${computerChoice}`);

if (userChoice === computerChoice) {
    console.log("It's a tie");
} else if (userChoice === "rock") {
    if (computerChoice === "scissor") {
        console.log("You Win!");
    } else {
        console.log("you lose!")
    }
} else if (userChoice === "paper") {
    if (computerChoice === "rock") {
        console.log("You win!")
    } else {
        console.log("You lose!")
    }
} else if (userChoice === "scissor") {
    if (computerChoice === "paper") {
        console.log("You win!")
    } else {
        console.log("You lose!")
    }
}