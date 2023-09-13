// Construya un algoritmo con JavaScript” para las estadísticas de atención de una
// universidad teniendo en cuenta los siguientes requisitos:
// 1. Hay dos módulos de atención: terminal para llamada telefónica y oficina.
// 2. El sistema brinda las estadísticas de todo el proceso de atención:
// • Cantidad de usuarios atendidos.
// • Atendidos por día y especificación por segmento (Estudiante – docente) en
// cada uno de los módulos de atención.
// • Se permite trasferir de módulo de atención y se debe generar estadística de
// esta trasferencia


let totalUsuariosAtendidos = 0;
let atendidosPorDia = {};
let atendidosPorSegmento = {
  estudiante: {
    terminal: 0,
    oficina: 0
  },
  docente: {
    terminal: 0,
    oficina: 0
  }
};
let transferencias = 0;


function registrarAtencion(segmento, modulo) {
  totalUsuariosAtendidos++;
  atendidosPorSegmento[segmento][modulo]++;
}

function registrarTransferencia() {
  transferencias++;
}

function mostrarEstadisticas() {
  console.log("Total de usuarios atendidos:", totalUsuariosAtendidos);


  for (const fecha in atendidosPorDia) {
    console.log(`Atendidos por día ${fecha}:
      Estudiante: ${atendidosPorDia[fecha].estudiante}
      Docente: ${atendidosPorDia[fecha].docente}
    `);
  }


  for (const segmento in atendidosPorSegmento) {
    console.log(`Atendidos por segmento ${segmento}:
      Terminal: ${atendidosPorSegmento[segmento].terminal}
      Oficina: ${atendidosPorSegmento[segmento].oficina}
    `);
  }


  console.log("Transferencias:", transferencias);
}


registrarAtencion('estudiante', 'terminal');
registrarAtencion('docente', 'oficina');
registrarTransferencia();
registrarAtencion('estudiante', 'oficina');


mostrarEstadisticas();
