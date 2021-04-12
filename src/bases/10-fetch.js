// Fetch API
// https://developer.mozilla.org/es/docs/Web/API/Fetch_API

const apiUrl = 'http://api.giphy.com/v1/gifs/random';
const apiKey = 'biO7zC5kO4A2lkJDRxWBoyPG0rNWhFHJ'; // api_key

const peticion = fetch(`${apiUrl}?api_key=${apiKey}`);

// peticion.then( resp => {
//     resp.json().then( data => {
//         console.log(data);
//     });

// })
// .catch( console.warn );

peticion
    .then( resp => resp.json() )
    .then( ({ data }) => {
        console.log( data.images.original.url );
        const { url } = data.images.original;

        const img = document.createElement('img');
        img.src = url;

        document.body.append(img);

    })
    .catch( console.warn );
    