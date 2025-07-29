const express = require('express');
const router = express.Router();
const gameResultController = require('./gameResultController');

router.post('/game-results', gameResultController.createGameResult);

module.exports = router; 