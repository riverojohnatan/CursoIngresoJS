function mostrar()
{

	var index=0;
	var positiveCount = 0;
	var negativeCount = 0;
	var zeroCount = 0;
	var evenCount = 0;
	var positiveTotal = 0;
	var negativeTotal = 0;
	
	var respuesta="no";
	var input = '';

	while (input !== null && input !== respuesta) {
		var number = parseInt(input, 10);
		
		if (!isNaN(input) && input !== '') {
			if (number === 0) {
				zeroCount++;
			} else if (number < 0) {
				negativeTotal+= number;
				negativeCount++;
			} else {
				positiveTotal += number;
				positiveCount++;
			}

			if (number % 2 === 0) evenCount++;
		}
		input = prompt(`Ingrese el numero:`);;
	}

	document.write(`Suma de los negativos: ${negativeTotal}
					Suma de los positivos: ${positiveTotal}
					Cantidad de positivos: ${positiveCount}
					Cantidad de negativos: ${negativeCount}
					Cantidad de ceros: ${zeroCount}
					Cantidad de números pares: ${evenCount}
					Promedio de positivos: ${positiveTotal/positiveCount}
					Promedios de negativos: ${negativeTotal/negativeCount}
					Diferencia entre positivos y negativos: ${positiveTotal-negativeTotal}`);

}//FIN DE LA FUNCIÓN