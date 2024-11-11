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
            prettyPrintJSON(jsondata);
    });
}

function addItemToList(item){
    $('#results').append("<li>" + item + "</li>");
}

function prettyPrintJSON(jsondata){
    var pretty = JSON.stringify(jsondata, null, 4);
    $("#resultsbox").append("<pre>" + pretty + "</pre>");
}