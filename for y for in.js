// let palabra='JavaScript';
/*let valor=5;*/


/*for(let f in palabra) {
    document.write(palabra[f]);
    document.write('<br>');
}
    */
   let palabra='Dios esta conmigo';
   let vocal=0;
   for(let f in palabra){
    if(palabra[f]=='a' || palabra[f]=='e' ||
        palabra[f]=='i'|| palabra[f]=='o' || palabra[f]=='u'){
            vocal++;
        }
   }
   document.write('Cantidad de vocales:', vocal);