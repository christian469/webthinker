let size = 35;
let colour = "black"
xpos;
ypos;


// function preload() {
    
// }

function setup() {
    createCanvas(400, 400);
    background("lightblue");
    xpos = width/2;
    ypos = height/2;
}

function draw() {
    background("lightblue");
     fill(colour);
    rect(width/2, height/2, 300, 300)
    if (keyIsDown(RIGHT_ARROW)) {
        xpos += 1 ;
    }
    if (keyIsDown(LEFT_ARROW)) {
        xpos -= 1;
    }
    if (keyIsDown(UP_ARROW)){
        ypos -= 1;
    }
    if (keyIsDown(DOWN_ARROW)){
        ypos += 1
    }
    xpos = constrain(xpos, 50, 300);
    ypos = constrain(ypos, 50, 300);
}