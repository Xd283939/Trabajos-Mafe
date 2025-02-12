class Persona{
   //Propiedad
     nombre='Homero'; // atributo 
     apellido ='Simpson';
     direccion ='Ave.45';
     telefono= 124434545334534534
     email= 'Amanda@gmail.com'
     

    ///Metodos  
     trabajar(){
        return 'Trabaja como desarrolladora full stack se gana 8 millones se graduo a los 24 anos';
     }
     estudiar(){
        return 'Colegio Bethlemitas ';
     }
}
//Crear objeto para la clase persona
const sapa = new Persona();
const mk = new Persona();
const gymrat = new Persona();
document.write(sapa.apellido + ''+sapa.direccion); //objeto.propiedad
document.write('<br>');
document.write(sapa.trabajar()) //objeto.metodo
document.write('<br>');
document.write('<br>');
document.write('mk',mk.email);
document.write('<br>');
document.write(mk.estudiar()) //objeto.metodo
document.write('<br>');
document.write('<br>');
document.write('<br>');
document.write(gymrat.estudiar()) //objeto.metodo