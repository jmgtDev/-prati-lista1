const prompt = require("prompt-sync")();

let valor = 1000;

while (valor <= 1999) {
  if (valor % 11 === 5) {
    console.log(valor);
  }
  valor++;
}
