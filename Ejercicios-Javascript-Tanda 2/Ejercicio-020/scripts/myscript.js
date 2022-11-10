/***************************************************************************************************************
*  
*   Objetivo: Solicita dos números enteros. Muestra el cuadrado de todos los números entre ellos
*
*   Entrada : inicio, fin
*
*
*   Salida  : inicio², (inicio+1)², ..... (fin)²
*
*   Notas: Emplearemos la forma "clasica" de hacerlo.
*         ¿Cómo podemos hacerlo empleando arrays haciendo uso del método map? 
*
***************************************************************************************************************/
function entradaNumero(mensaje) {
    do {
      numero = prompt(mensaje);
    } while (isNaN(numero));
  
    return numero;
  }
  
  let num1 = entradaNumero(`Introduce el numero menor `);
  let num2 = entradaNumero(`Introduce el numero mayor `);
  if(num2<num1){
    window.alert("El segundo número debe ser mayor al primero")
  }
  let result=0
  for(let i=num1;i<=num2;i++){
    result = result+Math.pow(i,2)
  }
  console.log(result)