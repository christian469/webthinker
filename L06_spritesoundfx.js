// let size = 35;
// let colour = "white"
let xpos;
let ypos;
let picoImg;

function preload() {
    picoImg = loadImage('assets/pico-a.png');
}

function setup() {
    createCanvas(200, 200);
    background("lightblue");
    xpos = width/2;
    ypos = height/2;
    image(picoImg, 0,0, 110, 133);
}

function draw() {

}