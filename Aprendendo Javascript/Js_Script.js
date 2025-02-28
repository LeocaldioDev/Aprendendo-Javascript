"use strict"


const todas_divs = document.querySelector("#pai")
const cursos =["Html","Css","Javascript","Php","React Native","C#"]

cursos.map((el,posicao)=>{
    const novoElemento = document.createElement("div")
    novoElemento.setAttribute("id","c"+posicao)
    novoElemento.setAttribute("class","curso c1")
    novoElemento.innerHTML = el
    todas_divs.appendChild(novoElemento)

})

const todas = [...document.querySelectorAll(".curso")]

todas.map((el)=>{
    el.addEventListener("click",(evt)=>{
        const el = evt.target
        el.classList.add("destaque")
        console.log(el.id+" clicado")
    })

})









// todas_divs.map((el)=>{
//     el.addEventListener("click",(evt)=>{
//         const el = evt.target
//             el.classList.add("destaque")
//            console.log (el.id+" foi clicado")
//     })
// })



// let val = [...document.querySelectorAll(".curso")]

// console.log(val[2])




// const divTodas = [...document.getElementsByTagName("div")]
// const cursosTodos =[...document.getElementsByClassName("curso")]
// const cursosc1 =[...document.getElementsByClassName("c1")]
// const cursosc2 =[...document.getElementsByClassName("c2")]
// const cursoEspecial = document.getElementById("c1")

// const query_TodasDivs = document.querySelectorAll("div")


// console.log(query_TodasDivs)

// console.log(divTodas)
// console.log(cursosTodos)
// console.log(cursosc1)
// console.log(cursosc2)
// console.log(cursoEspecial)