// print numbers between 1 and 100 * 9 

for (let i =1 ; i <= 100 ; i++){

    //console.log( i + " * 9 = " +   i * 9);

}
// the Grade Assigner 
// if the result > 89 then you get  A 
// if the result > 80 then you get B 
// if the result > 70 then you get C
// if the result > 65 then you get D 
// if the result < 65 you get F 

for(let i=100 ; i>= 1 ; i-- ){
 
    if (i > 89) {
        console.log(i  +" you get A ");
    }
    else if(i > 80 ){
        console.log(i + " you get B");
    }
    else if( i > 70 ){
        console.log(i + " you get C");
    }
    else if(i > 65) {
        console.log(i + " you get D ");
    }
    else {
        console.log( i + " you get F sorry! ")
    }

}
///////////////////////////////////////////////////77
//print 100 stars in every line 10 stars  

for (let i= 1 ;i<= 100 ;i++){

     //document.write(' * ');
     if(i % 10 == 0) {
       //  document.write('<br>');
     }
}

///////////////////////////////////////////////////
 
for(let i= 1 ; i <= 5 ;i++  ){

     for(let c=1 ; c <= 5  ; c++){
       document.write( '  *  ' );  
                               
     }
     
     document.write(' <br>');

}

//////////////////////////////////
document.write('<br>');
// print triangle of stars form 4 line and 4 columns
for(let i=0 ; i< 4 ; i++){

    for(let j=i; j<4; j++){
        //document.write( 'i=' + i + ' and j= ' + j );   
        document.write(' 0 ');
    }
    document.write('<br>');
}

document.write('<hr>');

for(let i=4 ; i>= 0; i-- ){

    for(let j=0;j<i;j++){
        //document.write( 'i=' + i + ' and j= ' + j );   
        document.write(' * ');
    }
    document.write('<br>');
}

///////////////////////////////////
for(let i=1 ; i<=4;i++){
        for(let j=0;j<=4-i; j++){
            //alert(' j= '+ j)
            document.write('&nbsp;');
        }
        for(let c=0;c < i ;c++){
            document.write('* ');
            //alert(' c= '+ c);
        }
        //alert(' i = '+i); 
    document.write('<br>');
}

///////////////////////////////////////////

function square(number){
    for(let i=0 ;i < number; i++){
        for(let c=0 ; c<number ;c++){
            document.write("* ");
        }

        document.write("<br>");
    }

}


