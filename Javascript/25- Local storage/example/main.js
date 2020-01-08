let pNumber=document.getElementById("number");
let pName=document.getElementById("name");
let saveBtn=document.getElementById("save");
let delBtn=document.getElementById("delete");

saveBtn.addEventListener("click",function(){

    localStorage.setItem(pNumber.value,pName.value);
     console.clear();
     showInfo();

});
delBtn.addEventListener("click",function(){
    localStorage.clear();
    console.clear();
    showInfo();
});


function showInfo(){
    
    let storage = localStorage;
    for (let i = 0 ; i< storage.length ; i++){
        console.log(storage.key(i)+" : " + storage.getItem(storage.key(i))  );
    }
}

////////////////////////////////////////////////////7777
let brand = document.getElementById("brand");
let addBrand=document.getElementById("add");


let cars = [];
addBrand.addEventListener("click",function(){
    cars.push(brand.value);
    localStorage.setItem("cars",cars);
    document.getElementById("carsInfo").innerHTML=localStorage.getItem("cars");
});
