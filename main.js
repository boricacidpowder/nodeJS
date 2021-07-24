var http = require('http');
var fs = require('fs');
var url = require('url');

var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query
		,pathname = url.parse(_url, true).pathname;
    var title = queryData.id;
    var filePath = queryData.id;
	if(pathname === '/') {
		if(queryData.id === undefined){
			//fs.readFile(`data/${filePath}`, 'utf8', function(err, description){	
			fs.readdir('./data', function(err, filelist){
				console.log(filelist);
			});
			var template = `
			<!doctype html>
			<html>
				<head>
					<title>WEB1 - ${title}</title>
					<meta charset="utf-8">
				</head>
				<body>
					<h1><a href="/">WEB</a></h1>
					<ul>
					  <li><a href="/?id=HTML">HTML</a></li>
					  <li><a href="/?id=CSS">CSS</a></li>
					  <li><a href="/?id=JavaScript">JavaScript</a></li>
					</ul>
					<h2>${title}</h2>
					<p>${description}</p>
				</body>
			</html>
			`;
			response.writeHead(200);
			response.end(template);
			//});
		}else{
			fs.readFile(`data/${filePath}`, 'utf8', function(err, description){
				var title = 'Welcome';
			var template = `
			<!doctype html>
			<html>
				<head>
					<title>WEB1 - ${title}</title>
					<meta charset="utf-8">
				</head>
				<body>
					<h1><a href="/">WEB</a></h1>
					<ul>
					  <li><a href="/?id=HTML">HTML</a></li>
					  <li><a href="/?id=CSS">CSS</a></li>
					  <li><a href="/?id=JavaScript">JavaScript</a></li>
					</ul>
					<h2>${title}</h2>
					<p>${description}</p>
				</body>
			</html>
			`;
			response.writeHead(200);
			response.end(template);
			});
		}
	}else {
		response.writeHead(404);
		response.end('zzzzzzzzzz');
	}
});
app.listen(3000);