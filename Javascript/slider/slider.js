let images = [];
let time =  1000;
let i =0;

images[0]="https://cdn.pixabay.com/photo/2015/10/01/20/28/animal-967657_960_720.jpg";
images[1]="https://cdn.pixabay.com/photo/2015/06/22/08/40/child-817373_960_720.jpg";
images[2]="https://cdn.pixabay.com/photo/2015/06/22/08/37/children-817365_960_720.jpg";
images[3]="https://cdn.pixabay.com/photo/2014/09/26/09/33/girls-462072_960_720.jpg";
images[4]="https://cdn.pixabay.com/photo/2016/03/07/09/34/kid-1241817_960_720.jpg";

function changeImg(){
    document.querySelector("img").src=images[i];
    i++;
    if (i ==images.length){
        i=0;
    }
    
    
}

setInterval(changeImg,time);