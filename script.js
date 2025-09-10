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

    // games.json'dan veri çekme
    fetch('games.json')
        .then(response => response.json())
        .then(games => {
            // A-Z Harf Listesi ve Açılır Menü
            const alphabetList = document.getElementById('alphabet-list');
            const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

            letters.forEach(letter => {
                const letterContainer = document.createElement('div');
                letterContainer.className = 'letter-container';

                const letterLink = document.createElement('a');
                letterLink.href = `#${letter}`;
                letterLink.textContent = letter;
                letterLink.className = 'text-blue-600 hover:text-blue-400';

                const toggleButton = document.createElement('span');
                toggleButton.textContent = '+';
                toggleButton.className = 'letter-toggle';

                const letterMenu = document.createElement('div');
                letterMenu.className = 'letter-menu';

                // Harfle başlayan oyunları bul
                const matchingGames = games.filter(game => game.name.toUpperCase().startsWith(letter));
                matchingGames.forEach(game => {
                    const gameLink = document.createElement('a');
                    gameLink.href = game.link;
                    gameLink.textContent = game.name;
                    letterMenu.appendChild(gameLink);
                });

                toggleButton.addEventListener('click', () => {
                    letterMenu.classList.toggle('active');
                    toggleButton.textContent = letterMenu.classList.contains('active') ? '−' : '+';
                });

                letterContainer.appendChild(letterLink);
                letterContainer.appendChild(toggleButton);
                letterContainer.appendChild(letterMenu);
                alphabetList.appendChild(letterContainer);
            });

            // Oyun Listesi (Ana Sayfada)
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
        })
        .catch(error => console.error('Error loading games:', error));
});
