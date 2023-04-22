// suma, resta, multiplicación, división

function suma(){
resultado = 5 + 8
console.log(resultado)
}

suma()

function resta (){
    resultado = 10-3
    console.log(resultado)
}

resta()

function multiplicación (){
    resultado = 25*7
    console.log(resultado)
}

multiplicación()

function división(){
    resultado = 240/32
    console.log(resultado)
}

división()

//Encontrar el número mayor dentro de un array

let array =
[8,16,25,32,48,53,230,78,90,102,134,168,400]
let maxima = 0;
for (let i = 0; i < array.length; i++){
    if (array[i] > maxima){
        maxima = array[i]
    }
}

console.log(maxima); 


//Encontrar el número mayor easier
let maximo = Math.max(8,16,25,32,48,53,230)

console.log (maximo)

//Ejercicio extracción sub string

cadena = "Las Flores son Azules"
cadena.substring(4,9)

console.log (cadena.substring(4,10))


function recomendacion(){
    let turismo = 
    [Bogota"frio"]
}