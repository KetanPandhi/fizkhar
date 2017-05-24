const express = require('express');
const router = express.Router();

/* GET api listing. */
router.get('/notes', (req, res) => {
  res.send({"note":'service works'});
});

module.exports = router;