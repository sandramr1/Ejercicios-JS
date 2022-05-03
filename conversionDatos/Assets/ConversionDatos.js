

//conversion de datos

console.log('conversion de cadenas a numeros usando Number ()');

console.log(Number("10")); // 10
console.log*(Number("10.5")); //  10.5
console.log(Number("")); // 0
console.log(Number(" "));// 0
console.log(Number("10 10 10 10")); //Nan
console.log(Number("Hola soy Felipe")); // Nan

//el metodo parseint analiza una cadena y devuelve un numero enteoro. Si permite espacios y solo devuelve el primer numero encontrado.

console.log("Conversion de cadenas en numeros usando parseInt()")
console.log(parseInt("-10")); // -10
console.log(parseInt("10.55")); // 10
console.log(parseInt("10 10 10 10")); // 10
console.log(parseInt(" ")); // NaN
console.log(parseInt(" ")); // NaN

//El metodo parseFloat analiza una cadena y devuelve un numero decimal. Si permite espacios y solo devuelve el primer numero encontrado.

console.log("Conversion de cadenas en numeros usando parseFloat()");

console.log(parseFloat("-10")); // -10
console.log(parseFloat("10.55")); // 10.55
console.log(parseFloat("10 10.58 10 10")); // 10


//Conversion de numeros a cadenas

String();// convierte un numero en cadena

console.log("Conversion de numeros a cadenas usando String()");
 
console.log(String(10)); // "10"
console.log(String(10.5)); // "10.5"
console.log(String(true)); // "true"
console.log(String(false)); // "false"
console.log(String(100 + 23)); // "123"

//conversion de booleanos a numeros

console.log("Conversion de booleanos a numeros usando Number()");
console.log(Number(false)); // 0
console.log(Number(true)); // 1

//conversion de numeros a booleanos

console.log("Conversion de numeros a booleanos usando Boolean()");
console.log(Boolean(0)); //false
console.log(Boolean(1)); // true

/* typeof
typeof nos ayuda a saber el tipo de dato que es una variable. La sintaxis es la siguiente:

typeof variable;

*/

console.log("Uso de typeof");
console.log(typeof "Hola"); //string
console.log(typeof 10); // number
console.log(typeof true); //boolean
console.log(typeof false); // boolean


// Ejercicio

//FALSE
console.log('Convirtiendo el valor false el numero, string y boolean');
console.log(Number(false));
console.log(String(false));
console.log(Boolean(false));

//TRUE
console.log('Convirtiendo el valor true el numero, string y boolean');
console.log(Number(true));
console.log(String(true));
console.log(Boolean(true));

// 0

console.log('Convirtiendo el valor 0 el numero, string y boolean');
console.log(Number(0));
console.log(String(0));
console.log(Boolean(0));

// 1

console.log('Convirtiendo el valor 1 el numero, string y boolean');
console.log(Number(1));
console.log(String(1));
console.log(Boolean(1));

// "0"
console.log('Convirtiendo el valor "0" el numero, string y boolean');
console.log(Number("0"));
console.log(String("0"));
console.log(Boolean("0"));

//"00"
console.log('Convirtiendo el valor "000" el numero, string y boolean');
console.log(Number("000"));
console.log(String("000"));
console.log(Boolean("000"));

// "1"
console.log('Convirtiendo el valor "1" el numero, string y boolean');
console.log(Number("1"));
console.log(String("1"));
console.log(Boolean("1"));

//NaN
console.log('Convirtiendo el valor NaN el numero, string y boolean');
console.log(Number(NaN));
console.log(String(NaN));
console.log(Boolean(NaN));

//infinity
console.log('Convirtiendo el valor infinity el numero, string y boolean');
console.log(Number(Infinity));
console.log(String(Infinity));
console.log(Boolean(Infinity));

// -infinity
console.log('Convirtiendo el valor -infinity el numero, string y boolean');
console.log(Number(-Infinity));
console.log(String(-Infinity));
console.log(Boolean(-Infinity));

// ""
console.log('Convirtiendo el valor "" el numero, string y boolean');
console.log(Number(""));
console.log(String(""));
console.log(Boolean(""));

// "20"
console.log('Convirtiendo el valor "20" el numero, string y boolean');
console.log(Number("20"));
console.log(String("20"));
console.log(Boolean("20"));

// "twenty"

console.log('Convirtiendo el valor "twenty" el numero, string y boolean');
console.log(Number("twenty"));
console.log(String("twenty"));
console.log(Boolean("twenty"));

//null

console.log('Convirtiendo el valor null el numero, string y boolean');
console.log(Number(null));
console.log(String(null));
console.log(Boolean(null));

// undefined
console.log('Convirtiendo el valor undefined el numero, string y boolean');
console.log(Number(undefined));
console.log(String(undefined));
console.log(Boolean(undefined));