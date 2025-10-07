const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./utils/db');

dotenv.config();

const app = express();

// Connect to MongoDB
// connectDB();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('API is running...');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});