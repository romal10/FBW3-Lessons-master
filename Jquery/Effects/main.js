$(document).ready(function(){

    $('.outBtn').on('click',function(){
        $('p.normal').fadeOut();
        $('p.fast').fadeOut("fast");
        $('p.slow').fadeOut("slow");
        $('p.very-fast').fadeOut(50);
        $('p.very-slow').fadeOut(2000);

    });

    $('.inBtn').on('click',function(){
        $('p.normal').fadeIn();
        $('p.fast').fadeIn("fast");
        $('p.slow').fadeIn("slow");
        $('p.very-fast').fadeIn(50);
        $('p.very-slow').fadeIn(2000);

    });
});