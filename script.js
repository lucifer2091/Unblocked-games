const initialGames = [
  { id: 1, title: "Minecraft Classic", category: "Single Games", link: "https://sites.google.com/view/classroom6x/mnecrft-classic", bg: "rgb(85, 107, 59)", fg: "rgb(242, 234, 211)", image: "https://game-hub--s300107043.replit.app/assets/minecraft-classic-BwseC2eO.png" },
  { id: 2, title: "Slow Roads", category: "Single Games", link: "https://manscod.github.io/other/slowroads/", bg: "rgb(122, 138, 58)", fg: "rgb(27, 26, 10)", image: "https://game-hub--s300107043.replit.app/assets/slow-roads-C3rmmf5p.png" },
  { id: 3, title: "Cookie Clicker", category: "Single Games", link: "https://omaribnzakaria.github.io/ublckdgms/cookieclicker/index.html", bg: "rgb(63, 125, 123)", fg: "rgb(242, 234, 211)", image: "https://cdn.akamai.steamstatic.com/steam/apps/1454400/header.jpg" },
  { id: 4, title: "Progress Knight Rewritten", category: "Single Games", link: "https://zdzban3.github.io/Progress-Knight-Rewritten/", bg: "rgb(47, 72, 88)", fg: "rgb(242, 234, 211)", image: "https://game-hub--s300107043.replit.app/assets/progress-knight-Cjh4DP6b.png" },
  { id: 5, title: "Drawasaurus", category: "Single Games", link: "https://www.drawasaurus.org/", bg: "rgb(168, 83, 49)", fg: "rgb(250, 239, 217)", image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.drawasaurus.org%2F?w=600&h=400" },
  { id: 6, title: "Resource Packs", category: "Tools", link: "https://resourcepacks.gg/en", bg: "rgb(63, 125, 123)", fg: "rgb(242, 234, 211)", image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fresourcepacks.gg%2Fen?w=600&h=400" },
  { id: 7, title: "Drift Boss", category: "Single Games", link: "https://drift-bossonline.github.io/#", bg: "rgb(122, 138, 58)", fg: "rgb(27, 26, 10)", image: "https://game-hub--s300107043.replit.app/assets/drift-boss-CpXg1XQy.png" },
  { id: 8, title: "Geometry Lite", category: "Single Games", link: "https://geometrylite.us.com/", bg: "rgb(168, 83, 49)", fg: "rgb(250, 239, 217)", image: "https://cdn.akamai.steamstatic.com/steam/apps/322170/capsule_616x353.jpg" },

  { id: 11, title: "Unblocked Games (omaribnzakaria)", category: "Hubs", link: "https://omaribnzakaria.github.io/ublckdgms/", bg: "rgb(63, 125, 123)", fg: "rgb(242, 234, 211)", image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fomaribnzakaria.github.io%2Fublckdgms%2F?w=600&h=400" },
  { id: 12, title: "Hooda Math", category: "Hubs", link: "https://www.hoodamath.com/index.html#gsc.tab=0", bg: "rgb(85, 107, 59)", fg: "rgb(242, 234, 211)", image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.hoodamath.com%2Findex.html%23gsc.tab%3D0?w=600&h=400" },
  { id: 13, title: "Drift Boss New", category: "Single Games", link: "https://drift-bossonline.github.io/category/new.html", bg: "rgb(168, 83, 49)", fg: "rgb(250, 239, 217)", image: "https://game-hub--s300107043.replit.app/assets/drift-boss-CpXg1XQy.png" },
  { id: 14, title: "Classroom 6x", category: "Hubs", link: "https://sites.google.com/view/classroom6x/home", bg: "rgb(122, 138, 58)", fg: "rgb(27, 26, 10)", image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fsites.google.com%2Fview%2Fclassroom6x%2Fhome?w=600&h=400" },
  { id: 15, title: "Yoosfuhl Games", category: "Hubs", link: "https://yoosfuhl.com/games", bg: "rgb(156, 58, 44)", fg: "rgb(250, 239, 217)", image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fyoosfuhl.com%2Fgames?w=600&h=400" },
  { id: 16, title: "MSN Classics", category: "Hubs", link: "https://www.msn.com/en-us/play/classicsa", bg: "rgb(156, 58, 44)", fg: "rgb(250, 239, 217)", image: "https://game-hub--s300107043.replit.app/assets/msn-classics-BFzIt_Pv.png" },
  { id: 17, title: "Google Games Search", category: "Tools", link: "https://www.google.com/search?q=google+games", bg: "rgb(176, 103, 110)", fg: "rgb(35, 21, 7)", image: "https://game-hub--s300107043.replit.app/assets/google-games-search-DJdYrTgG.png" },
  { id: 18, title: "UBG66", category: "Hubs", link: "https://sites.google.com/view/ubg66/home", bg: "rgb(122, 138, 58)", fg: "rgb(27, 26, 10)", image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fsites.google.com%2Fview%2Fubg66%2Fhome?w=600&h=400" },
  { id: 19, title: "Study75", category: "Hubs", link: "https://study75.space/", bg: "rgb(122, 138, 58)", fg: "rgb(27, 26, 10)", image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fstudy75.space%2F?w=600&h=400" },
  { id: 20, title: "Classroom Center", category: "Hubs", link: "https://sites.google.com/classroom.center/view-1/", bg: "rgb(176, 103, 110)", fg: "rgb(35, 21, 7)", image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fsites.google.com%2Fclassroom.center%2Fview-1%2F?w=600&h=400" },
  { id: 21, title: "Games Unblocked GitLab", category: "Hubs", link: "https://gamesunblocked.gitlab.io/", bg: "rgb(122, 138, 58)", fg: "rgb(27, 26, 10)", image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fgamesunblocked.gitlab.io%2F?w=600&h=400" },
  { id: 22, title: "Geometry Dash SubZero", category: "Single Games", link: "https://geometry-dash-unbanned.github.io/play/geometry-dash-subzero.html#", bg: "rgb(156, 58, 44)", fg: "rgb(250, 239, 217)", image: "https://game-hub--s300107043.replit.app/assets/geometry-subzero-B1-PzkDw.png" },
  { id: 23, title: "Amplify Games", category: "Hubs", link: "https://r8r7.github.io/amplify/games/", bg: "rgb(107, 58, 94)", fg: "rgb(245, 231, 216)", image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fr8r7.github.io%2Famplify%2Fgames%2F?w=600&h=400" },
  { id: 24, title: "Unblocked Gamers", category: "Hubs", link: "https://www.unblockedgamers.com/", bg: "rgb(47, 72, 88)", fg: "rgb(242, 234, 211)", image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.unblockedgamers.com%2F?w=600&h=400" },
  { id: 25, title: "Getaway Shootout", category: "Single Games", link: "https://ubg67.gitlab.io/game/getaway-shootout.html", bg: "rgb(168, 83, 49)", fg: "rgb(250, 239, 217)", image: "https://game-hub--s300107043.replit.app/assets/getaway-shootout-BGeK6_QK.png" },
  { id: 26, title: "Unblocked Games 4 Me", category: "Hubs", link: "https://sites.google.com/site/unblockedgames4me/", bg: "rgb(168, 83, 49)", fg: "rgb(250, 239, 217)", image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fsites.google.com%2Fsite%2Funblockedgames4me%2F?w=600&h=400" },
  { id: 27, title: "Minecraft 1.8 WebAssembly", category: "Minecraft", link: "https://omaribnzakaria.github.io/ublckdgms/eaglercraftwasm/188.html", bg: "rgb(47, 72, 88)", fg: "rgb(242, 234, 211)", tag: "WebAssembly", image: "https://www.minecraft.net/content/dam/games/minecraft/key-art/Games_Subnav_Minecraft-300x465.jpg" },
  { id: 28, title: "Minecraft 1.12 WebAssembly", category: "Minecraft", link: "https://omaribnzakaria.github.io/ublckdgms/eaglercraftwasm/1122.html", bg: "rgb(201, 152, 70)", fg: "rgb(35, 21, 7)", tag: "WebAssembly", image: "https://www.minecraft.net/content/dam/games/minecraft/key-art/Games_Subnav_Minecraft-300x465.jpg" },
  { id: 29, title: "Minecraft 1.8 Download", category: "Minecraft", link: "https://drive.google.com/file/d/1xFOfwquT4cXPoeEq-0bLANQIjldh1o9C/view?usp=drive_link", bg: "rgb(168, 83, 49)", fg: "rgb(250, 239, 217)", tag: "Downloads", image: "https://www.minecraft.net/content/dam/games/minecraft/key-art/Games_Subnav_Minecraft-300x465.jpg" },
  { id: 30, title: "Minecraft 1.12 Download", category: "Minecraft", link: "https://drive.google.com/file/d/1yMy9I1utHcdTQCdyyqy6Zpjh4XgwqCjo/view?usp=sharing", bg: "rgb(63, 125, 123)", fg: "rgb(242, 234, 211)", tag: "Downloads", image: "https://www.minecraft.net/content/dam/games/minecraft/key-art/Games_Subnav_Minecraft-300x465.jpg" },
  { id: 31, title: "Minecraft JavaScript 1.8", category: "Minecraft", link: "https://omaribnzakaria.github.io/ublckdgms/eaglercraftjs/188.html", bg: "rgb(122, 138, 58)", fg: "rgb(27, 26, 10)", tag: "JavaScript", image: "https://www.minecraft.net/content/dam/games/minecraft/key-art/Games_Subnav_Minecraft-300x465.jpg" },
  { id: 32, title: "Minecraft JavaScript 1.12", category: "Minecraft", link: "https://omaribnzakaria.github.io/ublckdgms/eaglercraftjs/1122.html", bg: "rgb(47, 72, 88)", fg: "rgb(242, 234, 211)", tag: "JavaScript", image: "https://www.minecraft.net/content/dam/games/minecraft/key-art/Games_Subnav_Minecraft-300x465.jpg" }
];

// ─── BORED POOL ───────────────────────────────────────────────
// Add extra links here anytime — the bored button picks randomly from this list.
// If the list is empty, it falls back to picking from the main games list.
const boredPool = [
  // Add more links here as: { title: "Name", link: "https://..." }
];
// ──────────────────────────────────────────────────────────────

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
    // Cross-fade: fade out → swap image → fade back in
    ambientImageLayer.style.opacity = '0';
    ambientSwapTimer = setTimeout(() => {
      ambientImageLayer.style.backgroundImage = `url('${game.image}')`;
      ambientImageLayer.style.opacity = '0.45';
    }, 350);
  } else {
    // First hover: just fade in normally
    ambientImageLayer.style.backgroundImage = `url('${game.image}')`;
    ambientImageLayer.classList.add('active');
  }

  root.style.setProperty('--theme-accent', game.bg);
  root.style.setProperty('--theme-accent-2', game.fg);
}

function resetAmbientTheme() {
  ambientResetTimer = setTimeout(() => {
    ambientImageLayer.classList.remove('active');
    ambientImageLayer.style.opacity = '';
    root.style.setProperty('--theme-accent', '#6366f1');
    root.style.setProperty('--theme-accent-2', '#ec4899');
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

// Custom Specific Images for known games & mshots fallback
// (Removed getSpecificImage function since image URLs are hardcoded from original site)

// Render
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
    
    cardWrapper.innerHTML = `
      <div class="game-card-wrapper group">
        <div class="game-category-tag">
          ${game.category}
        </div>
        <div class="game-card">
          <div class="game-image-container">
            <div class="favorite-btn ${favoriteGameIds.includes(game.id) ? 'active' : ''}" onclick="toggleFavorite(${game.id})">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="${favoriteGameIds.includes(game.id) ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
            </div>
            <img alt="${game.title}" loading="lazy" class="game-image" src="${game.image}" onerror="this.src='https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&h=400&fit=crop'" />
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
    card.addEventListener('mouseleave', () => resetAmbientTheme());
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
