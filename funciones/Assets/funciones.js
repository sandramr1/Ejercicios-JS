/*

Funciones 

Una funcion es una agrupacion de instrucciones que se ejecutan cuando se llama o se invoca. Las funciones pueden recibir parametros y devolver valores. Es importante mencionar
que las funciones no se ejecutan si no que se invocan.


*/

// esta es la estructura basica de una funcion, que ya esta siendo llamada o invocada.

//funcion que no devuelve ningun valor:
function nombreFuncion (parametros){
// instrucciones
}

nombreFuncion(); //invocamos a nuestra funcion


/* Formas de crear e invocar funciones

1.- Crear una funcion tradicional, crearla y darle un nombre y parametros 

*/

//funcion tradicional

var valor1= 22;
var valor2 = 33;



function sumaDeDosValores( ){
    let valor1 = 5;
    let valor2=10;
    let suma = valor1 + valor2;

    console.log("ESta es mi primer funcion: ", suma);
    document.write("Esta es mi primer funcion: " + suma)
}


sumaDeDosValores();

//FUNCION CON PARAMETROS ASIGNADOS EN LA LLAMADA

function areaTriangulo(base,altura) {
    let area = base * altura / 2;
    console.log("El area del triangulo es: ", area)
}

areaTriangulo(5,32);


/*
Return 
La sentencia return finaliza la ejecucion de la funcion, y especifica un valor para ser devuelto a quien llama a la funcion. O lo que es lo mismo, usamos return para finalizar y tambien para poder asignar el resultado a una variable.


*/

/*

function areaCuadrado (){
    let lado = 6;
    let areaCuadrado = lado * lado ;
    return areaCuadrado; //almacena el numero obtenido en la ecuacion.
}

let resultadoQueUsareMasTarde = areaCuadrado (); // Guardando el resultado de mi areaCuadrado en una variable para usarla despues

areaCuadrado(); //invocamos a nuestra funcion

console.log("Usare mi resultado que guarde anteriormente para mostrarte el area del cuadrado: ", resultadoQueUsareMasTarde);

function volumenCubo(){
    let volumen= resultadoQueUsareMasTarde *resultadoQueUsareMasTarde*resultadoQueUsareMasTarde;

    console.log("El volymen del cubo es: ", volumen);
}

volumenCubo();
 */

//funcion que calcule el area del circulo

function areaCirculo() {
    let radio= 7;
    let areaCirculo = Math.PI * radio*radio;
    return areaCirculo;
};

areaCirculo();
let infoDelAreaCirculo = areaCirculo (); //VOY A GUARDAR TODO EL RESULTADO DE LA FUNCION EN MI NUEVA VARIABLE. YA SABEMOS QUE DENTRO DE ESTA FUNCION, HAY UN VALOR EN EL LIMBO DE LAS VARIABLES.



function volumenCilindro(){
    let altura = 19;
    let volumen = infoDelAreaCirculo * altura;
    console.log("el volumen de l cilindro es: ", volumen);

}

volumenCilindro();


//funciones flecha


function sumita (numero1, numero2){
    return numero1 + numero2;
}

//paso 1. Quitamos la palabra reservada function
/*
sumita (numero1 , numero2){
    return numero1 + numero2;
}

//Paso 2. Quitamos las llaves que delimitan la funcion y en su lugar, abrimos  este bloque de texto con una flecha =>

sumita (numero1 , numero2) =>
    return numero1 + numero2;

//Paso 3. quitamos el return porque ya esta implicito.
var sumita = (numero1 , numero2) => numero1 + numero2;

// las funciones flecha son siempre anonimas, estamos usando una estructura declarativa donde asignamos la funcion a una variable

//Apesar de qeu de principio es complicado entender su 
*/

// Felipe trabajo numero 1.

var operacionArtimetica = (id1, id2, id3, id4) => (id1 + id2)/(id3 * id4);

console.log("Resultado operacion artimetica: ", operacionArtimetica(3,2,2,5));


//Felipe trabajo numero 2.

var chicharronera1 = (A, B, C) => ((-B)+((B*B - 4*A*C)^(1/2)))/(2*A);

console.log ("Resultado numero 1 de X: ", chicharronera1(1,2,3));

var chicharronera2 = (A, B, C) => ((-B)-((B*B - 4*A*C)^(1/2)))/(2*A);

console.log("Resultado numero 2 de X ", chicharronera2(1,2,3));

