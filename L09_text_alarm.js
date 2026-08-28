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


    if (X < 0+15) {
        speed = -1 * speed
        fill( random(0, 255), (0, 255), 0);
    }
    if (X > width-15){
        speed = -1 * speed
        fill( random(0, 255), (0, 255), 0);
    }
    if (Y < 0+15) {
        speed = -1 * speed
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
