function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	
	var respuesta='no';
	var input = '';

	while(input !== null && input !== respuesta) {
		input = prompt(`Ingrese el ${contador + 1}º numero:`);
		var number = parseInt(input)
		if (!isNaN(input) && input !== '') {
			if (number < 0) {
				negativo = negativo * number;
			} else {
				positivo+= number;
			}
			contador++;
		} 
	}


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN