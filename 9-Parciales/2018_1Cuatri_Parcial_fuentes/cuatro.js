function mostrar()
{
    var numero1 = parseInt(prompt("Ingresar primer numero"), 10);
    var numero2 = parseInt(prompt("Ingresar segungo numero"), 10);
    var mensaje = '';
    var resultado = 0;

    if (numero1 == numero2) {
        mensaje = numero1 + "" + numero2;
    } else if (numero1 < numero2) {
        resultado = numero1 + numero2;
        
        if (resultado > 10) {
            mensaje = 'la suma es ' + resultado + ' y supero el 10';
        } else {
            mensaje = resultado;
        }
    } else {
        mensaje = numero1 - numero2;
    }

    alert(mensaje);
}
