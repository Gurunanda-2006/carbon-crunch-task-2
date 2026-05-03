const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const nftRoutes = require('./routes/nfts');
const artistRoutes = require('./routes/artists');

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/nfts', nftRoutes);
app.use('/api/artists', artistRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'NFTme API is running' });
});

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected');
    app.listen(process.env.PORT || 5000, () => {
      console.log(`Server running on port ${process.env.PORT || 5000}`);
    });
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
    // Start server anyway for frontend dev
    app.listen(process.env.PORT || 5000, () => {
      console.log(`Server running on port ${process.env.PORT || 5000} (without DB)`);
    });
  });
