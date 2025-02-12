let nombre,edad;
nombre=prompt("Ingrese nombre.........");
edad=prompt("Ingrese edad.........");
edad=parseInt(edad);
    if (edad>=18) {
        document.write("!Bienvenido!",nombre);
    }else{
        if(edad <18){
        document.write(nombre,"Menor de edad");
    }
    else{
        document.write("No haz ingresado  datos");
    }
}