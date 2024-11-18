$(function(){
    alert("Document ready");

    $('#searchform').submit(function(){ 
        var searchterms = $("#searchterms").val();
        getResultsFromOMDB(searchterms);
        return false;
        
    });
});

function getResultsFromOMDB(searchterms){
    var url = "http://www.omdbapi.com/?apikey=64a6ab9b&s=" + searchterms;

    $.getJSON(url, function(jsondata){
            printJSON(jsondata);
    });
}

function addItemToList(item){
    $('#results').append("<li>" + item + "</li>");
}

function printJSON(jsondata){
    var normal = JSON.stringify(jsondata);
    $("#resultsbox").append("<p>>" + normal + "</p>");
}