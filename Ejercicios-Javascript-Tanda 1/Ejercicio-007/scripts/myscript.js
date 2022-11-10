/***************************************************************************************************************
*  
*   Objetivo: Cuando vemos el pronóstico del tiempo en Estados Unidos no nos enteramos muy bien si va
*             a hacer frio o calor. Crear un script Javascript que solicite una temperatura en grados
*             Fahrenheit y la convierta a grados Celsius. El script puede realizar un comentario sobre el
*             tiempo dependiendo de si la temperatura Celsius es superior o igual a 25 grados, inferior a
*             10 o inferior cero grados. Ten en cuenta que la temperatura Celsius se calcula a través de
*             Celsius = (5/9) * (Fahrenheit-32)
*
*   Entrada : Número decimal
*
*
*   Salida  : Númeero decimal (2 dígitos como máximo en la parte decimal)
*             Ejemplo: Fahrenheit=100, Celsius=38.33
*
*   Notas: Emplear una funcion con un parámetro
*
***************************************************************************************************************/

function FahrenheitToCelsiusConIf(far){
    let cel = (5/9) * (far-32)
    cel = cel.toFixed(2)
        if(cel>=25){
            console.log(`Hace CALOR. Estamos a ${cel} `)
        }else if(cel<=10 && cel>0){
            console.log(`Está refrescando. Estamos a ${cel} `)
        }else if (cel<=0) {
            console.log(`Hace frio. Estamos a ${cel} `)
        }else{
            console.log(`Se está bien. Estamos a ${cel} `)
        }
        return true    
}
function FahrenheitToCelsiusConSwitch(far){
    let cel = (5/9) * (far-32)
    cel = cel.toFixed(2)
        switch(true){
            case (cel>=25): 
                console.log(`Hace CALOR. Estamos a ${cel} `);
            break;
            case (cel<=10 && cel>0): 
                console.log(`Está refrescando. Estamos a ${cel} `)
            break;
            case (cel<=0): 
                console.log(`Hace frio. Estamos a ${cel} `)
            break;
            default: 
                console.log(`Se está bien. Estamos a ${cel} `)
            
        }
        return true    
}

function entradaNumero(entrada){
    do{
        entrada = prompt("Introduce la temperatura en Fahrenheit")
    }while(isNaN(entrada))

    return entrada
    
}

        let muestra = entradaNumero()

    let resultado = FahrenheitToCelsiusConSwitch(muestra)