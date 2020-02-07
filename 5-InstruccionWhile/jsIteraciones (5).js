function mostrar()
{
    var gender = '';

    while(gender !== 'f' && gender !== 'm' && gender !== null) {
        gender = prompt("ingrese f ó m .");
    }

    document.getElementById('Sexo').value=gender;

}//FIN DE LA FUNCIÓN