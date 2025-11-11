let a = 11, b = 13, c = 15;
let valido = false

while(valido){
     if(a < b + c && b < a + c && c < a + b){
        valido = true; 
        console.log('É possível formar um triângulo.');
        if(a === b && b === c) {
            console.log('Triângulo equilátero');
        }else if(a === b || a === c || b === c){
            console.log('Triângulo isósceles');
        }else{
            console.log('Triângulo escaleno');
        }
      }else{
        console.log('Medidas inválidas. Temte novamente.')
      }
}