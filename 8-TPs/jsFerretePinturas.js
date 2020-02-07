/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
var resultado = 0;
var FAHRENHEIT_TO_CENTIGRADOS = 32;
function FahrenheitCentigrados () 
{
    resultado = 0;
    var temperatura = parseInt(document.getElementById('Temperatura').value, 10);
    if (!isNaN(temperatura)) {
        resultado = temperatura - FAHRENHEIT_TO_CENTIGRADOS;
        alert(`${temperatura} Fahrenheit son ${resultado} centígrados`) ;
    }
}

function CentigradosFahrenheit () 
{
    resultado = 0;
    var temperatura = parseInt(document.getElementById('Temperatura').value, 10);
    if (!isNaN(temperatura)) {
        resultado = temperatura + FAHRENHEIT_TO_CENTIGRADOS;
        alert(`${temperatura} centígrados son ${resultado} Fahrenheit`) ;
    }
}
