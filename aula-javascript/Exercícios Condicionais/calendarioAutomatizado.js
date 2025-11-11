const dias = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado"
];
  
let numero = 2;
  
if (numero >= 1 && numero <= 7) {
    console.log(dias[numero -1]);
} else {
    console.log("Número inválido! Digite um valor entre 1 e 7.");
}