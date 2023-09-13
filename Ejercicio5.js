// Los sticker son etiquetas adhesivas diseñadas para ser pegadas en objetos, como lápices, libretas, cuadernos,
// pizarras, muebles, etc. Se utilizan para decorar y personalizar los productos de una manera barata y sencilla.
// Hacer un programa en JavaScript que cumpla los siguientes requisitos o características (programa básicosimulación):
// a. Se solicita al usuario el tamaño del stikers, pequeño o grande.
// • Costo pequeño es de 4000 y costo del grande 6000
// b. Se pide al usuario la cantidad de estikers teniendo en cuenta que solo se pueden enviar mínimo 10; Sino
// debe indicarse al usuario un numero correcto.
// c. El sistema debe arrojar cuanto es el costo total para pagar


let tamaño = prompt("Elija el tamaño de su sticker " + "\n" + "Seleccione: " + "\n" + "1. Pequeño " + "\n" + "2. Grande")
let cantidad = parseInt(prompt("Escriba la cantidad de stickers " + "\n" + "NOTA: Puedes pedir minimo 10"))

while(cantidad < 10){
     alert("Ingrese nuevamente la cantidad de stickers. Minimo 10")
      cantidad = parseInt(prompt("Escriba la cantidad de stickers " + "\n" + "NOTA: Puedes pedir minimo 10"))
 } if(tamaño==1 && cantidad >= 10){
          let pequeño = 4000
          alert(`El valor del sticker es ${pequeño}.  \n El total de su compra es ${pequeño*cantidad}`)
     }else if(tamaño==2){
          let grande = 6000
          alert(`El valor del stickers es ${grande}. \n El total de su compra es ${grande*cantidad}`)
}
