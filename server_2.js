var express = require('express');
var app = express();

app.get('/', function(req, res) { 
    res.send('Hello World from Rest GET');
});

app.post('/', function(req, res) {
    res.send('From POST.');
});

app.put('/', function(req, res) { 
    res.send('From PUT')
});

app.delete('/', function(req, res) { 
    res.send('From DELETE');
});

app.patch('/', function(req, res) {
    res.send('from PATCH');
});

var server = app.listen(8081, function() { 
   console.log('Server Running on http://localhost:8081');
});