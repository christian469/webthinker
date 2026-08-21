function setup(){ 
    createCanvas(600, 600);
    // background("black");
    // fill("yellow");
    let ypos = height;
    textSize(24);
    textAlign(CENTER, CENTER);
    // let foodList = ["whopper", "tacos", "ice cream", "fried chicken", "chicken rice", "chessy fries"];
    // for (let count=0; count < foodList.length; count++){
    //     print( foodList[0] );
    //     text( foodList[count], 50, ypos );
    //     ypos = ypos + 50;
    // }
}       

function draw() {
    background(0);
    
    text("moving text", width/2, ypos);
    yPos -= 0.6;
}