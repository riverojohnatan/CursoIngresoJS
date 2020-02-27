function mostrar()
{
    for(var index=1; index<11; index++) {
        var texto = document.getElementById('resultado').innerHTML;
        texto += index + '<br/>';
        document.getElementById('resultado').innerHTML = texto;
    }
}