$(document).ready(function(){
    //  $('#up') or we use
    let i = 0;
    $('#up').keyup(function(){
         $('span').text(i+=1);
        $('p').show().fadeOut();

       //alert("you pressed a key ");

    });
    
    
});