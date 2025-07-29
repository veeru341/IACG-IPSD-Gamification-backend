const mongoose = require('mongoose');

const gameResultSchema = new mongoose.Schema({
  score: { type: Number, required: true },
  speed: { type: Number, required: true },
  // Add more fields as needed
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('GameResult', gameResultSchema); 