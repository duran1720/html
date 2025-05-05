//8. Una torta de papa lleva 200 gramos de papa por persona. Por cada kilo de papa se necesitan 5 
//huevos y 300 gramos de cebolla. Escribe un script que dado el número de personas calcule las 
//cantidades de ingredientes necesarias
let personas=parseInt(prompt("Escribe el número de personas: "));
let gramosPapa=200*personas;
let kilosPapa=gramosPapa/1000;  
let huevos=kilosPapa*5;
let gramosCebolla=300*personas;
console.log("La cantidad de papa necesaria es: " + gramosPapa + " gramos");
console.log("La cantidad de kilos de papa necesaria es: " + kilosPapa + " kilos");
console.log("La cantidad de huevos necesaria es: " + huevos + " huevos"); 
