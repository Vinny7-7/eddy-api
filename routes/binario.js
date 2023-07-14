const express = require('express');
const router = express.Router();
const deb = require("decode-encode-binary");

router.get('/codificar/:texto?', (req, res) => {
  const { texto } = req.params;

  if (!texto) {
    return res.status(400).json({ erro: 'O texto deve ser fornecido.' });
  }

  const binario = deb.encode(texto);
  res.json({ binario });
});

router.get('/decodificar/:binario?', (req, res) => {
  const { binario } = req.params;

  if (!binario) {
    return res.status(400).json({ erro: 'O código binário deve ser fornecido.' });
  }

  const regex = /^[01]+$/;
  if (!regex.test(binario)) {
    return res.status(400).json({ erro: 'O código binário deve conter apenas 0 e 1.' });
  }

  const texto = deb.decode(binario);
  res.json({ texto });
});

module.exports = router;
