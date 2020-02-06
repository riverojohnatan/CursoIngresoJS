function mostrar()
{
//tomo la edad  
    var month = document.getElementById('mes').value;

    switch (month) {
        case 'Enero':
            alert('que comiences bien el año!!!.');
            break;
        case 'Marzo':
            alert('a clases!!!.');
            break;
        case 'Julio':
            alert('se vienen las vacaciones!!!.');
            break;
        case 'Diciembre':
            alert('Felices fiesta!!!.');
            break;
        default:
            // Nothing
    }


}//FIN DE LA FUNCIÓN