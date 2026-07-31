size = 5;
shapeColor = 0;
function setup(){
    createCanvas(600,600)
    background("sky blue");
    noStroke();
}

// function draw() {
    
// }
function mousePressed() {
    fill(random(0,255), random(0, 255), random(0, 255));
    size = 5;
}

function MouseDragged() {
    circle(mouseX, mouseY, size);
    size = size + 0.5
}