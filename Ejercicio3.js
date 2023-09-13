//Inmobiliaria
let costo = parseInt(prompt("Ingrese el costo de la casa"));

function CalcularComision() {
  let tipo = parseInt(prompt("Ingrese el tipo de inmueble. 1. Usado 2.Nuevo"));

  if (tipo == 1) {
    alert(
      `Señor propietario el valor que usted recibirá será  ` +
        costo * 0.9 +
        "\n" +
        `El valor recibido por la inmobiliaria es ` +
        costo * 0.1
    );
  }
  if (tipo == 2) {
    alert(
      `Señor propietario el valor que usted recibirá será  ` +
        costo * 0.88 +
        "\n" +
        `El valor recibido por la inmobiliaria es ` +
        costo * 0.12
    );
  }
}
CalcularComision();
