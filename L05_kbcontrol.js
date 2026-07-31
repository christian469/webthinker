// size = 50;
// shapeColor = 0;
// let showCircle = false;
// let showRect = false;
// let showSquare = false;
let size = 35;
let showCircle = true;
let colour = "white"
xpos = 0;
ypos = 0;


function setup(){
    createCanvas(600,600)
    background("skyblue");
    // noStroke();
    xpos = width/2
    ypos = height/2
}

function draw() {
    background("skyblue");
    fill(colour)
    circle( xpos, ypos, size);
    if (keyIsDown(RIGHT_ARROW)) {
        xpos += 1 ;
    }
    if (keyIsDown(LEFT_ARROW)) {
        xpos -= 1;
    }
    if (keyIsDown(UP_ARROW)){
        ypos -= 1;
    }
    if (keyIsDown(DOWN_ARROW)){
        ypos += 1
    }
}
//     if (showCircle) {
//         circle(width/2, height/2, 100);
//     }
//     if (showRect){
//         rect(width/4, height/3, 200);
//     }
//     if (showSquare){
//         square(width/2, height/2); 
//     }
// }

// function keyPressed() {
    // // size = 200;
    // if (key === 'c') {
    //     showCircle = !showCircle;
    // }
    // if (key === 'r') {
    //     showRect = !showRect;
    // }
    // if (key === 's') {
    //     showSquare = !showSquare
    // }
    // colour = "white"
    // // print(key);
    // print(keyCode);
    // if (keyCode === UP_ARROW) {
    //     colour = "red";
    // }
    // if(keyCode === DOWN_ARROW) {
    //     colour = "black"
    //     circle(width/2, height/2,);
    // }

// }

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