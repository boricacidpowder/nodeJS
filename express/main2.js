const express = require('express');
const app = express();

app.get('/', function(req, res){
	return res.send('/');
})

app.get('/page', function(req, res){
	return res.send('/page');
})

app.listen(3000, function() {
	console.log('ggg');
})