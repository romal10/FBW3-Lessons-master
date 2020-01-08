class Circle extends Rectangle {
    constructor(height,width,color,radius){
        super(height,width,color);
        this.radius=radius;

    }
    createCircle(){
        let container = document.getElementById("myrect");
        let newCircle = document.createElement("div");
        container.appendChild(newCircle);
        newCircle.style.width = this.width;
        newCircle.style.height = this.height;
        newCircle.style.background = this.color;
        newCircle.style.borderRadius = this.radius;      

    }
}

const circleBtn=document.getElementById("circle");

circleBtn.addEventListener("click",function(){
    height = document.getElementById("height").value;
    width = document.getElementById("width").value;
    color = document.getElementById("color").value; 
    radius = document.getElementById("radius").value;
    const circle= new Circle(height,width,color,radius);
    circle.createCircle();

});