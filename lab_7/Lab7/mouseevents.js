// JavaScript Document
$(function(){

    $("#hoverMouseOver").mouseenter(function () { 
        $("#hoverMouseOver").html("Thank you");
    });

    $("#hoverMouseOver").mouseleave(function () { 
        $("#hoverMouseOver").html("Mouse Over Me");
    });

    $("#clickMouseOn").mousedown(function () { 
        $("#clickMouseOn").css("backgroundColor", "lightblue");
        $("#clickMouseOn").html("Release Me");
    });

    $("#clickMouseOn").mouseup(function () { 
        $("#clickMouseOn").css("backgroundColor", "lightgreen");
        $("#clickMouseOn").html("Thank you");
    });
});
