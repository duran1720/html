//5. Escriba un programa que solicite al usuario ingresar el número de kilómetros recorridos por su 
//carro y el número de litros consumidos . El script debe mostrar el consumo de combustible por 
//kilómetro.  Un  problema  matemático  muy  simple  numero  de  litros  dividido  por  número  de 
//kilómetros.
let kilometrosRecorridos=parseInt(prompt("Escribe el número de kilómetros recorridos: "));
let litrosConsumidos=parseInt(prompt("Escribe el número de litros consumidos: "));
let consumoPorKilometro=litrosConsumidos/kilometrosRecorridos;
console.log("El consumo de combustible por kilómetro es: " + consumoPorKilometro);