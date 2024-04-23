const prompt = require("prompt-sync")();

let valor1 = parseInt(prompt("Qual o primeiro valor da variável? "));
let valor2 = parseInt(prompt("Qual o segundo valor da variável? "));
let valor3 = parseInt(prompt("Qual o terceiro valor da variável? "));
let valor4 = parseInt(prompt("Qual o quarto valor da variável? "));
let valor5 = parseInt(prompt("Qual o quinto valor da variável? "));

let n = valor1;

for (let i = 1; i <= n; i++) {
  let v = n * i;
  console.log(`${i} X ${n} = ${v}`);
}
console.log("====================");

n = valor2;
for (let i = 1; i <= n; i++) {
  let v = n * i;
  console.log(`${i} X ${n} = ${v}`);
}
console.log("====================");

n = valor3;
for (let i = 1; i <= n; i++) {
  let v = n * i;
  console.log(`${i} X ${n} = ${v}`);
}
console.log("====================");

n = valor4;
for (let i = 1; i <= n; i++) {
  let v = n * i;
  console.log(`${i} X ${n} = ${v}`);
}
console.log("====================");

n = valor5;
for (let i = 1; i <= n; i++) {
  let v = n * i;
  console.log(`${i} X ${n} = ${v}`);
}
