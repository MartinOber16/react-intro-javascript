
const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 1234,
        lat: 14.3232,
        lng: 34.9223,
    }
};

//console.table( { persona } );
console.log( { persona })

//const persona2 = persona; // Se copia la referencia al objeto
const persona2 = { ...persona }; // Se copia el valor del objeto (clon)
persona2.nombre = 'Peter';

console.log( { persona2 });
