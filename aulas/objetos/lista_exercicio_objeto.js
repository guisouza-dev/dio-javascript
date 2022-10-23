/*
    1 - Crie uma classe para representar carros. Os carros possuem uma marca, uma cor e um gasto médio de combustível por Quilômetro rodado. Crie um método que dado a quantidade de quilômetro e o preço do combustível nos dê o valor gasto em reais para realizar este percurso.
*/

class Cars {
    brand
    color
    averageFuelConsumption

    constructor(brand, color, averageFuelConsumption) {
        this.brand = brand
        this.color = color
        this.averageFuelConsumption = averageFuelConsumption
    }
    
    calculateTravelExpenses(kilometer, fuelPrice) {
        return (this.averageFuelConsumption * kilometer * fuelPrice).toFixed(2)
    }
}

const fusca = new Cars('Volkswagen', 'blue', 1/12)
console.log(fusca.calculateTravelExpenses(70, 5))

const palio = new Cars('Fiat', 'Gray', 1/9)
console.log(palio.calculateTravelExpenses(70, 5))
