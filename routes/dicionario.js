const express = require('express');
const router = express.Router();
const dicio = require("dicio-br");

router.get('/:palavra?', async (req, res) => {
    const { palavra } = req.params;
    
    if (!palavra) {
        return res.status(400).json({ erro: 'A palavra deve ser fornecida.' });
    }
    
    try {
        const resultado = await dicio(palavra);
        res.json({ significado: resultado });
    } catch (error) {
        res.status(500).json({ erro: 'Ocorreu um erro ao consultar o dicionário.' });
    }
});

module.exports = router;
