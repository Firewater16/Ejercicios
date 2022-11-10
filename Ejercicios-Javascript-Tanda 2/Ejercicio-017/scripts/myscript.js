/***************************************************************************************************************
*  
*   Objetivo: Crear un objeto persona con nombre y edad y un metodo que determine si es mayor o no de edad
*
*
*   Entrada : 
*
*
*   Salida  : 
*
*
***************************************************************************************************************/

function entradaNumero(mensaje) {
    do {
       numero = prompt(mensaje);
    } while (isNaN(numero));
  
    return numero;
}

let nombre = prompt(`Introduce el nombre`);
let edad = entradaNumero(`Introduce la edad`);

const persona = {
    nombre,
    edad
}

const mayorEdad=(persona)=>(persona.edad>17)?true:false
console.log(mayorEdad(persona)?`${persona.nombre} es mayor de edad`:`${persona.nombre} es menor de edad`)