const express = require('express');
const router = express.Router();
const hexColorInfo = require ('hex-colors-info')



router.get('/:q', (req, res) => {
    let cor = req.params.q
    const colorInfo = hexColorInfo(cor)
    res.json(colorInfo)
});
  module.exports = router;


