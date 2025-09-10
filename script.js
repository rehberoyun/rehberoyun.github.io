document.addEventListener('DOMContentLoaded', () => {
    // Hamburger Menü İşlevselliği
    const menuToggle = document.getElementById('menu-toggle');
    const closeBtn = document.getElementById('close-btn');
    const sidebar = document.getElementById('sidebar');

    menuToggle.addEventListener('click', () => {
        sidebar.classList.toggle('active');
    });

    closeBtn.addEventListener('click', () => {
        sidebar.classList.remove('active');
    });

    // A-Z Harf Listesi Oluşturma
    const alphabetList = document.getElementById('alphabet-list');
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    letters.forEach(letter => {
        const link = document.createElement('a');
        link.href = `#${letter}`;
        link.textContent = letter;
        link.className = 'text-blue-600 hover:text-blue-400';
        alphabetList.appendChild(link);
    });

    // Örnek Oyun Listesi
    const games = [
        { name: 'GTA V', link: 'gta-v.html', description: 'Silah, araç ve daha fazla hile kodu.' },
        { name: 'Minecraft', link: 'minecraft.html', description: 'Komutlar ve hileler.' },
    ];

    const gamesContainer = document.getElementById('games');
    games.forEach(game => {
        const gameCard = document.createElement('div');
        gameCard.className = 'bg-white p-4 rounded-lg shadow';
        gameCard.innerHTML = `
            <h3 class="text-xl font-bold text-blue-600">${game.name}</h3>
            <p>${game.description}</p>
            <a href="${game.link}" class="text-blue-600 hover:underline">Hileleri Gör</a>
        `;
        gamesContainer.appendChild(gameCard);
    });
});
