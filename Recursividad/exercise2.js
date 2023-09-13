// El software que se desarrollará controlará un cajero automático (ATM) a través de una
// simulación usando el lenguaje de programación JavaScript.
// • El cajero automático atenderá a un cliente a la vez. Se le pedirá al cliente
// que inserte su documento de identidad y su pin de 4 dígitos, los cuales se
// enviarán al banco para su validación como parte de cada transacción. El
// cliente podrá entonces realizar una o más transacciones. El menú se
// mostrará en la consola hasta que el cliente indique que no desea realizar
// más transacciones.
// • El cajero automático debe ser capaz de proporcionar los siguientes servicios
// al cliente:
// • Un cliente debe poder realizar un retiro de efectivo de cualquier cuenta
// adecuada vinculada al documento de identidad, en múltiplos de $50000. Se
// debe obtener la aprobación del banco antes de entregar efectivo.
// • Un cliente debe poder realizar un depósito en cualquier cuenta vinculada al
// documento de identidad, consistente en efectivo y/o cheques. El cliente
// ingresará el monto del depósito en el cajero automático e indicar si es
// efectivo o cheque.
// • Un cliente debe poder realizar una transferencia de dinero entre dos
// cuentas cualesquiera vinculadas a al documento de identidad.
// • Un cliente debe poder realizar una consulta de saldo de cualquier cuenta
// vinculada al documento de identidad.
// • El cajero automático comunicará al cliente los resultados de cada
// transacción dependiendo de su tipo. Ejemplo “retiro exitoso, puede tomar x
// dinero de la bandeja principal”
// • Si el banco determina que el PIN del cliente no es válido, se le pedirá al
// cliente que vuelva a ingresar el PIN antes de que se pueda continuar con la
// transacción. Si el cliente no puede ingresar correctamente el PIN después
// de tres intentos saldrá de la aplicación.
// • El cajero automático tendrá un panel de operador con un interruptor que
// permitirá apagar o encender el cajero.


let clienteActual;
let estadoCajero = "apagado";


function iniciarCajero() {
  estadoCajero = "encendido";

 
  mostrarMenuPrincipal();
}

function mostrarMenuPrincipal() {
  console.log("Menú principal");
  console.log("1. Ingresar como cliente");
  console.log("2. Apagar cajero");

  let opcion = prompt("Seleccione una opción: ");

  switch (opcion) {
    case "1":
      ingresarCliente();
      break;
    case "2":
      apagarCajero();
      break;
    default:
      console.log("Opción no válida");
  }
}

function ingresarCliente() {
 
  let documentoIdentidad = prompt("Ingrese su documento de identidad: ");

 
  let pin = prompt("Ingrese su PIN: ");

  let respuestaAutenticacion = validarAutenticacion(documentoIdentidad, pin);

  
  if (respuestaAutenticacion === "ok") {
  
    clienteActual = new Cliente(documentoIdentidad);

    mostrarMenuTransacciones();
  } else {

    console.log("Autenticación fallida");
  }
}

function mostrarMenuTransacciones() {
 
  console.log("Menú de transacciones");
  console.log("1. Retiro");
  console.log("2. Depósito");
  console.log("3. Transferencia");
  console.log("4. Consulta de saldo");
  console.log("5. Salir");


  let opcion = prompt("Seleccione una opción: ");

  switch (opcion) {
    case "1":
      realizarRetiro();
      break;
    case "2":
      realizarDeposito();
      break;
    case "3":
      realizarTransferencia();
      break;
    case "4":
      consultarSaldo();
      break;
    case "5":
      salir();
      break;
    default:
      console.log("Opción no válida");
  }
}

function realizarRetiro() {

  let monto = prompt("Ingrese el monto a retirar: ");

  if (monto % 50000 !== 0) {
    console.log("Monto no válido");
    return;
  }

  let respuestaRetiro = realizarRetiroBanco(clienteActual, monto);

  if (respuestaRetiro === "ok") {
    
    console.log("Retiro exitoso");
  } else {
  
    console.log("Retiro fallido");
  }
}

function realizarDeposito() {

  let monto = prompt("Ingrese el monto a depositar: ");

 
  let tipoDeposito = prompt("El monto es en efectivo")
}