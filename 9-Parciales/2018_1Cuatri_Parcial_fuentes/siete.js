function mostrar()
{
    var promedio = 0;
    var notas = 0;
    var notaMasBaja = 11;
    var sexoNotaMasBaja;
    var cantidadVarones = 0;
    var nota;
    var sexo;
    
    for(var index = 0; index < 5; index++) {
        do {
            nota = prompt("Ingrese nota");
            nota = parseInt(nota);
        }while(isNaN(nota) || nota < 0 || nota > 10);

        do {
            sexo = prompt("Ingrese sexo");
            sexo = sexo.toLowerCase();
        }while(sexo != 'f' && sexo != 'm');

        notas += nota;

        if (notaMasBaja > nota) {
            notaMasBaja = nota;
            sexoNotaMasBaja = sexo;
        }

        if (sexo == 'm' && nota >= 6) {
            cantidadVarones++;
        }
    }

    promedio = notas / 5;

    alert(`El promedio general es: ${promedio}
    La nota mas baja es ${notaMasBaja} y su sexo correspondiente es ${sexoNotaMasBaja}
    La cantidad de varones con notas mayor o igual a 6 es: ${cantidadVarones}`);

}
