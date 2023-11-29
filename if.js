if (false) {
    console.log("hola");
} else {
    console.log("falso");
}


if (false) {
    console.log("hola");
} else if (true) {
    console.log("falso");
} else {

}

var edad = 18;
if(edad ===18){
    console.log("puedes votar");
}else if(edad >18){
    console.log("puedes votar otra vez");
} else {
    console.log("no puedes votar");
}

var yo=0;
var maquina= 0;

var a = 1;
var b = 2;
var c = 3;
var resultado = "";

juego1(1,3);

function juego1 (yo, maquina){
    
    if (
        (yo ===a && maquina ===c) || (yo ===b && maquina ===a) || (yo ===c && maquina ===b) ){
        resultado= "gane!!!!!";           
    }else if (
        (yo ===c && maquina ===a) || (yo ===a && maquina ===b) || (yo ===b && maquina ===c) 
     ){        
     resultado= "Gana la maquina";
     } else {
        resultado= "Empate"; 
     }

    return resultado;
}

