


















/* document.write("hola a todos");
document.write("hola a todos3");  la forma mas basica
var  prueba = 'hOLA MUNDO';/* VARIABLES DECLARACION
var  _M='Hola mundo 2';/* VARIABLES DECLARACION PERO COM GUIONES ABAJO
document.write(prueba);/* PARA MOSTRAR EL RESULTADO DE LO Q TIENE DENTRO DE LA VARIABLE*
let saludo='hola'/* PALABRA RESERVADA 
document.write(saludo); ejecucion del texto */
/* let valor1,valor2;
valor1= 20;
valor2= 30;
document.write(valor1 > valor2 );
document.write('<br>');
document.write(valor1 < valor2 );
document.write('<br>');
document.write(valor1 == valor2 );
document.write('<br>');
document.write(valor1 != valor2 );
document.write('<br>');
document.write(valor1 <= valor2 );
document.write('<br>');
document.write(valor1 >= valor2 ); */
// redondear el siguiente numero 
var  precio= Math.round(399.54);/* Redonde del 5 q esta antes de la coma*/
document.write('Precio redondeado:',precio);
document.write('<br>');
//Redondea sin importar el decimal q esta antes de la coma
var precio = Math.ceil(699.2);
document.write('Precio redondeado:',precio);
document.write('<br>')
//Se utiliza para redondear el valor de precio hacia abajo al número entero más cercano.
var precio= Math.floor(550.5);
document.write('Precio redondeado:',precio);
document.write('<br>')
//Funcion Seno
var seno=Math.sin(40);
document.write('Seno de 40 es de:' + seno);
document.write('<br>')
//Exponente de un numero de un numero 34 
var  expo=Math.exp(34);
document.write('exponente de 34 es de:' + expo);
document.write('<br>')
//Logaritmo de un numero
var log=Math.log(10);
document.write('El logaritmo Natural de un numero', log );
document.write('<br>')

//Valor absoluto de un numero 
var abs=Math.abs(-45);
document.write('El precio absoluto de un numero es de:',abs);
document.write('<br>')

//Valor maximo de secuencia 
var max=Math.max(900,600,100000000000000,500000000000000000000000);
document.write('El valor maximo  de 900 es:'+ max);
document.write('<br>')

//Valor minimo de una secuencia
var min=Math.min(900,600,100000000000000,500000000000000000000000,4,0);
document.write('El valor maximo  de 900 es:'+ min);
document.write('<br>')

//Valor aleatorio  mostrar en la pantalla
// var  aleatorio=Math.random(Math.random()*10);// valor random de 0 a x numero 
// document.write('El valor aletorio es ',aleatorio) 
var aleatorio=Math.random()*10;
document.write('Valor aleatorio' + aleatorio );
document.write('<br>')
//Raiz Cuadrada de un numero 
var valor =Math.sqrt(100);
document.write('La raiz cuadrada del numero 100 es:'+ valor );
document.write('<br>')

//Exponente de un numero
var  expo2=Math.pow(2,3);
document.write('exponente de 3 a ;a 4 es de:' + expo2);
document.write('<br>')