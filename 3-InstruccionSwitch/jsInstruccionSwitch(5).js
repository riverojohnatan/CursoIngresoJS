function mostrar()
{
//tomo la edad  
    var hour = document.getElementById('hora').value;
    var realHour = hour.split(':')[0];

    switch (realHour) {
        case '7':
        case '8':
        case '9':
        case '10':
        case '11':
            alert('Es de mañana.');
            break;
        default:
            // Nothing
    }

}//FIN DE LA FUNCIÓN