var http = require('http');
var cookie = require('cookie');

http.createServer(function(req, res){
	var cookies = {};
	if(req.headers.cookie !== undefined){
		cookies = cookie.parse(req.headers.cookie);
	}
	console.log(cookies.yum_cookie);
	res.writeHead(200, {
		'Set-Cookie':['yum_cookie=choco', 'tes_cookie=str']
	});
	res.end('Cookie!');
}).listen(3000);