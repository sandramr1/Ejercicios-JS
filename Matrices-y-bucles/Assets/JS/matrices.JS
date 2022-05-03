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



