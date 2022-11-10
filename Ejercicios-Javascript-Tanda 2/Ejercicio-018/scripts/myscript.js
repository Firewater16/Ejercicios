/***************************************************************************************************************
*  
*   Objetivo: Crear un array con objetos tipo persona (con nombre y edad) y determinar cuantos son mayores de edad
*             Devolver el promedio de todas las edades
*             Devolver el promedio de las personas mayores de edad
*             Devolver el promedio de las personas menores de edad
*
*   Entrada : --
*
*
*   Salida  : El array de objetos creados y los datos indicados en el objetivo del ejercicio
*
*   Nota: Escogemos el nombre de la persona aleatoriamente entre los declarados en un array con nombres de personas 
*         La edad de la persona será un número aleatorio entero entre 1 y 100
*
***************************************************************************************************************/
persona = new Object()
    persona.nombre;
    persona.edad;

function ConstrPersona(nombre, edad){
    this.nombre = nombre
    this.edad = edad
}


function edadMedia(conjunto){
    sumatorio = 0
    for (i = 0; i < conjunto.length; i++)
        sumatorio = conjunto[i].edad + sumatorio;
    
    return sumatorio/10
}

function mediaMayoresEdad(conjunto){
    sumatorio = 0
    for (i = 0; i < conjunto.length; i++){
       
        if(conjunto[i].edad>17)
            sumatorio ++
    }
       
    return sumatorio * 10
}
function mediaMenoresEdad(conjunto){
    sumatorio = 0
    for (i = 0; i < conjunto.length; i++){
       
        if(conjunto[i].edad<18)
            sumatorio ++
    }
       
    return sumatorio * 10
}

let nombresPrueba = ["Juan", "Luis", "Paco", "Pepe", "Manuel", "Alberto","Maria", "Marta","Laura", "Lucia","Sara", "Irene"]


for (i = 0; i < conjunto.length; i++)
  console.log( conjunto[i]);

  console.log(`La edad media del cojunto es ${edadMedia(conjunto)}`)
  console.log(`La media de mayores de edad es del ${mediaMayoresEdad(conjunto)}%`)
  console.log(`La media de menores de edad es del ${mediaMenoresEdad(conjunto)}%`)

  //const aleatorio=(min,max)=>Math.floor(min+(max-min)*Math.random())

  const LONGITUD=20
  const personas=Array.from({length:LONGITUD},()=>{return {nombre:nombresPrueba[aleatorio(0,10)],edad:aleatorio(1,100)}})