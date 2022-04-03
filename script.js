let randomNum= Math.floor(Math.random()*3 + 1)
console.log(randomNum);


 

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
    document.getElementById("comp") 
    document.write('OOPS')
};

function userPlay(){
    let myForm = document.getElementById('myForm');
    let formData = new FormData(myForm);
    console.log(myForm)
if (myForm == scissors){
    document.getElementById("user").src="/img/scissors.png";
    console.log(comp)
} else if (userSelect == paper){
    document.getElementById("user").src="/img/new-document.png";
    console.log(comp)
} else if (userSelect == rock){
    document.getElementById("user").src="/img/stone.png";
    console.log(comp)
} else {
    var comp = 'OOPS'
};
}

