// Operadores en los arreglos
const tecnologias = ['HTML', 'CSS', 'Javascript', 'React', 'Node.js']

// Añadir elementos al array
tecnologias.push('GraphQL') // Añade al final del array
console.log(tecnologias);
tecnologias.unshift('GraphQL') // Añade por delante del array
// Si estamos programando con react no es aconsejable utilizar push y unshift

const nuevoArreglo = [...tecnologias, 'GraphQL']
const nuevoArreglo1 = ['GraphQL', ...tecnologias]

// Eliminar elementos del array
tecnologias.pop() // Elimina del final
tecnologias.shift() // Elimina del inicio
//tecnologias.splice(2,3) // Elimina de una posición en especifica

// Ejecuta la funcion tantas veces como elementos tenga el array

/*const nuevoArray = tecnologias.filter( function(tech) {
    console.log(tech)
    return tech === 'React'
})*/

// Reemplazar del array
// tecnologias[0] = 'GraphQL'

const nuevoArray2 = tecnologias.map( function(tech) {
    if(tech === 'HTML') {
        return 'GraphQL'
    } else {
        return tech
    }
})

console.table(tecnologias)
console.table(nuevoArray2)