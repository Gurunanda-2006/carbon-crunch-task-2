const express = require('express');
const router = express.Router();

const artists = [
  { id: 1, name: 'Jonathan Borba', role: 'Digital Artist', avatar: 'ellipse1' },
  { id: 2, name: 'Javier Miranda', role: 'NFT Creator', avatar: 'ellipse2' },
  { id: 3, name: 'Aleksandra Bashova', role: 'Visual Artist', avatar: 'ellipse3' },
  { id: 4, name: 'Milad Fakurian', role: '3D Artist', avatar: 'ellipse4' },
];

router.get('/', (req, res) => {
  res.json(artists);
});

module.exports = router;
