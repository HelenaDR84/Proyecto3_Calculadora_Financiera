// Declaramos las variables, con el queryselector "invocamos" a ''display'' y "calculator button" que ya existen en html, luego creo otras tres con los operandos y el operador para almacenar la operación que se haga.
const pantalla = document.querySelector('.Display');
const botones = document.querySelectorAll('#Calculator button');
let operando1 = 0;
let operando2 = null;
let operador = null;

//Agrego un controlador de eventos a cada botónde la página, para que al hacer click en el botón, obtengamos el texto del mismo y lo almacenamos en una variable.   `target.addEventListener(tipo, listener [, useCapture]);`:
botones.forEach(function(boton) {
  boton.addEventListener('click', function() {
    let valor = boton.textContent.trim();

    if (!isNaN(valor)) {
      pantalla.textContent += valor;
    }

    else if (valor === '+' || valor === '-' || valor === '*' || valor === '/') {
      if (operador !== null) {
        operando2 = parseFloat(pantalla.textContent);
        let resultado = eval(operando1 + operador + operando2);
        pantalla.textContent = resultado;
      }
      operando1 = parseFloat(pantalla.textContent);
      operador = valor;
      pantalla.textContent = '';
    }
    else if (valor === '=') {
      operando2 = parseFloat(pantalla.textContent);
      let resultado = eval(operando1 + operador + operando2);
      pantalla.textContent = resultado;
      operador = null;
    }

    else if (valor === 'C') {
      pantalla.textContent = '';
    }

    else if (valor === '←') {
      pantalla.textContent = pantalla.textContent.slice(0, -1);
    }
      
    else if (valor === '.') {
      if (!pantalla.textContent.includes('.')) {
        pantalla.textContent += '.';
      }
    }
  });
});
