const express = require('express');
const router = express.Router();

const pball = ['Não','Sim','Nunca','Tá louco?','Não me pergunte isso!','Claro que sim','Claro que não','Pelo que vejo não','Pelo que vejo sim','Prefiro não responder','Não sei','Lógico'];
router.get('/', (req, res) => {
    const pballa = pball[Math.floor(Math.random() * pball.length)];
  console.log('request de: 8ball')
    res.json({resposta: pballa})
});
  module.exports = router;


