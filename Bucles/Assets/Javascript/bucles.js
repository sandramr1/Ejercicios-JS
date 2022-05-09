
/*
Bucle whi;e 

*/


//? sentencia while (mientras)

/*Estructura basica de un bucle while

while (condicion){ // palabra reservada while + condicion a evaluar
    //codigo a ejecutar
    //codigo a ejecutar

}
*/


//! si ejecturamos el codigo sin una sentencia de termino o salida, nuestra computadora hara iteraciones infinitas.

let numero = 0; // declaramos la variable numero 0

while (numero < 10){ // condicion de iteracion
    numero ++; //Incrementamos el valor de la variable de 1 en 1
    console.log(numero); // Imprimos el valor de la variable

}

//! la sentencia while se va a ejecutar mientras siga obteniendo resultados positivos (true), y hasta que recibe un resultado negativo (false) termina.

//? Escribir un programa que pida un numero entero positivo y muestre por pantalla todos los numeros impares desde 1 hasta ese numero 

let suma = 0;
let num = prompt("Ingresa el numero hasta donde quieres que termine el conteo y muestre los numeros impares hasta dicho numero:");

/*while (suma <= num){
    let residuo = 0;
    residuo = suma%2;
    if (residuo!=0){
        console.log(suma);
    }
    suma ++;
}*/




//? sentencia do while

/*
do {//condicion de iteracion
}
while(): // condicion de iteracion

*/

let numero3 = 0; //declaramos la variable numero3 en 0

do{
    console.log (numero3);
    numero3++
}
while (numero3<6); // condicion de iteracion


// ciclo for (para)

/* El ciclo For (para) sirve para iterar sobre una seccion de una variable. Es diferente del while porque le podemos pasar una lista de valores y ejecutar una vez por cada uno de ellos.

1. El valor inicial de nuestra variable que vamos a iterar (i=0)
2. condicion que tiene que cumplirse para que el bucle se siga ejecutando. (i<10)
3. operacion que se realiza una vez que termina nuestro bucle (i++)

*/


//Ejemplo 1 Felipe

for (let i = 0; i < 10; i++){
    console.log("El valor de la cariable i es:", i);
    i++;
}

// ejemplo con for

for (let i = 20; i >= 10; i--) {
    console.log("el valor de la variable i es: ",i);
}

//Sentencia break

/* termina el bucle actual, sentencia switch o label. Permite al programa salir de una sentencia, pero para que se pueda ejecutar necesita estar anidado dentro de la sentencia etiquetada*/


let numero5 = 0;
while (numero5 <100){
    numero5++
    console.log("resultado del while + break: ", numero5);
    if(numero5 == 50){
        break
    }

}

// combinar for , if , break

for (let i = 0; i < 20; i++){
    console.log(i);
    if(i==12){
        break;
    }
}

// sentencia continue:

for (let i=0; i<15; i++){
    if(i==10){
        continue;
    }
    console.log("EStos son todos los resultados menos 1 ",i);
}


/* for in: sirve para recorrer un arreglo, y por cada uno de los elementos de este arreglo, vamos a obtener su posicion

for of: sirve para recorrer un arreglo, y por cada uno de los elementos de este arreglo, vamos a obtener su valor.

*/

let animalitosDelBosque = ["ardillas","conejos","venados", "osos", "mariposas"];

//in: posiciones EN el arreglo

for (animal in animalitosDelBosque){
    console.log(animal);
}

// of: valores DEL arreglo
for (animal of animalitosDelBosque){

    console.log(animal);
}

// EJEMPLO ZOOLOGICO

let zoo = ["leon", "tigre", "cocodrilo", "elefante", "jirafa"];

for (numeroDeJAula in zoo){
    console.log(numeroDeJAula);
}

for (nombreDeJaula of zoo){
    console.log(nombreDeJaula);
}

// EJERCICIO NUMERO 1

let numero1 = parseInt(prompt("Introduzca un numero para determinar si es primo: "));
let j = 2
/*
if ((numero1 %numero1 == 0) && (numero1 > 1)){
    alert("Es un numero primo");
}else {
    alert("no es un numero primo")
}

*/


function isPrime(num) {

    if (num === 2) {
      return true;
    } else if (num > 1) {
      for (var i = 2; i < num; i++) {
  
        if (num % i !== 0) {
          return true;
        } else if (num === i * i) {
          return false
        } else {
          return false;
        }
      }
    } else {
      return false;
    }
  
  }
  
  alert(isPrime(numero1));

  let input=parseInt(prompt('ingresa un numero'));

  /*
n=2;
primo=true;

do{
    if(input%n==0){
        primo=false;
    }
    n++;
} while(n<input);

if (primo==true){
    console.log("El numero es primo");
}else{
    console.log("El numero no es primo")
}

*/
  // EJERCICIO 2

  const variablepi = 4;
  let abajo = 1;

  do{

  }while{

  }

  /* 
  function calcularPi(iteraciones) {
    let numerador = 4;
    let  denominador = 1; // A este lo vamos a ir aumentando de 2 en 2
    let pi = 0;
    let x = 0;
    // Recuerda que es alternar entre negativo y positivo; por eso la bandera.
    // Comenzamos en positivo
    let  operador = 1;
    for (x; x < iteraciones; x++) {
      pi += operador * (numerador / denominador);
      denominador += 2; // El denominador aumenta de 2 en 2
      operador *= -1;   // Alternamos operador
    }
    return pi;
  }
  console.log(calcularPi(10));
  
