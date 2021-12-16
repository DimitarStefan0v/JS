getAllBooks();

const tbody = document.querySelector('tbody');
document.getElementById('loadBooks').addEventListener('click', getAllBooks);
document.getElementById('createForm').addEventListener('click', onCreate);
tbody.addEventListener('click', onTableClick);
const titleInput = document.querySelector('#editForm input[name="title"]');
const authorInput = document.querySelector('#editForm input[name="author"]');

attachEvents();

async function onTableClick(event) {
    if (event.target.className == 'deleteBtn') {
        await deleteBook(event.target.dataset.id);
        getAllBooks();
    } else if (event.target.className == 'editBtn') {
        const id = event.target.dataset.id;
        const book = await getBookById(id);

        const saveBtn = document.querySelector('#editForm button');

        titleInput.value = book.title;
        authorInput.value = book.author;

        saveBtn.addEventListener('click', function (event) {
            event.preventDefault();
            const editedBook = {
                author: authorInput.value,
                title: titleInput.value
            };

            updateBook(id, editedBook);
            getAllBooks();
            titleInput.value = '';
            authorInput.value = '';
        });

    }

}

async function getBookById(id) {
    const url = 'http://localhost:3030/jsonstore/collections/books/' + id;
    const book = await request(url);

    return book;
}

async function onCreate(event) {
    event.preventDefault();
    if (event.target.tagName == 'BUTTON') {
        const formData = new FormData(event.target.parentElement);

        const author = formData.get('author');
        const title = formData.get('title');

        event.target.parentElement.reset();

        const book = {
            author,
            title
        };

        const result = await createBook(book);
        tbody.appendChild(createRow(result._id, result))
    }
}

async function getAllBooks() {
    const url = 'http://localhost:3030/jsonstore/collections/books';
    const books = await request(url);
    tbody.replaceChildren();
    Object.entries(books).map(([id, book]) => createRow(id, book)).forEach(r => tbody.appendChild(r));
}

function createRow(id, book) {
    const row = document.createElement('tr');
    const titleData = document.createElement('td');
    titleData.textContent = book.title;
    const authorData = document.createElement('td');
    authorData.textContent = book.author;
    const actionData = document.createElement('td');
    actionData.innerHTML = `<button class="editBtn" data-id="${id}">Edit</button><button class="deleteBtn" data-id="${id}">Delete</button>`;
    row.appendChild(titleData);
    row.appendChild(authorData);
    row.appendChild(actionData);

    return row;
}

async function createBook(book) {
    const url = 'http://localhost:3030/jsonstore/collections/books';
    const options = {
        method: 'post',
        body: JSON.stringify(book)
    };

    const result = await request(url, options);

    return result;
}

async function updateBook(id, book) {
    const url = 'http://localhost:3030/jsonstore/collections/books/' + id;
    const options = {
        method: 'put',
        body: JSON.stringify(book)
    };

    const result = await request(url, options);

    return result;
}

async function deleteBook(id) {
    const url = 'http://localhost:3030/jsonstore/collections/books/' + id;
    const options = {
        method: 'delete'
    };

    const result = await request(url, options);

    return result;
}

async function request(url, options) {
    if (options && options.body !== undefined) {
        Object.assign(options, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    const response = await fetch(url, options);

    if (response.ok !== true) {
        const error = await response.json();
        alert(error.message);
        throw new Error(error.message);
    }

    const data = await response.json();

    return data;
}