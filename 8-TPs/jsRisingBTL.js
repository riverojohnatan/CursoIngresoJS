/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
var sexos = ['M', 'F'];
var estadosCiviles = ['1', '2', '3', '4'];
var edadMin = 18;
var edadMax = 90;
var sueldoMin = 8000;
var nacionalidades = ['A', 'E', 'N'];
var legajoInicial = 1000;

function ComenzarIngreso () 
{
    clear();

    var edad = prompt("Ingrese edad:");
    var sexo = prompt("Ingrese sexo: “M” para masculino y “F” para femenino");
    var estadoCivil = prompt("Ingrese estado civil: 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos");
    var sueldo = prompt("Ingrese sueldo bruto:");
    var legajo = prompt("Ingrese numero de legajo:");
    var nacionalidad = prompt("Ingrese nacionalidad: “A” para argentinos, “E” para extranjeros, “N” para nacionalizados");

    if (edad != null && validarEdad(edad)) {
        document.getElementById('Edad').value = edad;
    }
    
    if (sexo != null && validarSexo(sexo)) {
        document.getElementById('Sexo').value = sexo.toUpperCase();
    }
        
    if (estadoCivil != null && validarEstadoCivil(estadoCivil)) {
        document.getElementById('EstadoCivil').value = estadoCivil;
    }
            
    if (sueldo != null && validarSueldo(sueldo)) {
        document.getElementById('Sueldo').value = sueldo;
    }
    
    if (legajo != null && validarLegajo(legajo)) {
        document.getElementById('Legajo').value = legajo;
    }

    if (nacionalidad != null && validarNacionalidad(nacionalidad)) {
        document.getElementById('Nacionalidad').value = nacionalidad.toUpperCase();
    }
}

function clear() {
    document.getElementById('Edad').value = null;
    document.getElementById('Sexo').value = null;
    document.getElementById('EstadoCivil').value = null;
    document.getElementById('Sueldo').value = null;
    document.getElementById('Legajo').value = null;
    document.getElementById('Nacionalidad').value = null;
}

function validarEdad(edad) {
    if (isNaN(edad) || edad < edadMin || edad > edadMax) {
        return false;
    }

    return true;
}

function validarSexo(sexo) {
    if (!sexos.includes(sexo.toUpperCase())) {
        return false;
    }

    return true;
}

function validarEstadoCivil(estadoCivil) {
    if (isNaN(estadoCivil) || !estadosCiviles.includes(estadoCivil)) {
        return false;
    }

    return true;
}

function validarSueldo(sueldo) {
    if (isNaN(sueldo) || sueldo < sueldoMin) {
        return false;
    }

    return true;
}

function validarLegajo(legajo) {
    var nLegajo = parseInt(legajo, 10);
    if (isNaN(legajo) || nLegajo < legajoInicial) {
        return false;
    }

    return true;
}

function validarNacionalidad(nacionalidad) {
    if (!nacionalidades.includes(nacionalidad.toUpperCase())) {
        return false;
    }

    return true;
}