const express = require('express');
const router = express.Router();
const morse = require("morse-converter")


router.get('/:q', (req, res) => {
    let id = req.params.q
    let m  = morse.decode(id)


    res.json({texto: m.toLowerCase()})
});
  module.exports = router;


