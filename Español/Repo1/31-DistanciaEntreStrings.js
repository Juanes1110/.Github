/*
Escribir una función llamada distancia que reciba dos strings y retorne el número de caracteres diferentes (comparando posición por 
posición).

Nota: Puedes asumir que los strings siempre tienen la misma longitud. Sin embargo, si quieres agregarle más dificultad puedes pensar 
cómo solucionarlo si un string es más largo que el otro (la diferencia entre las longitudes agregaría al resultado).

* Codigo de prueba 
console.log(distancia("hola", "hola")) // 0
console.log(distancia("sol", "tol")) // 1
console.log(distancia("carro", "correr")) // 3
*/
const prompt = require('prompt-sync')()
function distancia(string1,string2){
    let array1 = string1.split("")
    let array2 = string2.split("")
    if(array1.length == array2.length){ // Nivel "facil" que los strings tengan la misma longitud
        let contador = 0
        for(i = 0; i<array1.length; i++){
            if(array1[i] != array2[i]){
                contador += 1
            }
        }
        return contador
    }else{  // Nivel mas "Dificil" que los strings tengan longitudes diferentes
        let contador = 0
        for( i = 0; i<array1.length; i++){
            if(array1[i] != array2[i]){
                contador += 1
            }
        }

        if(array1.length > array2.length){
            return contador +(array1.length - array2.length)
        }else if(array1.length < array2.length){
            return contador +(array2.length - array1.length)
        }
    }
}

let string1 = prompt("Ingrese el primer string: ")
let string2 = prompt("Ingrese el segundo string: ")

console.log(distancia(string1,string2))