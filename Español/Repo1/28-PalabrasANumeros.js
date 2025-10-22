/*
Escribir una función llamada palabrasANumeros que reciba un arreglo de strings y retorne un nuevo arreglo traduciendo
cada palabra a su versión numérica (del 0 al 9). Si la palabra no es un número traducir a -1.

* Codigo de prueba
console.log(["cero", "uno", "dos", "tres", "what?", "cuatro"]) // [0, 1, 2, 3, -1, 4]
console.log(["cinco", "seis", "siete", "ocho", "nueve"]) // [5, 6, 7, 8, 9]
*/
const prompt = require('prompt-sync')()

function palabrasANumeros(list){
    const numeros = {"uno": 1, "dos": 2, "tres": 3, "cuatro": 4, "cinco": 5, "seis": 6, "siete": 7, "ocho": 8, 
        "nueve": 9, "cero": 0}
    
    for( i = 0; i<list.length ; i++){
        list[i] = numeros[list[i]]
        if (list[i] == undefined){
            list[i] = -1
        }
    }
    return list
}

list = []
let limite = 0
do{ 
    limite = Number(prompt("Ingrese cuantos numeros (en palabras) desea ingresar en el listado "))
    if (limite>10){
        console.log("Digite otro valor mas pequeño")
    }
} while(limite>10)

for(i = 0; i<limite;i++){
    list[i] = String(prompt(`Digite el #${i+1} valor: `).toLowerCase())
}
console.log(palabrasANumeros(list))
