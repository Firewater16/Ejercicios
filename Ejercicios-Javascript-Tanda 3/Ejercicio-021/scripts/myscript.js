/***************************************************************************************************************
*  
*   Objetivo: Mostrar los elementos comunes y no comunes de dos arrays de longitud n
*             Crear tres funciones: 
*                1.- Devuelve un array con los elementos comunes en los arrays
*                2.- Devuelve los elementos del primer array que no están en el segundo array
*                3.- Devuelve los elementos del segundo array que no están en el primer array
*       
*             Rellenar los arrays con númeos aleatorios entre -100 y 100
*
*   Entrada : La longitud del array (numero entero n)
*
*   Salida  : Los elementos del Array1
*             Los elementos del Array2
*             Los arrays tienen XX elementos comunes: .... (los elementos comunes separados por comas)
*             Elementos del primer array no presentes en el segundo array: ...
*             Elementos del segundo array no presentes en el primer array: ....
*
***************************************************************************************************************/
function entradaNumero(mensaje) {
    do {
      numero = prompt(mensaje);
    } while (isNaN(numero));
  
    return numero;
  }
  
  let num = entradaNumero(`Introduce el numero`);

  const aleatorio=(min,max)=>Math.floor(min+(max-min)*Math.random())


const array1=Array.from({length:num},()=>aleatorio(-100,100))
const array2=Array.from({length:num},()=>aleatorio(-100,100))

const comunes=array1.filter(el=>array2.includes(el))

const comunes2=array1.filter(
  function comparar(el) {
    return array2.includes(el)
  }
)


const noComunes1=array1.filter(el=>!array2.includes(el))
const noComunes2=array2.filter(el=>!array1.includes(el))

  console.log(array1)
  console.log(array2)
  console.log(`El array tiene ${comunes.length} elementos en común y son ${comunes.join(",")}`)
  console.log(noComunes1)
  console.log(noComunes2)
  console.log(comunes3)

 


