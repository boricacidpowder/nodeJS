var express = require('express');
var app = express();
var fs = require('fs');
var path = require('path');
var qs = require('querystring');
var bodyParser = require('body-parser');
var sanitizeHtml = require('sanitize-html');
var compression = require('compression')
var template = require('./lib/template.js');
var topicRouter = require('./routes/topic');
var indexRouter = require('./routes/index');
var helmet = require('helmet');

app.use(helmet());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(compression());
app.get('*', function(request, response, next){
  fs.readdir('./data', function(error, filelist){
    request.list = filelist;
    next();
  });
});

app.use('/topic', topicRouter);
app.use('/', indexRouter)

//route, routing
//app.get('/', (req, res) => res.send('Hello World!'))
// app.get('/', function(request, response) { 
//   var title = 'Welcome';
//   var description = 'Hello, Node.js';
//   var list = template.list(request.list);
//   var html = template.HTML(title, list,
//     `
//     <h2>${title}</h2>${description}
//     <img src="/img/hello.jpg" style="width:300px; display:block; margin-top:10px;">
//     `,
//     `<a href="/topic/create">create</a>`
//   ); 
//   response.send(html);
// });
	
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