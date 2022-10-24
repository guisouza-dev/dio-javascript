
const { gets, print } = require('./funcoes-auxiliares.js')

const quantidaDeAlunos = gets()
let maiorValor = 0

for (let i = 0; i < quantidaDeAlunos; i++) {
    const numeroSorteado = gets()
    if (numeroSorteado > maiorValor) {
        maiorValor = numeroSorteado
    }
}

print(maiorValor)
