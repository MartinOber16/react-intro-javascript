// Exportaciones e importaciones

//import heroes, { owners } from '../data/heroes';
import heroes from '../data/heroes';

// const getHeroeById = (id) => {
//     return heroes.find( (heroe) => { 
//         if(heroe.id === id)
//             return true;
//         else
//             return false;
//     })  
// }

// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/find
const getHeroeById = (id) => heroes.find( heroe => heroe.id === id );
//console.log( getHeroeById(3) );

// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
const getHeroeByOwner = (owner) => heroes.filter( heroe => heroe.owner === owner );
//console.log( getHeroeByOwner('DC') );

//console.log( owners );

export {
    getHeroeById,
    getHeroeByOwner
}