
const entradas = [10, 5, 50, 10, 98, 23, 44, 33, 100, 1, 7 ]
let i = 0

function gets() {
    const value = entradas[i]
    i++
    return value
}

function print(text) {
    console.log(text)
}


module.exports = { gets, print }