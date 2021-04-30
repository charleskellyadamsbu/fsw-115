const request = new XMLHttpRequest();

let pokemonArray = [];

request.open('GET', 'https://pokeapi.co/api/v2/pokemon/?limit=151', true);
request.send();

request.onreadystatechange = function() {
    if(request.readyState === 4 && request.status === 200) {
        let data = JSON.parse(request.responseText);

        for(let i = 0; i < data.results.length; i++) {
            pokemonArray.push( { name: data.results[i].name, url: data.results[i].url } );
        }

        pokemonArray.forEach(element => {
            let p = document.createElement('p');
            p.textContent = element.name;
            document.body.appendChild(p);
        });

        for(let i = 0; i < pokemonArray.length; i++) {
            console.log(pokemonArray[i]);
        }
    }
}