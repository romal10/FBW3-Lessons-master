function softshadow(option){

    let images = document.querySelectorAll('.softshadow');
    if(option.shadow_type === 'hard'){
        option.shadow_type = '15px'
    }
    else {
        option.shadow_type= '0px';
    }

    images.forEach( image => {
        image.style.boxShadow = `5px 10px 10px ${option.shadow_type} rgba(0,0,0,0.22)  `;
        if(option.padding){
            image.style.padding = '1em';
        }
        image.style.margin = '1em';


    } )

} 
module.exports.softshadow = softshadow;

















