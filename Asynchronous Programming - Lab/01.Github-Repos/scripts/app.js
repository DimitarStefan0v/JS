function loadRepos() {
	const username = document.querySelector('#username').value;
	const url = `https://api.github.com/users/${username}/repos`;
	const ul = document.querySelector('#repos');
	
	fetch(url)
		.then(response => {
			if (response.ok == false) {
				throw new Error(response.statusText)
			}

			return response.json()
		})
		.then(handleResponse)
		.catch(error => console.log(error));

	function handleResponse(data) {
		for (let repo of data) {
			const li = document.createElement('li');
			const a = document.createElement('a');
			a.href = repo.html_url;
			a.textContent = repo.full_name;
			li.appendChild(a);
			ul.appendChild(li);
		}
	}
}