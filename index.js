const arenas = [
  {
    name: 'Aquadome',
    variations: ['Standard']
  },
  {
    name: 'Beckwith Park',
    variations: ['Standard', 'Stormy', 'Midnight']
  },
  {
    name: 'DFH Stadium',
    variations: ['Standard', 'Stormy']
  },
  {
    name: 'Mannfield',
    variations: ['Standard', 'Stormy']
  },
  {
    name: 'Neo Tokyo',
    variations: ['Standard']
  },
  {
    name: 'Starbase ARC',
    variations: ['Standard']
  },
  {
    name: 'Urban Central',
    variations: ['Standard', 'Night', 'Dawn']
  },
  {
    name: 'Utopia Coliseum',
    variations: ['Standard', 'Dusk', 'Snowy']
  },
  {
    name: 'Wasteland',
    variations: ['Standard', 'Night']
  },
];

const arenaVetoes = {
  JP: 'Neo Tokyo',
  Kevin: '',
  Damion: 'Neo Tokyo',
  Drake: '',
  Zak: 'Starbase ARC',
  Lyle: '',
  BVal: '',
  Ross: 'Aquadome'
};

const games = [
  ['JP', 'Kevin'],
  ['BVal', 'Ross'],
  ['Damion', 'Drake'],
  ['Zak', 'Lyle'],
  ['BVal', 'Damion'],
  ['Ross', 'Lyle'],
  ['Kevin', 'Drake'],
  ['JP', 'Zak'],
  ['Drake', 'Ross'],
  ['Zak', 'BVal'],
  ['Damion', 'Kevin'],
  ['Lyle', 'JP'],
  ['Drake', 'Zak'],
  ['Ross', 'Damion'],
  ['JP', 'BVal'],
  ['Lyle', 'Kevin'],
  ['Damion', 'JP'],
  ['BVal', 'Lyle'],
  ['Zak', 'Ross'],
  ['Lyle', 'Drake'],
  ['Ross', 'Kevin'],
  ['JP', 'Drake'],
  ['Damion', 'Zak'],
  ['Kevin', 'BVal'],
  ['Ross', 'JP'],
  ['Kevin', 'Zak'],
  ['Damion', 'Lyle'],
  ['Drake', 'BVal']
];

function filterArenaVetoes(homePlayerVeto, awayPlayerVeto) {
  return arenas.filter(arena => arena.name !== homePlayerVeto &&
    arena.name !== awayPlayerVeto);
}

function getRandomArena(arenas) {
  const arenaIndex = Math.floor(Math.random() * arenas.length);
  const arena = arenas[arenaIndex];
  const variationIndex = Math.floor(Math.random() * arena.variations.length);
  const variation = arena.variations[variationIndex];

  return `${arena.name} (${variation})`;
}

function setupGame(game) {
  const homePlayer = game[0];
  const awayPlayer = game[1];

  const homePlayerVeto = arenaVetoes[homePlayer];
  const awayPlayerVeto = arenaVetoes[awayPlayer];

  const playableArenas = filterArenaVetoes(homePlayerVeto, awayPlayerVeto);
  const arena = getRandomArena(playableArenas);

  return {
    homePlayer,
    awayPlayer,
    arena
  };
}

function logGameDetails({ homePlayer, awayPlayer, arena }) {
  console.log('\x1b[36m%s\x1b[0m', `${homePlayer} vs. ${awayPlayer}`);
  console.log(`${arena}\n`);
}

function setupGames() {
  games.forEach(game => {
    const gameDetails = setupGame(game);
    logGameDetails(gameDetails);
  });
}

setupGames();
