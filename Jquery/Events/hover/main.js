$(document).ready(function(){

    // $("p").hover(function(){

    //     $(this).addClass("highlight");

    // },function(){
    //     $(this).removeClass("highlight");
    // });

    $("p").mouseenter(function(){
        $(this).addClass("bold");
    });

    $("p").mouseleave(function(){
        $(this).removeClass("bold");

    });
})