/***************************************************************************************************************
*  
*   Objetivo: Se solicita al usuario el número de filas y columnas de una tabla. Se rellena cada celda con 
*             el producto del numero de fila por el número de columna
*
*
*   Entrada : nfilas, ncols (números enteros)
*
*
*   Salida  : tabla html con nfilas y ncols. Cada celda contendrá el producto del número de fila por la columna
*
*
***************************************************************************************************************/
function entradaNumero(mensaje) {
    do {
      numero = prompt(mensaje);
    } while (isNaN(numero));
  
    return numero;
  }
  
let fila = entradaNumero(`Introduce el numero de filas`);
let colu = entradaNumero(`Introduce el numero de columnnas`);

function crearTabla(fila,colu){
    let result="<table>"
    for(let i = 1; i<=fila; i++){
        result += `<tr>`
        for(let j = 1; j<=colu; j++){
            result += `<td>${i*j}</td>`
        }
        result += `</tr>`
    }
    result += `</table>`
    return result
}

console.log(crearTabla(fila,colu))

const $contenedor=document.getElementById("contenedor")
$contenedor.innerHTML=crearTabla(fila,colu)