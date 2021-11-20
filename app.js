const APICALL = "https://api.github.com/users/";
const show = document.querySelector('.show');
const form = document.querySelector('.form-github-search');
const inputSearch = document.querySelector('.inp-search')

// Create asynchronous function
async function dataGithub(user) {

    // API Request
    const answer = await fetch(`${APICALL}${user}`);
    const data = await answer.json();

    console.log(data);

    createCard(data);
} 

// My username github
dataGithub('Safi60');

function createCard(user){
    const cardHTML = `
    <div class = "card" >
        <img src="${user.avatar_url}" alt= "logo avatar" class = "avatar">
        <h2>${user.name}<h2>
        <ul class="cont-news">
            <li class="followers">Followers: ${user.followers}<li>
            <li class="repos">Repos: ${user.public_repos}<li>
            <li class="bio">${user.bio}<li>
        <ul>
    <div>
    `;
    show.innerHTML = cardHTML;
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if(inputSearch.value.length > 0 ){
        dataGithub(inputSearch.value);
        inputSearch.value = "";
    }
})