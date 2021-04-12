
// Funciones en JS
// `
// function saludar (nombre) {
//     return `Hola ${ nombre }`;
// }

const saludar = function (nombre) {
    return `Hola ${ nombre }`;
}

const saludar2 = ( nombre ) => {
    return `Hola ${ nombre }`;
}

const saludar3 = ( nombre ) => `Hola ${ nombre }`;

const saludar4 = () => `Hola Mundo`;

console.log( saludar('Goku') );
console.log( saludar2('Vegeta') );
console.log( saludar3('Martin') );
console.log( saludar4() );

// const getUser = () => {
//     return {
//         uid: 'ABC123',
//         username: 'Elpapi123'
//     }
// }

const getUser = () => ({
    uid: 'ABC123',
    username: 'Elpapi123'
});

const user = getUser();
console.log( user );

const getUsuarioActivo = ( nombre ) => ( {
    uid: 'ABC567',
    username: nombre
} );

const usuarioActivo = getUsuarioActivo('Martin');
console.log(usuarioActivo);



