function mostrar()
{
    var numero;
    var letra;
    var cantidadNumerosPares = 0;
    var cantidadNumerosImpares = 0;
    var cantidadCeros = 0;
    var sumaNegativos = 0;
    var sumaPositivos = 0;
    var cantidadPositivos = 0;
    var promedioPositivos = 0;
    var minimo = 101;
    var letraMinimo;
    var maximo = -101;
    var letraMaximo;

    do {
        do {
            numero = parseInt(prompt("Ingresar numero"), 10);
        } while (isNaN(numero) || numero < -100 || numero > 100);

        do {
            letra = prompt("Ingrese letra");
        } while (!isNaN(letra));

        if (numero != 0) {
            if (numero % 2 == 0) {
                cantidadNumerosPares++;
            } else {
                cantidadNumerosImpares++;
            }
        
            if (numero < 0) {
                sumaNegativos += numero;
            } else {
                sumaPositivos += numero;
                cantidadPositivos++;
            }
        } else {
            cantidadCeros++;
        }

        if (minimo > numero) {
            minimo = numero;
            letraMinimo = letra;
        }

        if (maximo < numero) {
            maximo = numero;
            letraMaximo = letra;
        }

    }while(confirm("Desea continuar?"));

    var mensaje = 'Cantidad numeros pares: ' + cantidadNumerosPares + '\n' +
        'Cantidad numero impares: ' + cantidadNumerosImpares + '\n' +
        'Cantidad de ceros: ' + cantidadCeros + '\n';

    if (cantidadPositivos > 0) {
        promedioPositivos = sumaPositivos / cantidadPositivos;
        mensaje += 'Promedio de positivos: ' + promedioPositivos + '\n';
    }

    if (sumaNegativos < 0) {
        mensaje += 'La sumatoria de los negativos: '+ sumaNegativos + '\n';
    }

    mensaje += 'Maximo: (' + maximo + '; ' + letraMaximo + ')\n' +
        'Minimo: (' + minimo + '; ' + letraMinimo +')';

    document.write(mensaje);
}
