

/*

Un operador realiza alguna operacion en uno o varios operandos (valor de datos)  y devuelve un valor. Por ejemplo 1+1 = 2

dentro de los operadores mas utilizados se encuentran:

*/

//operadores de asignacion ( = )


numero = 10 ;

numero1= 20;

numero2 = 30;

adicion = numero1 + numero2;


// operadores de cadena


//sintax de uppercase toUpperCase()

let texto3 = "hola generation";
let texto4 = texto3.toUpperCase();

console.log(texto4)

//trim

//sintaxis de trim ()

let texto5 = " hola generation ";
let texto6 = texto5.trim();

console.log(texto6);

//concat
//sintaxis de concat es concat()

let saludo1 = "Hola";
let espacio= " ";
let saludo2 = "generation";
let union = saludo1.concat(espacio,saludo2);
console.log(union);

//operadores logicos (&&, !)

/* Los operadores logicos nos devuelven un resultado a partir de que se cumpla ( o no)  una condicion, su resultado es booleano y sus operadores son valores logicos o asimilables a ellos*/

//AND (&&)
/* Sirve para determinar si dos expresiones son verdaderas o falsas. 

-Si ambas expresiones son verdaderas, el resultado es verdadero.
-Si alguna de las expresiones es falsa, el resultado es falso.
-Si ninguna de las expresiones es verdadera, el resultado es falso.

*/

numero1= 12;
numero2= 24;

afirmacion1 = numero1 > numero2 ;//false
afirmacion2 = numero1 < numero2 ; //true

console.log("El resultado de las dos afirmaciones es: ", afirmacion1 && afirmacion2);

// OR (||)

/*sirve para determinar si dos expresiones son falsas. 

-Si ambas expresiones son falsas, el resultado es falso.
-Si alguna de las expresiones es veradera, el resultado es verdadero.

*/

num1 = 12;
num2= 24;

afir1 = num1 < num2; // true

afir2 = num1 != num2; // true

console.log(afir1);
console.log(afir2);
console.log("El resultado de las dos afirmaciones es: ", afir1 || afir2);

//NOT (!)

/* 
Siempre devuelve lo contrario del resultado de la expresion.
-Si la expresion es verdadera, el resultado es falso.
-si la expresion es falsa, el resultado es verdadero.

*/

a = 12;
b=24;

afir4 = a < b ; // (verdadero)
afir5 = a !=b; // (verdadero)
console.log("El resultado de la afirmacion es: ", !afir4);
console.log("El resultado de la afirmacion es: ", !afir5);

//operadores de comparacion (==, !=, >, <, >=, <=)

//Operador igual (==)

/*
Sirve para comparar si dos valores son iguales.

(==) determina si dos valores son iguales
(===) determina si dos valores son iguales y de tipos de datos similares
*/

let d =12;
let e = 13;
let f = 13;

console.log("El resultado de la comparacion de a y b es: ", d==e);
console.log("El resultado de la comparacion de a y b es: ", d==f);
console.log("El resultado de la comparacion de a y b es: ", e==f);


//Operador diferente (!=)

m= 13;
n=12;
o=12;
console.log("OPERADOR DIFERENTE (!=")
console.log("El resultado de la comparacion usando el operador != de m y n es: ", m!=n);
console.log("El resultado de la comparacion usando el operador != de n y o es: ", n != o);
console.log("El resultado de la comparacion usando el operador != de m y o es: ", m != o);

//Operador igualdad estricta (===)

/*
Sirve para comparar si dos valores son iguales y de mismo tipo

*/

valora = 23;
valorb = "23";
valorc = 13;
valord = "texto 23";

console.log("El valora y el valorb son iguales: ", valora === valorb);

//Operador desigualdad estricta  (!==)

/*
Sirve para comparar si dos valores son estrictamente diferentes (diferente valor o diferente tipo de dato).


*/

let ejemplo1 = 23;
let ejemplo2= 13;
let textoejemplo= "23";
let textoejemplo2 = "texto2";

console.log("El numero 23 y el texto 23 son estrictamente diferentes", ejemplo1 !== textoejemplo);

// operador mayor que (>)

// sirve para determinar si un valor es mayor que otro.

console.log("Operador mayor que (>)");
console.log("El numero 23 es mayor que el numero 13?: ", ejemplo1 > ejemplo2);

//imprime true porque el numero 23 es mayor que el numero 13

//operador menor que (<)
// sirve para determinar si un valor es menor que otro.
console.log("Operador menor que (<)");
console.log ("El numero 23 es menor queel numero 13?: ", ejemplo1 < ejemplo2); //imprime true porque el numero 13 es mayor o igual a otro


console.log("El numero 23 es mayor o igual que el numero 23", ejemplo1 >= ejemplo2); // imprime true porque el numero 23 es


//Operador mayor o igual que ( >= )

//Sirve para determinar si un valor es mayor o igual que otro.

console.log ("El numero 23 es mayor o igual que el numero 23", ejemplo1 >= ejemplo2); //Imprime true porque el numero 23 es mayor o igual que el numero 13.

//Operador menor o igual que ( <= )
//Sirve para determinar si un valor es menor o igual que otro.

console.log ("El numero 13 es menor o igual que el numero 23", ejemplo2 <= ejemplo1); //Imprime true porque el numero 13 es menor o igual que el numero 23.

//!Combinando operaciones


num1 = 12;
num2 = 24;
num3 = 25;
num4= 92;
num5 = 91;
op = (num1 < num2 || num2 < num3) && (!(num1 != num2) && num5 != num3);

console.log(op)

// operador aritmetico (+, - , *, / , %)

function operacionesMatematicas(){
    numero1=10;
    numero2=2;
    numero3='5';

    console.log("El resultado de la suma de 10 + 2 es: ", numero1+numero2)

}

operacionesMatematicas()

//Ejercicio Felipe

let A= 5;
let B= 3;
let C= -12;



console.log("El resultado de A>3: ", A>3);
console.log("El resultado de A>C es: ", A>C);
console.log("El resultado de A<C: ", A<C);
console.log("El resultado de B<C: ", B<C);
console.log("El resultado de B != C: ", B != C);
console.log("El resultado de A==3", A == 3);
console.log("El resultado de A*B == 15", A*B == 15);
console.log("El resultado de A * B == -30: ", A*B == -30 );
console.log("El resultado de C/B<A: ", C/B < A);
console.log("El resultado de C / B == -10: ", C / B == -10);
console.log("El resultado de C/B == -4: ", C / B == -4);
console.log("El resultado de A + B + C: ", A + B + C == 5);
console.log("El resultado de (A+B == 8) && (A-B ==2):  ",(A+B == 8) && (A-B ==2) );
console.log("El resultado de (A+B == 8)|| (A-B == 6): ", (A+B == 8)|| (A-B == 6));
console.log("El resultado de A>3 && B > 3 && C < 3: ", A>3 && B > 3 && C < 3 );
console.log("El resultado de A > 3 && B >= 3 && C < -3", A > 3 && B >= 3 && C < -3);

