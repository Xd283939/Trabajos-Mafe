/*let valor;
do {
    valor = parseInt(prompt("Ingrese el 1 para salir"));
    document.write("Ingreso el valor;",valor);
    document.write("<br>");
} while (valor !=1 );
document.write("Fin del Bucle");
*/
let usuario, clave,control;
control=0;
usuario=prompt("Ingrese usuario");
clave=prompt('Ingrese su contrasena');

do {
    if (clave !="SAPA")     {  
        clave = prompt('Contrasena incorrecta\n'+  'Intente de nuevo' );
        control=0;
    }else{
        control=1;
    }
} while (control !=1);
document.write("Acceso Correcto!");
