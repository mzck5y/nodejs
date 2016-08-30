var express = require('express');
var parser = require("body-parser");
var mysql = require('mysql');
var uuid = require('uuid');

var app = express();
app.use(parser.json());

var db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: process.env.DBPSW,
    database: 'auth_data'
});

db.connect();

app.get('/users', function(req, res) { 
    db.query('SELECT * FROM user', function(err, data, fields) {
        if(err) throw err;

        res.send(data);
    });
});

app.post('/users', function(req, res) { 
    var sql = 'INSERT INTO user (user_id, full_name, password, email) VALUES (?, ?, ?, ?)';
    var userId = uuid.v4();
   
    db.query(sql, [userId, req.body.full_name, req.body.password, req.body.email], function(err, data, fields) {
        if(err) throw err;

        res.location('/users/' + userId);

        var newUser = {
            user_id: userId,
            full_name: req.body.full_name,
            email: req.body.email,
            password: req.body.password
        }

        res.status(201).send(newUser);
    });
});

app.get('/users/:id', function(req, res) {
     db.query('SELECT * FROM user WHERE user_id = ?', [req.params.id], function(err, data, fields) {
        if(err) throw err;

        res.send(data);
    });
});

app.put('/users/:id', function(req, res) {
   res.end();
});

app.delete('/users/:id', function(req, res) { 
   res.end();
});

var server = app.listen(8081, function() { 
   console.log('Server Running on http://localhost:8081');
});