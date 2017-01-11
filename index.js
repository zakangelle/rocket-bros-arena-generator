const arenas = [
  'DFH Stadium',
  'Urban Central',
  'Mannfield',
  'Beckwith Park',
  'Utopia Coliseum',
  'Wasteland',
  'Neo Tokyo',
  'Aquadome',
  'Starbase ARC'
];

const arenaVariations = {
  'DFH Stadium':  ['Standard', 'Stormy'],
  'Urban Central':  ['Standard', 'Night', 'Dawn'],
  'Mannfield':  ['Standard', 'Stormy'],
  'Beckwith Park':  ['Standard', 'Stormy', 'Midnight'],
  'Utopia Coliseum':  ['Standard', 'Dusk', 'Snowy'],
  'Wasteland':  ['Standard', 'Night']
};

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
  return arenas.filter(arena => arena !== homePlayerVeto &&
    arena !== awayPlayerVeto);
}

function getRandomArena(arenas) {
  const arenaIndex = Math.floor(Math.random() * arenas.length);
  let arena = arenas[arenaIndex];

  if (arenaVariations[arena]) {
    const variationIndex = Math.floor(Math.random() * arenaVariations[arena].length);

    arena += ` (${arenaVariations[arena][variationIndex]})`;
  }

  return arena;
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
