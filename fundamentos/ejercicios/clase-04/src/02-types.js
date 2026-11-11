// Tipos de datos Primitivos

const nombre = 'Jamezac'; // String
const edad = 30;
const esDesarrollador = true; // Boolean
const fechaNacimiento = new Date('1993-10-10'); // Date
const nulo = null; // Null
const indefinido = undefined; // Undefined
const simbolo = Symbol('id'); // Symbol
const grande = 9007199254740991n; // BigInt

console.log (typeof nombre, typeof edad, typeof esDesarrollador, typeof fechaNacimiento, typeof nulo, typeof indefinido, typeof simbolo, typeof grande);


// Tipos de datos Complejos

const objeto = { nombre: 'Andres', edad: 30 }; // Object
const arreglo = [1, 2, 3, 'string']; // Array
const funcion = function() { return 'Hola'; }; // Function

console.log (typeof objeto, typeof arreglo, typeof funcion);
