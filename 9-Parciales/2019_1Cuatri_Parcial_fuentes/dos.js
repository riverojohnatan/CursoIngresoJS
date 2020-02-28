function mostrar()
{
    var nombre1 = prompt("Ingrese nombre de la primer persona");
    var peso1 = parseInt(prompt("Ingrese peso de la primer persona"), 10);
    var nombre2 = prompt("Ingrese nombre de la segunda persona");
    var peso2 = parseInt(prompt("Ingrese peso de la segunda persona"), 10);

    var sumaPeso = peso1 + peso2;
    var pesoPromedio = sumaPeso/2;

    alert(" ustedes se llaman " + nombre1 + " y " + nombre2 +
        " pesan " + peso1 + " y " + peso2 + " kilos, que sumados son " +
        sumaPeso + " kilos y el promedio de peso " + pesoPromedio);
}
