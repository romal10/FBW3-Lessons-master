$(document).ready(function(){

// $("p").on("mouseout mouseover",function(e){
//     $('this').toggleClass("light");
    
// });

// $('p').on({
//     mouseover:function(){
//         $('body').css('background','lightgreen');

//     },
//     mouseout:function(){
//         $('body').css('background','lightblue');

//     },
//     click:function(){
//         $('body').css('background','orange');

//     }
// });
// this event work only for the child section inside the div
$('div').on('click',"section",function(){
    $(this).css({"color":"red",
                  "background":"pink"         
                }
        );
    $(this).hide(2000);    
    
});

$('#add').on("click",function(){
    $("<section> this is new section inseted from jQuery </section>").insertAfter("#add");
});

$('#off').on("click",function(){
    //remove the event click for the div
    $('div').off("click");
});






});


