function dizerNome(name) {
    return "My name is " + name
}
// dizerNome("Guilherme")


function checarIdade(number, name) {
    const agora = new Date()
    const anoAtual = agora.getFullYear()
    const idade = anoAtual - number
    console.log(`Sua idade é ${idade}`)
    return idade >= 18 ? console.log(`${dizerNome(name)} and I am of age`) : console.log(`${dizerNome(name)} and I am minor of age`)
}
checarIdade(2004, "Vinícius")

function aplicarDesconto(valor, desconto) {
    return valor - (valor * (desconto / 100))
}

function aplicarJuros(valor, juros) {
    return valor + (valor * (juros / 100))
}

function calcularValor(num1, num2 = 3) {
    console.log(`O preço de etiqueta é R$${num1}`)
    if (num2 === 1){
        return console.log(`Vc optou por pagar à vista no débito, portanto o valor recebe 10% de desconto ficando R$${aplicarDesconto(num1, 10)}`)
    } else if (num2 === 2){
        return console.log(`Vc optou por pagar à vista no Dinheiro ou PIX, portanto o valor recebe 15% de desconto ficando R$${aplicarDesconto(num1, 15)}`)
    } else if (num2 === 3){
        return console.log("Vc optou por pagar em duas vezes, o valor à ser pago é o de etiqueta.")
    } else if (num2 === 4){
        return console.log(`Vc optou por parcelar o valor acima de duas vezes, o valor à ser pago recebe um juros de 10%, ficando R$${aplicarJuros(num1, 10)}`)
    }
}
calcularValor(100, 1)