//* elementos del DOM


/* 

Cuando hablamos del DOM, hablamos de dos respresentaciones basicas:

-representacion del codigo fuente (estructura HTML)
-representacion del navegador (estructura del DOM o scomo se ve ese HTML)
!Esto es lo que nosotros trabajremos

?Node (Nodo):
es una unidad basica, que puede ser un elemento o un nodo de texto. El texto dentro de un nodo elemento, se considera un nuevo nodo hijo de un tipo texto

Tenemos distintos tipos de nodos:
    -Documento: Es el nodo raiz del documento, a partir del cual se derivan los demas nodos. Este objeto es  el que nos permite acceder a todos los elementos del DOM.

    -Element: Son nodos definidos por etiquetas HTML (div, h1,p, etc)

    -Text: El texto dentro de un nodo elemento (el texto dentro de un H1, por ejemplo) se considera un nuevo nodo hijo de tipo texto.
    
    -Attribute: los atributos de las etiquetas tambien definen nodos (en JS los vamos a ver como nodos, si no como informacion asociada al nodo de ese tipo elemento). No don nodos adicionales, son atributos de un nodo elemento.

    -Comentarios y otros: los comentarios y otros elementos como las declaraciones doctype, son considerados nodos adicionales.

*/

/*

/* ejemplo de los nodos. 

<html>
<h1> Hola generation!! </h1>

</html>

nodo document: documento (html)
nodo element: h1
nodo text: Hola Generation!!
nodo atributo = style

*/

/*
!Con JavaScript podemos cambiar:

- Todos los elementos HTML de la pagina web.
- Todos los atributos de la pagina web.
- Todos los estilos CSS de la pagina web.
- Eliminar elementos y atributos HTML existentes.
- Agregar nuevos elementos y atributos HTML.
- Reaccionar a todos los eventos HTML existentes en la pagina.
- Crear nuevos eventos HTML en la pagina.


!Cuando hablamos de metodos, hablamos de acciones que se pueden realizar en elementos HTML para poder modificar los valores de los atributos, estilos, etc,
/*
*Metodos para seleccionar elementos

Estos metodos nos van a permitir seleccionar uno o varios elementos o grupos de elementos del DOM. Estos metodos se utilizan en el document, por eso se agrega element antes del get.
*/
//? getElementById(id)

const titulo = document.getElementById("TituloBienvenida");
document.write(titulo);


//? getElementsByTagName(tag)

const etiqueta = document.getElementsByTagName("h1");
document.write(etiqueta);

//? getElementsByClassName(class)

const clase = document.getElementsByClassName("titulos");


//? querySelector(selector)

//? querySelectorAll(selector)

const parrafo2 = document.querySelectorAll(".parrafito");
console.log(parrafo2);
//*Metodos para definir, obtener y eliminar atributos

//? setAttribute(atributo,valor): Define un atributo de un elemento.
const rango = document.querySelector(".rango");
rango.setAttribute("type", "range");

//? getAttribute(atributo): Obtiene el valor de un atributo de un elemento.
document.write(rango.getAttribute("type"));

//? removeAttribute(atributo): Elimina un atributo de un elemento.
rango.removeAttribute("type");

//? inner.HTML: nos va a permitir sobreescribir un nuevo texto a un elemento determinado

document.querySelector(".parrafito").innerHTML = "Esto ya no es un HOLA A TODXS, si no es un TENGO HAMBRE";

document.getElementById("TituloMasTarde").innerHTML = "Ya vamonos A COMER";


//? document write: nos permite escribir un texto en la pagina.

document.write("Hola a todos, esta es la hora actual: "+ Date ());

// modificacion de estilos

/*
*Modificacion de estilos

Gracias al DOM, podemos modificar los estilos de un elemento de forma mucho mas facil.

Sintaxis bsica de la propiedad .style.propiedad = valor;

*/

/*

//! Como anidar varios estilos en una sola linea
//! Como agregar una animacion del mundito de GitHub

//document.getElementById("parrafo1").style.color="pink";
document.getElementById("parrafo1").style.fontSize = "30px";
document.getElementById("parrafo1").style.fontFamily = "Arial";
document.getElementById("parrafo1").style.fontWeight = "bold";
document.getElementById("parrafo1").style.textDecoration = "underline";
document.getElementById("parrafo1").style.textTransform = "uppercase";
document.getElementById("parrafo1").style.textAlign = "center";
document.getElementById("parrafo1").style.backgroundColor = "yellow"; 
document.getElementById("parrafo1").style.padding = "20px";
document.getElementById("parrafo1").style.border = "2px solid blue";
document.getElementById("parrafo1").style.borderRadius = "20px";
document.getElementById("parrafo1").style.color = "blue";
document.getElementById("parrafo1").style.fontSize = "30px";
document.getElementById("parrafo1").style.fontFamily = "Arial";
document.getElementById("parrafo1").style.fontWeight = "bold";
document.getElementById("parrafo1").style.textDecoration = "underline";
document.getElementById("parrafo1").style.textTransform = "uppercase";
document.getElementById("parrafo1").style.textAlign = "center";
document.getElementById("parrafo1").style.backgroundColor = "yellow"; 
document.getElementById("parrafo1").style.padding = "20px";
document.getElementById("parrafo1").style.border = "2px solid blue";
document.getElementById("parrafo1").style.borderRadius = "20px";
document.getElementById("parrafo1").style.boxShadow = "10px 10px 10px #000";
*/

//? Evento click


const textoAModificar = document.querySelector(".Header1");

//Creo una constante para cambiar el color de esa informacion recopilada
function cambiarColor(color){ //Recibo como parametro el color a cambiar, y este parametro lo voy a obtener del HTML
    textoAModificar.style.color = color; //Cambio el color del texto
}
