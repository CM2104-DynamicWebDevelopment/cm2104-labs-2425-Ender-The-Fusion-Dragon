$(function(){
    alert("Document ready");

    $('#searchform').submit(function(){ 
        addItemToList("example item");
        return false;
        
    });
});

function addItemToList(item){
    $('#results').append("<li>" + item + "</li>");
}