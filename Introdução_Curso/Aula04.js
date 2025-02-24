"use strict"
let texto1 = document.getElementById("t1");
let texto2 = document.getElementById("t2");
let texto3 = document.getElementById("t3");


function trocar(){
    texto1.innerHTML="ohh Tá duvidar";
    texto2.innerText ="Novo Textucuna";
    texto3.innerText = "Leocaldio";
}

let n1 =[12,2,3,2]
let n2 =[3,4,5,6,7,8,9]

let res =[n1,n2]
let res1 =[...n1,...n2]

console.log(res)
console.log(res1)