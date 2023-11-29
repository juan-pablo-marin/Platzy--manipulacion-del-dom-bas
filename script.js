const h1= document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');
const form = document.querySelector('#form');

//btn.addEventListener('click',btnClick);

form.addEventListener('submit',sumarInputsValues)

function btnClick(){
    const sumaInputs = input1.value + input2.value;
    pResult.innerText= "Resultado "+ sumaInputs;
}

function sumarInputsValues(event){
    event.preventDefault();
    const sumaInputs = input1.value + input2.value;
    pResult.innerText= "Resultado "+ sumaInputs;
}

















/*
console.log({
    h1,
    p,
    parrafito,
    pid,    
    input
});
h1.innerHTML = 'juan pablo <br> Marin';
h1.innerText = 'juan pablo <br> Marin';
console.log(h1.getAttribute('class'));// para saber si existe la clase
h1.setAttribute ('class', 'rojo'); // para modificar atributos
h1.classList.add('verde');
//h1.classList.remove('rojo');
console.log(h1.classList.length);

//input.value("45662"); 
const img = document.createElement('img');
img.setAttribute('src','https://elpythonista.com/wp-content/uploads/2020/11/Tuplas_En_Python-1024x576.jpg') ;
console.log(img);
pid.append(img);
*/