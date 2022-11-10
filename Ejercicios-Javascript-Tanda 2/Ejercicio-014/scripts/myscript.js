/***************************************************************************************************************
 *
 *   Objetivo: Pedimos reiteradamente cadenas al usuario hasta que la cadena de texto introducida es "cancelar".
 *
 *
 *   Entrada : cadenas de texto
 *
 *
 *   Salida  : Cada cadena introducida se muestra en un párrafo del documento HTML
 *
 *
 ***************************************************************************************************************/

let frase;
do {
  frase = prompt("Introduce una frase");

  if (frase != "cancelar") {
    document.write(frase + "<br>");
  }
} while (frase != "cancelar");
