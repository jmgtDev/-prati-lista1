const prompt = require("prompt-sync")();

//coloquei o nome das variáveis em português devido ao fato do professor ter trabalhado desse jeito durante as aulas até esse momento.
const numMaças = parseInt(prompt("Qual a quantidade de maçãs? "));
let valorTotal;

if (numMaças < 12) {
  valorTotal = numMaças * 0.3;
  console.log(
    `O valor total da compra de ${numMaças} maçãs foi de ${valorTotal} reais.`
  );
} else {
  valorTotal = numMaças * 0.25;
  console.log(
    `O valor total da compra de ${numMaças} maçãs foi de ${valorTotal} reais.`
  );
}
