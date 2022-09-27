//Crear una función con tres parámetros que sean números que se suman entre sí.
//Llamar a la función en el main y darle valores.

function sumen(a,b,c){
    return a+b+c
}
console.log(sumen(1,2,3))

//Crear una clase coche.
//Dentro de la clase coche, una variable numérica que almacene el número de puertas que tiene.
//Una función que incremente el número de puertas que tiene el coche.
//Crear un objeto miCoche en el main y añadirle una puerta.
//Mostrar el número de puertas que tiene el objeto.

let miCoche = {
    puertas: 0
}

function addPuertas (puertas){
    miCoche.puertas += puertas
    return miCoche.puertas
}

console.log(addPuertas(4))