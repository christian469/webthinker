// write your codes here
let X = 300;
let Y = 200;
let size = 30;
let speedX = 15;
let speedY = 15;
function setup() {
    // noStroke();
    createCanvas(600, 400);
    // background(0);
    fill("red")
}

function draw() {
    circle(X, Y, size);
    X += speedX;
    Y += speedY;


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
