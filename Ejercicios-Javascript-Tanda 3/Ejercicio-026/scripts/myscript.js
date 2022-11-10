/***************************************************************************************************************
*  
*   Objetivo: Se solicita un número entero n entre 1 y 20 al usuario. Se mostrará una pirámide de la forma:
*
*               1
*               2 2
*               3 3 3
*               4 4 4 4
*                 ...
*               n n n n n n n (n veces)
*
*   Entrada : numero entero n
*
*
*   Salida  : La pirámide mostrada en el objetivo del ejercicio
*
*
***************************************************************************************************************/
function entradaNumero(mensaje) {
    do {
      numero = prompt(mensaje);
    } while (isNaN(numero));
  
    return numero;
  }
  
let num = entradaNumero(`Introduce un numero para hacer una piramide`);

// para el numero de pisos
for(let i = 1; i <= num; i++){
    for(let j = 1; j <= i; j++){
        console.log(i)
    }
    console.log('\n')
}
