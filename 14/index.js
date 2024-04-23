const prompt = require("prompt-sync")();

let valor = parseFloat(prompt("Digite um número: "));
let valoresSomados = 0;
let contador = 0;

while (valor !== 0) {
  valoresSomados += valor;
  contador++;
  valor = parseFloat(prompt("Digite um número: "));
}

const media = valoresSomados / contador;

console.log(`A média aritmética dos números é ${media}`);
