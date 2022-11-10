/***************************************************************************************************************
*  
*   Objetivo: n es automorfico si su cuadrado termina en n
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
  
let num = entradaNumero(`Introduce un número para ver si es automorfico`);


numCuadArray = Array.from(String(Math.pow(num,2)))

if((numCuadArray.slice(numCuadArray.length - num.length).join("")) === (num.split("").join(""))){
    console.log(`${num} es automorfico`)
}else
    console.log(`${num} no es automorfico`)

//console.log(Math.pow(num,2).toString().slice(-num.toString().length)==num.toString())





