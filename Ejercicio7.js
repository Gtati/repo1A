// La biblioteca municipal de Armenia, necesita un sistema de Gestión de multas. Hacer un programa en JavaScript
// que cumpla los siguientes requisitos o características (programa básico-simulación):
// a. Se pregunta al usuario si es devolución o perdida.
// b. Se le pide al usuario de la biblioteca que indique la cantidad de días de retraso.
// c. La cantidad de libros prestados o revistas
// • Revistas 500 pesos día.
// • Libro 600 pesos día.
// d. Si es perdida, debe de pagar 10000 por ejemplar

let user = parseInt(prompt("Bienvenido \n Marque: \n 1. Si es devolucion \n 2. Si es perdida"))
function precio(){
  let revistas = 500
  let libros = 600
  let perdida = 10000
if(user == 1){
  let tipo = parseInt(prompt("Desea devolver: \n 1.Revista \n 2.Libro"))
  let pregunta = parseInt(prompt("Cuantos ejemplares tiene?"))
  let cantRetraso = parseInt(prompt("Indique  la cantidad de dias de retraso"))
if(tipo == 1){
  alert("Por los dias de retraso debe pagar : " + pregunta*revistas*cantRetraso)
}else if(tipo == 2){
alert("Por los dias de retraso debe pagar : " + pregunta*libros*cantRetraso)
}
}if(user == 2){
  let pregunta2 = parseInt(prompt("Cuantos ejemplares tiene?"))
  alert("El valor que debe pagar por la perdida de los ejemplares es : " + pregunta2*perdida)

}
}
precio()

