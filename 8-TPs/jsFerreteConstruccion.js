/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/
var CAL = 3;
var CEMENTO = 2

function Rectangulo () 
{
    var largo = parseInt(document.getElementById('Largo').value, 10);
    var ancho = parseInt(document.getElementById('Ancho').value, 10);
    if (!isNaN(largo) && !isNaN(ancho)) {
        var resultado = (largo + ancho) * 2;
        var aux = Math.round(resultado);
        if ((resultado - aux) > 0) resultado++;
        alert(`Se necesitan ${Math.round(resultado)} de alambre para el rectangulo`);
    }
}
function Circulo () 
{
    var radio = parseInt(document.getElementById('Radio').value, 10);
    if (!isNaN(radio)) {
        var resultado = Math.PI * 2 * radio;
        var aux = Math.round(resultado);
        if ((resultado - aux) > 0) resultado++;
        alert(`Se necesitan ${Math.round(resultado)} de alambre para el circulo`);
    }
}
function Materiales () 
{
    var largo = parseInt(document.getElementById('Largo').value, 10);
    var ancho = parseInt(document.getElementById('Ancho').value, 10);
    var radio = parseInt(document.getElementById('Radio').value, 10);
    var resultadoCuadrado = 0;
    var resultadoCirculo = 0;
    var cantidadCalCuadrado = 0;
    var cantidadCementoCuadrado = 0;
    var cantidadCalCirculo = 0;
    var cantidadCementoCirculo = 0;
    var cantidadCal = 0;
    var cantidadCemento = 0;

    if (!isNaN(largo) && !isNaN(ancho)) {
        resultadoCuadrado = (largo + ancho) * 2 ;
        cantidadCalCuadrado = resultadoCuadrado * CAL;
        cantidadCementoCuadrado = resultadoCuadrado * CEMENTO;
    }
    
    if (!isNaN(radio)) {
        resultadoCirculo = Math.PI * 2 * radio;
        cantidadCalCirculo = resultadoCirculo * CAL;
        cantidadCementoCirculo = resultadoCirculo * CEMENTO;
    }

    if (resultadoCuadrado !== 0 && resultadoCirculo !== 0) {
        cantidadCal = cantidadCalCirculo + cantidadCalCuadrado;
        cantidadCemento = cantidadCementoCirculo + cantidadCementoCuadrado;
    } else if (resultadoCuadrado !== 0) {
        cantidadCal = cantidadCalCuadrado;
        cantidadCemento = cantidadCementoCuadrado;
    } else if (resultadoCirculo !== 0) {
        cantidadCal = cantidadCalCirculo;
        cantidadCemento = cantidadCementoCirculo;
    }
    var aux = Math.round(cantidadCal);
    if ((cantidadCal - aux) > 0) cantidadCal++;
    aux = Math.round(cantidadCemento);
    if ((cantidadCemento - aux) > 0) cantidadCemento++;

    alert(`Se necesitan ${Math.round(cantidadCal)} de Cal y ${Math.round(cantidadCemento)} de Cemento`);
}