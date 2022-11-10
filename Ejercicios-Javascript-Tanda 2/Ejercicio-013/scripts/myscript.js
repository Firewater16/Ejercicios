/***************************************************************************************************************
*  
*   Objetivo: puntuacionGolf. El el golf cada hoyo tiene un par, es decir, el número medio de golpes que se espera hacer para meter la bola en el hoyo. 
*             Dependiendo de como de lejos, por arriba o abajo, estamos del par, la clasificacion recibirá un nombre diferente.
*             Crearemos una funcion que al pasarle el par y el número de golpes que se hicieron devuelva el nombre de la clasificacion de acuerdo con la siguiente tabla:
*
*             Golpes	    Clasificacion
*              1	         "Hole-in-one!"
*              <= par - 2	 "Eagle"
*              par - 1	     "Birdie"
*              par	         "Par"
*              par + 1	     "Bogey"
*              par + 2	     "Double Bogey"
*              >= par + 3	 "Go Home!"
*
*   Entrada : 
**
*   Salida  : La cadena que representa la clasificion    
*                puntuacionGolf(4, 1) debería devolver Hole-in-one!
*                puntuacionGolf(4, 2) debería devolver Eagle
*                puntuacionGolf(5, 2) debería devolver Eagle
*                puntuacionGolf(4, 3) debería devolver Birdie
*                puntuacionGolf(4, 4) debería devolver Par
*                puntuacionGolf(1, 1) debería devolver Hole-in-one!
*                puntuacionGolf(5, 5) debería devolver Par
*                puntuacionGolf(4, 5) debería devolver Bogey
*                puntuacionGolf(4, 6) debería devolver Double Bogey
*                puntuacionGolf(4, 7) debería devolver Go Home!
*                puntuacionGolf(5, 9) debería devolver Go Home!
*
***************************************************************************************************************/
function entradaNumero(mensaje) {
  do {
    numero = prompt(mensaje);
  } while (isNaN(numero));

  return numero;
}

function puntuacionGolf(par, golpes) {
  let salida;
  switch (true) {
    case golpes == 1:
      salida = "Hole-in-one!";
      break;
    case golpes <= par - 2:
      salida = "Birdie";
      break;
    case golpes == par - 1:
      salida = "Eagle";
      break;
    case golpes == par:
      salida = "Par";
      break;
    case golpes - par == 1: //case (golpes == par+1): case (golpes - par == 1 ):
      salida = "Boogey";
      break;
    case golpes - par == 2:
      salida = "Double Boogey!";
      break;
    case golpes >= par + 3:
      salida = "Go Home!";
      break;
  }
  return salida;
}

let par = entradaNumero(`Introduce el par del hoyo`);
let golpes = entradaNumero(`Introduce el número de golpes`);

console.log(puntuacionGolf(par, golpes));
