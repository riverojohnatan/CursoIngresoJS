function mostrar()
{
    var hora = parseInt(document.getElementById("laHora").value, 10);
    var mensaje = '';

    if (isNaN(hora) || hora < 1 || hora > 24) {
        mensaje = "Hora invalida";
    } else {
        switch(hora) {
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
            case 11:
                mensaje = "es de mañana";
                break;
            case 12:
            case 13:
            case 14:
            case 15:
            case 16:
            case 17:
            case 18:
            case 19:
                mensaje = "es de tarde";
                break;
            default:
                if (hora < 24 && hora > 19) {
                    mensaje = "A dormir, es de noche";
                } else {
                    mensaje = "es de noche";
                }
        }
    }

    alert(mensaje);
}
