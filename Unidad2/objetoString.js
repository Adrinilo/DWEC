const cadena='Esto es una cadena'
const objetocadena= new String('Esto es una cadena');

console.log(typeof cadena);
console.log(typeof objetocadena);

console.log(cadena===objetocadena); //falso
console.log(cadena==objetocadena); //verdadero

console.log(cadena.toUpperCase());
console.log(objetocadena.toUpperCase());