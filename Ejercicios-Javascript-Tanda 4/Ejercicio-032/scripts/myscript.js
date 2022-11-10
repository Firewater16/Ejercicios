/***************************************************************************************************************
 *
 *   Objetivo: Buscar el numero perdido en un array de n elementos.
 *             Están todos los enteros en el array menos uno
 *             Array desordenado
 *
 *   Entrada :
 *
 *
 *   Salida  :
 *
 *
 ***************************************************************************************************************/

let dato = [12, 15, 14, 13, 11, 10]

//let min = dato[0];
//let max = dato[0];
let marca = "test"

/* for (let i = 0; i < dato.length; i++) {
    if (dato[i] < min)
        min = dato[i]
    if (dato[i] > max)
        max = dato[i]
} */

let min = Math.min(...dato)
let max = Math.max(...dato)
for (let j = min; j <= max; j++) {
    if (!(dato.includes(j)))
        marca = j
}

if (isNaN(marca)) {
    console.log(`El numero tiene todos los elementos`)
} else
    console.log(`Falta ${marca}`)

