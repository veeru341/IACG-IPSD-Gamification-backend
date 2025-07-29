const GameResult = require('./gameResultModel');

exports.createGameResult = async (req, res) => {
  try {
    const { gameId, score, speed } = req.body;
    const newResult = new GameResult({ gameId, score, speed });
    await newResult.save();
    res.status(201).json({ message: 'Game result saved', result: newResult });
  } catch (error) {
    res.status(500).json({ error: 'Failed to save game result', error: error.message });
  }
};

exports.getGameResults = async (req, res) => {
  try {
    const results = await GameResult.find().sort({ createdAt: -1 });
    res.status(200).json({ results });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch game results', message: error.message });
  }
};

exports.getGameResultById = async (req, res) => {
  try {
    const result = await GameResult.findById(req.params.id);
    if (!result) {
      return res.status(404).json({ error: 'Game result not found' });
    }
    res.status(200).json({ result });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch game result', message: error.message });
  }
};

exports.getGameResultsByGameId = async (req, res) => {
  try {
    const gameId = parseInt(req.params.gameId);
    const results = await GameResult.find({ gameId }).sort({ createdAt: -1 });
    res.status(200).json({ results });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch game results', message: error.message });
  }
};