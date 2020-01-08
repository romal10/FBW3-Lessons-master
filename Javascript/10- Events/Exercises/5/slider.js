let i = 0; 			 
let images = [];	 
let time = 2000;	 
	 
// Image List
images[0] = "https://cdn.pixabay.com/photo/2016/01/08/11/57/butterfly-1127666_1280.jpg";
images[1] = "https://cdn.pixabay.com/photo/2012/03/01/00/55/flowers-19830_1280.jpg";
images[2] = "https://cdn.pixabay.com/photo/2015/04/19/08/32/rose-729509_1280.jpg";
images[3] = "https://cdn.pixabay.com/photo/2013/07/02/22/20/roses-142876_1280.jpg";

// Change Image
function changeImg(){
	document.querySelector(".slider").src = images[i];

	// Check If Index Is Under Max
	if(i < images.length - 1){
	  // Add 1 to Index
	  i++; 
	} else { 
		// Reset Back To O
		i = 0;
	}

	// Run function every x seconds
	//setTimeout("changeImg()", time);
}

window.addEventListener("load",function(){

    setInterval(changeImg,time);
})
