const prompt = require("prompt-sync")();

const valor1 = parseFloat(prompt("Qual o primeiro valor? "));
const valor2 = parseFloat(
  prompt("Qual o segundo valor (deve ser diferente do primeiro)? ")
);

if (valor1 > valor2) {
  console.log(`O menor valor é ${valor2} e o maior é ${valor1}.`);
} else {
  console.log(`O menor valor é ${valor1} e o maior é ${valor2}.`);
}
