// Una pizzería “Italiana pizza” es un establecimiento que ofrece comida preparada principalmente a base de pizza,
// sándwiches y ensaladas. Hacer un programa en JavaScript que cumpla los siguientes requisitos o características
// (programa básico-simulación):
// a. se muestra al usuario un menú de opciones así: 1. Pizza 2. Sándwiches 3 ensaladas
// b. Dependiendo de la opción seleccionada (producto escogido) se pide la cantidad de porciones.
// • Pizza a 7000 por unidad
// • Sándwich a 5000 unidad
// • Ensalada a 15000 unidad
// c. Se le pide al usuario si desea agregar salsa que vale 3000.
// d. El sistema indica el costo que paga el cliente por su producto.

let menu = parseInt(prompt("Este es el menu. \n Seleccione: 1. Pizza 2. Sándwiches 3. ensaladas"))
let cantPorciones = parseInt(prompt("Indique cuantas porciones desea"))
function precio(){
  if(menu == 1){
    alert("El costo de su producto es: " + 7000*cantPorciones)
  }if(menu == 2){
    let salsa = prompt("Desea salsa: Indique SI o NO")
    let adicional = 3000
    if(salsa == "SI"){
      alert("El costo de su producto es: " + ((5000*cantPorciones) + adicional) )
    }else if(salsa == "NO"){
      alert("El costo de su producto es: " + 5000*cantPorciones)
    }}
  if(menu == 3){
    alert("El costo de su producto es: " + 15000*cantPorciones)  
  }
}

precio()