let ballX = 300;
let ballY = 200;
let ballSize = 30;
let ballSpeedX = 15;
let ballSpeedY = 15;
function setup() {
    // noStroke();
    createCanvas(600, 400);
    background(0);
    fill("red")
}

function draw() {
    circle(ballX, ballY, ballSize);
    ballX += ballSpeedX;
    ballY += ballSpeedY;


    if (ballX < 0+15) {
        ballSpeedX = -1 * ballSpeedX
        fill( random(0, 255), (0, 255), 0);
    }
    if (ballX > width-15){
        ballSpeedX = -1 * ballSpeedX
        fill( random(0, 255), (0, 255), 0);
    }
    if (ballY < 0+15) {
        ballSpeedY = -1 * ballSpeedY
        fill( random(0, 255), (0, 255), 0);
    }
    if (ballY > height-15){
        ballSpeedY = -1 * ballSpeedY
        fill( random(0, 255), (0, 255), 0);
    }
}
function keyPressed(){
    if (keyCode === UP_ARROW) {
        ballSpeedX *= 4520.4;  
        ballSpeedY *= 4520.4;
    } else if (keyCode === DOWN_ARROW) {
        ballSpeedX *= 0.2;
        ballSpeedY *= 0.2;
    }
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