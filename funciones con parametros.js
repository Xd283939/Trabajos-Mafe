let resultado;
function suma(valor1,valor2) {
    valor1=parseInt(prompt("Ingrese el numero"));
    valor2=parseInt(prompt("Ingrese el numero"));
    resultado=valor1+valor2;
    alert('Resultado:' + resultado);// mensaje
}
suma();//Invocar la funcion  y si tiene texto en comilla sale tipo string

/*
valor1=parseInt(valor1);
    valor2=parseInt(valor2);
    declara el tipo de valor q es la variable
    y si sale nan esto es debido a q en la salida existe es un texto
    */