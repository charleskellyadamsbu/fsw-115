let title = document.getElementById('title');
let description = document.getElementById('description');
let submit = document.getElementById('submit');
let todos = document.getElementById('todos');

function update() {

    while(todos.lastElementChild) {
        todos.removeChild(todos.lastElementChild);
    }

    axios.get('http://api.bryanuniversity.edu/charlesadams/list/').then((response) => {
        console.log(response);
        if(response.status === 200) {
            for(let i = 0; i < response.data.length; i++) {
                if(response.data[i]) {
                    let h1 = document.createElement('h1');
                    h1.textContent = response.data[i].name;

                    let p = document.createElement('p');
                    p.textContent = response.data[i].description;
                    
                    let up = document.createElement('input');
                    up.type = "checkbox";
                    up.value = "Update";

                    if(response.data[i].isComplete == true) {
                        h1.style.textDecoration = "line-through";
                        up.checked = true;
                    }

                    up.addEventListener('click', (error) => {
                        axios.put('http://api.bryanuniversity.edu/charlesadams/list/' + response.data[i]._id, {isComplete: up.checked}).then(response => {
                            console.log(response);
                            update();
                        }).catch((error) => {
                            console.log(error);
                        });
                    });

                    let submit = document.createElement('input');
                    submit.type = "submit";
                    submit.value = "Delete";
                    
                    submit.addEventListener('click', (event) => {
                        axios.delete('http://api.bryanuniversity.edu/charlesadams/list/' + response.data[i]._id).then(response => {
                            update();
                        }).catch((error) => {
                            console.log(error);
                        });
                    });
    
                    todos.appendChild(h1);
                    todos.appendChild(p);
                    todos.appendChild(up);
                    todos.appendChild(submit);
                }
            }
        }
    }).catch((error) => {
        console.log(error);
    });
}

submit.addEventListener('click', (event) => {
    axios.post('http://api.bryanuniversity.edu/charlesadams/list/', {name: title.value, description: description.value, isComplete: false, price: 0}).then(response => {
        console.log(response);
        if(response.status === 200) {
            update();
        }
    }).catch((error) => {
        console.log(error);
    });
});

update();