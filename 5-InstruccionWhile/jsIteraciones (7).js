function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='no';
	var input = '';

	while(input !== null && input !== respuesta) {
		input = prompt(`Ingrese el ${contador + 1}º numero:`);
		var number = parseInt(input)
		if (!isNaN(input) && input !== '') {
			acumulador+= number;
			contador++;
		} 
	}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN