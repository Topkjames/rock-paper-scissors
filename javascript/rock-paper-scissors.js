console.log("Hello World!");

function getComputerchoice() {
    const randomValue = Math.random();

    if (randomValue < 0.34) {
        return "rock";
    } else if (randomValue <= 0.67) {
        return "paper";
    } else {
        return "scissors";
    }
}

console.log(getComputerchoice());