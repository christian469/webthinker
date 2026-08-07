// let size = 35;
// let colour = "white"
// xpos;
// ypos;
let picoImg;

function preload() {
    picoimage = loadImage('assets/pico-a.png');
}

function setup() {
    createCanvas(200, 200);
    background("lightblue");
//     xpos = width/2;
//     ypos = height/2;
    image(picoImg, 0,0, 100, 100);
}

function draw() {
    background("lightblue");
//      fill(colour);
//     rect(width/2, height/2, 300, 300);
//     fill("black")
//     if (keyIsDown(RIGHT_ARROW)) {
//         xpos += 1 ;
//     }
//     if (keyIsDown(LEFT_ARROW)) {
//         xpos -= 1;
//     }
//     if (keyIsDown(UP_ARROW)){
//         ypos -= 1;
//     }
//     if (keyIsDown(DOWN_ARROW)){
//         ypos += 1
//     }
//     xpos = constrain(xpos, 75, 300);
//     ypos = constrain(ypos, 50, 300);
}