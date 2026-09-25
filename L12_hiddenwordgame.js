// write your codes here
let btnGenStory

function setup(){
    createCanvas(800,700);
    background("lightgray");
    btnGenStory = createButton("Generate Story");
    btnGenStory.position(200, 350);
    btnGenStory.mousePressed(buttonStoryClicked)
}

function draw(){
    background("lightgray");
}

