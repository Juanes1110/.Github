/*
Escribe una función llamada likes que reciba un número y retorne un string 
utilizando el formato de K para miles y M para millones.


*Codigo de prueba
console.log(likes(983)) // "983"
console.log(likes(1900)) // "1K"
console.log(likes(54000)) // "54K"
console.log(likes(120800)) // "120K"
console.log(likes(25222444)) // "25M"
*/

const prompt = require('prompt-sync')()
function likes(like){
    if(like<1000){
        return like
    }else if(like <1000000){
        return parseInt(like/1000) +"K"
    }else{
        return parseInt(like/1000000) + "M"
    }
}
let like = Number(prompt("Ingrese la cantidad de likes para hacer su conversion: "))
console.log(likes(like))