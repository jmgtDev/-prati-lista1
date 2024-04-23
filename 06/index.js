const prompt = require("prompt-sync")();

const lado1 = parseInt(
  prompt("Qual o tamanho do primeiro lado do triângulo? ")
);
const lado2 = parseInt(prompt("Qual o tamanho do segundo lado do triângulo? "));
const lado3 = parseInt(
  prompt("Qual o tamanho do terceiro lado do triângulo? ")
);
if (lado1 < lado2 + lado3 && lado2 < lado1 + lado3 && lado3 < lado1 + lado2) {
  if (lado1 === lado2 && lado2 === lado3) {
    console.log(`Esses lado formam um triângulo equilátero!`);
  } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
    console.log(`Esses lados formam um triângulo isósceles!`);
  } else {
    console.log(`Esses lados formam um triângulo escaleno!`);
  }
} else {
  console.log(`Esses lados não podem formar um triângulo!`);
}
