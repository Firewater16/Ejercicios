/***************************************************************************************************************
*  
*   Objetivo: Solicitamos al usuario su peso (en kg) y su estatura (en metros). Calculamos el índice de masa 
*             corporal, lo almacene en una variable y muestre por pantalla la frase "Tu índice de masa corporal 
*             es <imc>", donde <imc> corresponde al indice de masa corporal redondeado con dos decimales e indique
*             si hay riesgo de enfermedad coronaria.
*
*             El índice de masas corporal es el cociente entre el peso del individuo en kilos y el cuadrado de su
*             estatura en metros.        
*
*             El riesgo de que una persona sugra enfermedades coronarias depende de su edad y su índice de masa
*             corporal:
*                               Edad<45     Edad>=45
*                   IMC<=22.0    bajo         medio
*                   IMC>=22.0    medio        alto
*
*   Entrada : peso, estatura
*
*
*   Salida  : "Tu índice de masa corporal es <imc>. Tienes un riesgo ..... de enfermedad coronaria"
*
*   Nota: Emplear una funcion a la que se le pasen dos parámetros, peso y altura, que imprima la salida
*         Si nos vieramos en la necesidad de que una función devolviera varios datos ¿cómo podríamos hacerlo?
*
***************************************************************************************************************/
function entradaNumero(mensaje) {
    do {
        numero = prompt(mensaje)
    } while (isNaN(numero))

    return numero
}

function imc(peso, altura) {
    return (peso / Math.pow(altura, 2))
}



let peso = entradaNumero(`introduce tu peso en kilogramos`)
let altura = entradaNumero(`introduce tu altura en metros`)
let edad = entradaNumero(`introduce tu edad`)
switch (true) {
    case edad < 45 && imc(peso, altura) <= 22:
        nivel = "BAJO"
        break;
    case edad >= 45 && imc(peso, altura) <= 22:
        nivel = "MEDIO"
        break;
    case edad < 45 && imc(peso, altura) >= 22:
        nivel = "MEDIO"
        break;
    case edad >= 45 && imc(peso, altura) >= 22:
        nivel = "ALTO"
        break;

}

console.log(`tu índice de masa corporal es ${imc(peso, altura).toFixed(2)} tienes riesgo ${nivel} de enfermedad coronaria`)