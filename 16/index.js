let numero = 101;
let contador = 1;

while (contador <= 50) {
  let primo = true;
  let i = 2;
  while (i < numero) {
    if (numero % i === 0) {
      primo = false;
    }
    i++;
  }
  if (primo && numero > 1) {
    console.log(numero);
    contador++;
  }
  numero++;
}
