const express = require('express');
const router = express.Router();

const nfts = [
  { id: 1, title: 'Bitcoin Art', artist: 'Jonathan Borba', price: '1.09', usd: '1835', image: 'rect1' },
  { id: 2, title: 'Golden Shapes', artist: 'Javier Miranda', price: '2.3', usd: '3890', image: 'rect2' },
  { id: 3, title: 'Fluid Gold', artist: 'Aleksandra Bashova', price: '2.3', usd: '3890', image: 'rect3' },
  { id: 4, title: 'Golden Flower', artist: 'Javier Miranda', price: '2.3', usd: '3890', image: 'rect4' },
  { id: 5, title: 'Bloom Head', artist: 'Aleksandra Bashova', price: '2.3', usd: '3890', image: 'rect5' },
  { id: 6, title: 'Golden Flower', artist: 'Milad Fakurian', price: '2.3', usd: '3890', image: 'rect6' },
  { id: 7, title: 'Red Mask', artist: 'Erlon', price: '2.3', usd: '3890', image: 'rect7' },
];

router.get('/', (req, res) => {
  res.json(nfts);
});

router.get('/:id', (req, res) => {
  const nft = nfts.find((n) => n.id === parseInt(req.params.id));
  if (!nft) return res.status(404).json({ message: 'NFT not found' });
  res.json(nft);
});

module.exports = router;
