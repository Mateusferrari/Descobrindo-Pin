let numeroEsperado = Math.floor(Math.random() * 9000) + 1000; 
let numeroDigitado = parseInt(prompt("Digite um número de no mínimo quatro dígitos: "));

if (numeroDigitado === numeroEsperado) {
    console.log("Parabéns! Você acertou o número.");
} else if (numeroDigitado > numeroEsperado) {
    if (numeroDigitado - numeroEsperado > 1000) {
        console.log("Muito maior. Tente um número bem menor.");
    } else {
        console.log("Maior. Tente um número menor.");
    }
} else {
    if (numeroEsperado - numeroDigitado > 1000) {
        console.log("Muito menor. Tente um número bem maior.");
    } else {
        console.log("Menor. Tente um número maior.");
    }
}
