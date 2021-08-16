var http = require('http');
var cookie = require('cookie');

http.createServer(function(req, res){
	var cookies = {};
	if(req.headers.cookie !== undefined){
		cookies = cookie.parse(req.headers.cookie);
	}
	res.writeHead(200, {
		'Set-Cookie':['yum_cookie=choco',
					  'tes_cookie=str',
					  `Permanent=cookies; Max-Age=${60*60*24*30}`,//Max-Age 쿠키를 언제 해지할지 지정(절대적)
					  'Secure=Secure; Secure',
					  'HttpOnly=HttpOnly; HttpOnly',
					  'Path=Path; Path=/cookie', //Path 옵션은 특정 디렉토리를 지정하면 해당 디렉토리랑 하위 디렉토리에서만 쿠키가 활성화 된다.
					  'Domain=Domain; Domain=o2.org'
				]
	});
	res.end('Cookie!');
}).listen(3000, () => {
	console.log("쉽지않네요"); 
	
}); 