const matchups = require('./matchups.js');
const arenaVetoes = require('./arena-vetoes.js');
const generateGames = require('./generate-games.js');

generateGames(matchups, arenaVetoes);
