function mostrar()
{
    var marca;
    var peso;
    var temperatura;

    var cantidadTemperaturasPares = 0;
    var pesoMax = 0;
    var marcaPesada;
    var cantidadTempMenosCero = 0;
    var promedioPesos = 0;
    var sumaPesos = 0;
    var cantidadProd = 0;
    var pesoMin = 31;


    do {
        marca = prompt("Ingrese marca");
        
        do {
            peso = parseInt(prompt("Ingresar peso"), 10);
        } while (isNaN(peso) || peso < 1 || peso > 100);
        
        do {
            temperatura = parseInt(prompt("Ingresar temperatura"), 10);
        } while (isNaN(temperatura) || temperatura < -30 || temperatura > 30);

        cantidadProd++;
        sumaPesos += peso;

        if (temperatura != 0) {
            if (temperatura % 2 == 0) {
                cantidadTemperaturasPares++;
            }
        
            if (temperatura < 0) {
                cantidadTempMenosCero++;
            }
        }

        if (pesoMin > peso) {
            pesoMin = peso;
        }

        if (pesoMax < peso) {
            pesoMax = peso;
            marcaPesada = marca;
        }

    }while(confirm("Quiere seguir?"));
    
    promedioPesos = sumaPesos / cantidadProd;
    
    var mensaje = 'Cantidad temperaturas pares: ' + cantidadTemperaturasPares + '<br/>' +
        'Producto mas pesado: ' + marcaPesada + '<br/>' +
        'Cantidad de productos conservados bajo cero: ' + cantidadTempMenosCero + '<br/>' + 
        'Promedio de pesos: ' + promedioPesos + '<br/>' +
        'Maximo: ' + pesoMax + '<br/>' +
        'Minimo: ' + pesoMin;

    document.write(mensaje);
}
