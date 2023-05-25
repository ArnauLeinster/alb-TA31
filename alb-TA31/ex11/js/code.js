let resultTiradas = [];
let dado1;
let dado2;
let numTiradas = 0;
let sumTirada;

let rndom = function(){
    return Math.floor(Math.random() * 6+1);
};

function lanzarDados(){
    dado1 = rndom();
    dado2 = rndom();
    return sumTirada = dado1+dado2;
}

while(numTiradas<36000){
    let num = lanzarDados();    
    resultTiradas.push(num);
    numTiradas++;
}

console.log(resultTiradas); 

function contarTiradaRepet(){     
    var repetidos = {};
    //Aqui contamos cada repeticion de numero
    resultTiradas.forEach(function(numero){
    repetidos[numero] = (repetidos[numero] || 0) + 1;
    });
    console.log(repetidos);
}

contarTiradaRepet();
