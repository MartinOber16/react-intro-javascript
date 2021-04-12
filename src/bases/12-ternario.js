// Operador condicional ternario

const activo = true;

// let mensaje = '';

// if ( activo ) {
//     mensaje = 'Activo';
// } else {
//     mensaje = 'Inactivo';
// }

//const mensaje = (activo) ? 'Activo' : 'Inactivo';
const mensaje = activo && 'Activo'; // solo si necesito ejecutar algo si cumple la condicion, sino no hace nada

console.log( mensaje );