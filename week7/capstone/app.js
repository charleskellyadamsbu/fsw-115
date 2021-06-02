let title = document.getElementById('title');
let description = document.getElementById('description');
let submit = document.getElementById('submit');
let todos = document.getElementById('todos');

function update() {

    while(todos.lastElementChild) {
        todos.removeChild(todos.lastElementChild);
    }

    axios.get('http://api.bryanuniversity.edu/charlesadamscapstone/list/').then((response) => {
        console.log(response);
        if(response.status === 200) {
            for(let i = 0; i < response.data.length; i++) {
                if(response.data[i]) {
                    let todo = document.createElement('div');
                    todo.className = "todo";

                    let h1 = document.createElement('h1');
                    h1.textContent = response.data[i].name;
        
                    let p = document.createElement('input');
                    p.type = "text";
                    p.value = response.data[i].description;
                    
                    let up = document.createElement('input');
                    up.type = "submit";
                    up.value = "Update";

                    up.addEventListener('click', (error) => {
                        axios.put('http://api.bryanuniversity.edu/charlesadamscapstone/list/' + response.data[i]._id, {description: p.value}).then(response => {
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
                        axios.delete('http://api.bryanuniversity.edu/charlesadamscapstone/list/' + response.data[i]._id).then(response => {
                            update();
                        }).catch((error) => {
                            console.log(error);
                        });
                    });
    
                    todo.appendChild(h1);
                    todo.appendChild(p);
                    todo.appendChild(up);
                    todo.appendChild(submit);
                    todos.appendChild(todo);
                }
            }
        }
    }).catch((error) => {
        console.log(error);
    });
}

submit.addEventListener('click', (event) => {
    axios.post('http://api.bryanuniversity.edu/charlesadamscapstone/list/', {name: title.value, description: description.value, isComplete: false, price: 0}).then(response => {
        console.log(response);
        if(response.status === 200) {
            update();
        }
    }).catch((error) => {
        console.log(error);
    });
});

document.getElementById('generate').addEventListener('click', (event) => {
    axios.get('https://www.boredapi.com/api/activity/').then((response) => {
        console.log(response);
        title.value = response.data.activity;
    }).catch((error) => {
        console.log(error);
    });
});

update();