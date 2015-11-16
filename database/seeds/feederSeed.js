var fs = require("fs");
var file = "../feeder.db";
var sqlite3 = require("sqlite3").verbose();

var db = new sqlite3.Database(file);
db.serialize(function() {
	db.run("CREATE TABLE IF NOT EXISTS Feeder (last_feed BIGINT)");
	var stmt = db.prepare("INSERT INTO Feeder VALUES (?)");
	stmt.run(Math.floor(new Date(1995, 2, 5, 0, 0, 0, 0).getTime()/1000));
	stmt.finalize();
});
db.close();
