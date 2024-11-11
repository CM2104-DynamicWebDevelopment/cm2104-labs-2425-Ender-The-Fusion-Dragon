$(function(){
    $('#searchform').submit(function(){ 
        var searchterms = $("#searchterms").val();
        getResultsFromOMDB(searchterms);
        return false;
        
    });
});

function getResultsFromOMDB(searchterms){
    var url = "http://www.omdbapi.com/?apikey=64a6ab9b&s=" + searchterms;

    $.getJSON(url, function(jsondata){
            addResultTitles(jsondata);
    });
}

function addResultTitles(jsondata){
    var htmlstring = "";

    for(var i = 0; i < 10; i++){
        var title = jsondata.Search[i].Title;
        var poster = jsondata.Search[i].Poster;
        var releaseYear = jsondata.Search[i].Year;
        htmlstring += "<li>" + title + "<p>" + releaseYear + "</p>" + "<img src = '" + poster + "'/>" + "</li>";
    }

    $("#results").html(htmlstring);
}