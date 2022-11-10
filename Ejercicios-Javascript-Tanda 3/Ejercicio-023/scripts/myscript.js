/***************************************************************************************************************
*  
*   Objetivo: Solicita al usuario el porcentaje de acierto en un examen tipo test y muestra la cualificación según la nota
*             según la siguiente tabla
*
*                Cualificación    Porcentaje
*                     A             90-100
*                     B             80-90
*                     C             70-79
*                     D             60-69
*                     F             0-59
*
*   Entrada : nota
*
*
*   Salida  : El examen se cualifica con un XXX
*
*
***************************************************************************************************************/
function entradaNumero(mensaje) {
    do {
      numero = prompt(mensaje);
    } while (isNaN(numero));
  
    return numero;
  }
  
  let num = entradaNumero(`Introduce a nota`);

  switch (true){
    case(num>=0 && num<=59):
        console.log(`El examen con nota ${num} se cualifica con una F`);
    break;
    case(num>=60 && num<=69):
        console.log(`El examen con nota ${num} se cualifica con una D`);
    break;
    case(num>=70 && num<=79):
        console.log(`El examen con nota ${num} se cualifica con una C`);
    break;
    case(num>=80 && num<=89):
        console.log(`El examen con nota ${num} se cualifica con una B`);
    break;
    case(num>=90 && num<=100):
        console.log(`El examen con nota ${num} se cualifica con una A`);
    break;

  }













