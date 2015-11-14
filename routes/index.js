var express = require('express');
var router = express.Router();
var TCPServer = require('../TCP/server.js');

var server = new TCPServer;
server.setPort(3001);
server.create();
server.start();
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/test', function(req, res, next) {
	res.send("1");
	server.response("Hello!");
});


module.exports = router;
