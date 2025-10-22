/*
Escribir una función llamada numAsteriscos que reciba una matriz (un arreglo de arreglos) y retorne el número de asteriscos:
console.log(numAsteriscos([
['*', '', '*'],
['', '*', ''],
['*', '', '*']
]))// 5
*/

const prompt = require('prompt-sync')()
function numAsteriscos(list){
    let contador = 0
    for(i = 0; i<list.length; i++){
        for(j = 0; j<list[i].length; j++){
            if(list[i][j] == "*"){
                contador +=1
            }
        }
    }
    return contador
}
let list = []
do{ 
    limite = Number(prompt("Ingrese cuantos listados de 3 desea ingresar en el listado "))
    if (limite>5){
        console.log("Digite otro valor mas pequeño")
    }
} while(limite>5)
    for (a = 0; a<limite;a++){
        let sublist = []
        console.log(`Listado #${a+1}: `)
        for(i = 0; i<3; i++){
            sublist[i] = prompt(`Ingrese el valor #${i+1}: `)
        }
        list.push(sublist)
    }

console.log(numAsteriscos(list))