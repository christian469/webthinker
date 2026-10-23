let playerX = 100;
let playerY;
let playerSize = 50;
let velocity = 0;
let isGrounded = false;
function setup(){
    createCanvas(800,600);
    background("black");
    playerY = height-75
}

function draw(){
    background("black");
    fill("lime");
    rect(50,height-75,50,50);
     
    velocity += 0.8;
    playerY += velocity;

    if(playerY >= height)

    fill("white");
    textSize(16);
    textAlign(CENTER,CENTER);
    text("PRESS SPACE TO JUMB!!!! ARE U DUMB OR WHAT", width/2, 50);
}