/***************************************************************************************************************
*  
*   Objetivo: Solicitamos el número de caramelos y el número de niños, y calcule
*             cuantos caramelos tocan por niño y cuantos sobran. 
*
*   Entrada : nCaramelos, nPeques
*
*
*   Salida  : Debe mostrar el resultado por consola de depuración con un mensaje como
*                   El número de caramelos por niño es: XXXX
*                   El número de caramelos que sobran es: YYYY
*
***************************************************************************************************************/
function caramelos(nCaramelos, nPeques){
    let caramelosNiño = parseInt(nCaramelos / nPeques)
    let caramelosSobran = nCaramelos % nPeques

    console.log(`El número de caramelos por niño es: ${caramelosNiño}`)
    console.log(` El número de caramelos que sobran es: ${caramelosSobran}`)
    return true
}
function entradaNumeroCarame(entrada){
    do{
        entrada = prompt("Introduce el numero de caramelos")
    }while(isNaN(entrada))

    return entrada
    
}
function entradaNumeroNino(entrada){
    do{
        entrada = prompt("Introduce el numero de niños")
    }while(isNaN(entrada))

    return entrada
    
}
    let cantidadCaramelos = entradaNumeroCarame()
    let ninos = entradaNumeroNino()
    
    let resultado = caramelos(cantidadCaramelos, ninos)