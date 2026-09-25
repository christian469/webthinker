// write your codes here
let btnGenStory
let inputguess
function setup(){
    createCanvas(800,700);
    background("lightgray");
    inputguess= createInput("guess");
    inputguess.position(200, 320);

    btnGenStory = createButton("Guess");
    btnGenStory.position(400, 400);
    btnGenStory.mousePressed(buttonStoryClicked)
}

function draw(){
    background("lightgray");
}

