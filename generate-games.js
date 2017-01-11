module.exports = generateGames;

const arenas = require('./arenas.js');

/**
 * Filter out player arena vetoes
 * @param {string} homePlayerVeto
 * @param {string} awayPlayerVeto
 */
function filterArenaVetoes(homePlayerVeto, awayPlayerVeto) {
  return arenas.filter(arena => arena.name !== homePlayerVeto &&
    arena.name !== awayPlayerVeto);
}

/**
 * Generate a random arena and arena variation from the list of arenas
 * @param {Array:object} arenas
 */
function getRandomArena(arenas) {
  const arenaIndex = Math.floor(Math.random() * arenas.length);
  const arena = arenas[arenaIndex];

  const variationIndex = Math.floor(Math.random() * arena.variations.length);
  const variation = arena.variations[variationIndex];

  return `${arena.name} (${variation})`;
}

/**
 * Set up game with home player, away player, and random unvetoed arena
 * @param {Array:string} matchup
 * @param {Object} arenaVetoes
 */
function generateGame(matchup, arenaVetoes) {
  const homePlayer = matchup[0];
  const awayPlayer = matchup[1];

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

/**
 * Print out matchup details to the terminal
 * @param {string} homePlayer
 * @param {string} awayPlayer
 * @param {string} arena
 */
function logGameDetails({ homePlayer, awayPlayer, arena }) {
  console.log('\x1b[36m%s\x1b[0m', `${homePlayer} vs. ${awayPlayer}`);
  console.log(`${arena}\n`);
}

/**
 * Generate the list of games with player matchup and arena
 * @param {Array:array} matchups
 * @param {Object} arenaVetoes
 */
function generateGames(matchups, arenaVetoes) {
  matchups.forEach(matchup => {
    const game = generateGame(matchup, arenaVetoes);
    logGameDetails(game);
  });
}
