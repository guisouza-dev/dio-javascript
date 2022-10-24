// 1) crie um programa que dado um número imprima sua tabuada

function calcularTabuada(number) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${number} x ${i} = ${number * i}`)
    }
}
calcularTabuada(12)