/*
Escribir una función llamada removerCeros que reciba un arreglo de números y retorne un nuevo arreglo excluyendo los ceros (0).

*Codigo de prueba 
console.log(removerCeros([0, 1, 0, 2, 0, 3])) // [1, 2, 3]
console.log(removerCeros([9, 3, 6, 4])) // [9, 3, 6, 4]
console.log(removerCeros([0, 0, 0])) // []
*/
const prompt = require('prompt-sync')()
function removerCeros(list){
    newList = []
    for(i = 0; i<list.length; i++){
        if(list[i] !== 0){
            newList.push(list[i])
        }
}
return `[${newList}]`
}

list = []
do{ 
    limite = Number(prompt("Ingrese cuantos numeros desea ingresar "))
    if (limite>15){
        console.log("Digite otro valor mas pequeño")
    }
} while(limite>15)
for(i = 0; i<limite;i++){
    list[i] = Number(prompt(`Digite el #${i+1} valor: `))
}
console.log(removerCeros(list))