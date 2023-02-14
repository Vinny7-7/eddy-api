const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
res.send('Oi<br/>Tudo bom?<br/>Projeto ainda no inicio<br/>.<br/><b>END POINTS</b><br/>.<br/>/v1/8ball<br/>Respostas aleatórias para perguntas<br/><a href="https://api.eddy-api.tk/v1/8ball"><button>link</button></a><br/>.<br/>/v1/pensamentos<br/>Pensamentos aleatórias (fonte:https://www.pensador.com)<br/> <a href="https://api.eddy-api.tk/v1/pensamentos"><button>link</button></a> <body bgcolor="90ee90"><title>Eddy-api</title>'
        
        )
  });

module.exports = router;