document.addEventListener('DOMContentLoaded', () => {
    const username = prompt('Seu nick do Github:');

    fetch(`https://api.github.com/users/${username}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            document.getElementById('profile-avatar').src = data.avatar_url;
            document.getElementById('profile-name').textContent = data.name || 'No name provided';
            document.getElementById('profile-username').textContent = `@${data.login}`;
            document.getElementById('repo-count').textContent = data.public_repos;
            document.getElementById('follower-count').textContent = data.followers;
            document.getElementById('following-count').textContent = data.following;
            document.getElementById('profile-link').href = data.html_url;
        })
        .catch(error => {
            console.error('Fetch error:', error);
        });
});