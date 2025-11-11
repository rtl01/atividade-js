const compras = 70
var cupom

if(compras >= 100){
    cupom = compras / 10
    console.log(`Sua compra de R$${compras},00 foi aplicado um deconto de 10%, e agora você recebeu um desconto de R$${cupom},00!`);
}else{
    console.log(`Suas compras deram R$${compras},00!`);
}