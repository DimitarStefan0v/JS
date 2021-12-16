function attachEvents() {
    document.getElementById('refresh').addEventListener('click', loadMessages);
    document.getElementById('submit').addEventListener('click', onSubmit);

    loadMessages();
}

const authorInput = document.querySelector('[name="author"]');
const contentInput = document.querySelector('[name="content"]');
const list = document.getElementById('messages');

attachEvents();

async function loadMessages() {
    const url = 'http://localhost:3030/jsonstore/messenger';
    const response = await fetch(url);
    const data = await response.json();

    const messages = Object.values(data);
    
    list.value = messages.map(m => `${m.author}: ${m.content}`).join('\n');
}

async function onSubmit() {
    const author = authorInput.value;
    const content = contentInput.value;

    contentInput.value = '';

    const message = {
        author,
        content
    };

    const result = await createMessage(message);
}

async function createMessage(message) {
    const url = 'http://localhost:3030/jsonstore/messenger';
    const options = {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(message)
    };

    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}