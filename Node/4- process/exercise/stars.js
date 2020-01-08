function print(star=15,header='Hi'){    
    let stars ='';
    for(let i =0; i<star; i++){
        stars += '*';
    }
    console.log(stars)
    console.log(header);
    console.log(stars)
}
module.exports = print;
