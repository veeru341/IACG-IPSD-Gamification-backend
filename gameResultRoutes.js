const express = require('express');
const router = express.Router();
const gameResultController = require('./gameResultController');

// Create a new game result
router.post('/game-results', gameResultController.createGameResult);

// Get all game results
router.get('/game-results', gameResultController.getGameResults);

// Get all game results for a specific game
router.get('/game-results/game/:gameId', gameResultController.getGameResultsByGameId);

// Get a specific game result by ID
router.get('/game-results/:id', gameResultController.getGameResultById);

module.exports = router;