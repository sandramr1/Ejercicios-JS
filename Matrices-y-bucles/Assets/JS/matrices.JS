/*

Arreglos, Arrays o Matrices

Definicion

Un array es un conjunto de datos que se pueden almacenar en una sola variable.

Cuando tenemeos una variable, la usamos para guardar un dato. Cuando tenemos un array, guardamos esos datos en una lista. 

Un array ya no es un tipo de dato primitivo, si no que es un objeto porque es considerado una estructura de datos.

*/
let variable = 1; //Es una variable con un solo valor

let array = [1,2,3,4,5]; //Es un array con varios valores


/*
*Formas de crear un array o arreglo

?1- Utilizando la palabra reservada "new" y el metodo "Array"

En esta primera forma nosotros creamos un array usando la palabra reservada new y el metodo Array para especificarle a nuestro navagador que queremos crear un array. Hasta este momento, este array esta vacio por que no tenemos ningun dato dentro del parentesis (que es donde vamos a guardar los datos).

*/

//Estructura basica de un array

var arcoiris = new Array("rojo", "verde", "azul", "amarillo", "violeta", "naranja", "rosa"); //Declaramos un arreglo con 7 posiciones

/*
? Segunda forma de crear un arreglo (favorita de Felipe)

La segunda forma es crear un array a traves de los corchetes. Esta forma es muy utilzada en los arrays de JS, ya que es la forma más sencilla para crearlos.

*/

var arcoiris = ["rojo", "verde", "azul", "amarillo", "violeta", "naranja", "rosa"]; //Declaramos un arreglo con 7 posiciones

var arcoiris = []; //Declaramos un arreglo vacio

//Ejemplos de arreglos

var listaSuper = ['leche', 'pan', 'dulces'];
var listaSuper = new Array ('leche', 'pan', 'dulces');

var diasSemana = new Array('Lunes', 'Martes', 'Miercoles', 'Jueves','Viernes', 'Sabado', 'Domingo');



// ? investigar si podemos hacer arreglos con otros tipos de datos.

/* antes de hablar de elementos de un array, es importante definir 2 conceptos:

*/

var diasSemana = ['Lunes', 'Martes', 'Miercoles', 'Jueves','Viernes', 'Sabado', 'Domingo'];

// elementos: 7 elementos
// indices: 0,1,2,3,4,5,6

//0 - lunes
//1 - martes
//2 - miercoles
//3 - jueves
//4 - viernes
//5 - sabado
//6 - domingo


//? acceder a un elemento de un array

//sintaxis general para imprimir un elemento de un array

//console.log(nombreDelArreglo[valorDelIndice]);

console.log(diasSemana[4]); // imprime el elemento de la posicion 4

console.log(diasSemana[0]); // imprime el elemento de la posicion 0

console.log(diasSemana[9]); // imprime el elemento de la posicion 9 (undefined)

//* Arrays asociativos

/*
Un array asociativo es un array que contiene una serie de datos que se almacenan en una estructura que se llama objeto. 
Nos sirve hacerlo de este modo porque podemos tener un control mas especifico al momento de llamar la posicion de ese elemento.  Por ejemplo, nosotros en un array normal, llamamos a los elementos por su indice (0, 1, 2, etc.), en cambio en un array asociativo, llamamos a los elementos por su nombre (nombre, apellido, etc.).

En pocas palabras, cambiamos y asociamos el numero del indice por una cadena de texto para poder identificar la posicion del elemento de una mejor forma.
*/


let micomputadora = {
    marca: "Asus",
    modelo: "GL552JX",
    procesador: "Interl core i7",
    ram : "16GB",
    almacenamiento: "1 TB",
};

console.log(micomputadora.ram);


/* Metodos de los arrays

En los arrays, tenemos ciertos metodos que nos permiten manipular los elementos de un array. Estos nos permiten desde agregar elementos, eliminar elementos, hasta reordenarlos.

Podemos dividir estos metodos en 3 grupos:

-metodos transformadores: soon los que nos permiten manipular los elementos de un array y cambiar su estructura.
-metodos accesores: son los que nhos permiten acceder a los elementos de un array.
-metodos iteradores o repetitivos: son los que nos permiten iterar sobre los elementos de un array, recorriendolos.

sintiaxis basica de los metodos:

nombreDelArrayAModificar.metodoDeLaClase(parametros);

*/

console.log*("");
console.log("-----------------------------------------------------------------------")
console.log(" ")


var arrayEjemplo = ["Manzanas", "Peras", "zanahorias", "Duraznos", "Melones", "sandias", "aguacates", "naranjas"];


console.log("Este es mi arreglo original", arrayEjemplo);

//? Metodos transformadores

//* Metodo push(): Agregar un elemento al final del arreglo

arrayEjemplo.push("uvas");
console.log("Agregue uvas al arreglo original", arrayEjemplo);

//* Metodo pop(): Eliminar un elemento del final del arreglo

arrayEjemplo.pop(); // no necesito pasar parametro, porque elimina el ultimo elemento.
console.log("Elimine el ultimo elemento agregado del arreglo, que eran las uvas", arrayEjemplo);


//* Metodo unshift(): Agregar uno o mas elementos al principio del arreglo

arrayEjemplo.unshift ("Fresas", "Platanitos");

console.log("Agregue dos elementos al principio del arreglo, que son fresas y platanitos", arrayEjemplo);

//* Metodo shift(): eliminar un elemento del principio del arreglo

arrayEjemplo.shift();
console.log("Elimine el primer elemento del arreglo, que era fresas", arrayEjemplo);

//* Sort(): ordenar los elementos del arreglo

arrayEjemplo.sort();//!Revisar si hay otros parametros para este metodo

console.log("Ordene los elementos del arreglo en orden alfabetico", arrayEjemplo);

// reverse(): reversa los elementos del arreglo

arrayEjemplo.reverse(); 
console.log("Reversa los elementos del arreglo", arrayEjemplo);


//* forEach(): recorre el array y devuelve un nuevo array con los elementos que cumplan la condicion

var frutas = ["manzana", "pera", "uva", "naranja", "sandia"];
var forEach = frutas.forEach(fruta => console.log ("La fruta " + fruta + " se encuentra en la posicion")); // imprimimos el array.

// slice(): extrae una seccion de la cadena, devolvemos una cadena nueva copiando el array por que no lo modificamos.

//CORTANDO UN ARRAY

var cadena1 = ["Hola"," Generation", " de","JavaScript" ];
var cadena2 = cadena1.slice(3); // Devuelve "a generatio" por que comenzamos desde el caracter 3, y terminamos en el caracter -2
var cadena3 = cadena2[0].slice(1,3)
console.log("Esta es la cadena: ", cadena3);

//cCORTANDO UN ARRAY DE NUMEROS

var arrayNumeracion = [1,2,3,4,5,6,7,8,9,10];

console.log("Este es mi array numeracion", arrayNumeracion);

var nuevaNumeracion = arrayNumeracion.slice(0,-5);
console.log("Esta es la nueva numeracion", nuevaNumeracion);

//CORTANDO CADENAS DE TEXTO

var saludo5= "Hola Generation de JavaScript";
console.log("Este es mi saludo", saludo5);
var nuevoSaludo = saludo5.slice(0,-5);
console.log("ESta es mi nuevo saludo", nuevoSaludo)

//Ejemplos del mundo real usando slice: 
// creamos un cupon personalizado con el nombre y apellido del usuario
//Felipe
//Maqueda

//felmaq
//cupon = felmaq100



/* 
Metodo splice (): 

Hay un metodo muy especial, que se llama splice, y nos permite modificar el contenido de un array. Podemos usarlo en tres formas:

    -Para eliminar o suprimir elementos del array
    -Para agregar o isnertar nuevos elementos al array.
    -Para reemplazar elementos existentes del array.
?Esta es la sintaxis general del metodo splice.

    splice (indice de inicio, cantidadDeElementosAEliminar, nuevoElemento1, nuevoElemento2, ... , nuevoElementoN)

*Paramentros que usa el metodo splice
    -indice de inicio: Indica la posicion del inicio donde comenzara a eliminar elementos. (primer numero del parentesis)
    - Cantidad de elementos a eliminar: Indica la cantidad de elementos a eliminar . (segundo numero del parentesis)
    -Nuevo elemento: indica el nuevo elemento que se agregara al array. (Los numeros que estan despues del parantesis)


*/


console.log("");
console.log("-----------METODO SPLICE-------------");
console.log("");

// crear un array de ejemplo llamado meses

let meses = ["enero", "febrero", "lunes", "martes", "marzo"];
console.log("Este es mi array original de meses y dias revueltos", meses);

/*
1. Eliminar elementos del array usando splice
!sintaxis del splice para eliminar elementos: splice(posicionInicial, cantidadDeElementosAEliminar)

*/

meses.splice(0,2); //elimina los dos elementos de la posicion 2
console.log("elimine los dos elementos que no son meses del arreglo", meses);

meses.splice(1,1); // elimina el elemento de la posicion 1
console.log("Elimine el elemento de la posicion 1", meses);


//!EJERCICIO EXPRESS!!!!

var todosLosMesesDelAnio = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];



console.log("los meses que no tienen 30 dias son: ", todosLosMesesDelAnio)
//Usando splice quita todos los meses del anio que tengan 30 dias

/* 
Agregar nuevos elementos al arreglo sin eliminar ningun elemento

En este ultimo ejemplo, podemos agregar nuevos elementos sin eliminar ningun elemento del array, definiendo en el 0 el parametro que indica la cantidad de elelmentos a eliminar.

*/

let meses3 = ["enero", "febrero", "lunes", "martes"];
console.log("este es un nuevo array llamado meses3", meses3); // imprimimos el array

meses3.splice(2,0, "marzo","abril");
console.log("agregue nuevos elementos al array", meses3);


//!Ejercicio FELIPE

console.log("");
console.log("-----------EJERCICIO FELIPE-------------");
console.log("");

carreritas = ["Lucia", "Roberto", "Maria", "Jesus", "Andrea", "Jose"];

console.log("Estos son los lugares de la carrera actual: ", carreritas);

carreritas.splice(2,4, "Andrea","Maria","Jesus", "Jose");

console.log("Andrea adelanta a Maria: ", carreritas);

carreritas.pop()

console.log("Jose es descalificado de la carrera: ", carreritas);

carreritas.splice(1,1, "Cristobal","Fernanda", "Armando",  "Roberto");

console.log("Detras de Lucia y antes de Roberoto se clasifican tres nuevos corredores: cristobal, fernanda y armando: ", carreritas);

carreritas.unshift("Federico");

console.log("Hay un nuevo concursante que toma el primer puesto: Federico", carreritas);