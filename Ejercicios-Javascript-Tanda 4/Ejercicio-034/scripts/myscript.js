/***************************************************************************************************************
*  
*   Objetivo: Mostrar la serie de fibonacci hasta el número indicado por el usuario
*             Cada elemento de la serie se calcula sumando los dos anteriores, empezando con 0 y 1
*
*   Entrada : n
*
*
*   Salida  : 0,1,2,3,5,8,13,....
*
*   Notas:  ¿Cómo hacerlo de forma iterativa?
*           ¿Cómo hacerlo de forma recursiva?
*
***************************************************************************************************************/
function entradaNumero(mensaje) {
    do {
        numero = prompt(mensaje)
    } while (isNaN(numero))

    return numero
}


let num = entradaNumero(`introduce un numero`)
let fibonachi1 = 0

console.log(fibonachi1)

let fibonachi2 = fibonachi1 + 1
let fibonachi = fibonachi1 + fibonachi2

do {
    fibonachi = fibonachi1 + fibonachi2

    fibonachi1 = fibonachi2
    fibonachi2 = fibonachi

    if (fibonachi < numero)
        console.log(fibonachi)
} while (fibonachi < numero)


