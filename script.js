
let playerScore = 0;
let computerScore = 0;
let games = 0;
let playerWord = "SNAP";
let compWord = "SNAP";


while (games < 5 && computerScore < 3 && playerScore < 3) {
    let computerPlay= Math.floor(Math.random()*3 + 1)
    
    
    function youPlay(rock, paper, scissors){
    userSelection = window.prompt(" Rock, Paper or Scissors? Best of five games! Type your selection below!");

if (userSelection.toLowerCase() == "scissors"){
    let userPlay= 1;
    return(userPlay);
} else if (userSelection.toLowerCase() == "paper"){
    let userPlay = 2;
    return(userPlay);
} else if (userSelection.toLowerCase() == "rock"){
    let userPlay = 3;
    return(userPlay);
}
} 
let userPlay = youPlay();

function roundPlay(youPlay) {
    if (userPlay == computerPlay){
        alert("Draw! Draws dont count!");
        console.log("Draw - Try again")
        --games;
    }else if (userPlay == 1 && computerPlay == 2){
        alert("Computer chose Paper - You Win!");
        document.getElementById("playerscore").innerHTML= ++playerScore;
        playerWord = "Scissors";
        compWord = "Paper";
    }else if (userPlay == 1 && computerPlay == 3){
        alert("Computer chose Rock - You Lose!");
        document.getElementById("computerscore").innerHTML= ++computerScore;
        playerWord = "Scissors";
        compWord = "Rock";
    } else if(userPlay == 2 && computerPlay == 1){
        alert("Computer chose Scissors - You Lose!");       
        document.getElementById("computerscore").innerHTML= ++computerScore;
        playerWord = "Paper";
        compWord = "Scissors";
    } else if(userPlay == 2 && computerPlay == 3){
        alert("Computer chose Rock - You Win!");
        document.getElementById("playerscore").innerHTML= ++playerScore;
        playerWord = "Paper";
        compWord = "Rock";
    } else if(userPlay == 3 && computerPlay == 1){
        alert("Computer chose Scissors - You Win!");
        document.getElementById("playerscore").innerHTML= ++playerScore;
        playerWord = "Rock";
        compWord = "Scissors";
    } else if (userPlay == 3 && computerPlay == 2){
        alert("Computer chose Paper - You Lose!");
        document.getElementById("computerscore").innerHTML= ++computerScore;
        playerWord = "Rock";
        compWord = "Paper";
    } else{
        alert("OOPS! Thats not an option");
        --games;

    }
}


roundPlay();


++games;
console.log("---Round:---" ,games);
console.log("You played:", playerWord);
console.log("Comp played:", compWord);
console.log("Your Score:", playerScore);
console.log("Comps Score:", computerScore);

if (playerScore == 3){
    let result = document.getElementById("win");
        result.innerHTML = "You Win!!";
} else {
    let result = document.getElementById("win");
        result.innerHTML = "You Lose!!";
}

}
