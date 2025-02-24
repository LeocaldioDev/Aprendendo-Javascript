"use strict"  // modo restrito obriga organização


function teste(){
    if(true){
        const nome ="Leocaldio";
        console.log("este é o : "+ nome)
    }
    console.log("este é o outro escopo de  : "+ nome)
}

teste()
console.log("escopo de fora: " + nome)

