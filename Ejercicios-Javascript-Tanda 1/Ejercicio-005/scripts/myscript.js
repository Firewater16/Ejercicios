/***************************************************************************************************************
*  
*   Objetivo: Solicitar al usuario que visita la página dos números enteros y mostrar en la consola el resultado de 
*             sumarlos, restarlos, multiplicarlos y dividirlos
*
*   Entrada : Dos números enteros: numero1, numero2
*
*
*   Salida  : La suma de numero1 y numero2 es: numero1+numero2 
*             La resta de numero1 y numero2 es: numero1-numero2 
*             El producto de numero1 y numero2 es: numero1*numero2 
*             La division de numero1 entre numero2 es: numero1/numero2 
*
*   Notas   : Ten en cuenta que:
*                   - la división entre los números puede dar un número con muchos decimales
*                     ¿Cómo podríamos limitar el número de decimales que se mostrarán?
*                   - ¿Qué pasaría en la division si numero2=0 ?
*
***************************************************************************************************************/

    let num1
    let num2

    do {
        num1 = prompt("Numero 1")
        num1 = parseFloat(num1)
        
    }while(isNaN(parseFloat(num1)))
    
    do {
        num2 = prompt("Numero 2")
        num2 = parseFloat(num2)
        
    }while(isNaN(parseFloat(num2)) || num2==0)
    
    const sumar=(x,y)=>x+y

    console.log(`La suma de ${num1} y ${num2} es ${sumar(num1,num2)}`)
    console.log(`La resta de ${num1} y ${num2} es ${num1-num2}`)
    console.log(`El producto de ${num1} y ${num2} es ${num1*num2}`)
    console.log(`La división de ${num1} y ${num2} es ${(num1/num2).toFixed(2)}`)

