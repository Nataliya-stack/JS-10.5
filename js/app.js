const INPUT = document.getElementById("num");
const RESULTADO = document.getElementById("resultado");

function calcularFibonacci() {
  const valor = parseInt(INPUT.value);  
 
  let fib = [0, 1];
  for (let i = 2; i < valor; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }

  RESULTADO.textContent = `La secuencia de Fibonacci hasta el número ${valor} es: ${fib.slice(0, valor).join(', ')}`;

  INPUT.value = '';
  INPUT.focus();
}

