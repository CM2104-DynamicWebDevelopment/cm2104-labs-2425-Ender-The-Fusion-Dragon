const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render('pages/index');
});

io.on('connection', function(socket){
    console.log('A user connected');

    socket.on('disconnect', function(){
        console.log('A user has disconnected');
    });

    socket.on('chat message', function(msg){
        console.log('message: ' + msg);
    });
});

http.listen(8080, function(){
    console.log('listening on *: 8080');
});