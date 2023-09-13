// Se necesita simular en JavaScript la atención de clientes a través de la asignación de
// turnos en un banco. Se debe usar arreglos o objetos dependiendo del algoritmo que
// diseñe. Y tener en cuenta las siguientes restricciones y requisitos.
// • Hay tres tipos de clientes: cliente preferencial, cliente general y cliente que no
// tiene cuenta en el banco
// • Hay dos tipos de atención: caja o asesoría.
// • Los de atención de caja se clasifican en depósitos y retiros.
// • El banco cuenta con 5 cajas, de las cuales la 1 y 2 están reservadas para retiros.
// • Aquellos clientes presenciales se atienden primero de los demás tipos.
// • La caja 5 es solo asesoría.
// • A medida que se atienden clientes se va liberando las cajas y distribuyendo entre
// los usuarios de las colas.
// Definimos los tipos de clientes
const TIPO_CLIENTE_PREFERENCIAL = "preferencial";
const TIPO_CLIENTE_GENERAL = "general";
const TIPO_CLIENTE_SIN_CUENTA = "sin_cuenta";

const TIPO_ATENCION_CAJA = "caja";
const TIPO_ATENCION_ASESORIA = "asesoria";

const TIPO_RETIRO = "retiro";
const TIPO_DEPOSITO = "deposito";

const CANTIDAD_CAJAS = 5;


const CAJAS_RESERVADAS_PARA_RETIROS = [1, 2];

const CAJA_DE_ASESORIA = 5;

const clientes = [];

function generarCliente() {

  const tipoCliente = TIPO_CLIENTE_PREFERENCIAL;
  for (let i = 0; i < 2; i++) {
    if (Math.random() > 0.5) {
      tipoCliente = TIPO_CLIENTE_GENERAL;
      break;
    }
  }

  const tipoAtencion = TIPO_ATENCION_CAJA;
  for (let i = 0; i < 2; i++) {
    if (Math.random() > 0.5) {
      tipoAtencion = TIPO_ATENCION_ASESORIA;
      break;
    }
  }

  if (tipoAtencion === TIPO_ATENCION_CAJA) {
    const tipoRetiro = TIPO_RETIRO;
    for (let i = 0; i < 2; i++) {
      if (Math.random() > 0.5) {
        tipoRetiro = TIPO_DEPOSITO;
        break;
      }
    }
  }

 
  return {
    tipoCliente: tipoCliente,
    tipoAtencion: tipoAtencion,
    tipoRetiro: tipoRetiro,
  };
}

function asignarTurno(cliente) {
  
  if (cliente.tipoCliente !== TIPO_CLIENTE_SIN_CUENTA) {
   
    clientes.push(cliente);
  }
}


function atenderCliente() {
  
  if (clientes.length === 0) {
    return;
  }


  const cliente = clientes.shift();

  if (cliente.tipoAtencion === TIPO_ATENCION_CAJA) {
 
    if (CAJAS_RESERVADAS_PARA_RETIROS.includes(cliente.tipoRetiro)) {
   
    } else {
     
    }
  } else {

  }
}

function ejecutarSimulacion() {

  for (let i = 0; i < 100; i++) {
    asignarTurno(generarCliente());
  }

  while (clientes.length > 0) {
    atenderCliente();
  }
}

ejecutarSimulacion();
