const ladoA = 3;
const ladoB = 1;
const ladoC = 2;

if(ladoA == ladoB && ladoB == ladoC){
    console.log('Seu triângulo é Equilátero, ou seja, ele é igual em todos os lados.');
}else if(ladoA == ladoB || ladoB == ladoC || ladoA == ladoC){
    console.log('Seu triângulo é Isósceles, ou seja, apenas dois lados são iguais.');
}else{
    console.log('Seu triângulo é Escaleno, ou seja, ele é diferente em todos os lados.');
}