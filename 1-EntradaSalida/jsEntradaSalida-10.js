/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var amount = parseInt(document.getElementById("importe").value, 10);
    document.getElementById("resultado").value = amount * 0.75;
}
