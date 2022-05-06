function init(){
  //*Declarando variables

  var resultado = document.getElementById("resultado");
  var reset = document.getElementById("reset");
  var suma = document.getElementById("suma");
  var resta= document.getElementById("resta");
  var multiplicacion = document.getElementById("multiplicacion");
  var division = document.getElementById("division");
  var igual = document.getElementById("igual");
  var uno = document.getElementById("uno");
  var dos = document.getElementById("dos");
  var tres = document.getElementById("tres");
  var cuatro = document.getElementById("cuatro");
  var cinco = document.getElementById("cinco");
  var seis = document.getElementById("seis");
  var siete = document.getElementById("siete");
  var ocho = document.getElementById("ocho");
  var nueve = document.getElementById("nueve");
  

  //*Eventos
    uno.onclick = function(e){
        resultado.textContent = resultado.textContent + "1"
    }
    uno.onclick = function(e){
        resultado.textContent = resultado.textContent + "2"
    }
    uno.onclick = function(e){
        resultado.textContent = resultado.textContent + "3"
    }
    uno.onclick = function(e){
        resultado.textContent = resultado.textContent + "4"
    }
    uno.onclick = function(e){
        resultado.textContent = resultado.textContent + "5"
    }
    uno.onclick = function(e){
        resultado.textContent = resultado.textContent + "6"
    }
    uno.onclick = function(e){
        resultado.textContent = resultado.textContent + "7"
    }
    uno.onclick = function(e){
        resultado.textContent = resultado.textContent + "8"
    }
    uno.onclick = function(e){
        resultado.textContent = resultado.textContent + "9"
    }
    uno.onclick = function(e){
        resultado.textContent = resultado.textContent + "0"
    }


}



