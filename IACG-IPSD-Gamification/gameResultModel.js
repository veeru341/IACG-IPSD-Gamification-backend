const mongoose = require('mongoose');

const gameResultSchema = new mongoose.Schema({
  gameId: { type: String, required: true },
  score: { type: Number, required: true },
  speed: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('GameResult', gameResultSchema); 