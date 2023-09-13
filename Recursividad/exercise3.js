// Desarrollar en JavaScript un programa para la gestión reservas de un hotel,
// el cual, debe tener las siguientes características y consideraciones:
// • Un cliente puede reservar cualquier tipo de habitación: individual, doble y
// familiar.
// • Las habitaciones pueden ser para fumadores o no fumadores.
// • Las mascotas solo se aceptan en habitaciones familiares.
// • El hotel cuenta con 3 habitaciones de cada tipo.
// • No se puede exceder el número de personas por habitación: individual 2
// personas, 4 personas para doble y 6 personas para familiar.
// • El hotel necesita una estadística de las reservas: nombre de quien reserva,
// país de origen, número de personas, el periodo de la estadía, número de
// personas que están ocupando el hotel y si el huésped trajo mascota.
// Definir variables globales
let habitaciones = {
    individual: [
      { disponible: true },
      { disponible: true },
      { disponible: true },
    ],
    doble: [
      { disponible: true },
      { disponible: true },
      { disponible: true },
    ],
    familiar: [
      { disponible: true },
      { disponible: true },
      { disponible: true },
    ],
  };
  
  let reservas = [];
  
 
  function realizarReserva() {
    
    let nombre = prompt("Ingrese su nombre: ");
  

    let paisOrigen = prompt("Ingrese su país de origen: ");
 
    let numeroPersonas = prompt("Ingrese el número de personas: ");

    let tipoHabitacion = prompt("Ingrese el tipo de habitación: ");
  
    let esFumador = prompt("¿La habitación es para fumadores? (si/no): ");
  

    let tieneMascota = prompt("¿Lleva mascota? (si/no): ");
  
    if (numeroPersonas > habitaciones[tipoHabitacion][0].capacidad) {
      console.log("El número de personas excede el límite de la habitación");
      return;
    }
  

    if (!habitaciones[tipoHabitacion][0].disponible) {
      console.log("La habitación no está disponible");
      return;
    }
  
    
    habitaciones[tipoHabitacion][0].reservado = true;
  
    reservas.push({
      nombre: nombre,
      paisOrigen: paisOrigen,
      numeroPersonas: numeroPersonas,
      tipoHabitacion: tipoHabitacion,
      esFumador: esFumador === "si",
      tieneMascota: tieneMascota === "si",
    });
  
    console.log("Reserva realizada con éxito");
  }
  
  
  function generarEstadisticas() {
    
    let habitacionesOcupadas = 0;
    for (const tipoHabitacion in habitaciones) {
      for (const habitacion of habitaciones[tipoHabitacion]) {
        if (habitacion.reservado) {
          habitacionesOcupadas++;
        }
      }
    }
  
    let mascotas = 0;
    for (const reserva of reservas) {
      if (reserva.tieneMascota) {
        mascotas++;
      }
    }
  
 
    console.log("Estadísticas de las reservas");
    console.log("Número de habitaciones ocupadas:", habitacionesOcupadas);
    console.log("Número de mascotas:", mascotas);
  }
  

  function main() {
   
    mostrarMenuPrincipal();
  }
  
  function mostrarMenuPrincipal() {

    console.log("Menú principal");
    console.log("1. Realizar reserva");
    console.log("2. Generar estadísticas");
    console.log("3. Salir");
  }
    let opcion = prompt("Seleccione una opción: ");
  

    switch (opcion) {
      case "1":
        realizarReserva();
        break;
      case "2":
        generarEstadisticas();
        break;
      case "3":
        salir
    }  