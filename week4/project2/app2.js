document.getElementById('submit').addEventListener('click', (event) => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=151').then((response) => {
        let div = document.getElementById('container');
        console.log(response.data);
        if(div) {
            document.body.removeChild(div);
        }

        div = document.createElement('div');
        div.id = "container";
        document.body.appendChild(div);

        response.data.results.forEach(element => {
            let div = document.getElementById('container');
            let ol = document.createElement('ol');
            let list1 = document.createElement('li');
            list1.textContent = element.name;
            let list2 = document.createElement('li');
            list2.textContent = element.url;

            ol.appendChild(list1);
            ol.appendChild(list2);
            div.appendChild(ol);
        });
    });
});