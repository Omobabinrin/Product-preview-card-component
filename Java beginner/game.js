const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorButton = document.querySelector(".scissor");
const displayImageContainer = document.querySelector(".display-image");
const messageContainer = document.querySelector(".myModal");
const message = document.querySelector(".myModal p");


const details = {
    wins: 0,
    lose: 0,
    draw: 0,
}

function getRandomComputerChoice(){
    const randomNum = Math.random();
    if (randomNum >= 0 && randomNum <= 1/3 ) {
        return "rock"
    }
     else if (randomNum > 1/3 && randomNum <= 2/3 ) {
        return "paper"
    }
     else {
        return "scissors"
    }
}

function showMessage(theMessage) {
    message.textContent = theMessage
    messageContainer.classList.add("show")
    setTimeout(() => {
        messageContainer.classList.remove("show")
    }, 2000);
    if (theMessage === "you win") {
        score.wins++
        localStorage.setItem("score-detail")
    }else if (theMessage === "you lose") {
        score.lose++
        loseNum.textContent = score.lose
    }
    
}

rockButton.addEventListener("click", function(event){
    const compChoice = getRandomComputerChoice();
    if(event.target.classList[2] === "rock") {
        if (compChoice === "rock") {
            showMessage("it is a tie")
        }else if (compChoice === "paper") {
            showMessage("you lose")
        } else {
            showMessage("you win")
        }
    }console.error(addEventListener)
})







// for (let i = 0; i < grand.length)

// const computerChoice = ["rock", "paper", "scissor"]

// rockButton.addEventListener("click", function(){
//     const compChoice = getRandomComputerChoice()
//     if(compChoice === "rock") {
//         if (computerChoice === rock) {
//             alert("It is a tie") 
//         }
//     }

// })
