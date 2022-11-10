/***************************************************************************************************************
*  
*   Objetivo: Solicitamos tres números al usuario e indicamos cual es el mayor
*
*
*   Entrada : numero1, numero2, numero3
*
*
*   Salida  : El mayor de numero1, numero2 y numero3 es : XXXXX
*
*   Nota: - Resolver de forma "clasica"
*         - Resolver empleando el objeto Math
*
***************************************************************************************************************/

function entradaNumero(mensaje){
    do{
        numero = prompt(mensaje)
    }while(isNaN(numero))

    return numero    
}

function clasico(num1, num2, num3 ){
    let max
    max = num1
    if (num2 > max)
         max = num2
    if(num3 > max)
        max = num3
    return max
}

function conMath(num1, num2, num3){
    return Math.max(num1, num2, num3)
}

let num1  = entradaNumero(`introduce un numero1`)
let num2  = entradaNumero(`introduce un numero2`)
let num3  = entradaNumero(`introduce un numero3`)

let resultado= conMath(num1, num2, num3)
console.log(`El mayor de ${num1}, ${num2} y ${num3} es : ${resultado}`)

