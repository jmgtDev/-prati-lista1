const prompt = require("prompt-sync")();

const codigoOrigem = parseInt(prompt("Qual o código de origem do produto? "));

if (
  (codigoOrigem >= 25 && codigoOrigem <= 50) ||
  codigoOrigem === 5 ||
  codigoOrigem === 6
) {
  console.log(`O produto veio do Nordeste.`);
} else if (codigoOrigem >= 10 && codigoOrigem <= 20) {
  console.log(`O produto veio do Centro-Oeste.`);
} else if (codigoOrigem >= 7 && codigoOrigem <= 9) {
  console.log(`O produto veio do Sudeste.`);
} else if (codigoOrigem === 4) {
  console.log(`O produto veio do Oeste.`);
} else if (codigoOrigem === 3) {
  console.log(`O produto veio do Leste.`);
} else if (codigoOrigem === 2) {
  console.log(`O produto veio do Norte.`);
} else if (codigoOrigem === 1) {
  console.log(`O produto veio do Sul.`);
} else {
  console.log(`O produto é importado!`);
}
