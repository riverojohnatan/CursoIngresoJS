var eleccionMaquina;
var ContadorDeEmpates=0;
var ContadorDeGanadas=0;
var ContadorDePerdidas=0;
var minNumeber = 1;
var maxNumber = 3;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 3
	eleccionMaquina = Math.floor(Math.random() * (maxNumber - minNumeber + 1) + minNumeber);
}//FIN DE LA FUNCIÓN
function piedra()
{
	var mensaje = '';

    switch (eleccionMaquina) {
        case 2:
			ContadorDePerdidas++;
            break;
        case 3:
			ContadorDeGanadas++;
            break;
        default:
			ContadorDeEmpates++;
    }

    mostrarResultado();

}//FIN DE LA FUNCIÓN
function papel()
{
	var mensaje = '';

    switch (eleccionMaquina) {
        case 1:
			ContadorDeGanadas++;
            break;
        case 3:
			ContadorDePerdidas++;
            break;
        default:
			ContadorDePerdidas++;
    }

    mostrarResultado();

}//FIN DE LA FUNCIÓN
function tijera()
{
	var mensaje = '';

    switch (eleccionMaquina) {
        case 1:
			ContadorDePerdidas++;
            break;
        case 2:
			ContadorDeGanadas++;
            break;
        default:
			ContadorDeEmpates++;
    }

    mostrarResultado();

}//FIN DE LA FUNCIÓN

function mostrarResultado()
{
	document.getElementById('ganadas').value = `Partidas ganadas: ${ContadorDeGanadas}`;
	document.getElementById('perdidas').value = `Partidas perdidas: ${ContadorDePerdidas}`;
	document.getElementById('empatadas').value = `Partidas empatadas: ${ContadorDeEmpates}`;

	comenzar();
}