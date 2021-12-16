function attachEvents() {
    document.getElementById('btnLoad').addEventListener('click', loadContacts);
    document.getElementById('btnCreate').addEventListener('click', onCreate);
    contactsList.addEventListener('click', onDelete);

    loadContacts();
}

const contactsList = document.getElementById('phonebook');
const personInput = document.getElementById('person');
const phoneInput = document.getElementById('phone');

attachEvents();

async function onDelete(event) {
    const id = event.target.dataset.id;
    if (id !== undefined) {
        await deleteContact(id);
    }
}

async function onCreate() {
    const person = personInput.value;
    const phone = phoneInput.value;

    personInput.value = '';
    phoneInput.value = '';

    const contact = {
        person,
        phone
    };

    const result = await createContact(contact);

    contactsList.appendChild(createItem(result));
}

async function loadContacts() {
    const url = 'http://localhost:3030/jsonstore/phonebook';

    const response = await fetch(url);
    const data = await response.json();

    contactsList.replaceChildren();
    Object.values(data).map(createItem).forEach(c => contactsList.appendChild(c));
}

function createItem(contact) {
    const liElement = document.createElement('li');
    liElement.innerHTML = `${contact.person}: ${contact.phone} <button data-id="${contact._id}">Delete</button>`;

    return liElement;
}

async function createContact(contact) {
    const url = 'http://localhost:3030/jsonstore/phonebook';
    const options = {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(contact)
    };

    const response = await fetch(url, options);
    const result = await response.json();

    return result;
}

async function deleteContact(id) {
    const url = 'http://localhost:3030/jsonstore/phonebook/' + id;
    const options = {
        method: 'delete'
    };

    const response = await fetch(url, options);
    const result = await response.json();

    loadContacts();

    return result;
}