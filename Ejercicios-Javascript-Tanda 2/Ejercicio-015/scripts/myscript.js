/***************************************************************************************************************
*  
*   Objetivo: Solicitamos un número entero n al usuario y mostramos en la consola los numeros pares desde 1 hasta 
*             ese numero. Realizarlo con los tres tipos de bucles.
*
*   Entrada : numero entero n
*
*
*   Salida  : 2,4,6,....,n   
*
*   Notas: La salida finalizará en n o n-1 dependiendo de si n es par o impar
*
*   Notas: Resolver inicialmente e ejercicio de forma "clasica". Trataremos de realizarlo con arrays:
*          - ¿Como defenir un array con esos valores de forma rápida? 
*          - ¿Cómo recorrer el array uno a uno con métodos (funcion aplicada sobre el objeto) del mismo?
*          - ¿Cómo "unir" los elementos de un array y convertirlos en una cadena?
*
***************************************************************************************************************/

function entradaNumero(mensaje) {
    do {
      numero = prompt(mensaje);
    } while (isNaN(numero));
  
    return numero;
  }
  
  let num = entradaNumero(`Introduce un numero`);

  let vector = []
  for(let i=1;i<=num;i++){
    if(i%2==0){
      vector.push(i)
    }     
  }

  for(let i=2;i<=num;i+=2)
      //vector.push(i)
      console.log(i)
  
  //const pares=vector.filter(el => el%2==0 )
  