let size = 35;
let colour = "black"
xpos;
ypos;


// function preload() {
    
// }

function setup() {
    createCanvas(300, 300);
    background("lightblue");
    xpos = width/2;
    ypos = height/2;
}

function draw() {
    background("lightblue");
     fill(colour);
    circle( xpos, ypos, size);
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
    xpos = constrain(xpos, 50, 150);
    ypos = constrain(ypos, 50, 170);
}