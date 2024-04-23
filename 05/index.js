const prompt = require("prompt-sync")();

const nota1 = parseFloat(prompt("Qual foi a nota da primeira prova? "));
const nota2 = parseFloat(prompt("Qual foi a nota da segunda prova? "));

const media = (nota1 + nota2) / 2;

if (media >= 6) {
  console.log(`PARABÉNS! Você foi aprovado. Sua média final foi ${media}.`);
} else {
  console.log(`Você foi REPROVADO! Estude mais. Sua média final foi ${media}.`);
}
