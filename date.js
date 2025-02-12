//clase
Date 
//objeto fecha 
const fechahoy= new Date();
document.write(fechahoy);
let fecha = new Date(); // se crea  la variable fecha  y usar varios valores
document.write('<br>')
/*document.write('Hoy es;',fecha.getDate());*/
/*document.write('Hoy es;',fecha.getMonth()); */ // Incorrecto el resultado
document.write('Hoy es;',fecha.getMonth()+1); // Rta correcta
document.write('<br>');
document.write('<br>');
document.write('<br>');
document.write('El año es:',fecha.getFullYear());//Año
ocument.write('<br>');
document.write('<br>');
document.write('<br>');
document.write('La hora es :',fecha.getHours()) //Hora
document.write('<br>');
document.write('<br>');
document.write('La hora es :'+ fecha.getMinutes(),':', //Minutos
                             fecha.getMinutes(),':',  //Milisegundos
                            fecha.getSeconds());   //Segundos