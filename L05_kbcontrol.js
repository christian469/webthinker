start = 5;
shapeColor = 0;
function setup(){
    createCanvas(600,600)
    background(220);
}

function draw() {
    circle(300, 300, 250)
}

function mousePressed() {
    fill(random(0,255), random(55), random(255));
}