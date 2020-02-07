function mostrar()
{
	var number = -1;

	while((number < 0 || number > 10) && number !== null) {
		number = prompt("ingrese un número entre 0 y 10.");
		console.log(number);
	}

	if (number !== null) document.getElementById('Numero').value = number;


}//FIN DE LA FUNCIÓN