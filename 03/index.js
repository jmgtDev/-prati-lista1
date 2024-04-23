const prompt = require("prompt-sync")();

const n1 = parseInt(prompt("Qual é o primeiro número? "));
const n2 = parseInt(prompt("Qual é o segundo número? "));
const n3 = parseInt(prompt("Qual é o terceiro número? "));

const n1somado = n1 + 25;
const n2triplicado = n2 * 3;
const n3modificado = n3 * 0.12;
const n4 = n1 + n2 + n3;

console.log(`Resultado das operações:
Primeiro número acrescido de 25: ${n1somado}
Segundo número triplicado: ${n2triplicado}
12% do valor do terceiro número: ${n3modificado}
Valor do quarto número (soma dos três primeiros): ${n4}`);
