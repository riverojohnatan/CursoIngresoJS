function mostrar()
{
//tomo la edad  
    var month = document.getElementById('mes').value;

    switch (month) {
        case 'Febrero':
            alert('Este mes no tiene más de 29 días.');
            break;
        default:
            alert('Este mes tiene 30 o más días');
    }
}//FIN DE LA FUNCIÓN