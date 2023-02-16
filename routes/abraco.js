const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    const random = Math.floor(Math.random() * 27)
    let r = 'https://api-eddy.onrender.com/imagens/abraco/'+random+'.gif'
    console.log('request de: abraço')
    res.json({link: r})
});
  module.exports = router;


