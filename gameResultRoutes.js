const express = require('express');
const router = express.Router();
const gameResultController = require('./gameResultController');

// Create a new game result
router.post('/game-results', gameResultController.createGameResult);

// Get all game results
router.get('/results', gameResultController.getGameResults);

module.exports = router;