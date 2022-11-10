/***************************************************************************************************************
*  
*   Objetivo: Solicitamos un número entero n al usuario y mostramos en la consola los numeros desde 0 hasta ese numero
*
*
*   Entrada : numero entero n
*
*
*   Salida  : 0,1,2,3,4,5,....,n
*
*
***************************************************************************************************************/
function entradaNumero(mensaje) {
  do {
    numero = prompt(mensaje);
  } while (isNaN(numero));

  return numero;
}

function imprimir(num) {
  let cadena = 0;
  let i = 1;
  do {
    cadena = cadena + "," + i;
    i++;
  } while (i <= num);

  return cadena;
}

let num = entradaNumero(`introduce un numero`);

let resultado = imprimir(num);
console.log(resultado);