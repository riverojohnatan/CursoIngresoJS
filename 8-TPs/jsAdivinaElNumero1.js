/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
var contadorIntentos = 0;
var minNumeber = 1;
var maxNumber = 100;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
    numeroSecreto = Math.floor(Math.random() * (maxNumber - minNumeber + 1) + minNumeber);
	alert(numeroSecreto);
}

function verificar()
{
	var numero = parseInt(document.getElementById('numero').value, 10);

	if (!isNaN(numero)){
        contadorIntentos++;

        document.getElementById('intentos').value = contadorIntentos;
        if (numero === numeroSecreto) {
            alert(`Usted es un ganador!!! y en solo ${contadorIntentos} intentos`);
        } else if (numero > numeroSecreto) {
            alert('se pasó…');
        } else {
            alert('faltó…');
        }
    }
}
