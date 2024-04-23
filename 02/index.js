const prompt = require("prompt-sync")();

const eleitores = parseInt(prompt("Qual o número total de eleitores? "));
const brancos = parseInt(prompt("Qual o número de votos brancos? "));
const nulos = parseInt(prompt("Qual o número de votos nulos? "));
const validos = parseInt(prompt("Qual o número de votos válidos? "));

const percentualBrancos = (brancos * 100) / eleitores;
const percentualNulos = (nulos * 100) / eleitores;
const percentualValidos = (validos * 100) / eleitores;

console.log(`Com o número total de ${eleitores} votos, temos os seguintes resultados percentuais:
Votos bracos: ${brancos}, representando ${percentualBrancos}% do total.
Votos nulos: ${nulos}, representando ${percentualNulos}% do total.
Votos válidos: ${validos}, representando ${percentualValidos}% do total.`);
