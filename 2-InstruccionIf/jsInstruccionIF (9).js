function mostrar()
{
	//Genero el número RANDOM entre 1 y 10
	var minNumeber = 1;
	var maxNumber = 10; 
	var rdmNumber = Math.floor(Math.random() * (maxNumber - minNumeber + 1) + minNumeber);

	alert(rdmNumber);

}//FIN DE LA FUNCIÓN