'use strict';
var net = require('net');

var TCPServer = function() {
	this.server = null;
	this.port = null;
	this.sock = [];
}

TCPServer.prototype = {
	setPort(port) {
		this.port = port;
	},

	create() {
		this.server = net.createServer(this.connectionHandler.bind(this));
	},

	connectionHandler(sock) {
		this.sock.push(sock);

		console.log('[CONNECTED] ' + sock.remoteAddress +':'+ sock.remotePort);
		sock.on('data', function(data) {
			console.log('[DATA] ' + sock.remoteAddress + ': ' + data);
			sock.write('You said "' + data + '"');
		});

		sock.on('close', function(data) {
			console.log('[CLOSED] ' + sock.remoteAddress +' '+ sock.remotePort);
		});
	},

	start() {
		var p = this.port;
		this.server.listen(this.port, function() {
			console.log("Server listening on port " + p + "...");
		});
	},

	feed() {
		this.sock.forEach(function(element, index, array){
			element.pause();
			element.write("feedmyfish");
			element.resume();
		});
	}
}

module.exports = TCPServer;
