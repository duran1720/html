//6. Cambio de unidades. en este ejercicio se solicita convertir a segundos una medida de tiempo 
//dada en horas y minutos. Recuerda una hora son 60 minutos y cada minuto son 60 segundos.
let horas=parseInt(prompt("Escribe la cantidad de horas: "));
let minutos=parseInt(prompt("Escribe la cantidad de minutos: "));   
let segundos=horas*60*60+minutos*60;
console.log("La cantidad de segundos es: " + segundos);