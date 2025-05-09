
//---------------------------------------------------------------------------------------
let alguma = document.querySelector("")





//---------------------------------------------------------------------------------------
// Herança
// class carro{
//     constructor(nome,portas){
//         this.nome =nome
//         this.portas=portas
//         this.ligado =false
//         this.velocidade=0
//         this.cor=undefined
//     }

//     ligar=function(){
//         this.ligado=true
//     }
//     desligar=function(){
//         this.ligado=false
//     }
//     setCor=function(cor){
//         this.cor=cor
//     }
// }

// class Militar extends carro{
//   constructor(nome,portas,blindagem,municao)
//   {
//     super(nome,portas)
//     this.blindagem =blindagem
//     this.municao=municao
//     this.setCor("verde")
//   }
//   atirar=function(){
//     if(this.municao>0){
//         this.municao--
//     }
//   }


// }


// const c1 = new carro("Ferrari",4)

// console.log(`Nome: ${c1.nome}`)

// const c2 = new Militar("Tanque",4,100,200)



//---------------------------------------------------------------------------------------
//Coleção set
// let elemento = document.getElementById("caixa")
// class angola{
 
//     constructor(vome,idade){
//         this.nome  =vome
//         this.idade = idade
//         this.emprego ="desconhecido"
//     }

//      alguma(){
//         console.log(this.nome+ " e " + this.idade)
//      }
     
// }

// var algo = new angola("Leo",12);

// algo.alguma()

//---------------------------------------------------------------------------------------
//Coleção Map
// let elemento = document.getElementById("caixa")
// let mapa = new Map()

// mapa.set("angola","emaptou")
// mapa.set("caboverde","ganhou")
// mapa.set(1,"olá")
// mapa.set(2,"esse")

// for( v of mapa.keys())
//     console.log(v)
// console.log(mapa)



// --------------------------------------------------------------------------------

// const vect = 
// [
// (val)=>{
//     let n = 0
//     for(v of val){
//         n+=v
//     }
//     return n
// },
// (val)=>{
//     let n = 1
//     for(v of val){
//         n*=v
//     }
//     return n
// }
// ]

// const  et =[1,4,3,2]
// console.log(vect[1](et))


// ----------------------------------------------------------------------------------

// const caixa=document.querySelector("#caixa")

// let cores=["azul","verde","vermelho",["claro","escuro","médio"]]
// let cursos=["HTML","CSS","Javascript",cores]

// //cursos[0]=2023

// // cursos.push("C++")
// // cursos.unshift("Python")
// // cursos.shift()

// console.log(cursos[3][3][2])

// cursos.map((el)=>{
//     let p=document.createElement("p")
//     p.innerHTML=el
//     caixa.appendChild(p)
// })
//----------------------------------------------------------------------------------------------------

// const caixaCursos=document.querySelector("#caixaCursos")
// const btn_c=[...document.querySelectorAll(".curso")]
// const c1_2=document.querySelector("#c1_2")
// const cursos=["HTML","CSS","Javascript","PHP","React","MySQL","ReactNative"]
// const btnCursoSelecionado=document.getElementById("btnCursoSelecionado")
// const btnRemoverCurso=document.getElementById("btnRemoverCurso")
// const btnAdicionarNovoCursoAntes=document.getElementById("btnAdicionarNovoCursoAntes")
// const btnAdicionarNovoCursoDepois=document.getElementById("btnAdicionarNovoCursoDepois")
// const nomeCurso=document.getElementById("nomeCurso")

// let indice=0

// const tirarSelecao=()=>{
//     const cursosSelecionados=[...document.querySelectorAll(".selecionado")]
//     cursosSelecionados.map((el)=>{
//         el.classList.remove("selecionado")
//     })
// }


// const criarNovoCurso=(curso)=>{
//     const novoElemento=document.createElement("div")
//     novoElemento.setAttribute("id","c"+indice)
//     novoElemento.setAttribute("class","curso c1")
//     novoElemento.innerHTML=curso
//     novoElemento.addEventListener("click",(evt)=>{
//         tirarSelecao()
//         evt.target.classList.toggle("selecionado")
//     })
//     return novoElemento
// }

// cursos.map((el,chave)=>{
//     const novoElemento=criarNovoCurso(el)
//     caixaCursos.appendChild(novoElemento)
//     indice++ 
// })

// const cursoSelecionado=()=>{
//     const cursosSelecionados=[...document.querySelectorAll(".selecionado")]
//     return cursosSelecionados[0]
// }

// btnCursoSelecionado.addEventListener("click",(evt)=>{
//     try{
//         alert("Curso selecionado: " + cursoSelecionado().innerHTML)
//     }catch(ex){
//         alert("Selecione um curso")
//     }
// })

// btnRemoverCurso.addEventListener("click",(evt)=>{
//     const cs=cursoSelecionado()
//     if(cs!=undefined){
//         cs.remove()
//     }else{
//         alert("Selecione um curso")
//     }
// })

// btnAdicionarNovoCursoAntes.addEventListener("click",(evt)=>{
//     try{
//         if(nomeCurso.value!=""){
//             const novoCurso=criarNovoCurso(nomeCurso.value)
//             caixaCursos.insertBefore(novoCurso,cursoSelecionado())
//         }else{
//             alert("Digite o nome do curso")
//         }
//     }catch(ex){
//         alert("Selecione um curso")
//     }
// })

// btnAdicionarNovoCursoDepois.addEventListener("click",(evt)=>{
//     try{
//         if(nomeCurso.value!=""){
//             const novoCurso=criarNovoCurso(nomeCurso.value)
//             caixaCursos.insertBefore(novoCurso,cursoSelecionado().nextSibling)
//         }else{
//             alert("Digite o nome do curso")
//         }
//     }catch(ex){
//         alert("Selecione um curso")
//     }
// })
// parentNode
// childNodes[nodenumber]
// firstChild
// lastChild
// nextSibling
// previousSibling



// --------------------------------------------------------------------------------------------------------------
// const idades =[12,33,50,2,23,44,2,1,32,56,2,3,34,50]
// const maior = idades.filter((val)=>val>10)

// console.log(idades)
// console.log(maior)

// ------------------------------------------------------------------------------------------------------


// const todas_divs = document.querySelector("#pai")
// const cursos =["Html","Css","Javascript","Php","React Native","C#"]

// cursos.map((el,posicao)=>{
//     const novoElemento = document.createElement("div")
//     novoElemento.setAttribute("id","c"+posicao)
//     novoElemento.setAttribute("class","curso c1")
//     novoElemento.innerHTML = el
//     todas_divs.appendChild(novoElemento)

// })


// const todas = [...document.querySelectorAll(".curso")]

// todas.map((el)=>{
//     el.addEventListener("click",(evt)=>{
//         const el = evt.target
//         el.classList.add("destaque")
//         console.log(el.id+" clicado")
//     })

// })






//-------------------------------------------------------------------------------------------

// const todas_divs = document.querySelector("#pai")
// todas_divs.map((el)=>{
//     el.addEventListener("click",(evt)=>{
//         const el = evt.target
//             el.classList.add("destaque")
//            console.log (el.id+" foi clicado")
//     })
// })



// let val = [...document.querySelectorAll(".curso")]

// console.log(val[2])


//-------------------------------------------------------------------------------------------

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