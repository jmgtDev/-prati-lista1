const prompt = require("prompt-sync")();
// optei por arredondar a temperatura dada pelo usuário. Mas poderia ter passado o método parseFloat que funcionaria sem arredondar.
const tempCelcius = parseInt(
  prompt("Qual a temperatura em Celsius que você deseja converter? ")
);

const tempFahrenheit = tempCelcius * (9 / 5) + 32;

console.log(tempFahrenheit);
