var myMap = L.map('mapid').setView([0, 0], 1);

var Esri_WorldGrayCanvas = L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}', {attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ', maxZoom: 16 });

var OpenTopoMap = L.tileLayer('http://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {maxZoom: 17,attribution: 'Map data: &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'});

$('#shakey').click(function () { 
    console.log("getting quakes");

    $.getJSON("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson", function (result) {
            console.log(result);

            result.features.forEach(function(quakes){
                var lng = quakes.geometry.coordinates[0];
                var lat = quakes.geometry.coordinates[1];
                var mag = parseFloat(quakes.properties.mag);

                var circle = L.circle([lat, lng], mag * 1000, {
                    color: 'red',
                    opacity: 0,
                    fillColor: 'red',
                    fillOpacity: 0.8
                })
                circle.addTo(myMap);
            });
                
        }
    );  
});

$('#dropey').click(function () { 
    console.log("Getting meteors");

    $.getJSON("https://data.nasa.gov/resource/gh4g-9sfh.json", function (result) {
        console.log(result);

        result.forEach(function(meteors){
            var lng = meteors.reclong;
            var lat = meteors.reclat;
            var meteorSize = meteors.size;

            var circle = L.circle([lat, lng], meteorSize, {
                color: 'blue',
                opacity: 0,
                fillColor: 'blue',
                fillOpacity: 0.8
            })
            circle.addTo(myMap);
        })
    });
    
});

Esri_WorldGrayCanvas.addTo(myMap);
OpenTopoMap.addTo(myMap);