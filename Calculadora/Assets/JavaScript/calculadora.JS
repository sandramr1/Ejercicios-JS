//Declaramos variables
var operandoa;
var operandob;
var operacion
var res;

function init(){
    //variables
    var resultado = document.getElementById('resultado');
    var reset = document.getElementById('reset');
    var suma = document.getElementById('suma');
    var resta = document.getElementById('resta');
    var multiplicacion = document.getElementById('multiplicador');
    var division = document.getElementById('division');
    var igual = document.getElementById('igual');
    var uno = document.getElementById('uno');
    var dos = document.getElementById('dos');
    var tres = document.getElementById('tres');
    var cuatro = document.getElementById('cuatro');
    var cinco = document.getElementById('cinco');
    var seis = document.getElementById('seis');
    var siete = document.getElementById('siete');
    var ocho = document.getElementById('ocho');
    var nueve = document.getElementById('nueve');
    var cero = document.getElementById('cero');

    //Eventos de click
    uno.onclick = function(e){
        resultado.textContent = resultado.textContent  + "1";
    }
    dos.onclick = function(e){
        resultado.textContent = resultado.textContent  + "2";
    }
    tres.onclick = function(e){
        resultado.textContent = resultado.textContent  + "3";
    }
    cuatro.onclick = function(e){
        resultado.textContent = resultado.textContent  + "4";
    }
    cinco.onclick = function(e){
        resultado.textContent = resultado.textContent  + "5";
    }
    seis.onclick = function(e){
        resultado.textContent = resultado.textContent  + "6";
    }
    siete.onclick = function(e){
        resultado.textContent = resultado.textContent  + "7";
    }
    ocho.onclick = function(e){
        resultado.textContent = resultado.textContent  + "8";
    }
    nueve.onclick = function(e){
        resultado.textContent = resultado.textContent  + "9";
    }
    cero.onclick = function(e){
        resultado.textContent = resultado.textContent  + "0";
    }
    reset.onclick = function(e){
        resetear();
    }
    suma.onclick = function(e){
        operandoa = resultado.textContent;
        limpiar();
      return  operacion = "1";
        
    }
    resta.onclick = function(e){
        operandoa = resultado.textContent;
        limpiar()
      return operacion = "2";
       
    }
    multiplicacion.onclick = function(e){
        operandoa = resultado.textContent;
        limpiar();
      return  operacion = "3";
       
    }
    division.onclick = function(e){
        operandoa = resultado.textContent;
        limpiar();
        return operacion = "4";
        
    }
    igual.onclick = function(e){
        operandob = resultado.textContent;
        switch(operacion){
            case "1":
              res = parseFloat(operandoa) + parseFloat(operandob);
              console.log(res)
              break;
            case "2":
                res = parseFloat(operandoa) - parseFloat(operandob);
                console.log(res)
                break;
            case "3":
              res = parseFloat(operandoa) * parseFloat(operandob);
              console.log(res)
              break;
            case "4":
              res = parseFloat(operandoa) / parseFloat(operandob);
              console.log(res)
              break;
          }
        //resolver();
    }
};

function limpiar(){
    resultado.textContent = "";
}
function resetear(){
    resultado.textContent = "";
    operandoa = 0;
    operandob = 0;
    operacion = "";
};


/*function resolver(){
    var res = 0;
    switch(operacion){
      case "1":
        res = parseFloat(operandoa) + parseFloat(operandob);
        break;
      case "2":
          res = parseFloat(operandoa) - parseFloat(operandob);
          break;
      case "3":
        res = parseFloat(operandoa) * parseFloat(operandob);
        break;
      case "4":
        res = parseFloat(operandoa) / parseFloat(operandob);
        break;
    }
}
*/