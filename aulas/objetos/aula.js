
class Person {
    name
    age
    yearOfBirth

    constructor(name, age) {
        this.name = name
        this.age = age
        this.yearOfBirth = 2022 - age
    }

    describeYourself() {
        console.log(`My name is ${this.name}, and I'm ${this.age} years old.`)
    }
}


function comparePeople(person1, person2) {
    if (person1.age > person2.age){
        console.log(`${person1.name} is older than ${person2.name}.`)
    } else if (person2.age > person1.age){
        console.log(`${person2.name} is older than ${person1.name}.`)
    } else {
        console.log(`${person1.name} and ${person2.name} are the same age.`)
    }
}

const guilherme = new Person('Guilherme', 14)
const vinicius = new Person('Vinícius', 18)

comparePeople(guilherme, vinicius)