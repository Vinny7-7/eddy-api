const express = require('express');
const router = express.Router();
const deb = require("decode-encode-binary")


router.get('/q=:q', (req, res) => {
    let id = req.params.q
    let b = deb.encode(id)

    res.json({binario: b})
});
  module.exports = router;


