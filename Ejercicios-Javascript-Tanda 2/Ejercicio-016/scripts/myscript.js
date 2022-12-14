/***************************************************************************************************************
*  
*   Objetivo: Solicitaremos de forma repetida un número entero entre 1 y 9 mientras no esté entre esos valores. 
*             Cuando el número esté entre 1 y 9, mostraremos la tabla de multiplicar de ese número
*
*   Entrada : numero     1 <= numero <= 9
*
*   Salida  : 1 x numero = numero
*             2 x numero = ....
*             3 x numero = ....
*                   ....
*             9 x numero = ....
*
*   Nota:  * Mostraremos el resultado de dos formas:
*            - En la consola del navagador, empleando template strings
*            - En el documento HTML, formateando la salida empleando una tabla con 5 columnas y nueve filas
*          * Declararemos y emplearemos funciones
*
***************************************************************************************************************/
function entradaNumero(mensaje) {
    do {
      numero = prompt(mensaje);
    } while (isNaN(numero) || numero<1 || numero>9);
  
    return numero;
  }
  
  let num = entradaNumero(`Introduce un numero entre 1 y 9`);

  function tablaMult(num){
    let resultado="<table>"
    for(let i=1;i<=10;i++)
        resultado+=`<tr><td>${num}</td><td> * </td><td>${i}</td><td> =</td> <td>${num*i}</td></tr>`
    resultado+="</table>"
    return resultado
  }

  const $contenedor=document.getElementById("contenedor")
    $contenedor.innerHTML=tablaMult(num)