// server.js
// load the things we need
var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// // index page
//app.get('/', function(req, res){
//    res.render('pages/index');
//});

// index pge
app.get('/', function(req, res){
    var drinks = [
        {name: 'Bloody May', drunkness: 3},
        {name: 'Martini', drunkness: 5},
        {name: 'Scotch', drunkness: 10}
    ];
    var tagline = "Any coe of your own tht you haven't looked t for six or more months might as well have been written by omeone else.";

    res.render('pages/index', {
        drnks: drinks,
        tagline: tagline
    });
});

// about page
app.get('/about', function(req, res){
    res.render('pages/about')
});

app.listen(8080);
console.log('8080 is the magic port');