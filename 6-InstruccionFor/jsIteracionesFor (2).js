function mostrar()
{
    for(var index=10; index>0; index--) {
        var texto = document.getElementById('resultado').innerHTML;
        texto += index + '<br/>';
        document.getElementById('resultado').innerHTML = texto;
    }

}