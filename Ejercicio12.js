// La Champions League es la competición de fútbol más importante en el mundo. Se juega cada año entre los 
// mejores equipos de Europa y es organizada por la Unión de Asociaciones Europeas de Fútbol (UEFA). Los 
// equipos compiten por la Copa de Europa y la gloria de ser el mejor equipo. Hacer un programa en JavaScript que 
// cumpla los siguientes requisitos o características (programa básico-simulación):
// a. Ingresar por el usuario el nombre del primer equipo
// b. Ingresar por el usuario el marcador del primer equipo.
// c. Ingresar por el usuario el nombre del segundo equipo
// d. Ingresar por el usuario el marcador del segundo equipo
// e. Hacer el ingreso para 3 fechas particulares de la Champions League.
// f. Mostrar Resultados de ranking de equipos.




alert("THE CHAMPIOONSS 🏆⚽")
alert("Información del primer equipo ✔")





let nameTeamOne=prompt("Ingresa el nombre del primer equipo");
let nameTeamTwo=prompt("Ingresa el nombre del segundo equipo");

/////////////////PRIMER PARTIDO/////////////////////////

alert("⚡🥵😈 Primer partido 😈🥵⚡")


let scoreTeamOne1=prompt("Ingresa el marcador del primer equipo");

let scoreTeamTwo1=prompt("Ingresa el marcador del segundo equipo");

alert(`Final del partido ${nameTeamOne} VS ${nameTeamTwo}: ${scoreTeamOne1}-${scoreTeamTwo1}`)

/////////////////SEGUNDO PARTIDO/////////////////////////


alert("⚡🥵😈 Segundo partido 😈🥵⚡")


let scoreTeamOne2=prompt("Ingresa el marcador del primer equipo");

let scoreTeamTwo2=prompt("Ingresa el marcador del segundo equipo");

alert(`Final del partido ${nameTeamOne} VS ${nameTeamTwo}: ${scoreTeamOne2}-${scoreTeamTwo2}`)


/////////////////TERCER PARTIDO/////////////////////////


alert("⚡🥵😈 Tercer partido 😈🥵⚡")


let scoreTeamOne3=prompt("Ingresa el marcador del primer equipo");

let scoreTeamTwo3=prompt("Ingresa el marcador del segundo equipo");

alert(`Final del partido ${nameTeamOne} VS ${nameTeamTwo}: ${scoreTeamOne3}-${scoreTeamTwo3}`)



document.write("🏆 Resultado de los partidos 🏆<br><br>")

document.write(`Marcador del primer partido ⚽${nameTeamOne} VS ${nameTeamTwo} : ${scoreTeamOne1}-${scoreTeamTwo1}⚽<br>`)
document.write(`Marcador del segundo partido ⚽${nameTeamOne} VS ${nameTeamTwo} : ${scoreTeamOne2}-${scoreTeamTwo2}⚽<br>`)
document.write(`Marcador del tercer partido ⚽${nameTeamOne} VS ${nameTeamTwo} : ${scoreTeamOne3}-${scoreTeamTwo3}⚽<br><br>`)




/////////////// ORGANIZAR PUNTOS //////////////////////////

let ptsOne=0;
let ptsTwo=0;
////////////////PRIMER PARTIDO/////////////////////////////

function champions(){


if(scoreTeamOne1>scoreTeamTwo1){

    ptsOne+=3
}else if(scoreTeamTwo1>scoreTeamOne1){

    ptsTwo+=3

}else if(scoreTeamOne1==scoreTeamTwo1){

    ptsOne++
    ptsTwo++
}

/////////////////SEGUNDO PARTIDO//////////////////////

if(scoreTeamOne2>scoreTeamTwo2){

    ptsOne+=3
}else if(scoreTeamTwo2>scoreTeamOne2){

    ptsTwo+=3

}else if(scoreTeamOne2==scoreTeamTwo2){

    ptsOne++
    ptsTwo++
}

////////////////TERCER PARTIDO/////////////////////////

if(scoreTeamOne3>scoreTeamTwo3){

    ptsOne+=3
}else if(scoreTeamTwo3>scoreTeamOne3){

    ptsTwo+=3

}else if(scoreTeamOne3==scoreTeamTwo3){

    ptsOne++
    ptsTwo++
}

//////////////////// ORGANIZAR RANKING /////////////////////////////

document.write("🏆 RANKING 🏆<br><br>")

if(ptsOne>ptsTwo){

document.write(`1. ${nameTeamOne} con ${ptsOne} puntos<br> 2. ${nameTeamTwo} con ${ptsTwo} puntos`)

}else if(ptsOne<ptsTwo){

document.write(`1. ${nameTeamTwo} con ${ptsTwo} puntos<br> 2. ${nameTeamOne} con ${ptsOne} puntos`)


    
}else if(ptsOne===ptsTwo){

document.write(`${nameTeamTwo} y ${nameTeamOne} tienen los mismos ${ptsOne} puntos`)

    
}}

champions();