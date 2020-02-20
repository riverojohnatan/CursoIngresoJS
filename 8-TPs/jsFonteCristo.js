/*El departamento de NUMEROS ESPECIALES  del instituto matemático  FonteCristo  nos está pidiendo una aplicación que verifique las distintas cualidades de los números.

13.	Para cada una de estas acciones  debemos realizar la lógica para verificar las cualidades pedidas:
a.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
b.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
c.	Se pedirán un número positivo y se mostrará la cantidad de números divisibles de este número que se encuentran desde el 1 al 100.
d.	Se pedirán un número positivo y se mostrará si el número es un número primo o no.
e.	Se pedirán un número positivo y se mostrará la cantidad de números Primos desde el número ingresado hasta el cero.
*/

var numero = null;

function NumerosPares () 
{
    numero = document.getElementById('numero').value;

    if (numero > 0) {
        var respuesta = [];
        var index = numero;

        if (numero % 2 == 0) {
            respuesta.push(numero);
        } else {
            index--;
            respuesta.push(index);
        }

        index = index - 2;
        while(index > 0) {
            respuesta.push(index);
            index = index - 2;
        }

        alert(respuesta.join(', '));

    } else {
        showError();
    }

}

function NumerosImpares () 
{
    numero = document.getElementById('numero').value;

    if (numero > 0) {
        var respuesta = [];
        var index = numero;

        if (numero % 2 == 1) {
            respuesta.push(numero);
        } else {
            index--;
            respuesta.push(index);
        }

        index = index - 2;
        while(index > 0) {
            respuesta.push(index);
            index = index - 2;
        }

        alert(respuesta.join(', '));

    } else {
        showError();
    }

}

function NumerosDivisibles () 
{
    numero = document.getElementById('numero').value;

    if (numero > 0) {
        var respuesta = [];
        var max = 101;

        if (numero < max) {
            max = numero + 1;
        }
    
        for(var index = 1; index < max; index++) {
            if (numero % index == 0) {
                respuesta.push(index);
            }
        }
        alert(respuesta.join(', '));

    } else {
        showError();
    }

}

function VerificarPrimo () 
{
    numero = document.getElementById('numero').value;

    if (numero > 0) {
        if (numero == 1) {
            alert("No es primo");
        } else {
            if (esPrimo(numero)) {
                alert("Es primo");
            } else {
                alert("No es primo");
            }
        }
    } else {
        showError();
    }

}

function NumerosPrimos () 
{
    numero = document.getElementById('numero').value;

    if (numero > 0) {
        var respuesta = [];

        for(var index = numero; index > 1; index--) {
            if (esPrimo(index)) {
                respuesta.push(index);
            }
        }

        alert(`Hay ${respuesta.length} numeros primos`);

    } else {
        showError();
    }

}

function esPrimo(num) {
    var index = Math.round(num / 2).toFixed(0);
    
    while((num % index != 0) && index > 1) {
        index--;
    }

    return index == 1;
}

function showError() {
    alert("Por favor ingrese un numero positivo");
}