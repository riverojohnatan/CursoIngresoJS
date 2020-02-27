function mostrar()
{
    var precio = prompt("Ingresar el precio");
    var descuento = prompt("Ingrese el porcentaje de descuento");
    var porcentajeDePrecio = precio * descuento / 100;

    document.getElementById('elPrecioFinal').value = precio - porcentajeDePrecio;

}
