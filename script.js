const initialGames = [
  { id: 1, title: "Minecraft Classic", category: "Single Games", link: "https://sites.google.com/view/classroom6x/mnecrft-classic", bg: "rgb(85, 107, 59)", fg: "rgb(242, 234, 211)", image: "assets/thumbs/1.jpg" },
  { id: 2, title: "Slope", category: "Single Games", link: "https://slope-game.github.io/", bg: "rgb(0, 128, 0)", fg: "rgb(255, 255, 255)", image: "assets/thumbs/2.jpg" },
  { id: 3, title: "1v1.LOL", category: "Single Games", link: "https://1v1.lol/", bg: "rgb(50, 50, 50)", fg: "rgb(255, 255, 255)", image: "assets/thumbs/3.jpg" },
  { id: 4, title: "Cookie Clicker", category: "Single Games", link: "https://omaribnzakaria.github.io/ublckdgms/cookieclicker/index.html", bg: "rgb(63, 125, 123)", fg: "rgb(242, 234, 211)", image: "assets/thumbs/4.jpg" },
  { id: 5, title: "Slow Roads", category: "Single Games", link: "https://manscod.github.io/other/slowroads/", bg: "rgb(122, 138, 58)", fg: "rgb(27, 26, 10)", image: "assets/thumbs/5.jpg" },
  { id: 6, title: "Drift Boss", category: "Single Games", link: "https://drift-bossonline.github.io/#", bg: "rgb(122, 138, 58)", fg: "rgb(27, 26, 10)", image: "assets/thumbs/6.jpg" },
  { id: 7, title: "Getaway Shootout", category: "Single Games", link: "https://ubg67.gitlab.io/game/getaway-shootout.html", bg: "rgb(168, 83, 49)", fg: "rgb(250, 239, 217)", image: "assets/thumbs/7.jpg" },
  { id: 8, title: "Drawasaurus", category: "Single Games", link: "https://www.drawasaurus.org/", bg: "rgb(168, 83, 49)", fg: "rgb(250, 239, 217)", image: "assets/thumbs/8.jpg" },
  { id: 9, title: "Progress Knight Rewritten", category: "Single Games", link: "https://zdzban3.github.io/Progress-Knight-Rewritten/", bg: "rgb(47, 72, 88)", fg: "rgb(242, 234, 211)", image: "assets/thumbs/9.jpg" },
  { id: 10, title: "Geometry Lite", category: "Single Games", link: "https://geometrylite.us.com/", bg: "rgb(168, 83, 49)", fg: "rgb(250, 239, 217)", image: "assets/thumbs/10.jpg" },
  { id: 11, title: "Geometry Dash SubZero", category: "Single Games", link: "https://geometry-dash-unbanned.github.io/play/geometry-dash-subzero.html#", bg: "rgb(156, 58, 44)", fg: "rgb(250, 239, 217)", image: "assets/thumbs/11.jpg" },
  { id: 12, title: "Pac-Man", category: "Single Games", link: "https://www.google.com/logos/interactive/2010/pacman10-i.html", bg: "rgb(255, 255, 0)", fg: "rgb(0, 0, 0)", image: "assets/thumbs/12.jpg" },
  { id: 13, title: "Tetris", category: "Single Games", link: "https://tetris.com/play-tetris", bg: "rgb(0, 120, 200)", fg: "rgb(255, 255, 255)", image: "assets/thumbs/13.jpg" },
  { id: 14, title: "Flappy Bird", category: "Single Games", link: "https://flappybird.io/", bg: "rgb(78, 193, 233)", fg: "rgb(255, 220, 50)", image: "assets/thumbs/14.jpg" },

  { id: 15, title: "Unblocked Games (omaribnzakaria)", category: "Hubs", link: "https://omaribnzakaria.github.io/ublckdgms/", bg: "rgb(63, 125, 123)", fg: "rgb(242, 234, 211)", image: "assets/thumbs/15.jpg" },
  { id: 16, title: "Hooda Math", category: "Hubs", link: "https://www.hoodamath.com/index.html#gsc.tab=0", bg: "rgb(85, 107, 59)", fg: "rgb(242, 234, 211)", image: "assets/thumbs/16.jpg" },
  { id: 17, title: "Classroom 6x", category: "Hubs", link: "https://sites.google.com/view/classroom6x/home", bg: "rgb(122, 138, 58)", fg: "rgb(27, 26, 10)", image: "assets/thumbs/17.jpg" },
  { id: 18, title: "Yoosfuhl Games", category: "Hubs", link: "https://yoosfuhl.com/games", bg: "rgb(156, 58, 44)", fg: "rgb(250, 239, 217)", image: "assets/thumbs/18.jpg" },
  { id: 19, title: "MSN Classics", category: "Hubs", link: "https://www.msn.com/en-us/play/classics", bg: "rgb(156, 58, 44)", fg: "rgb(250, 239, 217)", image: "assets/thumbs/19-msn.jpg" },
  { id: 20, title: "UBG66", category: "Hubs", link: "https://sites.google.com/view/ubg66/home", bg: "rgb(122, 138, 58)", fg: "rgb(27, 26, 10)", image: "assets/thumbs/20.jpg" },
  { id: 21, title: "Study75", category: "Hubs", link: "https://study75.space/", bg: "rgb(122, 138, 58)", fg: "rgb(27, 26, 10)", image: "assets/thumbs/21.jpg" },
  { id: 22, title: "Classroom Center", category: "Hubs", link: "https://sites.google.com/classroom.center/view-1/", bg: "rgb(176, 103, 110)", fg: "rgb(35, 21, 7)", image: "assets/thumbs/22.jpg" },
  { id: 23, title: "Games Unblocked GitLab", category: "Hubs", link: "https://gamesunblocked.gitlab.io/", bg: "rgb(122, 138, 58)", fg: "rgb(27, 26, 10)", image: "assets/thumbs/23.jpg" },
  { id: 24, title: "Amplify Games", category: "Hubs", link: "https://r8r7.github.io/amplify/games/", bg: "rgb(107, 58, 94)", fg: "rgb(245, 231, 216)", image: "assets/thumbs/24.jpg" },
  { id: 25, title: "Unblocked Gamers", category: "Hubs", link: "https://www.unblockedgamers.com/", bg: "rgb(47, 72, 88)", fg: "rgb(242, 234, 211)", image: "assets/thumbs/25.jpg" },
  { id: 26, title: "Unblocked Games 4 Me", category: "Hubs", link: "https://sites.google.com/site/unblockedgames4me/", bg: "rgb(168, 83, 49)", fg: "rgb(250, 239, 217)", image: "assets/thumbs/26.jpg" },

  { id: 27, title: "Resource Packs", category: "Tools", link: "https://resourcepacks.gg/en", bg: "rgb(63, 125, 123)", fg: "rgb(242, 234, 211)", image: "assets/thumbs/27.jpg" },
  { id: 28, title: "Google Games Search", category: "Tools", link: "https://www.google.com/search?q=google+games", bg: "rgb(176, 103, 110)", fg: "rgb(35, 21, 7)", image: "assets/thumbs/28.jpg" },

  { id: 29, title: "Minecraft 1.8 WebAssembly", category: "Minecraft", link: "https://omaribnzakaria.github.io/ublckdgms/eaglercraftwasm/188.html", bg: "rgb(47, 72, 88)", fg: "rgb(242, 234, 211)", tag: "WebAssembly", image: "assets/thumbs/29.jpg" },
  { id: 30, title: "Minecraft 1.12 WebAssembly", category: "Minecraft", link: "https://omaribnzakaria.github.io/ublckdgms/eaglercraftwasm/1122.html", bg: "rgb(201, 152, 70)", fg: "rgb(35, 21, 7)", tag: "WebAssembly", image: "assets/thumbs/30.jpg" },
  { id: 31, title: "Minecraft 1.8 Download", category: "Minecraft", link: "https://drive.google.com/file/d/1xFOfwquT4cXPoeEq-0bLANQIjldh1o9C/view?usp=drive_link", bg: "rgb(168, 83, 49)", fg: "rgb(250, 239, 217)", tag: "Downloads", image: "assets/thumbs/31.jpg" },
  { id: 32, title: "Minecraft 1.12 Download", category: "Minecraft", link: "https://drive.google.com/file/d/1yMy9I1utHcdTQCdyyqy6Zpjh4XgwqCjo/view?usp=sharing", bg: "rgb(63, 125, 123)", fg: "rgb(242, 234, 211)", tag: "Downloads", image: "assets/thumbs/32.jpg" },
  { id: 33, title: "Minecraft JavaScript 1.8", category: "Minecraft", link: "https://omaribnzakaria.github.io/ublckdgms/eaglercraftjs/188.html", bg: "rgb(122, 138, 58)", fg: "rgb(27, 26, 10)", tag: "JavaScript", image: "assets/thumbs/33.jpg" },
  { id: 34, title: "Minecraft JavaScript 1.12", category: "Minecraft", link: "https://omaribnzakaria.github.io/ublckdgms/eaglercraftjs/1122.html", bg: "rgb(47, 72, 88)", fg: "rgb(242, 234, 211)", tag: "JavaScript", image: "assets/thumbs/34.jpg" }
];

// â”€â”€â”€ BORED POOL â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
// Add extra links here anytime â€” the bored button picks randomly from this list.
// If the list is empty, it falls back to picking from the main games list.
const boredPool = [
  { title: "Slope", link: "https://slope-game.github.io/" },
  { title: "1v1.LOL", link: "https://1v1.lol/" },
  { title: "Tetris", link: "https://tetris.com/play-tetris" },
  { title: "Pac-Man", link: "https://www.google.com/logos/interactive/2010/pacman10-i.html" },
  { title: "Flappy Bird", link: "https://flappybird.io/" },
  { title: "Cookie Clicker", link: "https://omaribnzakaria.github.io/ublckdgms/cookieclicker/index.html" },
  { title: "Drift Boss", link: "https://drift-bossonline.github.io/#" }
];
// â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

// State
let games = [];
let recentGameIds = [];
let favoriteGameIds = [];

// Elements
const gridContainer = document.getElementById('games-grid');
const recentGamesSection = document.getElementById('recent-games-section');
const recentGamesGrid = document.getElementById('recent-games-grid');
const searchInput = document.getElementById('search-input');
const filterContainer = document.getElementById('filters-container');
const ambientImageLayer = document.getElementById('ambient-image-layer');
const root = document.documentElement;

let ambientResetTimer = null;
let ambientSwapTimer = null;

function setAmbientTheme(game) {
  clearTimeout(ambientResetTimer);
  clearTimeout(ambientSwapTimer);

  const isAlreadyActive = ambientImageLayer.classList.contains('active');

  if (isAlreadyActive) {
    // Cross-fade: fade out â†’ swap image â†’ fade back in
    ambientImageLayer.style.opacity = '0';
    ambientSwapTimer = setTimeout(() => {
      ambientImageLayer.style.backgroundImage = `url('${game.image}')`;
      ambientImageLayer.style.opacity = '0.18';
    }, 350);
  } else {
    // First hover: just fade in normally
    ambientImageLayer.style.backgroundImage = `url('${game.image}')`;
    ambientImageLayer.classList.add('active');
  }

  root.style.setProperty('--card-bg', game.bg);
  root.style.setProperty('--card-fg', game.fg);
}

function resetAmbientTheme() {
  ambientResetTimer = setTimeout(() => {
    ambientImageLayer.classList.remove('active');
    ambientImageLayer.style.opacity = '';
    root.style.setProperty('--card-bg', '#333');
    root.style.setProperty('--card-fg', '#fff');
  }, 300);
}

// Initialize Data
function loadGames() {
  const storedFavorites = localStorage.getItem('vault_favorite_games');
  if (storedFavorites) {
    favoriteGameIds = JSON.parse(storedFavorites);
  }

  const storedRecent = localStorage.getItem('vault_recent_games');
  if (storedRecent) {
    recentGameIds = JSON.parse(storedRecent).slice(0, 5); // Force trim existing history to 5
  }

  // Games list is now entirely driven by code, no more local storage saving for the main list
  games = [...initialGames];
}

window.logRecentGame = function(id) {
  recentGameIds = [id, ...recentGameIds.filter(x => x !== id)].slice(0, 5);
  localStorage.setItem('vault_recent_games', JSON.stringify(recentGameIds));
};

window.toggleFavorite = function(id) {
  if (favoriteGameIds.includes(id)) {
    favoriteGameIds = favoriteGameIds.filter(x => x !== id);
  } else {
    favoriteGameIds.push(id);
  }
  localStorage.setItem('vault_favorite_games', JSON.stringify(favoriteGameIds));
  handleFilterAndSearch();
};

// Render

// Generate a self-contained SVG thumbnail (never breaks â€” embedded in page)
function makePlaceholder(game) {
  const title = String(game.title || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const bg = game.bg || '#333';
  const fg = game.fg || '#fff';
  const initials = title.split(' ').slice(0, 2).map(w => w[0] || '').join('').toUpperCase();
  const svg =
    `<svg xmlns='http://www.w3.org/2000/svg' width='600' height='375' viewBox='0 0 600 375'>` +
      `<defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>` +
        `<stop offset='0' stop-color='${bg}'/>` +
        `<stop offset='1' stop-color='#000000' stop-opacity='0.55'/>` +
      `</linearGradient></defs>` +
      `<rect width='600' height='375' fill='url(#g)'/>` +
      `<circle cx='500' cy='70' r='150' fill='${fg}' opacity='0.07'/>` +
      `<circle cx='90' cy='340' r='110' fill='${fg}' opacity='0.05'/>` +
      `<text x='300' y='200' text-anchor='middle' font-family='Outfit, sans-serif' font-size='120' font-weight='900' fill='${fg}' opacity='0.18'>${initials}</text>` +
      `<text x='40' y='300' font-family='Outfit, sans-serif' font-size='40' font-weight='800' fill='${fg}'>${title}</text>` +
      `<text x='40' y='338' font-family='Inter, sans-serif' font-size='20' fill='${fg}' opacity='0.6'>${game.category || ''}</text>` +
    `</svg>`;
  return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
}

// All images are now local (assets/thumbs/*) — never blocked on school WiFi
function getImgSrc(game) {
  if (game.image) return game.image;
  return makePlaceholder(game);
}

// Fallback for the rare case a direct image 404s in the browser
window.placeholderFor = function(img) {
  return makePlaceholder({
    title: img.dataset.title,
    category: img.dataset.category,
    bg: img.dataset.bg,
    fg: img.dataset.fg
  });
};

function renderGrid(gamesToRender, container) {
  container.innerHTML = '';
  
  gamesToRender.forEach((game, index) => {
    const cardWrapper = document.createElement('div');
    // Stagger animation delay for fluidity
    cardWrapper.style.animationDelay = `${index * 0.05}s`;

    const tagHtml = game.tag ? `
      <div class="game-tag-small">
        ${game.tag}
      </div>
    ` : '';
    
    const categorySlug = game.category.toLowerCase().replace(/\s+/g, '-');
    cardWrapper.innerHTML = `
      <div class="game-card-wrapper group cat-${categorySlug}" style="--card-bg: ${game.bg}; --card-fg: ${game.fg}">
        <div class="game-category-tag">
          ${game.category}
        </div>
        <div class="game-card">
          <div class="game-image-container">
            <div class="favorite-btn ${favoriteGameIds.includes(game.id) ? 'active' : ''}" onclick="toggleFavorite(${game.id})">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="${favoriteGameIds.includes(game.id) ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
            </div>
            <img alt="${game.title}" loading="lazy" class="game-image" src="${getImgSrc(game)}" data-title="${game.title}" data-category="${game.category}" data-bg="${game.bg}" data-fg="${game.fg}" onerror="this.onerror=null; this.src=window.placeholderFor(this)" />
            <div class="game-image-overlay"></div>
            <div class="game-hover-overlay">
              <div class="game-hover-play">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
              </div>
            </div>
          </div>
          <div class="game-info">
            <div class="game-title-container">
              <h3 class="game-title">${game.title}</h3>
              ${tagHtml}
            </div>
            <a href="${game.link}" target="_blank" rel="noopener noreferrer" class="game-link" onclick="logRecentGame(${game.id})">
              <button class="game-play-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 fill-current"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
                <span>PLAY NOW</span>
              </button>
            </a>
          </div>
        </div>
      </div>
    `;
    // Dynamic full-page theme on hover
    const card = cardWrapper.querySelector('.game-card');
    card.addEventListener('mouseenter', () => setAmbientTheme(game));
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const cx = rect.width / 2;
      const cy = rect.height / 2;
      const rotateX = ((y - cy) / cy) * -6;
      const rotateY = ((x - cx) / cx) * 6;
      card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
      cardWrapper.style.setProperty('--mx', `${(x / rect.width) * 100}%`);
      cardWrapper.style.setProperty('--my', `${(y / rect.height) * 100}%`);
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
      resetAmbientTheme();
    });
    container.appendChild(cardWrapper);
  });
}

function handleFilterAndSearch() {
  const searchTerm = searchInput.value.toLowerCase();
  const activeFilterBtn = filterContainer.querySelector('.active');
  const activeCategory = activeFilterBtn ? activeFilterBtn.dataset.filter : 'All';

  const filtered = games.filter(game => {
    const matchesSearch = game.title.toLowerCase().includes(searchTerm);
    const matchesCategory = activeCategory === 'All' || game.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const isDefaultView = (activeCategory === 'All' && searchTerm === '');

  if (isDefaultView) {
    // 1. Favorites
    const favoriteGames = favoriteGameIds.map(id => games.find(g => g.id === id)).filter(Boolean);
    const favSection = document.getElementById('favorite-games-section');
    if (favoriteGames.length > 0) {
      favSection.classList.remove('hidden');
      renderGrid(favoriteGames, document.getElementById('favorite-games-grid'));
    } else {
      favSection.classList.add('hidden');
    }

    // 2. Recents
    const recentGames = recentGameIds.map(id => games.find(g => g.id === id)).filter(Boolean).filter(g => !favoriteGameIds.includes(g.id));
    if (recentGames.length > 0) {
      recentGamesSection.classList.remove('hidden');
      renderGrid(recentGames, recentGamesGrid);
    } else {
      recentGamesSection.classList.add('hidden');
    }

    // 3. Main Grid
    const mainGames = filtered.filter(g => !favoriteGameIds.includes(g.id) && !recentGameIds.includes(g.id));
    renderGrid(mainGames, gridContainer);
    return;
  }

  document.getElementById('favorite-games-section').classList.add('hidden');
  recentGamesSection.classList.add('hidden');
  renderGrid(filtered, gridContainer);
}

// Listeners
filterContainer.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    filterContainer.querySelectorAll('button').forEach(btn => btn.classList.remove('active'));
    e.target.classList.add('active');
    handleFilterAndSearch();
  }
});

searchInput.addEventListener('input', handleFilterAndSearch);

function handleBoredClick() {
  let pool = boredPool.length > 0 ? boredPool : games;
  if (pool.length === 0) return;
  const randomItem = pool[Math.floor(Math.random() * pool.length)];
  window.open(randomItem.link, '_blank');
}

document.getElementById('bored-btn').addEventListener('click', handleBoredClick);

// Boot
loadGames();
handleFilterAndSearch();
