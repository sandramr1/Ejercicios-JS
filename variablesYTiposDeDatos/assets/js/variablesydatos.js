


recipiente="agua";
recipiente ="cafe";//cuando escribo recipiente, estoy declarando mi variable y le asigno el valor de "cafe", en este momento ya esta inicializada
recipiente = "leche";

console.log(recipiente);//JS es caseSensitive (sensible a mayusculas y minisculas)

/*tipos de variables
- var: es una variable global que podra ser utilizada en todo el codigo
- let: es una  variable que pertenece solo a un bloque de codigo
- const: una variable que no cambiara de valor.

Declarar, inicializar y modificar variables

DEclarar una variable es cuando la comienzo a escribir y aun no le doy valores.
Inicializar una variable es cuando le doy valores a la variables.

Modificar variables:
let numero = 10; // declaramos e inciializamos la variable con un valor
numero = 15;// modificamos el valor de la variable
console.log(numero); imprimimos el valor de la variable, que en este caso sera 15 por ser el ultimo valor asignado de la variable
*/

var nombre="Felipe";
let apellido="Maqueda";
const edad = "30"

var descanso = 15;
var tulum = "playita";

var nombre = "Juan";

let perrito = "Toby";
let perrito2= "manchas";

//las constantes deben declararse e inicializarse al mismo tiempo. No podemos dejar constantes sin inicializar porque nos marcaran un error.
//Este es un ejemplo de una alerta undefined porque no agregamos valor a nuesta variable

let numero5
console.log(numero5); //imprime undefined. No es un error.

// Ejemplo de descuento de zapatos

let zapatosnegros=500; //precio sin descuento
zapatos=250; //precio con descuento del 50% porque es jueves

console.log(zapatosnegros)

// crear multiples variables en una sola linea (separadas por coma)

let nombre1;
let nombre2;
let nombre3;

nombre1 = "juan";
nombre2 = "Adriana";
nombre3 = "Ivonne";

let nombre4, nombre5, nombre6;
nombre4 = "Argemiro", nombre5="Briana", nombre6="carmen";

//Tipos de datos

/*
  Datos primitivos:

  Los tipos de datos primitivos son tipos de datos inmutables (no modificables). Una vez que se crea un tipo de datos primitivo, no podemos modificarlo.
   -string: Para rperesentar cadenas de texto. Podemos escribir el texto entre comillas dobles, simples o backticks.
   -number: Para representar datos de valor numerico, como numeros enteros o decimales. Para hacerlo no usamos comillas, solo agregamos el valor y ya.
   -boolean: Para represntar datos de valor logico, como verdadero o falso.
   -undefined: Para representar datos que no tienen valor.
   -null
   -Nan (not a number)


*/

let string = 'Hola, soy una cadena de texto';
console.log (string);


// Ejemplo de datos numericos
let numero1=15;
let numero3=55;
let numero4=10;

let suma = numero1 + numero3 + numero4;

console.log(suma);

//Ejemplo de tipo de datos booleanos:

datoBooleano=true;
datoBooleano=false;

//Ejemplo de valor tipo undefined:

let gatito 
let alumno
let fruta
let comida

console.log(fruta)

//EJERCICIOS

//Programa para calcular el sueldo de un empleado

let costoHora= 82.76;
let horasTrabajadas = 40;
let primaDominical = 0.05;
let nombreEmpleado1= "Juan";
let nombreEmpleado2 = "Adriana"
let bonoExtra= 1000; //bono extra si el trabajador trabaja mas de 45 horas a la semana
let sueldoBase = costoHora * horasTrabajadas;
let primaDominicalTotal = sueldoBase * primaDominical;

console.log('El nombrse de nuestro primer trabajdor es ', nombreEmpleado1);
console.log('El suelgo base de nuestro primer trabajador es ', sueldoBase);
console.log('La prima dominical de nuestro trabajador es ', primaDominicalTotal)

//Ejercicios que pidio Felipe

//Tipos de datos
//Cadenas

let ejemplo1 = "Hola, quisiera estar en la playa";

let sumaDeNombres= 'Juan' + 'Sandra ';

let duda='tengo una duda';

let miercoles = "Hoy es martes";

let verduras = "el limon no es verdura";

console.log(ejemplo1 , sumaDeNombres)

console.log(duda)

// numerico

let dias= 365;
let tiempo=5;
let cantidadTortugas = 20;
let gravedad=9.81;
let verdades = 3;

// Boolean

let real = true;
let noCieroto= false;

// undefined

let momentos;
let temporizador;
let calculadora;
let amigos;
let novios;

// NAN
let dudas = duda * 20;


console.log(dudas)

//conversion de datos
//cadenas de textos a numeros

console.log(Number('50'))
console.log(Number("50.5"))
console.log(Number (""))

//Numeros a cadenas de texto

console.log(String(50));

//para cortar numeros decimales
console.log(parseInt(50.57));
console.log(parseInt(3.1416));

//Para redondear numeros decimales

console.log(Math.round(50.57));