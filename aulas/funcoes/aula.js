
function classificarImc(imc) {
    if (imc < 18.5) {
        return 'Magreza'
    } else if (imc >= 18.5 && imc < 25) {
        return 'Normal'
    } else if (imc >= 25 && imc < 30) {
        return 'Sobrepeso'
    } else if (imc >= 30 && imc < 35) {
        return 'Obesidade grau I'
    } else if (imc >= 35 && imc < 40) {
        return 'Obesidade grau II'
    } else if (imc >= 40) {
        return 'Obesidade grau III'
    }
}

function calcularImc(peso, altura) {
    return peso / Math.pow(altura, 2)
}

//Main
(function () {
    const peso = 48
    const altura = 1.54
    const imc = calcularImc(peso, altura)
    console.log(`De acordo com a Organização Mundial da Saúde, seu IMC é considerado ${classificarImc(imc)}`)
})()
