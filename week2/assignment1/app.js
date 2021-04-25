var json = [
    {
        "id": 269,
        "type": "general",
        "setup": "What kind of music do planets listen to?",
        "punchline": "Nep-tunes."
    },
    {
        "id": 39,
        "type": "general",
        "setup": "If you're American when you go into the bathroom, and American when you come out, what are you when you're in there?",
        "punchline": "European"
    },
    {
        "id": 143,
        "type": "general",
        "setup": "How many optometrists does it take to change a light bulb?",
        "punchline": "1 or 2? 1... or 2?"
    },
    {
        "id": 189,
        "type": "general",
        "setup": "What did the mountain climber name his son?",
        "punchline": "Cliff."
    },
    {
        "id": 360,
        "type": "general",
        "setup": "Why do choirs keep buckets handy?",
        "punchline": "So they can carry their tune"
    },
    {
        "id": 108,
        "type": "general",
        "setup": "Do you know where you can get chicken broth in bulk?",
        "punchline": "The stock market."
    },
    {
        "id": 291,
        "type": "general",
        "setup": "What’s Forest Gump’s Facebook password?",
        "punchline": "1forest1"
    },
    {
        "id": 348,
        "type": "general",
        "setup": "Why did the scarecrow win an award?",
        "punchline": "Because he was outstanding in his field."
    },
    {
        "id": 88,
        "type": "general",
        "setup": "Did you hear about the cheese factory that exploded in France?",
        "punchline": "There was nothing left but de Brie."
    },
    {
        "id": 58,
        "type": "general",
        "setup": "I dropped a pear in my car this morning.",
        "punchline": "You should drop another one, then you would have a pair."
    }
]

for(let i = 0; i < json.length; i++) {
    let id = document.createElement('h1');
    id.textContent = "Joke ID:" + json[i].id;

    let type = document.createElement('h2');
    type.textContent = "Joke Type: " + json[i].type;

    let setup = document.createElement('p');
    setup.textContent = "Setup: " + json[i].setup;

    let punchline = document.createElement('p');
    punchline.textContent = "Punchline: " + json[i].punchline;

    document.body.appendChild(id);
    document.body.appendChild(type);
    document.body.appendChild(setup);
    document.body.appendChild(punchline);
}