size = 50;
shapeColor = 0;
function setup(){
    createCanvas(600,600)
    background("skyblue");
    // noStroke();
}

function draw() {
    background("skyblue");
    rect( width/2, height/2, size, size);
}
// function mousePressed() {
//     fill(random(0,255), random(0, 255), random(0, 255));
//     size = 5;
// }

// function mouseDragged() {
//     circle(mouseX, mouseY, size);
//     size = size + 0.5
// }