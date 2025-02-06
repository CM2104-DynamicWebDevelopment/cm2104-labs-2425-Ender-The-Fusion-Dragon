var express = reuqire('express');
var app = express();

app.use(express.static('public'));

app.get('/', function(req, res){
    res.send("Hellow world! by express");
});

app.listen(8080);