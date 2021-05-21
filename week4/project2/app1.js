document.getElementById('submit').addEventListener('click', (event) => {
    axios.get('https://animechan.vercel.app/api/quotes').then((response) => {
        
        let div = document.getElementById('container');

        if(div) {
            document.body.removeChild(div);
        }

        div = document.createElement('div');
        div.id = "container";
        document.body.appendChild(div);

        response.data.forEach(element => {
            let div = document.getElementById('container');
            let ol = document.createElement('ol');
            let list1 = document.createElement('li');
            list1.textContent = element.anime;
            let list2 = document.createElement('li');
            list2.textContent = element.character;
            let list3 = document.createElement('li');
            list3.textContent = element.quote;

            ol.appendChild(list1);
            ol.appendChild(list2);
            ol.appendChild(list3);
            div.appendChild(ol);
        });
    });
});