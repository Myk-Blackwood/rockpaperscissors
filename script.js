
     
    function computerPlay(){
        var options = ["rock", "paper", "scissors"];

        var compPlay = options[Math.floor(Math.random()*options.length)]; 
        console.log(compPlay)
        
    }  

     computerPlay()
     userPlay()
     function userPlay(){
         var user = prompt("Choose Rock, Paper, or Scissors");
        console.log(user)
        return(user)
     
    }


    function result(user, compPlay){
        if (user === "rock" && compPlay === "paper"){
            console.log("Computer picks Paper - You Lose!")
        }
        else if (user === "rock" && compPlay === "scissors"){
            console.log("Computer picks Scissors - You Win!")
        }
        else if (user === "rock" && compPlay === "rock"){
            console.log("Computer picks Rock - Draw!")
        }
        else console.log("I dont know what happened there")
    }

result()