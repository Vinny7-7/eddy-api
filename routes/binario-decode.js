const express = require('express');
const router = express.Router();
const deb = require("decode-encode-binary")


router.get('/q=:q', (req, res) => {
    let id = req.params.q
    let b = deb.decode(id)

    res.json({texto: b})
});
  module.exports = router;


