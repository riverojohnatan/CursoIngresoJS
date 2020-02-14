/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
    if (validarEdad() && validarSexo() && validarEstadoCivil() 
    && validarSueldo() && validarLegajo() && validarNacionalidad()) {
        alert("Informacion valida");
    }
}

function validarEdad() {
    var edad = parseInt(document.getElementById('Edad').value, 10);

    if (isNaN(edad) || edad < 18 || edad > 90) {
        alert("Edad invalida, debe ser numerico y entre 18 a 90 inclusive");
        return false;
    }

    return true;
}

function validarSexo() {
    var sexo = document.getElementById('Sexo').value;

    if (sexo != 'F' && sexo != 'M') {
        alert("Sexo invalido. Opciones: M - Masculino | F - Femenino");
        return false;
    }

    return true;
}

function validarEstadoCivil() {
    var estadoCivil = parseInt(document.getElementById('EstadoCivil').value, 10);

    if (isNaN(estadoCivil) || estadoCivil < 1)
}