function mostrar()
{
//tomo la edad
    var age = parseInt(document.getElementById("edad").value, 10);
    var maritalStatus = document.getElementById("estadoCivil").value;
	if (age < 18 && maritalStatus !== "Soltero") {
        alert("Es muy pequeño para NO ser soltero.");
    }
}//FIN DE LA FUNCIÓN