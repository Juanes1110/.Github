/*
Escribir una función llamada numAsteriscos que reciba un arreglo y retorne el número de asteriscos:
* Codigo de prueba

console.log(numAsteriscos(['', '*', '', '*'])) // 2
console.log(numAsteriscos(['*', '*', '*'])) // 3
console.log(numAsteriscos([])) // 0
*/
const prompt = require('prompt-sync')()
let list = []
function numAsteriscos(list){
    let contador = 0
    for(i = 0; i<list.length; i++){
        if(list[i] == "*"){
            contador += 1
        }
    }
    return contador
}
do{ 
    limite = Number(prompt("Ingrese cuantas palabras desea ingresar en el listado "))
    if (limite>10){
        console.log("Digite otro valor mas pequeño")
    }
} while(limite>10)
for(i = 0; i<limite;i++){
    list[i] = String(prompt(`Digite el #${i+1} valor: `))
}
console.log(numAsteriscos(list))