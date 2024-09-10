// 1. Introducción a JavaScript

// Ejercicio 2
let a=10, b=5, c=a+b;
console.log("La suma de a y b es: ",c);

// Ejercicio 3
let nombre=prompt("¿Cuál es tu nombre?")
console.log("Hola ", nombre)

// 2. Operadores Lógicos y Condicionales

// Ejercicio 1
let max_number=0;
a=14, b=14, c=14;
if(a>b){
    max_number=a;
    if(a<c){
        max_number=c;
    }
}else if(a<b){
    max_number=b;
    if(b<c){
        max_number=c;
    }
}else{
    if(b<c){
        max_number=c;
    }else{
        max_number=c;
    }
}

console.log("El mayor de los tres números es: ", max_number)

// Ejercicio 2
let number=prompt("Ingrese un número: ")

if (number%2==0){
    console.log("El número ", number, " ingresado es par")
}else{
    console.log("El número ", number, " ingresado es impar");
}

// 3. Operadores de asignación y bucles

// Ejercicio 1
let counter=10;

while(counter != 0){
    console.log(counter);
    counter-=1;
}

// Ejercicio 2
let number_2=undefined;
do{
    number_2=prompt("Ingrese un número mayor a cien: ")
}while(number_2 <= 100)

// 4. Funciones en JavaScript

// Ejercicio 1
let isEven=9, check=esPar(isEven);
console.log(check);

function esPar(number_3){
    let check=false;

    if (number_3%2==0){
        check=true;
    }

    return check;
}

// Ejercicio 2
let tempCelsTest=31, tempFahrTest=convertirCelsiusaFahrenheit(tempCelsTest);
console.log("La temperatura en grados Celsius de ", tempCelsTest, " es igual a ",tempFahrTest, " grados Fahrenheit");

function convertirCelsiusaFahrenheit(tempCels){
    let tempFahr=undefined;

    tempFahr=(tempCels*9/5)+32;

    return tempFahr;
}

// 5. Objetos en JavaScript

// Ejercicio 1

let persona = {
    name:'Andrea',
    age:24,
    city:'Mendoza',
    cityUpdate: function (newCity){
        this.city=newCity;
    },
    showProperties: function (){
        console.log("Las propiedades de la persona son:");
        console.log("Nombre: ", this.name);
        console.log("Edad: ", this.age);
        console.log("Ciudad actual: ", this.city);
    }
};

persona.showProperties();

persona.cityUpdate("Córdoba");

persona.showProperties();

// Ejercicio 2

let libro={
    title: 'Simbad el marino',
    autor: 'Pepe Grillo',
    year: 2019
}

function ancientCheck(Object){
    let currentYear=new Date().getFullYear();

    if (currentYear-Object.year > 10){
        console.log("El libro es antiguo");
    }else{
        console.log("El libro es reciente");
    }
}

ancientCheck(libro);

// 6. Arrays

// Ejercicio 1

let numeros=[1,2,3,4,5,6,7,8,9,10];

let numerosDoble=arrayMult(numeros);

console.log("Los números originales son: ", numeros.toString());
console.log("Los nuevos números son: ", numerosDoble.toString());

function arrayMult(numeros){
    const numerosMult=new Array(10);

    for (let i=0; i<10; i++){
        numerosMult[i]=numeros[i]*2;
    }

    return numerosMult;
}

// Ejercicio 2

let pares=new Array(10);
let j=0;

for (let i=1; i<21; i++){
    if(i%2==0){
        pares[j]=i;
        j++;
    }
}

console.log("Los primeros 10 números pares son:");
console.log(pares.toString());

// 7. Introducción al DOM

// Ejercicio 1

const button=document.getElementById("button");
const paragraphs=document.getElementById("parrafos");

button.addEventListener("click", () => {
    if(paragraphs.classList.contains('newColor')){
        paragraphs.classList.remove('newColor');
    }else{
        paragraphs.classList.add('newColor');
    }
});

// Ejercicio 2

const button2=document.getElementById("button2");

button2.addEventListener("click", () => {
    const inputText=document.getElementById("textoIngresado").value;
    alert(inputText);
});

// 8. Eventos en DOM
// Hecho en index.html

// 9. LocalStorage
const button5=document.getElementById("saveEmailButton");
const outputValue=document.getElementById("outputEmail");

button5.addEventListener("click", () => {
    localStorage.setItem("savedEmail", document.getElementById("inputEmail").value);
    outputValue.textContent=localStorage.getItem("savedEmail");
});



const button6=document.getElementById("eraseSavedEmail");

button6.addEventListener("click", () => {
    localStorage.removeItem("savedEmail");
    outputValue.textContent="No hay un email guardado";
});