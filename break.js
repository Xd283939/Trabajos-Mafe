/* for (let f=0; f<=10; f++){
    document.write(f);
    document.write('<br>');
    if(f==4){
        document.write('Aqui es la vuelta',f);
        document.write('<br>');
        break;
    }
    
} 
    */
//Codigo donde salta la vocal a la salta en una de esta vueltas encuente
let palabra ='JavaScript';
let  resultado = '';
for ( let f in palabra){ //
    if (palabra[f]=='a' ||palabra[f]=='t'|| palabra[f]=='p'||palabra[f]=='i' ){ //Asignar la letra q encuentra en esa vuelta con el condicional or
        continue;// si encuentra la letra a la salta 

    }else{
        resultado+=palabra[f];
    }
}
document.write(resultado);