/***************************************************************************************************************
*  
*   Objetivo: MiniSudoku 3x3. Un sudoku es una cuadricula 9x9 con cuadriculas cuadradas 3x3. El Sudoku estará completo
*             cuando relleanmos cada cuadricula 3x3 con número de 1 a 9, de forma que cada fila y cada columna de la
*             cuadricula 9x9 también está formada por números de 1 a 9.
*             Crea una funcion que compruebe si la cuadricula 3x3 contiene todos y cada uno de los número del 1 al 9
*
*   Entrada : 
*
*
*   Salida  : true, false
*
*
***************************************************************************************************************/

function entradaNumero(mensaje) {
    do {
      numero = prompt(mensaje);
    } while (isNaN(numero));
  
    return numero;
  }

  let fila1 = entradaNumero(`Introduce la primera fila de 3 elementos`);
  let fila2 = entradaNumero(`Introduce la segunda fila de 3 elementos`);
  let fila3 = entradaNumero(`Introduce la tercera fila de 3 elementos`);

  let aminiSudoku = [Array.from(String(fila1)),Array.from(String(fila2)),Array.from(String(fila3))]

function checkSudoku(miniSudoku){
 let sudoku = []
    for(let i = 0; i< aminiSudoku.length; i++)
            sudoku = [...sudoku,...aminiSudoku]
    const dist = sudoku.filter( v => sudoku.includes(v))

    if(dist.length==0)
        return true
    else 
        return false
  }

console.log(checkSudoku(aminiSudoku)) 