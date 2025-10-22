/*
Escribir una función llamada sumarArreglo que reciba tres argumentos: un arreglo de números, la posición inicial y la posición final.
La función debe retornar la suma de todos los números dentro del rango (la posición inicial y la posición final, incluyéndolas).

Nota: puedes asumir que la posición inicial va a ser menor o igual a la posición final, y que están dentro de los límites del arreglo.

* Codigo de Prueba
console.log(sumarArreglo([1, 2, 3], 1, 2)) // 5
console.log(sumarArreglo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3, 6)) // 22
console.log(sumarArreglo([7, 8, 9], 0, 0)) // 0
*/
const prompt = require('prompt-sync')()

function sumarArreglo(list, inicio,fin){
    sumatoria = 0
    if(inicio == fin){
        return 0
    }
    for(i = inicio; i<= fin; i++){
        sumatoria += list[i]
    }
    return sumatoria
}


list = []
do{ 
    limite = Number(prompt("Ingrese cuantos numeros desea ingresar en el listado "))
    if (limite>10){
        console.log("Digite otro valor mas pequeño")
    }
} while(limite>10)
for(i = 0; i<limite;i++){
    list[i] = Number(prompt(`Digite el valor en la posición ${i}: `))
}
console.log()
do{
    inicio = parseInt(prompt("Ingrese la posicion inicial "))
    if(inicio<0){
        console.log("La posicion inicial no puede ser menor que 0")
    } else if(inicio>=list.length){
        console.log(`El numero es mayor al tamaño del arreglo, ingrese un dato menor que ${list.length}`)
    }
}while(inicio<0 || inicio>=list.length)

    do{
    fin = parseInt(prompt("Ingrese la posicion final "))
    if(fin>=list.length){
        console.log(`El numero es mayor al tamaño del arreglo, ingrese un dato menor que ${list.length}`)
    } else if(fin<inicio){
        console.log(`El numero es menor al numero de inicio, ingrese un dato mayor que ${inicio}`)
    }
}while(fin>=list.length || fin<inicio)

console.log(sumarArreglo(list,inicio,fin))