







function Verdecolor(Valor){
    Valor=parseInt(prompt('Ingrese un valor entre 1 y 3'));
    switch (Valor){
        case 1:
            return 'Rojo';
        case 2:
                return 'Verde';
        case 3:
            return 'Amarillo';
            default:
                return "Valor incorrecto";
    }
}
/* alert(Verdecolor());*/
document.write(Verdecolor());



/* let resultado;
function suma(a ,b) {
    resultado= a + b;
    return resultado;
}
document.write(suma(40,200));
document.write("<br>");
function saludar() {
    return 'Hola Sapo';
    
}
var mensaje = saludar();
document.write(mensaje);

function  suma(a,b) {
    return a + b ;
}
document.write(suma(30,50));//Muestra el  resultado de la suma y de las variables ,antes no mostraba nada xque estaba el return
*/