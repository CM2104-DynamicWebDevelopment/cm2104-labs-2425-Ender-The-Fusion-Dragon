var express = require('express');
var app = express();
var SpotifyWebApi = require('spotify-web-api-node');

app.use(express.static('public'));

var spotifyApi = new SpotifyWebApi({
    clientId: 'b30aba45b3cd4959a68967e1b0441319', clientSecret: 'abd46b69d84f411487d88f7f59ae87c4'
});

app.get('/', function(req, res){
    res.send("Hellow world! by express");
});

async function getTracks(searchterm, res) {
    spotifyApi.searchTracks(searchterm).then(function(data){
        res.send(JSON.stringify(data.body));
    }, function(err){
        console.error(err);
    });
}

app.get('/searchlove', function(req, res){
    getTracks('love', res);
});

app.listen(8080);