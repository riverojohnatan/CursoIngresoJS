function mostrar()
{
//tomo la edad  
    var month = document.getElementById('mes').value;

    switch (month) {
        case 'Febrero':
            alert('28');
            break;
        case 'Abril':
        case 'Junio':
        case 'Septiembre':
        case 'Noviembre':
            alert('30');
            break;
        default:
            alert('31');
    }
}//FIN DE LA FUNCIÓN