/*

**Programacion orientada a objetos en JavaScript

Paradigma de programacion que nos permite crear soluciones a problemas que se nos presentan, tomando como ejemplo los objetos del mundo real.

Otras formas de programar:

- Programacion funcional
- Programacion imperativa
- Programacion declarativa

*  PRINCIPIOS SOLID

-Single Responsibility Principe (SRP)
-Open Closed Principle (OCP)
-Liskov Subsitution Principle (LSP)
-Interface segregation principle (ISP)
-Dependency Inversion Principle (DIP)

*Principios basicos de la programacion orientada a objetos (POO)
?Clases
Son las plantillas para crear objetos. Nos ayuda a definir el tipo de objeto y a crear instancias (materializar objetos) a partir de una plantilla.
?Objetos
Instancias o materializaciones de esa clase. En el ejemplo del molde de panquecit,s la plantilla es la charola o molde y la instancia o materializacion, es el panquecito.
?Propiedades o atributos
La informacion o los datos que estan almacenados en un objeto. 
?metodos
es una funcion que se ejecuta sobre un objeto. 
?Constructores
?Herencia


*/

/*Ejemplo vida real

Vamos a suponer que tenemos que pagar la nomina de una empresa, y necesitamos apoyarnos de la programacion orientada a objetos para poder hacerlo. Para eso, y con base en los conceptos que ya vimos anteriormente, podemos definit lo siguiente:

-Definir los tipos de trabajadores (objetos) a los que les vamos a pagar:
    -Gerentes
    -empleados generales
    -Jefes de area
    -Subgerentes
- Definir la informacion que tiene cada talbajador (propiedades):
    - Nombre
    - Numero de empleado
    - Salario
    - NSS
    - RFC
    - CURP
    - Fecha de ingreso
    - Informacion bancaria y de contacto
    - Area en la que trabaja




*/

//!Ejemplo del automovil

const automovil = {
    marca: "Toyota",
    modelo: "corolla",
    anio:2019,
    color: "rojo",
    numeroPuertas: 4,
    peso: "1.5 toneladas",
}

console.log(automovil.anio);

//! Metodos hay que verlos como funciones

const objAutomovil2 = {
    marca: "Ford",
    tipo: "Fiesta",
    modelo: 2018,
    color: "amarillo",
    numeroPuertas: 4,
    peso: "1.5 toneladas",
}

//* Ejemplo de una clase para definir a una persona

//?1.- Definir la plantilla para crear muchos trabajadores

class persona{
    nombre = "";
    edad = 18; //Debe tener 18 anios para trabajar
    email = "";
    descripcion = "";
constructor(nombre, edad, email, descripcion){
    this.nombre = nombre.toUpperCase();
    this.edad = (edad<18) ? 18 : edad;
    this.email = email.toLowerCase();
    this.descripcion = descripcion;
//aqui termina el constructor
}


//? 2.- Definir mis metodos como funciones, por que con estas funciones vamos a poder realizar acciones.

imprimirInfo(div){//metodo para imprimir la informacion del objeto, pasamos rl pstsmryto div para decir que esta informacion va a mostrarse dentro del div

    //! Usamos ${} para asignar un valor de una variable a una cadena de texto
//! Usamos += para decirle que agrege lo que ya tiene el innerHTML, y un nuevo valor


    div.innerHTML+=  `<div class="card text-white bg-secondary mb-3" style="max-width: 18rem;">
    <div class="card-header">${this.nombre}</div>
    <div class="card-body">
      <h5 class="card-title">${this.edad}</h5>
      <p class="card-text">${this.edad}.</p>
      <p class="card-text">${this.descripcion}.</p>
    </div>
  </div>` ;
                                                                                  
    //Deshabilito la impresion en consola, porque ahora lo mostrare en una card.
        //console.log("nombre", this.nombre);
        //console.log("Edad", this.edad);
        //console.log("Email", this.email);
        //console.log("Descripcion", this.descripcion);
}
}

//*Crear un objeto persona

let contenido =document.getElementById("contenido");

let felipe = new persona("Felipe", 15, "FELIPE.MAQUEDA@IDR.EDU.MX", "me gustan los chilaquiles verdes");

felipe.imprimirInfo();

let naruto = new persona("Naruto", 25, "naruto.uzumaki@konoha.com", "Este es mi camino ninja");
naruto.imprimirInfo()

let sandra = new persona("Sandra",25,"sandraa_so@hotmail.es", "Aprendiendo POO")

sandra.imprimirInfo()