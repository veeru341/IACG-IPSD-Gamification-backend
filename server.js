const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const gameResultRoutes = require('./gameResultRoutes');

const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb+srv://veeru:veeru1@cluster1.xdlutxp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1';

app.use(cors());
app.use(bodyParser.json());

mongoose.connect(MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

app.get('/', (req, res)=>{
  res.send("I am working")
})

app.use('/api', gameResultRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});