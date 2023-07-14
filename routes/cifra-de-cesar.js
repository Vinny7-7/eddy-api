const cesar = require('caesar-encrypt');
const express = require('express');
const router = express.Router();

router.get('/criptografar/cifra=:cifra?&chave=:chave?', (req, res) => {
    let cifra = req.params.cifra;
    let chave = req.params.chave;
    
    if (!cifra || !chave) {
        res.status(400).json({ erro: 'Os parâmetros cifra e chave devem ser fornecidos.' });
    } else if (isNaN(chave)) {
        res.status(400).json({ erro: 'A chave deve ser um número.' });
    } else {
        let resp = cesar.encrypt(cifra, Number(chave));
        res.json({ texto: resp });
    }
});

router.get('/descriptografar/cifra=:q?&chave=:e?', (req, res) => {
    let cifra = req.params.q;
    let chave = req.params.e;
    
    if (!cifra || !chave) {
        res.status(400).json({ erro: 'Os parâmetros cifra e chave devem ser fornecidos.' });
    } else if (isNaN(chave)) {
        res.status(400).json({ erro: 'A chave deve ser um número.' });
    } else {
        let resp = cesar.decrypt(cifra, Number(chave));
        res.json({ texto: resp });
    }
});

module.exports = router;
