// hacer en JavaScript el sistema de administración de pago para una pesa electrónica.
// a. El usuario solo puede ingresar monedas o billetes
// • Si es moneda, aceptar monedas de 500, 1000 solamente.
// • Si es billete, de 2000 y 5000.
// b. El servicio vale 500 pesos, el sistema debe indicar si falta dinero, si no tiene que devolver o el valor de la 
// devolución.
// c. ¡Mostrar un mensaje “vuelve pronto!”


let servicio = 500
let ingreso = prompt(`Indique si pagará con monedas🪙 o con billetes💵`);
alert(`Tenga en cuenta que el servicio cuesta ${servicio} pesos`);

if(ingreso==`monedas`){
    let monedas = parseInt(prompt(`Pagará con moneda🪙 de 1000 o de 500?`))
    if (monedas==1000){
        alert(`Le devuelvo 500 pesos🪙`)
    }else if (monedas==500){
        alert(`Vuelva pronto`)
    }
}

if(ingreso==`billetes`){
    let billetes1 = parseInt(prompt(`Pagará con billete 💵de 2000 o 5000?`))
    if(billetes1==2000){
        alert(`Le devuelvo💵 1500 pesos`)
    }else if(billetes1==5000){
        alert(`Lo siento no tengo como devolverte`)
    }
}
