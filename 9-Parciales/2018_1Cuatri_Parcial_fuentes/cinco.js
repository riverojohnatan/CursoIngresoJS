function mostrar()
{
    var mensaje = '';
    var planeta = prompt("Ingresar planeta del sistema solar (En minuscula)");
    planeta = planeta.toLowerCase();

    switch (planeta) {
        case "tierra":
            mensaje = 'acá vivimos';
            break;
        case "mercurio":
        case "venus":
            mensaje = 'acá hace más calor';
            break;
        case "marte":
        case "jupiter":
        case "saturno":
        case "urano":
        case "neptuno":
        case "pluton":
            mensaje = 'acá hace más frio';
            break;
        default:
            mensaje = 'Planeta invalido';
    } 

    alert(mensaje);
}
