const num1 = 1;
const num2 =2;
const operacao = ('+')
var resultado


if (operador === "+") {
    resultado = num1 + num2;
}else if(operador === "-") {
    resultado = num1 - num2;
}else if(operador === "*") {
    resultado = num1 * num2;
}else if(operador === "/") {
if (num2 === 0) {
console.log("Erro: Divisão por zero!");
}else{
    resultado = num1 / num2;
}
}else{
    console.log("Erro: Operador inválido!");
}

if(resultado !== undefined) {
    console.log("Resultado: " + resultado);
}