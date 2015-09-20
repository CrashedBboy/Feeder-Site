var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/ask', function(req, res, next) {
	res.send("1");
});

module.exports = router;
