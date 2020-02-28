function mostrar()
{
    var promedioAlturas = 0;
    var sumaAlturas = 0;
    var alturaMasBaja = 251;
    var sexoAlturaMasBaja;
    var cantidadMujeresMas190 = 0;

    for(var index=0; index < 5; index++) {
        var altura;
        var sexo;
        
        do{
            altura = parseInt(prompt("Ingrese altura"), 10);
        }while(isNaN(altura) || altura < 0 || altura > 250);

        do{
            sexo = prompt("Ingrese sexo 'f' o 'm'");
        }while(!isNaN(sexo) || (sexo != 'f' && sexo != 'm'));

        sumaAlturas+=altura;

        if (alturaMasBaja > altura){
            alturaMasBaja = altura;
            sexoAlturaMasBaja = sexo;
        }

        if (altura > 190 && sexo == 'f'){
            cantidadMujeresMas190++;
        }
    }

    promedioAlturas = sumaAlturas / 5;

    alert("El promedio de alturas es de: " + promedioAlturas + "\n" + 
        "La altura mas baja es de: " + alturaMasBaja + " y el sexo es: " + sexoAlturaMasBaja + "\n" +
        "La cantidad de mujeres de estatura mayor a 190 es de: " + cantidadMujeresMas190
    );
}
