var express = require('express');
var router = express.Router();
var TCPServer = require('../TCP/server.js');
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/ask', function(req, res, next) {
	res.send("1");
});

console.log(TCPServer.HOST);

module.exports = router;
