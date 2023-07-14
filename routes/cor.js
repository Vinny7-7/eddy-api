const express = require('express');
const router = express.Router();
const hexColorInfo = require('hex-colors-info');

router.get('/:cor?', (req, res) => {
  const cor = req.params.cor;

  if (!cor) {
    return res.status(400).json({ erro: 'A cor deve ser fornecida.' });
  }

  const colorInfo = hexColorInfo(cor);
  
  if (!colorInfo) {
    return res.status(400).json({ erro: 'Cor inválida.' });
  }
  
  res.json(colorInfo);
});

module.exports = router;
