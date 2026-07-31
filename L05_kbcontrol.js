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
    FileList(random(255), random(255), random(255));
}