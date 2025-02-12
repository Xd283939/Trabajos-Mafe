let numeros=[];
numeros=[14,22,33,44,55];
document.write("Elementos:",numeros);
document.write("<br>");
document.write("Elementos:",numeros[0]);    
document.write("<br>");
numeros[0] = 14;
document.write("Elementos:",numeros);
document.write("<br>--------------");

let  frutas=["manzanas","Peras","Piña","Mora"];
document.write("<br>");
document.write("Frutas:",frutas);

//Metodos de los arrays


//Cantidad de elemetos 
document.write("<br>");
document.write("Cantidad:",frutas.length);
document.write("<br>");
//Saber el ultimo elemento
document.write("Ultimo elemento ",numeros[numeros.length-1]);
document.write("<br>");

//Arrays tipo texto
document.write("En String Tipo Texto:",numeros.toString());
document.write("<br>");

//Unir tipos de arrays
let letras = ["A","B","C","D"];
let numeros2 =[1,2,3,4,5,6,7,8,9,10];
document.write("Alfanumerico:",letras.concat(numeros2));
document.write("<br>");

//Borrar el ultimo elemento de un array
numeros.pop()
document.write(numeros);

//Agregar  elemento al final
numeros.push(500);
document.write(numeros);
document.write("<br>");

//Eliminar  primer elemento
numeros.shift();
document.write(numeros);
document.write("<br>");


//Insertar elemento al inicio
numeros.unshift(14343);
document.write(numeros);
document.write("<br>");

//Eliminar elementos de un punto
numeros.splice(2,3);
document.write(numeros);
document.write("<br>");

//Copiar un array
let Cantidad=[100,34,55,32,0,123434];
let copia=Cantidad.slice(1,4);
document.write('Array',copia);
document.write("<br>");

//Organizar arrays en modo alfabetico
let objetos=["Carro","Moto","BMW","GREENCAR"]
document.write(objetos.sort());
document.write("<br>");


//Organizar arrays en modo alfabetico reversa
document.write(objetos.reverse());