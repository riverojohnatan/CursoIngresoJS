function mostrar()
{
    var repetciones = prompt("ingrese el número de repeticiones");
    var texto = '';

    for(var index=0; index < repetciones; index++) {
        texto += 'Hola UTN FRA \n';
    }

    alert(texto);

}//FIN DE LA FUNCIÓN