// write your codes here
let btnGenStory
let inputguess
function setup(){
    createCanvas(800,700);
    background("lightgray");
    inputguess= createInput("guess");
    inputguess.position(200, 600);

    btnGenStory = createButton("Guess");
    btnGenStory.position(200, 350);
    btnGenStory.mousePressed(buttonStoryClicked)
}

function draw(){
    background("lightgray");
}

