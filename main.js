// 코드를 더 효율적으로 바꾸는것을 리팩터링
var http = require('http');
var fs = require('fs');
var url = require('url');
var qs = require('querystring');
var template = require('./lib/template.js');
var path = require('path');
//var sanitizeHtml = require('sanitize-html')

var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname;
    if(pathname === '/'){
      if(queryData.id === undefined){
        fs.readdir('./data', function(error, filelist){
          var title = 'Welcome';
          var description = 'Hello, Node.js';
          var list = template.list(filelist);
          var html = template.HTML(title, list,
            `<h2>${title}</h2>${description}`,
            `<a href="/create">create</a>`
          );
          response.writeHead(200);
          response.end(html);
        });
      } else {
        fs.readdir('./data', function(error, filelist){
		  var filteredId = path.parse(queryData.id).base;
          fs.readFile(`data/${filteredId}`, 'utf8', function(err, description){
            var title = queryData.id;
			// var sanitizedTitle = sanitizeHtml(title);
			// var sanitizedDescription = sanitizeHtml(description);
            var list = template.list(filelist);
            var html = template.HTML(title, list,
              `<h2>${title}</h2>${description}`,
              `<a href="/create">create</a> <a href="/update?id=${title}">update</a> 
			   <form action="/del_process" method="post" onsubmit="return confirm('정말로 삭제할꺼야?');>
					<input type="hidden" name="id" value="${title}">
					<input type="submit" value="delete">
				</form>`
            );
            response.writeHead(200);
            response.end(html);
          });
        });
      }
    } else if(pathname === '/create'){
      fs.readdir('./data', function(error, filelist){
        var title = 'WEB - create';
        var list = template.list(filelist);
        var html = template.HTML(title, list, `
          <form action="/create_process" method="post">
            <p><input type="text" name="title" placeholder="title"></p>
            <p>
              <textarea name="description" placeholder="description"></textarea>
            </p>
            <p>
              <input type="submit">
            </p>
          </form>
        `, '');
        response.writeHead(200);
        response.end(html);
      });
    } else if(pathname === '/create_process'){
      var body = ''; 
      request.on('data', function(data){
          body = body + data;
      });
      request.on('end', function(){
          var post = qs.parse(body);
          var title = post.title;
          var description = post.description;
          fs.writeFile(`data/${title}`, description, 'utf8', function(err){
            response.writeHead(302, {Location: `/?id=${title}`});
            response.end();
          })
      });
    } else if(pathname === '/update'){
      fs.readdir('./data', function(error, filelist){
		var filteredId = path.parse(queryData.id).base;
        fs.readFile(`data/${filteredId}`, 'utf8', function(err, description){
		  // var sanitizedTitle = sanitizeHtml(title);
		  // var sanitizedDescription = sanitizeHtml(description);
          var title = queryData.id;
          var list = template.list(filelist);
          var html = template.HTML(title, list,
            `
            <form action="/update_process" method="post">
              <input type="hidden" name="id" value="${title}">
              <p><input type="text" name="title" placeholder="title" value="${title}"></p>
              <p>
                <textarea name="description" placeholder="description">${description}</textarea>
              </p>
              <p>
                <input type="submit">
              </p>
            </form>
            `,
            `<a href="/create">create</a> <a href="/update?id=${title}">update</a>`
          );
          response.writeHead(200);
          response.end(html);
        });
      });
    } else if(pathname === "/update_process"){
		var body = "";
		request.on('data', function(data){
			body = body + data;
		});
	request.on('end', function(){
		var post = qs.parse(body);
		var id = post.id;
		var title = post.title;
		var description = post.description;
		fs.rename(`data/${id}`, `data/${title}`, function(err){
			fs.writeFile(`data/${title}`, description, 'utf8', function(err){
				response.writeHead(302, {Location: `/?id=${title}`});
				response.end();
			})
		})
		console.log(post);	
	});
	} else if(pathname === "/del_process"){
		var body = "";
		request.on('data', function(data){
			body = body + data;
		});
		request.on('end', function(){
			var post = qs.parse(body);
			var id = post.id;
			var filteredId = path.parse(id).base;
			fs.unlink(`data/${filteredId}`, function(err){		//첫번째 인수는 삭제할 id값을 이용해 경로를 전달. 두번짼 콜백함수로 삭제완료후 처리할 내용들 
				response.writeHead(302, {Location: `/`});
				response.end();
			});
		});
	}
	 else {
      response.writeHead(404);
      response.end('Not found');
    }
});
app.listen(3000, () => {
	console.log("쉽지않네요"); 
	
}); 