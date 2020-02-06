function mostrar()
{
//tomo la edad   
    var age = parseInt(document.getElementById("edad").value, 10);
    if (age >= 18) {
        alert("Eres mayor de edad");
    } else if (age >= 13 && age <= 17){
        alert("Eres adolescente");
    } else {
        alert("Eres menor de edad");
    }
}//FIN DE LA FUNCIÓN