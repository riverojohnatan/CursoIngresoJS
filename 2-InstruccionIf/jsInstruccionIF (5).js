function mostrar()
{
//tomo la edad  
    var age = parseInt(document.getElementById("edad").value, 10);
    if (!(age >= 13 && age <= 17)) alert("No eres adolescente");
}//FIN DE LA FUNCIÓN