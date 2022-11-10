/***************************************************************************************************************
*  
*   Objetivo: Solicita al usuario el valor de los catetos de un triángulo rectángulo y calcula la hipotenusa del
*             triángulo empleando el teorema de Pitágoras (hipotenusa=raiz_cuadrada(catetoA²+catetoB²))
*
*   Entrada : catetoA, catetoB
*
*
*   Salida  : La hipotenusa del triángulo con catetos catetoA y catetoB es XXXX
*
*
***************************************************************************************************************/

let cat1
let cat2

do{
    cat1 = prompt("Cateto 1")
}while(isNaN(parseFloat(cat1)))
do{
    cat2 = prompt("Cateto 2")
}while(isNaN(parseFloat(cat2)))

const hip=(cat1,cat2)=> Math.pow((Math.pow(cat1, 2) + Math.pow(cat2, 2)), 1/2).toFixed(2)

console.log(`La hipotenusa del triangulo con catetos ${cat1} y ${cat2} es ${hip(cat1,cat2)}`)