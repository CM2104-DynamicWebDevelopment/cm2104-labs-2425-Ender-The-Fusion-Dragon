var express = require('express');
var knockknock = require('knock-knock-jokes');
var app = express();

app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));

app.get('/', function(req, res){
    res.send("Hello world! by express");
});

app.get('/test', function(req, res){
    res.send("This is route 2");
});

app.get('/joke', function(req, res){
    var randomJoke = knockknock();
    res.send(randomJoke);
});

app.get('/add', function(req, res){
    var x = parseInt(req.query.x);
    var y = parseInt(req.query.y);
    res.send("X + Y = " + (x + y));
});

app.get('/calc', function(req, res){
    var x = parseInt(req.query.x);
    var y = parseInt(req.query.y);
    var op = req.query.op;

    if(op == "add"){
        res.send("X + Y = " + (x + y)); 
    }else if(op == "minus"){
        res.send("X - Y = " + (x - y));
    }else if(op == "divide"){
        res.send("X / Y = " + (x / y));
    }else if(op == "multiply"){
        res.send("X * Y = " + (x * y));
    }else{
        res.send("Error!\nPlease input either 'add', 'minus', 'divide' or 'multiply'")
    }
});

app.get('/getform', function(req, res){
    var name = req.query.name;
    var quest = req.query.quest;
    res.send("Hi " + name + " I am sure you will " + quest);
});

app.post('/postform', function(req, res){
    var name = req.body.name;
    var quest = req.body.quest;
    res.send("Hi " + name + " I am sure you will " + quest);
});

app.listen(8080);