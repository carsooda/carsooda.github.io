function login() {
  const name = document.getElementById('username').value;
  if (name.trim() !== '') {
    alert(`Welcome aboard, ${name}!`);
  }
}

function filterGames() {
  const input = document.getElementById('searchInput').value.toLowerCase();
  const listItems = document.querySelectorAll('#gameList li');

  listItems.forEach(item => {
    const text = item.textContent.toLowerCase();
    item.style.display = text.includes(input) ? '' : 'none';
  });
}

function saveGame(name) {
  let saved = JSON.parse(localStorage.getItem('favorites')) || [];
  if (!saved.includes(name)) {
    saved.push(name);
    localStorage.setItem('favorites', JSON.stringify(saved));
    alert(`${name} saved to favorites!`);
  }
}

function searchSpotify() {
  const query = document.getElementById('spotifySearch').value;
  if (query.trim() !== '') {
    window.open(`https://open.spotify.com/search/${encodeURIComponent(query)}`, '_blank');
  }
}