const express = require('express');
const router = express.Router();
const morse = require("morse-converter");

router.get('/decodificar/:morse?', (req, res) => {
    const { morse } = req.params;
    
    if (!morse) {
        return res.status(400).json({ erro: 'O código Morse deve ser fornecido.' });
    }
    
    const decodedText = morse.decode(morse);
    res.json({ texto: decodedText.toLowerCase() });
});

router.get('/codificar/:texto?', (req, res) => {
    const { texto } = req.params;
    
    if (!texto) {
        return res.status(400).json({ erro: 'O texto deve ser fornecido.' });
    }
    
    const encodedMorse = morse.encode(texto);
    res.json({ morse: encodedMorse });
});

module.exports = router;
