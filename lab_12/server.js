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
        var tracks = data.body.tracks.items;
        var HTMLResponse = "";

        for(var i = 0; i < tracks.length; i++){
            var track = tracks[i];
            console.log(track.name);

            HTMLResponse = HTMLResponse +
            "<div>" +
                "<h2>" + track.name + "</h2>" +
                "<h4>" + track.artists[0].name + "</h4>" +
                "<img src = '" + track.album.images[0].url + "'>" +
                "<a href = '" + track.external_urls.spotify + "'> Track details</a>" +
            "</div>";
            console.log(HTMLResponse);
        }

        res.send(HTMLResponse);
    }, function(err){
        console.error(err);
    });
}

spotifyApi.clientCredentialsGrant().then(
    function(data){
        console.log('The access token expires in ' + data.body['expires_in']);
        console.log('The access token is ' + data.body['access_token']);

        spotifyApi.setAccessToken(data.body['access_token']);
    },
    function(err){
        console.log('Something went wrong when retriving an access token', err.message);
    }
);

app.get('/searchlove', function(req, res){
    getTracks('love', res);
});

app.listen(8080);