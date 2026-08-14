ballX;
ballY;
ballSize = 30;
ballSpeedX;
ballSpeedY;
function setup() {
    createCanvas(600, 400);
    background(0);
}

function draw() {
    circle( )
}









// let xpos;
// let ypos;
// let picoImg;
// let soundSFX;

// function preload() {
//     picoImg = loadImage('assets/pico-a.png');
//     soundSFX = loadSound('assets/pop.mp3');
// }

// function setup() {
//     createCanvas(600, 600);
//     background("lightblue");
//     xpos = width/2;
//     ypos = height/2;
//     // image(picoImg, 0,0, 110, 133);
//     imageMode(CENTER)
// }
// function keyPressed() {
//     if (keyCode === 32) {
//         soundSFX.play();
//     }
// }



// function draw() {
//     // background("lightblue");
//     image(picoImg, xpos, ypos, 110, 133);
//     if (keyIsDown(RIGHT_ARROW)) {
//         xpos = xpos +5;
//     }
//     if (keyIsDown(LEFT_ARROW)) {
//         xpos = xpos -5;
//     }
//     if (keyIsDown(UP_ARROW)) {
//         ypos = ypos -5;
//     }
//     if (keyIsDown(DOWN_ARROW)) {
//         ypos = ypos +5;
//     }

//     xpos = constrain(xpos, 55, width-55);
//     ypos = constrain(ypos, 67, height-67);