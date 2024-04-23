const prompt = require("prompt-sync")();

let valor = parseInt(prompt("Qual o valor? "));

while (valor !== null && valor >= 0) {
  if (valor % 2 === 0) {
    console.log(`O número ${valor} é par.`);
  } else {
    console.log(`O valor ${valor} é ímpar.`);
  }
  valor = parseInt(prompt("Qual o valor? "));
}
