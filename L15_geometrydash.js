let playerX = 100;
let playerY;
let playerSize = 50;
let velocity = 0;
let isGrounded = false;

let
let
let
function setup(){
    createCanvas(800,600);
    background("black");
    playerY = height-75
}

function draw(){
    background("black");
    fill("lime");
    rect( 50,playerY, 50,50);
     
    velocity += 0.8;
    playerY += velocity;

    if (playerY >= height - playerSize){
        playerY = height - playerSize;
        isGrounded = true;
        velocity = 0;
    } else {
        isGrounded = false;
    }

    fill("white");
    textSize(16);
    textAlign(CENTER,CENTER);
    text("PRESS SPACE TO JUMB!!!! ARE U DUMB OR WHAT", width/2, 50);
}

function keyPressed() {
    if (keyCode === 32 && isGrounded) {
        velocity = -29;
    }
}
