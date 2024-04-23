const prompt = require("prompt-sync")();

let valor = parseFloat(prompt("Digite um número: "));
let peso = parseFloat(prompt("Digite o peso desse número: "));
let somaValoresPesados = 0;
let pesosSomados = 0;

while (valor !== 0) {
  valorComPeso = valor * peso;
  somaValoresPesados += valorComPeso;
  pesosSomados += peso;
  valor = parseFloat(prompt("Digite um número: "));
  peso = parseFloat(prompt("Digite o peso desse número: "));
}

const mediaPonderada = somaValoresPesados / pesosSomados;

console.log(`A média ponderada dos números é ${mediaPonderada}`);
