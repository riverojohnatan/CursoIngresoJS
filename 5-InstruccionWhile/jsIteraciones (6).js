function mostrar()
{
	var contador=0;
	var acumulador=0;
	var input = 0;

	while(contador < 5 && input !== null) {
		input = prompt(`Ingrese el ${contador + 1}º numero:`);
		var number = parseInt(input)
		if (!isNaN(input) && input !== '') {
			acumulador+= number;
			contador++;
		} 
	}

	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN