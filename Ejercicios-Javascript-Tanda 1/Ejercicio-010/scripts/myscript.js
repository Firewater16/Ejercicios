/***************************************************************************************************************
*  
*   Objetivo: Solicitar al usuario que visita la página su edad y mostrar un mensaje en función de ella
*
*
*   Entrada : edad
*
*
*   Salida  : Si la edad es menor que 30 el mensaje debe ser: ! Ponte a trabajar !
*             Si la edad está entre 30 y 64 el mensaje debe ser: ! Que ganas tengo de jubilarme !
*             Si la edad es superior a 65 el mensaje debe ser: ! Descansa un poco !
*
*   Notas   : Debemos comprobar si:
*                   - La edad es un número entero mayor que 0 (indicaremos el error)
*                   - La edad no puede ser superior a 120 (indicaremos el error)
*
***************************************************************************************************************/
function entradaNumero(entrada) {
  do {
    entrada = prompt("Introduce tu edad");
  } while (isNaN(entrada));

  if (entrada != parseInt(entrada)) {
    //!Number.isInteger(entrada)
    alert(`Debes introducir un número entero`);
    return "error";
  }
  if (entrada < 0) {
    alert(`No puedes tener menos de 0 años`);
    return "error";
  } else if (entrada > 120) {
    alert(`No puedes tener mas de 120 años`);
    return "error";
  } else {
    return entrada;
  }
}

let edad = entradaNumero();

switch (true) {
  case edad < 30:
    alert(`¡ Ponte a trabajar !`);
    break;

  case edad >= 30 && edad < 65:
    alert(`¡ Que ganas tengo de jubilarme !`);
    break;

  case edad >= 65:
    alert(`¡ Descansa un poco !`);
    break;
  case (edad = "error"):
    alert(`error`);
  default:
    alert(`error`);
}