/***************************************************************************************************************
*  
*   Objetivo: n es pandigital si contiene al menos una vez todos los digitos del 0 al 9
*
*
*
*   Entrada : 
*
*
*   Salida  : 
*
*
***************************************************************************************************************/
function entradaNumero(mensaje){
    do{
        numero = prompt(mensaje)
    }while(isNaN(numero))

    return numero    
}


let num  = entradaNumero(`introduce un numero`)
const separado = num.split("");      
let cont = 0
for(let i = 0; i<10; i++)
    if(separado.includes(`${i}`))
        cont++

if(cont == 10)
    console.log(`El numero ${num} es pandigital`)
else
    console.log(`El numero ${num} NO es pandigital`)

//let pandigital=separado.every(el=>"0123456789".split('').includes(el))
