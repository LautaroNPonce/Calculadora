function agregar(valor) {
  document.getElementById("pantalla").value += valor;
}

function limpiarTodo() {
  document.getElementById("pantalla").value = "";
}

function borrarUltimo() {
  let valor = document.getElementById("pantalla").value;
  document.getElementById("pantalla").value = valor.slice(0, -1);
}

function calcular() {
  let resultado;
  try {
    let expresion = document.getElementById("pantalla").value;
    resultado = eval(expresion);
    if (resultado === Infinity || resultado === -Infinity) {
      resultado = "Error: División por cero";
    }
  } catch {
    resultado = "Error";
  }
  document.getElementById("pantalla").value = resultado;
}

