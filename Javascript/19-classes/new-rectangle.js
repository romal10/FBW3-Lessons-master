class Rectangle {

    constructor(height, width) {

        this.w = width;
        this.h = height;

    }
    get area() {
        return this.w * this.h;
    }



}

let myRectangle = new Rectangle(9, 5);
console.log(myRectangle.area);


//////////////////////////777

class BaseItem {

    constructor(text){
        this.text =text;
    }

    draw(){
        let li  = document.createElement("li");        
        let textNode = document.createTextNode(this.text);
        li.appendChild(textNode);
        document.getElementById("parent").appendChild(li); 

    }
    // setter
    set content(text){
        this.text = text;

    }

}

class StyledItem extends BaseItem{

    constructor(text,style){
        super(text);
        this.style=style;
    }
    //getter 
    get itemStyle(){

        return this.style;
    }
    set restyle(style){

        this.style=style;

    }
    draw(){
        let li = document.createElement("li");
        li.setAttribute("style",this.style);
        let textNode = document.createTextNode(this.text);
        li.appendChild(textNode);
        document.getElementById("parent").appendChild(li);

        
    }


}



let item1 = new BaseItem("this is the item 1");
item1.draw();
item1.content = "new content for item1";
item1.draw();
let item2 = new StyledItem("this the item2","color:red;border:1px dotted blue");
item2.draw();
console.log(item2.itemStyle);
item2.restyle="color:orange; background:lightgreen";
item2.draw();

item2.content="the updated content of item2";
item2.draw();

