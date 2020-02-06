function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var minNumeber = 1;
	var maxNumber = 10; 
	var grade = Math.floor(Math.random() * (maxNumber - minNumeber + 1) + minNumeber);

	if (grade >= 9) {
		alert("EXCELENTE");
	} else if (grade > 4) {
		alert("APROBÓ");
	} else {
		alert("Vamos, la proxima se puede");
	}

}//FIN DE LA FUNCIÓN