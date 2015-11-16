var express = require('express');
var TCPServer = require('../TCP/server.js');
var fs = require("fs");
var file = "./database/feeder.db";
var sqlite3 = require("sqlite3").verbose();

var router = express.Router();
var db = new sqlite3.Database(file);
db.serialize(function() {
  db.run("CREATE TABLE IF NOT EXISTS  Feeder (last_feed BIGINT)");
});

var server = new TCPServer;
server.setPort(3001);
server.create();
server.start();

router.get('/', function(req, res, next) {
	db.get("SELECT rowid AS id, last_feed FROM Feeder", function(err, row) {
		console.log("id :" + row.id + ", last_feed: " + row.last_feed);
		var now = Math.floor(new Date().getTime() / 1000);
		var period = Math.floor((now - row.last_feed) / 86400 );
		res.render('index', { period: period });
	});
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
});

router.post('/feed', function(req, res, next) {
	server.response('feed');
	var stmt = db.prepare("UPDATE Feeder SET last_feed = ? WHERE rowid = 1");
	stmt.run(Math.floor(new Date().getTime()/1000));
	stmt.finalize();
	res.redirect('/');
});

module.exports = router;

