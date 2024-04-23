const prompt = require("prompt-sync")();

const valor = parseInt(prompt("Escreve um valor inteiro: "));

for (let i = 1; i <= 10; i++) {
  console.log(`Valor ${valor}. Print número: ${i}`);
}
