// Objetos - Manipulacion
const producto = {
    nombre: "Tablet",
    precio: 300,
    disponible: true
}
const cliente = {
    nombre: 'Juan',
    premium: true
}

//Podemos hacer, pero esta forma modifica el objeto principal, resultando otro objeto
//producto.cliente=cliente
//  console.log(producto)

// const nuevoObjeto = Object.assign(producto, cliente)
// No funciona como existen dos atributos con el mismo nombre coge el del último

//spread operator
const nuevoObjeto2 = {
    producto: {...producto},
    cliente: {...cliente}
}

console.log(nuevoObjeto2)
console.log(cliente)
console.log(producto)