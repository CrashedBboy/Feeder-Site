var express = require('express');
var TCPServer = require('../TCP/server.js');
var fs = require("fs");
var file = "./feeder.db";
var sqlite3 = require("sqlite3").verbose();

var router = express.Router();
var db = new sqlite3.Database(file);
var server = new TCPServer;
server.setPort(3001);
server.create();
server.start();
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/test', function(req, res, next) {
	server.response("Hello!");
	res.send("1");
});

router.get('/db', function(req, res, next) {
	db.serialize(function() {
		var stmt = db.prepare("INSERT INTO Feeder VALUES (?)");
		stmt.run(Math.floor(new Date().getTime()/1000));

		stmt.finalize();

		db.each("SELECT rowid AS id, last_feed FROM Feeder", function(err, row) {
			console.log(row.id + ": " + row.last_feed);
		});
	});

	res.send("2");
})

module.exports = router;

