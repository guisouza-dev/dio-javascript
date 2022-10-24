// 2) Crie um programa que seja capaz de percorrer uma lista e imprima cada número Par encontrado

const array = [45, 76, 93, 57, 18, 28, 73, 48]
for (let i = 0; i < array.length; i++) {
    if(!(array[i] % 2)) {
        console.log(array[i])
    }
}