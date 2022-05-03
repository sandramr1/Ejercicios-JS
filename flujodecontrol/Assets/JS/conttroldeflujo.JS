alert("Estoy vivo!")
//control de flujo 

/*
cuando hablamos de control de flujo hablamos del orden en que se ejecutan las instrucciones de un programa, siendo estas instrucciones las que determinan o controlan dicho flujo.

En un programa, a menos que el control de flujo se vea modificado por una instruccion de control (por ejemplo una condicional), el control de flujo se mantiene en el mismo orden en el que se escriben las instrucciones (de arriba a abajo y de izquierda a derecha)
*/

/*
Condicionales

Los condicionales nos permiten evaluar si una condicion cumple o no con lo que estemos evaluando. su sintaxis es muy sencilla, tanto que podemos agregar condiciones indeterminadas en el caso de que no se cumpla la primera evaluacion y se deban evaluar mas.
*/
 ///if (si)

 // sintaxis de un if

 //if (condition) {
     //instrucciones
//}


//valores que se evaluan como falsos

/* Es normal que durante nuestro trabajo como programadoires, y mas cuando trbajamos con condicionales que trabajan a base de solo dos respuestas (veradero o falso), algunos de los valores que ingresamos se consdieran "falsos positivos". Esto quiere decir que no necesariamente signfiquen que son falsos, si no que al no recibir el tratamiento adecuado, JS los considera falsos y pueden repercutir en nuestro codigo, obteniendo un resultado inesperado.
*/


const edadFelipe = 17;

if (edadFelipe < 18){
    console.log("Lo siento Felipe, no puedes ir a la fiesta");

}

/*
-if devuelve un posible resultado
- if = else devuelven 2 posibles resultados
- if + else if + else devuelven 3 o mas posibles resultados

*/


//opcion = prompt ("Ingrese una opcion") -- para recibir texto mediante el teclado

//Condicional switch

/* 
switch (expresion){
    case valor1: 
        /bloque de codigo que se ejecuta si la expresion es igual a valor1
        break;
    case valor 2:
         /bloque de codigo que se ejecuta si la expresion es igual a valor2
         break;
     case valor 3:
         /bloque de codigo que se ejecuta si la expresion es igual a valor3
         break;
    default:
        /bloque de codigo que se ejecuta si no se cumple ninguna de las condiciones anteriores



switch: iniciar nuestra condicion
case: evaluar la condicion
break: terminar la condicion:
}


*/

//funcion para que no ingresen signos

function validarSoloNumeros (e) {

}

opcion = prompt("Ingrese una opcion del 1 al 4: ");

switch (opcion){
    case "1":
        console.log("seleccionaste la opcion 1");
        break;
    case "2":
         console.log("Seleccionaste la opcion 2");
         break;
    case "3":
         console.log("Seleccionaste la opcion 3");
         break;
    case "4":
         console.log("Seleccionaste la opcion 4");
         break;
    default:
        console.log("Me quieres engañar, no es una opcion valida");
}

console.log(typeof (opcion));