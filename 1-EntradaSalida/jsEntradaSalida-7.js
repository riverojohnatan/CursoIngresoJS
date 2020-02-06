/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
    var number1 = parseInt(document.getElementById("numeroUno").value, 10);
    var number2 = parseInt(document.getElementById("numeroDos").value, 10);
	alert(`la suma es ${number1 + number2}`);
}

function restar()
{
    var number1 = parseInt(document.getElementById("numeroUno").value, 10);
    var number2 = parseInt(document.getElementById("numeroDos").value, 10);
	alert(`la resta es ${number1 - number2}`);
}

function multiplicar()
{ 
    var number1 = parseInt(document.getElementById("numeroUno").value, 10);
    var number2 = parseInt(document.getElementById("numeroDos").value, 10);
	alert(`la multiplicacion es ${number1 * number2}`);
}

function dividir()
{
    var number1 = parseInt(document.getElementById("numeroUno").value, 10);
    var number2 = parseInt(document.getElementById("numeroDos").value, 10);
	alert(`la division es ${number1 / number2}`);
}

