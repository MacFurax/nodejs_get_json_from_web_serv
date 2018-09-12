var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('fxcuelist', { title: 'Fx Cues List' });
});

module.exports = router;