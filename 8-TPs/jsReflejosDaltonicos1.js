/*En la pantalla se mostrarán 6 botones de 
distintos colores,  al comenzar el juego se 
mostrara el texto de un color entre los 6 posibles
 para que el jugador sepa que botón tocar .Al tocar 
 el botón correcto se informara cuanto tiempo tardo.
*/
var colorSecreto;
var tiempoInicio;
var colores = ["azul", "amarillo", "marron", "verde", "celeste", "rojo"];
function comenzar()
{
    colorSecreto = colores[Math.floor(Math.random() * 6)];
    document.getElementById('ColorElejido').value = colorSecreto;
    tiempoInicio = 0;

    setInterval(()=>tiempoInicio++, 1000);
}//FIN DE LA FUNCIÓN
function Responder(colorParametro)
{
	if (colorSecreto === colorParametro) {
        alert(`Tardaste ${tiempoInicio} segundos`);
    }
	


}//FIN DE LA FUNCIÓN
