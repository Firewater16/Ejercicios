/***************************************************************************************************************
*  
*   Objetivo: Funcion que devuelve un objeto con la frecuencia de cada vocal en una frase
*
*
*   Entrada : cadena de texto  (p.j: La verdad saldrá a la luz)
*
*
*   Salida  : Frecuencia de vocales { "a":6, "e":1, "i":0, "o":0, "u":1 }
*
*
*
***************************************************************************************************************/
let texto  = prompt(`introduce la cadena`)

let a = 0
let e = 0
let i = 0
let o = 0
let u = 0
let array = texto.split("")

for(let j = 0; j < array.length; j++){
    if(array[j]=="a")
        a++
    
    if(array[j]=="e")
        e++

    if(array[j]=="i")
        i++

    if(array[j]=="o")
        o++

    if(array[j]=="u")
        u++

}

console.log(`a = ${a}, e = ${e}, i = ${i}, o = ${o} ,u = ${u}`)


