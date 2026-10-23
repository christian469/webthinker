let playerX = 100;
let playerY;
let playerSize = 50;
let velocity = 0;
let isGrounded = false;

let spikesX = [];
let spikeWidth = 20;
let spikeHeight = 30;
let spikeSpeed = 5;

let gameOver = false;
function setup(){
    createCanvas(800,600);
    background("black");
    playerY = height-75

    for (let count=0; count<3; count++) {
        spikesX.push(width + count * 300);
    }
}

function draw(){
    background("black");
    fill("gray");
    

    if (gameOver) {
        fill("red");
        textSize(44);
        textAlign(CENTER,CENTER);
        text("GAME OVER! U SUCK AT THIS!!!, wi")
    }
    rect( 50,playerY, 50,50);
     
    velocity += 0.9;
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

    fill("gold");
    for (let count=0; count<3; count++){
        spikesX[count] -= spikeSpeed;

        if ( spikesX[count] < 0-spikeWidth ) {
            spikesX[count] = width + random(100, 300);
        }

        triangle(
            spikesX[count], height,
            spikesX[count] + spikeWidth/2, height - spikeHeight,
            spikesX[count] + spikeWidth, height
        )
    }
}

function keyPressed() {
    if (keyCode === 32 && isGrounded) {
        velocity = -15;
    }
}
