/*
Escribir una función llamada imprimirArreglo que reciba un arreglo e imprima cada elemento en una línea a parte:

* codigo de prueba
console.log(imprimirArreglo(1, "Hola", 2, "Mundo"))
1
Hola
2
Mundo
!Se regresa el arreglo completo para evitar el Undefined
*/

function imprimirArreglo(a,b,c,d){
    arreglo = [a,b,c,d]
    
    for(i=0; i<arreglo.length;i++){
        console.log(arreglo[i])
    }
    return arreglo
}
console.log(imprimirArreglo(1,"Hola",2,"Mundo"))