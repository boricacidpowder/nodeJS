var express = require('express')
var app = express()
var fs = require('fs');
var path = require('path');
var sanitizeHtml = require('sanitize-html');
var template = require('./lib/template.js');
var qs = require('querystring');
var bodyParser = require('body-parser');
var compression = require('compression');

app.use(bodyParser.urlencoded({ extended: false}));
app.use(compression());
//왜 안되지 ;;
app.use(express.static('public'));
app.get('*', function(req, res, next) {
	fs.readdir('./data', function(error, filelist){
		req.list = filelist;
		next();
	});
});


//route, routing
//app.get('/', (req, res) => res.send('Hello World!'))
app.get('/', function(req, res) { 
    var title = 'Welcome';
    var description = 'Hello, Node.js';
    var list = template.list(req.list);
    var html = template.HTML(title, list,
      `<h2>${title}</h2>${description}
	  <img src="/img/hello.jpg" style="width:300px; displat:block; margin-top:10px;">
	  `,
      `<a href="/create">create</a>`
	  
    ); 
    res.send(html);
 
});

app.get('/page/:pageId', function(req, res, next) { 
    var filteredId = path.parse(req.params.pageId).base;
    fs.readFile(`data/${filteredId}`, 'utf8', function(err, description){
		if(err) {
			next(err);
		}else {
		  var title = req.params.pageId;
		  var sanitizedTitle = sanitizeHtml(title);
		  var sanitizedDescription = sanitizeHtml(description, {
			allowedTags:['h1']
		  });
		  var list = template.list(req.list);
		  var html = template.HTML(sanitizedTitle, list,
			`<h2>${sanitizedTitle}</h2>${sanitizedDescription}`,
			` <a href="/create">create</a>
			  <a href="/update/${sanitizedTitle}">update</a>
			  <form action="/delete_process" method="post">
				<input type="hidden" name="id" value="${sanitizedTitle}">
				<input type="submit" value="delete">
			  </form>`
      );
      res.send(html);
   }
  });
});

app.get('/create', function(req, res){
        var title = 'WEB - create';
        var list = template.list(req.list);
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
        res.end(html);
     
})
app.post('/create_process', function(req, res){
	console.log(req.list);
		  var post = req.body;
          var title = post.title;
          var description = post.description;
          fs.writeFile(`data/${title}`, description, 'utf8', function(err){
            res.writeHead(302, {Location: `/?id=${title}`});
            res.end();
          })
      });

app.get('/update/:pageId', function(req, res){
        var filteredId = path.parse(req.params.pageId).base;
        fs.readFile(`data/${filteredId}`, 'utf8', function(err, description){
          var title = req.params.pageId;
          var list = template.list(req.list);
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
            `<a href="/create">create</a> <a href="/update/${title}">update</a>`
          );
          res.send(html);
        
      });
	})
		
app.post('/update_process', function(req, res){
		  var post = req.body;
          var id = post.id;
          var title = post.title;
          var description = post.description;
          fs.rename(`data/${id}`, `data/${title}`, function(error){
            fs.writeFile(`data/${title}`, description, 'utf8', function(err){
              res.writeHead(302, {Location: `/?id=${title}`});
              res.end();
            })
    	  });
      });

app.post('/delete_process', function(req, res){
	  var post = req.body;
      var id = post.id;
      var filteredId = path.parse(id).base;
      fs.unlink(`data/${filteredId}`, function(error){
        res.redirect('/');
      })
  });

	
app.use(function(req, res, next){
		res.status(404).send('Sorry cant find that!');
	});
app.use(function(err, req, res, next){ //매개변수가 4개면 익스프레스 프레임워크는 에러핸들러로인식한다.
		console.error(err.stack);
		res.status(500).send('Something borke?!!');
	});
	
	
app.listen(3000, function() {
  console.log('Example app listening on port 3000!')
});