const GameResult = require('./gameResultModel');

exports.createGameResult = async (req, res) => {
  try {
    const { gameId, score, speed } = req.body;
    const newResult = new GameResult({ gameId, score, speed });
    await newResult.save();
    res.status(201).json({ message: 'Game result saved', result: newResult });
  } catch (error) {
    res.status(500).json({ error: 'Failed to save game result' });
  }
}; 