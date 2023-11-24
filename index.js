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

    // Si el botón es un número, lo añade a la pantalla
    if (!isNaN(valor)) {
      pantalla.textContent += valor;
    }
    // Si el botón es un operador, guardamos el operando y el operador
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
    // Si el botón es '=', realiza la operación
    else if (valor === '=') {
      operando2 = parseFloat(pantalla.textContent);
      let resultado = eval(operando1 + operador + operando2);
      pantalla.textContent = resultado;
      operador = null;
    }
    // Si el botón es 'C', limpia la pantalla
    else if (valor === 'C') {
      pantalla.textContent = '';
    }
    // Si el botón es '←', borra el último número
    else if (valor === '←') {
      pantalla.textContent = pantalla.textContent.slice(0, -1);
    }
    // Si el botón es '.', añade un punto decimal
    else if (valor === '.') {
      if (!pantalla.textContent.includes('.')) {
        pantalla.textContent += '.';
      }
    }
  });
});
