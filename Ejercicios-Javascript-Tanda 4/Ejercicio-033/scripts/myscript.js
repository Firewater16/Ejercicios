/***************************************************************************************************************
*  
*   Objetivo: Comprobar si la cadena introducida por el usuario es un palíndromo (se lee igual al revés).
*             P.j: Dabale arroz a la zorra el abad
*
*
*   Entrada : Cadena de texto
*
*
*   Salida  : La cadena .... (es|no es) un palíndromo
*             ¿Podríamos resolverlo empleando métodos de Array?
*             ¿Podríamos resolverlo empleando recursividad?
*
***************************************************************************************************************/
let cadena = prompt(`introduce la cadena`)

function palindrome(cadena) {
    let cadArray = cadena.toLowerCase().replaceAll(" ", "").split("")
    const LIMITE = (cadArray.length % 2 == 0) ? cadArray.length / 2 : (cadArray.length - 1) / 2
    for (let i = 0; i <= LIMITE; i++)
        if (cadArray[i] != cadArray[cadArray.length - 1 - i])
            return false
    return true
}

console.log(`La cadena \"${cadena}\" ${palindrome(cadena) ? "ES" : "NO ES"} un palindromo usanso metodos array`)

// retirn a[0]==a[a.leng-1]&&palindrome()

function palindromoRecursiva(cadena) {

    let cadArray = cadena.toLowerCase().replaceAll(" ", "").split("")
    if (cadena.length == 0 || cadena.length == 1)
        return true;

    if (cadArray[0] != cadArray[cadArray.length - 1])
        return false

    return palindromoRecursiva(cadArray.slice(1, cadArray.length - 1).join(""));

    // return cadArray[0] != cadArray[cadArray.length - 1] && palindromoRecursiva(cadArray.slice(1, cadArray.length - 1).join(""));

}
console.log(`La cadena \"${cadena}\" ${palindromoRecursiva(cadena) ? "ES" : "NO ES"} un palindromo usando recursividad`)
