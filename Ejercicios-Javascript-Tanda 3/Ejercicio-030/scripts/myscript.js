/***************************************************************************************************************
*  
*   Objetivo: Solicita un texto y una palabra.
*
*
*   Entrada : cadenas de texto: texto, palabra
*
*
*   Salida  : Indica todas las posiciones en las que se encuentra la palabra dentro de texto
*
*   Notas: Métodos del objeto String
*
***************************************************************************************************************/

let texto  = prompt(`introduce el texto`)
let palabra  = prompt(`introduce la palabra a buscar`)


/* console.log(texto.indexOf(palabra))
console.log(texto.indexOf(palabra,((texto.indexOf(palabra)+palabra.length))))
cadena.substr(p,n)
 */


const posiciones=[]
let posicion=0
posicion=texto.indexOf(palabra,posicion)
while (posicion!=-1){
    posiciones.push(posicion)
    posicion=texto.indexOf(palabra,posicion+palabra.length)
}
console.log((posiciones.length)?posiciones:"No existe la palabra en el texto")


