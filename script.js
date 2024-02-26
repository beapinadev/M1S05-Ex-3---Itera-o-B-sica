const prompt = require("prompt-sync") ({sigint: true})
const numeros = []

for(let i=0; i<5;i++){
    numeros.push(prompt(`Digite o ${i + 1} numero: `))
}

for(let i=0; i<5;i++){
    console.log(`O numero é: ${numeros[i]} `)
}