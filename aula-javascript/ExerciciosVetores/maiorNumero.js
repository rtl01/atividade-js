let numeros = [7, 8, 9, 23]

let maior = numeros[0]

for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > maior) {
      maior = numeros[i];
    } else {
      
    }
  }

console.log('O número maior é ',maior)