let randomNum= Math.floor(Math.random()*3 + 1)
console.log(randomNum)
 

if (randomNum == 1){
    document.getElementById("comp").src="/img/scissors.png";
    console.log(comp)
} else if (randomNum == 2){
    document.getElementById("comp").src="/img/new-document.png";
    console.log(comp)
} else if (randomNum == 3){
    document.getElementById("comp").src="/img/stone.png";
    console.log(comp)
} else {
    var compPlay = 'OOPS'
};

