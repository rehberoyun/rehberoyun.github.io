// Hamburger Menü Aç/Kapa
const menuToggle = document.querySelector('.menu-toggle');
const sidebar = document.getElementById('sidebar');
const closeBtn = document.querySelector('.close-btn');

if (menuToggle && sidebar && closeBtn) {
    menuToggle.addEventListener('click', () => {
        sidebar.classList.toggle('active');
        console.log('Menü açıldı/kapandı');
    });

    closeBtn.addEventListener('click', () => {
        sidebar.classList.remove('active');
        console.log('Menü kapatıldı');
    });
} else {
    console.error('Hata: Menü elemanları bulunamadı');
}

// A-Z Harflerini Oluştur
const alphabetList = document.getElementById('alphabet-list');
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
letters.forEach(letter => {
    const button = document.createElement('button');
    button.textContent = letter;
    button.addEventListener('click', () => loadGames(letter));
    alphabetList.appendChild(button);
});

// games.json’dan Oyunları Yükle
async function loadGames(letter) {
    try {
        const response = await fetch('games.json');
        if (!response.ok) throw new Error('games.json yüklenemedi');
        const games = await response.json();
        const filteredGames = games.filter(game => game.name.toUpperCase().startsWith(letter));
        displayGames(filteredGames, letter);
    } catch (error) {
        console.error('Hata:', error);
        document.getElementById('games').innerHTML = '<p>Oyunlar yüklenirken hata oluştu.</p>';
    }
}

// Oyunları Göster
function displayGames(games, letter) {
    const gameList = document.getElementById('games');
    gameList.innerHTML = '';
    if (games.length === 0) {
        gameList.innerHTML = `<p>${letter} harfiyle başlayan oyun bulunamadı.</p>`;
        return;
    }
    games.forEach(game => {
        const div = document.createElement('div');
        div.className = 'game-item';
        div.innerHTML = `<strong>${game.name}</strong>: ${game.cheat}`;
        gameList.appendChild(div);
    });
}
