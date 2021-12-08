async function loadCommits() {
    const ul = document.getElementById('commits');
    const username = document.getElementById('username').value;
    const repo = document.getElementById('repo').value;
    const url = `https://api.github.com/repos/${username}/${repo}/commits`;

    try {
        const response = await fetch(url);
        if (response.ok == false) {
            throw new Error(`Error: ${response.status}: (${response.statusText})`);
        }

        const data = await response.json();

        ul.innerHTML = '';
        for (let repo of data) {
            const li = document.createElement('li');
            li.textContent = `${repo.commit.author.name}: ${repo.commit.message}`;
            ul.appendChild(li);
        }

    } catch (error) {
        ul.innerHTML = '';
        const li = document.createElement('li');
        li.textContent = error.message;
        ul.appendChild(li);
    }
}