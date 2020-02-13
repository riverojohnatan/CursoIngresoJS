/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
var PRECIO = 35;
function CalcularPrecio () 
{
     var cantidad = parseInt(document.getElementById('Cantidad').value, 10);
     var marca = document.getElementById('Marca').value;
     var mensaje = '';
     var resultado;
     var descuento = 1;

     if (!isNaN(cantidad)) {
         if (cantidad > 5) {
             descuento = 0.5;
         } else {
             switch (marca) {
                 case 'ArgentinaLuz':
                     if (cantidad === 5) {
                         descuento = 0.6;
                     } else if (cantidad === 4) {
                         descuento = 0.75
                     } else if (cantidad === 3) {
                         descuento = 0.85
                     }
                     break;
                 case 'FelipeLamparas':
                     if (cantidad === 5) {
                         descuento = 0.70;
                     } else if (cantidad === 4) {
                         descuento = 0.75
                     } else if (cantidad === 3) {
                         descuento = 0.90
                     }
                     break;
                 default:
                     if (cantidad === 5) {
                         descuento = 0.70;
                     } else if (cantidad === 4) {
                         descuento = 0.80
                     } else if (cantidad === 3) {
                         descuento = 0.95
                     }
             }
         }

         resultado = cantidad * PRECIO * descuento;

         if (resultado > 120) {
             var imp = resultado * 0.1;
             resultado+= imp;
             mensaje = `$ ${resultado}. Usted pago ${imp} de IIBB.`;
         } else {
             mensaje = `$ ${resultado}`;
         }

         document.getElementById('precioDescuento').value = mensaje;
     }
}
