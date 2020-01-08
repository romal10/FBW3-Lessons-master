let images = document.querySelectorAll('img');
let leftArr=document.querySelector('.left');
let rightArr=document.querySelector('.right');

let counter=0;
leftArr.addEventListener("click",moveLeft);
rightArr.addEventListener("click",moveright);

function moveLeft(){
 counter --;
}
function moveRight(){
    counter ++;
    if(counter==images.length){
        counter = 0;
    }

    
}