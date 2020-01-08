 process.stdout.write('process object introduction ')
 
 
 process.on('exit' , function(code){

     console.log(' about to exit with  ' + code )
  })

// 
// ///// 


const run = function(){
    let counter = 0 
    setInterval(() => {
        counter ++ ;
        console.log(counter);
        if(counter===10){
            
            process.exit()
        }
    }, 1000);
}

run();