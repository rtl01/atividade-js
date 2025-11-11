let numero = [30, 45, 22, 78, 54, 89, 12];
let menor = numero[0];

for(let i = 1; i < numero.length; i++){
    if(numero[i] <menor){
        menor = numero[i];
    }
}
console.log("O maior numero é: " + menor)