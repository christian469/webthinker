function setup(){ 
    createCanvas(600, 600);
    background("black");
    fill("yellow");

    textSize(38);
    let ypos = 50;
    let foodList = ["burger", "tacos", "ice cream", "fried chicken", "chicken rice"];
    for (let count=0; count < foodList.length; count++){
        print( foodList[0] );
        text( foodList[count], 50, ypos );
        ypos = ypos + 50;
    }
}       

function draw() {

}