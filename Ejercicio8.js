// Para verificar si un triángulo es equilátero, se deben comprobar que los tres lados del triángulo tienen la misma
// longitud.
// a. Pedir al usuario los lados y determinar si es equilátero o no

let lado1 = parseInt(prompt("Ingrese el valor del lado 1"))
let lado2 = parseInt(prompt("Ingrese el valor del lado 2"))
let lado3 = parseInt(prompt("Ingrese el valor del lado 3"))

function triangulo() {
  if(lado1 == lado2 && lado2 == lado3) {
    alert("El triangulo es equilatero")
}else{
  alert("El triangulo no es equilatero")
}
}
triangulo();