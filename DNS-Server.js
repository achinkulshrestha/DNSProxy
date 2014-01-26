//import required libraries
var dns = require('native-dns');
var util = require('util');

var server = dns.createServer();

server.on('request', function (request, response) {
	
	var domain = request.question[0].name;
	console.log(domain);
		var entry = {
				name: domain,
				address:'192.168.50.112', //Enter the fake DNS IP you want the machine to redirect every hostname to
				ttl: 30
			};
		console.log(entry);
		response.answer.push(dns.A(entry));
		response.send();
});

server.on('error', function (err, buff, req, res) {
  console.log(err.stack);
});

console.log('Listening on '+53);
server.serve(53);