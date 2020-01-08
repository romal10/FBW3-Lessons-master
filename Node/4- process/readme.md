# process

The process object is a global object and can be accessed from anywhere. It is an instance of EventEmitter.



## Exit Codes


Node will normally exit with a 0 status code when no more async operations are pending. 


```javascript
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
```

## Event: 'exit'
```javascript

 process.on('exit' , function(code){

     console.log(' about to exit with  ' + code )
  })
```

## Event: 'beforeExit'

This event is emitted when node empties it's event loop and has nothing else to schedule. Normally, node exits when there is no work scheduled, but a listener for 'beforeExit' can make asynchronous calls, and cause node to continue.

'beforeExit' is not emitted for conditions causing explicit termination, such as process.exit() or uncaught exceptions, and should not be used as an alternative to the 'exit' event unless the intention is to schedule more work.

## Documentation
[process object ](https://nodejs.org/api/process.html)