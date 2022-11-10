/***************************************************************************************************************
*  
*   Objetivo: Determinar si un número entero introducido es par o impar
*             Crear para ello una función
*
*   Entrada : n
*
*   Salida  : El número n es (par|impar)
*
***************************************************************************************************************/
function parImpar (num){
    if(num%2 == 0){
        console.log(`El número ${num} es par`)
    }else{
        console.log(`El número ${num} es impar`)
    }  
    return true   
}
function entradaNumero(entrada){
    do{
        entrada = prompt("Introduce un número")
    }while(isNaN(entrada))

    return entrada
    
}


    let muestra = entradaNumero()
    let resultado = parImpar(muestra)