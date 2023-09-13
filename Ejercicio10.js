// Un examen de conocimientos es una prueba diseñada para evaluar el conocimiento y comprensión de un tema 
// o disciplina específica. Hacer un programa en JavaScript que cumpla los siguientes requisitos o características 
// (programa básico-simulación):
// a. Se debe presentar 5 preguntas (sea de selección múltiple o verdadero-falso.
// b. Cada pregunta debe ser evaluada si fue correcta o no su respuesta.
// c. Si la opción es correcta se suma 10 puntos por cada pregunta.
// d. Se debe mostrar los resultados del examen.

let suma = 10
let contadorPuntos = 0; 
alert(`BIENVENIDO AL TEST DE PREGUNTAS DE CULTURA GENERAL`)
function preguntas (){
let pregunta1 = parseInt(prompt(`El idioma de autralia es el frances?` + `\n` + `1.verdadero` +`\n` + `2.falso`  ));
if(pregunta1 == 1){
    alert(`Su respuesta es incorrecta`)
}else if (pregunta1 == 2){
    alert(`su respuesta es correcta le sumaremos ${suma} puntos🥳`)
    contadorPuntos +=10
}

let pregunta2 = parseInt(prompt(`🏞️El rio Nilo es el mas largo del mundo?🌏` + `\n` + `1.verdadero` +`\n` + `2.falso` ));
if(pregunta2 == 1){
    alert(`Su respuesta es incorrecta`)
}else if (pregunta2 == 2){
    alert(`su respuesta es correcta le sumaremos ${suma} puntos🥳`)
    contadorPuntos +=10
    
}
let pregunta3 = parseInt(prompt(`El cuerpo humano tiene 206 huesos?🦴🦴` + `\n` + `1.verdadero` +`\n` + `2.falso` ));
if (pregunta3 == 1){
    alert(`Su respuesta es correcta le sumaremos ${suma} puntos🥳`)
    contadorPuntos +=10
}else if (pregunta3 == 2){
    alert(`Su respuesta es incorrecta`)
}

let pregunta4 = parseInt(prompt(`El oxigéno es el método por el cual las plantas se alimentan?🪴`  + `\n` + `1.verdadero` +`\n` + `2.falso` ));
if(pregunta4 == 1){
    alert(`Su respuesta es incorrecta`)
}else if (pregunta4 == 2){
    alert(`su respuesta es correcta le sumaremos ${suma} puntos🥳`)
    contadorPuntos +=10
    
}

let pregunta5 = parseInt(prompt(`El animal mas grande de la tierra es la ballena azul?🐳` + `\n` + `1.verdadero` +`\n` + `2.falso`  ));
if (pregunta5 == 1){
    alert(`Su respuesta es correcta le sumaremos ${suma} puntos🥳`)
    contadorPuntos +=10
}else if (pregunta5 == 2){
    alert(`Su respuesta es incorrecta`)
}

alert (`Usted obtuvo un total de ${contadorPuntos} puntos`)
if(contadorPuntos==50){
    alert(`Felicitaciones todas sus respuestas fueron correctas🥳🥳🥳`)
}
}
preguntas()