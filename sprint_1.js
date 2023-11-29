const readline = require('readline');

function verificarNumero() {
    const numeroEsperado = Math.floor(Math.random() * 9000) + 1000; // Gera um número aleatório de quatro dígitos

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question("Digite um número de no mínimo quatro dígitos: ", (numeroDigitado) => {
        numeroDigitado = parseInt(numeroDigitado.trim());

        if (isNaN(numeroDigitado) || numeroDigitado.toString().length < 4) {
            console.log("Por favor, insira um número de no mínimo quatro dígitos.");
            rl.close();
            verificarNumero();
            return;
        }

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
        rl.close();
    });
}

verificarNumero();
