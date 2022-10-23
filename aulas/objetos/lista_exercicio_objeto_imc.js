/*
    2)Crie uma classe para representar pessoas.
    Para cada pessoa teremos os atributos nome, peso e altura.
    As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura))
    Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor de seu IMC 
*/

class Person {
    name
    weight
    height
    constructor (name, weight, height){
        this.name = name
        this.weight = weight
        this.height = height
    }

    calculateBMI() {
        return (this.weight / (this.height * this.height)).toFixed(1)
    }

    classifyBMI() {
        const bmi = this.calculateBMI()
        if (bmi < 18.5) {
            return 'Magreza'
        } else if (bmi >= 18.5 && bmi < 25) {
            return 'Normal'
        } else if (bmi >= 25 && bmi < 30) {
            return 'Sobrepeso'
        } else if (bmi >= 30 && bmi < 35) {
            return 'Obesidade grau I'
        } else if (bmi >= 35 && bmi < 40) {
            return 'Obesidade grau II'
        } else if (bmi >= 40) {
            return 'Obesidade grau III'
        }
    }
}

const jose = new Person('José', 70, 1.75)
console.log(jose.calculateBMI())
console.log(jose.classifyBMI())

const guilherme = new Person('Guilherme', 48, 1.54)
console.log(guilherme.calculateBMI())
console.log(guilherme.classifyBMI())