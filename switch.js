
var numero = 1;
switch(numero){
    case 1:
        console.log("soy uno");
        break;
    case 10:
        console.log("soy un 10");
        break;
    case 100:
        console.log("si soy un 100");
        break;
    default:
        console.log("no soy");
}



var yo=0;
var maquina= 0;

var a = 1;
var b = 2;
var c = 3;
var resultado = "";

juego1(1,3);

function juego1 (yo, maquina){
    
    switch (){
        case :
        break

        default:
    }    

    
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
