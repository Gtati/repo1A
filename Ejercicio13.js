// El concesionario de carros “VenXtucarro” es un lugar donde los compradores pueden comprar un carro nuevo o 
// usado. Estos establecimientos generalmente están asociados con una marca de automóviles específica y tienen 
// un inventario de vehículos nuevos. Hacer un programa en JavaScript que cumpla los siguientes requisitos o 
// características (programa básico-simulación):
// a. El usuario debe ingresar una marca de carros entre Chevrolet-Mazda y Renault.
// b. Dependiendo de la marca, se seleccionará una de dos referencias por marca ejemplo: captiva -traker
// c. El sistema le mostrara toda la información de cada una de las referencias en particular.
let marca = parseInt(prompt(`digite uno de los numeros para seleccionar la marca` + `\n` + `1.chevrolet` + `\n` + `2.mazda` + `\n` + `3. renault`));

switch (marca){
    case 1:{
    let seleccionado = parseInt(prompt(`ingrese de que marca desea obtener información 1.captiva o 2.tracker`));
    
    switch(seleccionado){
        case 1:{
            alert(`El Chevrolet Captiva es un SUV de tamaño medio desarrollado por la división coreana de General Motors y lanzado al mercado en el año 2006. Este vehículo comparte muchos elementos con el Opel Antara, muy similar y notablemente más caro. Ambos están construidos en Corea del Sur sobre la plataforma Theta de GM. Es un SUV de cinco puertas con motor delantero transversal, que puede ir asociado a cajas de cambio automáticas o manuales y a versiones de tracción delantera y total. Hay versiones con cinco o siete plazas, aunque en el segundo caso las dos butacas adicionales (plegables en el maletero) son más apropiadas para personas de pequeña estatura.`);break;
        }
        case 2:{
            alert(`La Chevrolet Tracker Turbo eleva los estándares de sofisticación de la categoría. Su exterior combina un nuevo diseño, rines de aluminio de 17” y rieles de techo cromado que la hacen sobresalir del resto, mientras que en su interior, el Sunroof panorámico y todo su confort no dejan lugar a dudas: estás en la camioneta perfecta para ti.La Chevrolet Tracker Turbo brinda la máxima protección, con 6 airbags de serie, frenado de emergencia, control de estabilidad y tracción, además de alertas de punto ciego y de colisión frontal. Toda su seguridad se refleja también en comodidad gracias a su asistente de arranque en pendiente y el sensor que enciende las luces automáticamente.`);break;
        }
    }


    break;}

    case 2:{
        let seleccionado2 = parseInt(prompt(`ingrese de que marca desea obtener información 1.stepway o 2.duster`));
        switch (seleccionado2){
            
            case 1:{
                alert(`El Renault STEPWAY está equipado de serie con 4 airbags (conductor, copiloto y laterales), frenos ABS, control de estabilidad (ESC), control de tracción (ASR), fijaciones ISOFIX®️ en los dos puestos laterales traseros y cinturones de seguridad de 3 puntos en todos los puestos.`);break;
            }
            case 2:{
                alert(`Su nuevo diseño interior completamente renovado te garantiza una experiencia más confortable en la aventura que quieras. Paneles cromados, nueva cojinería y más espacio para todos.`);break;
            }
    }
    break;}
    
    case 3:{
        let seleccionado3 = parseInt(prompt(`ingrese de que marca desea obtener información 1.cx-30 o 2.cx-60`));
        switch(seleccionado3){

            case 1:{
                alert(`Mazda CX-30 está diseñada bajo la ingeniería centrada en las personas y la plataforma Skyactiv-Vehicle Architecture, de modo que los neumáticos, los asientos y el chasis se complementen perfectamente para amoldarse a ti de la forma más natural posible.`);break;
            }
            case 2:{
                alert(`El amplio interior de Mazda CX-60 está inspirado en los métodos y materiales japoneses tradicionales. Las costuras en el panel, la disposición de los descansabrazos central, el diseño del volante, los asientos tipo cubo con cojinería en cuero Nappa Negro y el techo panorámico que deja entrar abundante luz en la cabina, son algunos de los elementos en los que nos enfocamos para crear un interior que sea cómodo para todos.`);break;
            }
        }
    break;}
      }
