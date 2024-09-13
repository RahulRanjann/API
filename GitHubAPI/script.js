const input = document.getElementById("search");
const form = document.getElementById("form");
const result = document.getElementById("result");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    result.innerHTML = `<h3 class="loading">Loading...</h3>`;
    fetchItems();
});

function fetchItems() {
    const inputValue = input.value;
    fetch(`https://api.github.com/users/${inputValue}`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            result.innerHTML = `
                <div class="card">
                    <div class="image">
                        <img src="${data.avatar_url}" alt="${data.login}" />
                    </div>
                    <div class="info">
                        <h2>${data.login}</h2>
                        <p>${data.bio}</p>
                        <p>github url: <a href="${data.html_url}">${data.html_url}</a></p>
                        <p>followers: ${data.followers}</p>
                        <p>following: ${data.following}</p>
                        <p>public repos: ${data.public_repos}</p>
                        <p>Location: ${data.location}</p>
                    </div>
                    <div class="stats">

                    </div>
                </div>
            `;
        });
}
