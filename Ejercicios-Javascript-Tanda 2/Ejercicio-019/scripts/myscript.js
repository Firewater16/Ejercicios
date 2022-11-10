/***************************************************************************************************************
*  
*   Objetivo: Eliminar caracteres expeciales de una cadena. Se permiten 
*             guion, subrayado y espacios
*
*
*
*   Entrada : cadena
*
*
*   Salida  : cadena sin . ! @ # $ % & \ * ( )
*
*
***************************************************************************************************************/

function entradaCadena(mensaje) {

    let cadena = prompt(mensaje);

    return cadena;
  }
  
let cadena = entradaCadena("Introduce una cadena con carácteres especiales")

cadena = cadena.replace(".","");
cadena = cadena.replace("!","");
cadena = cadena.replace("@","");
cadena = cadena.replace("#","");
cadena = cadena.replace("$","");
cadena = cadena.replace("%","");
cadena = cadena.replace("&","");
cadena = cadena.replace("\\","");
cadena = cadena.replace("*","");
cadena = cadena.replace("(","");
cadena = cadena.replace(")","");
console.log(cadena)