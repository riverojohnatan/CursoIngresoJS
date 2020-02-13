/*Además de lo anterior, ahora 
se agregara un temporizador que
 a los cinco segundos dará por terminado 
 el juego  de no ser ingresado el resultado 
 correcto en ese lapso de tiempo. */
var respuesta;
var temporizador;
var minNumeber = 1;
var maxNumber = 10;
var numero1 = 0;
var numero2 = 0;
var operadores = ['+', '-', '/', '*'];
var operador = '';
function comenzar()
{
    numero1 = Math.floor(Math.random() * (maxNumber - minNumeber + 1) + minNumeber);
    numero2 = Math.floor(Math.random() * (maxNumber - minNumeber + 1) + minNumeber);
    operador = operadores[Math.floor(Math.random() * 4)];

    switch (operador) {
        case '+':
            respuesta = numero1 + numero2;
            break;
        case '-':
            respuesta = numero1 - numero2;
            break;
        case '*':
            respuesta = numero1 * numero2;
            break;
        case '/':
            respuesta = numero1 / numero2;
            break;
    }

    document.getElementById('PrimerNumero').value = numero1;
    document.getElementById('SegundoNumero').value = numero2;
    document.getElementById('Operador').value = operador;
}//FIN DE LA FUNCIÓN
function Responder()
{
    var respuestaUsuario = parseFloat(document.getElementById('Respuesta').value);
    var mensaje = 'Respuesta Incorrecta';

    if (respuesta == respuestaUsuario) {
        mensaje = 'Respuesta Correcta';
    }
    
    alert(mensaje);
}//FIN DE LA FUNCIÓN

setTimeout(Responder, 4000);