let elementoSegundos= document.getElementById("tiempoelegido").value;
let elementotextoAlarma= document.getElementById("textoalarma");
let elementoSonido= document.getElementById("audioAlarma");

function comenzarTiempo(){
    setTimeout(tiempocumplido, 1000*elementoSegundos);
}

function tiempocumplido(){
        elementotextoAlarma.style.color ="green";
        elementoSonido.play();
}
function comenzar(){
    setInterval(tictac, 1000)
}
function tictac(){
     let tiempoActual= new Date();
     let hora= tiempoActual.getHours();
     let minutos=tiempoActual.getMinutes();
     let segundos=String(tiempoActual.getSeconds()).padStart(2,"0" );//Estable el largo max llega hasta el 10
     let textoHora= hora + ';' + minutos + ':' + segundos;
     elementotextoAlarma.textContent = textoHora;
}
