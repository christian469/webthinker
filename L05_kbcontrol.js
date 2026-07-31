// size = 50;
// shapeColor = 0;
let showCircle = false;
let showRect = false;
let showSquare = false;
function setup(){
    createCanvas(600,600)
    background("skyblue");
    // noStroke();
}

function draw() {
    background(220);
    if (showCircle) {
        circle(width/2, height/2, 100);
    }
    if (showRect){
        rect(width/2, height)
    }
}

function keyPressed(){
    // size = 200;
    if (key === 'c') {
        showCircle = !showCircle;
    }
    if (key === 's') {
        showRect = !showRect;
    }
}

// function keyReleased() {
//     size = 50;
// }
// function mousePressed() {
//     fill(random(0,255), random(0, 255), random(0, 255));
//     size = 5;
// }

// function mouseDragged() {
//     circle(mouseX, mouseY, size);
//     size = size + 0.5
// }