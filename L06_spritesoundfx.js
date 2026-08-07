// let size = 35;
// let colour = "white"
let xpos;
let ypos;
let picoImg;

function preload() {
    picoImg = loadImage('assets/pico-a.png');
}

function setup() {
    createCanvas(600, 600);
    background("lightblue");
    xpos = width/2;
    ypos = height/2;
    // image(picoImg, 0,0, 110, 133);
    imageMode(CENTER)
}

function draw() {
    background("lightblue");
    image(picoImg, xpos, ypos, 110, 133);
    if (keyIsDown(RIGHT_ARROW)) {
        xpos = xpos+1;
    }
    xpos = constrain(xpos, 0+55, width-55);
    ypos = constrain(ypos, 0+67, height-67);
}