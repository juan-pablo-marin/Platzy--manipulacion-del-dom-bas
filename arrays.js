var frutas =["manzana","platano","cereza","fresa"];
console.log(frutas);
frutas.indexOf("platano");
//va devolver la posicion 1
frutas.push("uvas"); 
//agrega al final del arreglo las uvas
frutas.shift()
//remueve siempre el primer elemento del array
frutas.unshift("mora");
//ingresa las moras como primer elemento del array
frutas.length();
//devuelve el tamaño del arreglo


var estudiantes =["maria","sergio","rosa","daniel"];
function saludarEstudiantes(estudiante){
    console.log("hola" + estudiante);
}

for(var i=0; i< estudiantes.length; i++){
    saludarEstudiantes(estudiantes[i])

}

for(var estudiante of estudiantes){
    saludarEstudiantes(estudiante);

}
var estudiantes =["maria","sergio","rosa","daniel"];
function saludarEstudiantes(estudiante){
    console.log("hola" + estudiante);
}
while(estudiantes.length > 0){
    console.log(estudiantes);
var estudiante = estudiantes.shift();
saludarEstudiantes(estudiante);
}
