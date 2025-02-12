


//Clase Papel
class Papel{
    constructor(alto,ancho){
        this.alto=alto;
        this.ancho=ancho;
    }
}

//Expresion de clase Anonima
let Papel_A =class{
    constructor(ancho,alto){
        this.alto= alto;
        this.ancho= ancho;
    }
}

//Expresion de clase  nombrada
let Papel_B =class PapelX{
    constructor(ancho,alto){
        this.alto= alto;
        this.ancho= ancho;
    }
}
let papelz=new Papel(5,1);