var dado = () => {
    return parseInt(Math.random()* 6) +1;
}
var resultado = 0;

for(var i = 0; i < 36000; i++){
    resultado = resultado + dado();
}

console.log("numero total " +resultado);