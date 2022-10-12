const busca = document.getElementById('busca');
const btn = document.getElementById('btn');
const content_info = document.getElementById('content-info');

btn.addEventListener('click', () => {
    const result = busca.value;
    getGithubUser(result);
});

 async function getGithubUser(result) {
    try {
        const response = await fetch('https://api.github.com/users/' + result);
        const json = await response.json();
        const user = json;
        renderUser(user);
    } catch (err) {
        console.log(err);
    }
        
}

async function renderUser(user) {
    
    content_info.innerHTML = `
    <img src="${user.avatar_url}" alt="">
    <div class="text-info">
        <h3 class="name">${user.name}</h3>
        <span class="username">${user.login}</span>
        <p class="bio">${user.bio}</p> 
        <div class="sub-info">
            <span class="company"><i class="fa-solid fa-building"></i> ${user.company}</span>
            <span class="location"><i class="fa-sharp fa-solid fa-location-dot"></i> ${user.location}</span>
            <span class="email"><i class="fa-solid fa-users"></i> ${user.followers}</span>
        </div>     
    </div>
    `;
    
}