function mostrar()
{
	var input = '';
	var respuesta='no';
	var max = 0;
	var min = 0;

	while (input !== null && input !== respuesta) {
		input = prompt(`Ingrese el numero:`);
		var number = parseInt(input, 10);
		if (!isNaN(input) && input !== '') {
			if (number > max) max = number;
			if (number < min) min = number;
		}
	}

	document.getElementById('maximo').value=max;
	document.getElementById('minimo').value=min;

}//FIN DE LA FUNCIÓN