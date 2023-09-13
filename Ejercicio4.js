// “Lavan Ya” es un servicio de limpieza en el que los clientes envían sus prendas para que se laven y se planchen 
// en un lugar determinado. Hacer un programa en JavaScript que cumpla los siguientes requisitos o características 
// (programa básico-simulación):
// a. El cliente escoge entre dos servicios: lavado o planchado.
// b. Si es lavado, se solicita el tipo de lavado 1. En seco o 2. Normal
// c. Se solicita la cantidad de prendas.
// d. Se calcula el costo de los servicios teniendo en cuenta la lista de precios:
// • Lavado en seco: 2000 por prenda
// • Lavado normal: 1500 por prenda
// • Planchado: 1800 por prenda
// e. Adicional se cobra un domicilio de 3000 solo si es planchado; para otros servicios es gratis.

let user = prompt("Ingresa el servicio que desees: \n Lavado o Planchado")
let cantidad = parseInt(prompt("Escriba la cantidad de prendas"))

  if(user == "Lavado"){
    let tipoLavado = parseInt(prompt("Elija el tipo de lavado: \n 1. En seco  \n  2. Normal"))
    if(tipoLavado == 1){
      alert("El precio del servicio que ha adquirido es : " + 2000*cantidad)
    }if(tipoLavado == 2){
      alert("El precio del servicio que ha adquirido es : " + 1500*cantidad)
    }
  }
  if(user == "Planchado"){
    let domicilio = 3000
    alert("El planchado de sus prendas cuesta: " + (1800*cantidad+domicilio) )
  }
