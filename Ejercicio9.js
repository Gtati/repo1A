// // Un sistema de voto electrónico es una aplicación informática diseñada para permitir a los votantes emitir sus
// // votos de forma electrónica. Hacer un programa en JavaScript que cumpla los siguientes requisitos o
// // características (programa básico-simulación):
// // a. La cantidad de votantes son 10 personas
// // b. Hay dos opciones de votos: 1. Ana Maria Suarez 2. Diego Acero
// // c. El sistema debe ir sumando los votos de cada candidato.
// // d. El sistema debe arrojar el ganador y perdedor de la votación


let  contadorAna = 0
let contadorDiego = 0
let contadorRondas = 0

while(contadorRondas<=10){
  let voto = parseInt(prompt("Vota: \n 1.Ana Maria Suarez \n 2.Diego Acero"))
  if(voto  == 1){
    alert("Has votado por Ana Maria Suarez")
    contadorAna++
    contadorRondas++
  }else if(voto == 2){
    alert("Has votado por Diego Acero")
    contadorDiego++
    contadorRondas++
  }else if(voto < 1 || voto > 2){
    alert("Voto invalido \n Ingrese una de las dos opciones anteriores")
  }
  if(contadorRondas == 10){
  if(contadorAna>contadorDiego){
    alert("Ana Maria Suarez es la ganadora de la votacion")
  }else{
    alert("Diego Acero es el ganador de la votacion")
  }}
}








