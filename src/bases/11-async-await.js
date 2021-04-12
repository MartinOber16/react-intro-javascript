// Async y await

const getImagen = async () => {

    try {
        const apiUrl = 'http://api.giphy.com/v1/gifs/random';
        const apiKey = 'biO7zC5kO4A2lkJDRxWBoyPG0rNWhFHJ'; // api_key
        const resp = await fetch(`${apiUrl}?api_key=${apiKey}`);
        const { data } = await resp.json();
        
        console.log(data);
        const { url } = data.images.original;
        const img = document.createElement('img');
        img.src = url;
    
        document.body.append(img);

    } catch (error) {
        // Manejo del error
        console.error(error);
    }

}

// getImagen().then( console.log );
getImagen();