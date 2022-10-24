
const jotting = []

jotting.push(10)
jotting.push(10)
jotting.push(10)

let sum = 0

for (let i = 0; i < jotting.length; i++) {
    sum += jotting[i];
}

const media = (sum / jotting.length).toFixed(1)
console.log(media)
