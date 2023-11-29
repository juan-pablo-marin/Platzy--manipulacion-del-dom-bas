var miAuto = {
    marca:"toyota",
    modelo:"corola",
    annio:2020,
    detalleDelAuto: function(){
        console.log("auto" + this.modelo + this.annio);
    }

};

correr(){
    console.log(`${this.nombre} corre`)


    function auto(marca,modelo,annio){
        this.marca= marca;
        this.modelo=modelo;
        this.annio = annio;
    }

    var autoNuevo = new auto("Tesla","Model 3",2020,898);
    var autoNuevo2 = new auto("tesla","modelo X",2018);
    var autoNuevo3 = new auto("toyota","Corola",2020);





    function auto(marca,modelo,annio){
        this.marca= marca;
        this.modelo=modelo;
        this.annio = annio;
    }
function ejecutar (){
for(let i = 0 ;i<30;i++){
    var crearAutos = new auto("auto"+i,"modelo"+i,"annio"+i)
}

}

if (car.licensePlate === undefined)
var car1 = new car (car.color, car.brand,car.licensePlate, "false")
return car1;



if (car.licensePlate === null || car.licensePlate === undefined) {
    car.drivingLicense = false;
  }
  else {
    car.drivingLicense = true;
  }
  return car;


  var articulos= [
    {nombre:"bici", costo:3000},
    {nombre:"tv", costo:2500},
    {nombre:"libro", costo:320},
    {nombre:"celular", costo:1000},
    {nombre:"laptop", costo:2000},
    {nombre:"teclado", costo:500},
    {nombre:"audifonos", costo:1700},
  ]

  var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 500

  });

  var nombreArticulos = articulos.map (function(articulo){
    return articulo.nombre
  })

  var buscarArticulo = articulos.find (function(pepe){
    return pepe.costo =500;

  });

//*
  var buscar2 = articulos.forEach(function(pepa){
        console.log(pepa.nombre)
  });

  var buscarsSome= articulos.some(function(pepe){
        return pepe.costo<=700;
  });