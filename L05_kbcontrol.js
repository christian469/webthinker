start = 5;
shapeColor = 0;
function setup(){
    createCanvas(600,600)
    background(220);
}

function draw() {
    circle()
}

function mousePressed() {
    shapeColor = (random(255), random(255), random(255));
}