function attachEvents() {
    document.getElementById('btnLoadPosts').addEventListener('click', getAllPosts);
    document.getElementById('btnViewPost').addEventListener('click', displayPost);
}

async function displayPost() {
    const selectedId = document.getElementById('posts').value;

    const [post, comments] = await Promise.all([
        getPostById(selectedId),
        getCommentsByPostId(selectedId)
    ]);

    document.getElementById('post-title').textContent = post.title;
    document.getElementById('post-body').textContent = post.body;

    const ulElComments = document.getElementById('post-comments');
    ulElComments.replaceChildren();

    comments.forEach(c => {
        const liElement = document.createElement('li');
        liElement.textContent = c.text;

        ulElComments.appendChild(liElement);
    });
}

async function getAllPosts() {
    const url = `http://localhost:3030/jsonstore/blog/posts`;

    const response = await fetch(url);

    const data = await response.json();
    const selectElement = document.getElementById('posts');
    selectElement.replaceChildren();
    Object.values(data).forEach(p => {
        const optionElement = document.createElement('option');
        optionElement.textContent = p.title;
        optionElement.value = p.id;

        selectElement.appendChild(optionElement);
    });
}

async function getPostById(postId) {
    const url = `http://localhost:3030/jsonstore/blog/posts/` + postId;

    const response = await fetch(url);
    const data = await response.json();

    return data
}

async function getCommentsByPostId(postId) {
    const url = `http://localhost:3030/jsonstore/blog/comments`;

    const response = await fetch(url);
    const data = await response.json();

    const comments = Object.values(data).filter(p => p.postId == postId);
    return comments;
}

attachEvents();