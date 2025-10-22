/*
Escribir una función llamada imprimirMatriz que reciba una matriz (un arreglo de arreglos) e imprima todos los 
elementos del arreglo.

* Codigo de prueba: 
console.log(imprimirMatriz([
[1, 2, 3],
[4, 5, 6],
[7, 8, 9]
]))
1
2
3
4
5
6
7
8
9
*/
const prompt = require('prompt-sync')()

function imprimirMatriz(list){
    let resultado = ""
    for(let i = 0; i<list.length; i++){
        for (let j = 0; j< list[i].length; j++){
            resultado += list[i][j] + "\n" // el "\n" es para que haga un salto de linea y no muestre todo de una
        }
    }
    return resultado
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


console.log(imprimirMatriz(list))


