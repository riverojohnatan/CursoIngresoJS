/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/

var price1 = 0;
var price2 = 0;
var price3 = 0;

function Sumar () 
{
    price1 = parseInt(document.getElementById("PrecioUno").value, 10);
    price2 = parseInt(document.getElementById("PrecioDos").value, 10);
    price3 = parseInt(document.getElementById("PrecioTres").value, 10);
    var price = price1 + price2 + price3;
	alert(price);
}
function Promedio () 
{
    price1 = parseInt(document.getElementById("PrecioUno").value, 10);
    price2 = parseInt(document.getElementById("PrecioDos").value, 10);
    price3 = parseInt(document.getElementById("PrecioTres").value, 10);
	var price = price1 + price2 + price3;
	alert(price/3);
}
function PrecioFinal () 
{
	price1 = parseInt(document.getElementById("PrecioUno").value, 10);
    price2 = parseInt(document.getElementById("PrecioDos").value, 10);
    price3 = parseInt(document.getElementById("PrecioTres").value, 10);
	var price = price1 + price2 + price3;
	alert(price*1.21);
}